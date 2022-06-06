import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  Platform,
  PermissionsAndroid,
  Alert,
} from 'react-native';
import BootstrapStyleSheet from 'react-native-bootstrap-styles';
import {useNavigation} from '@react-navigation/native';
import RNFetchBlob from 'rn-fetch-blob';
import {NativeModules} from 'react-native';

import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faCalendarAlt} from '@fortawesome/free-solid-svg-icons/faCalendarAlt';
import {styles} from '../../styles';
import {getDateTime, getDate, ipAddress} from '../../function';

const bootstrapStyleSheet = new BootstrapStyleSheet();
const {s, c} = bootstrapStyleSheet;

// const RNFetchBlob = NativeModules.RNFetchBlob;

const DispatchDetails = props => {
  const IP_ADDRESS = ipAddress();
  const navigation = useNavigation();
  const [dispatch, setDispatch] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const moveToDispatchDetails = id => {
    navigation.navigate('Chi tiết công văn', {dispatchId: id});
  };
  const getFileExtention = fileUrl => {
    // To get the file extension
    return /[.]/.exec(fileUrl) ? /[^.]+$/.exec(fileUrl) : undefined;
  };
  const download = fileUrl => {
    let date = new Date();
    // File URL which we want to download
    let FILE_URL = fileUrl;
    // Function to get extention of the file url
    let file_ext = getFileExtention(FILE_URL);

    file_ext = '.' + file_ext[0];

    // config: To get response by passing the downloading related options
    // fs: Root directory path to download
    const {config, fs} = RNFetchBlob;
    let RootDir = fs.dirs.DownloadDir;
    let options = {
      fileCache: true,
      addAndroidDownloads: {
        path:
          RootDir +
          '/file_' +
          Math.floor(date.getTime() + date.getSeconds() / 2) +
          file_ext,
        description: 'Downloading file...',
        notification: true,
        // useDownloadManager works with Android only
        useDownloadManager: true,
      },
    };
    config(options)
      .fetch('GET', FILE_URL)
      .then(res => {
        // Alert after successful downloading
        console.log('res -> ', JSON.stringify(res));
        alert('File Downloaded Successfully.');
      });
  };
  const checkPermision = async filename => {
    const fileUrl =
      `http://${IP_ADDRESS}:8080/QuanLyCongVan/public/upload/` + filename;
    if (Platform.OS === 'ios') {
      download(fileUrl);
    } else {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
          {
            title: 'Storage Permission Required',
            message:
              'Application needs access to your storage to download File',
          },
        );
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          // Start downloading
          download(fileUrl);
          console.log('Storage Permission Granted.');
        } else {
          // If permission denied then show alert
          Alert.alert('Error', 'Storage Permission Not Granted');
        }
      } catch (err) {
        // To handle permission related exception
        console.log('++++' + err);
      }
    }
  };
  useEffect(() => {
    fetch(
      `http://${IP_ADDRESS}:8080/QuanLyCongVan/public/api/dispatch-detail/` +
        props.id,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
      },
    )
      .then(response => response.json())
      .then(dispatch => {
        let array = [];
        array.push(dispatch);
        setDispatch(array);
        setIsLoaded(true);
      });
  }, [IP_ADDRESS, props.id]);
  if (!isLoaded) {
    return (
      <View>
        <Text
          style={[
            styles.fontSize25,
            s.fontWeightBold,
            s.my4,
            s.alignSelfCenter,
          ]}>
          Đang tải công văn
        </Text>
      </View>
    );
  } else {
    return (
      <View>
        {dispatch &&
          dispatch.map(item => (
            <View key={item.id}>
              <View style={{padding: 25}}>
                <Image
                  resizeMode="contain"
                  style={{
                    width: '100%',
                    height: undefined,
                    flex: 1,
                    aspectRatio: 4 / 3,
                  }}
                  source={{
                    uri:
                      `http://${IP_ADDRESS}:8080/QuanLyCongVan/public/image/thumbnail/` +
                      item.thumbnail,
                  }}
                />
              </View>
              <View style={[styles.separator]} />
              <View>
                <View style={[s.flexRow, s.justifyContentBetween]}>
                  <Text
                    style={[
                      styles.fontSize18,
                      s.fontWeightBold,
                      s.my2,
                      s.mx3,
                      s.alignSelfStart,
                    ]}>
                    Cập nhật
                  </Text>
                  <Text style={[styles.fontSize16, s.my2, s.mx3]}>
                    {getDateTime(item.updated_at)}
                  </Text>
                </View>
                <View style={[styles.separator]} />
                <View style={[s.flexRow, s.justifyContentBetween]}>
                  <Text
                    style={[
                      styles.fontSize18,
                      s.fontWeightBold,
                      s.my2,
                      s.mx3,
                      s.alignSelfStart,
                    ]}>
                    Số hiệu
                  </Text>
                  <Text style={[styles.fontSize16, s.my2, s.mx3]}>
                    {item.so_hieu}
                  </Text>
                </View>
                <View style={[styles.separator]} />
                <View style={[s.flexRow, s.justifyContentBetween, s.row]}>
                  <Text
                    style={[
                      styles.fontSize18,
                      s.fontWeightBold,
                      s.my2,
                      s.mx3,
                      s.alignSelfStart,
                      s.col4,
                    ]}>
                    Trích yếu nội dung
                  </Text>
                  <View style={[s.col11]}>
                    <Text
                      style={[styles.fontSize16, s.my2, s.mx3, s.alignSelfEnd]}>
                      {item.trich_yeu_noi_dung}
                    </Text>
                  </View>
                </View>
                <View style={[styles.separator]} />
                <View style={[s.flexRow, s.justifyContentBetween, s.row]}>
                  <Text
                    style={[
                      styles.fontSize18,
                      s.fontWeightBold,
                      s.my2,
                      s.mx3,
                      s.alignSelfStart,
                      s.col4,
                    ]}>
                    Người ký
                  </Text>
                  <View style={[s.col11]}>
                    <Text
                      style={[styles.fontSize16, s.my2, s.mx3, s.alignSelfEnd]}>
                      {item.nguoi_ky}
                    </Text>
                  </View>
                </View>
                <View style={[styles.separator]} />
                <View style={[s.flexRow, s.justifyContentBetween]}>
                  <Text
                    style={[
                      styles.fontSize18,
                      s.fontWeightBold,
                      s.my2,
                      s.mx3,
                      s.alignSelfStart,
                    ]}>
                    Ngày ký
                  </Text>
                  <Text style={[styles.fontSize16, s.my2, s.mx3]}>
                    {getDate(item.ngay_ky)}
                  </Text>
                </View>
                <View style={[styles.separator]} />
                <View style={[s.flexRow, s.justifyContentBetween]}>
                  <Text
                    style={[
                      styles.fontSize18,
                      s.fontWeightBold,
                      s.my2,
                      s.mx3,
                      s.alignSelfStart,
                    ]}>
                    Ngày chuyển
                  </Text>
                  <Text style={[styles.fontSize16, s.my2, s.mx3]}>
                    {getDate(item.ngay_chuyen)}
                  </Text>
                </View>
                <View style={[styles.separator]} />
                <View style={[s.flexRow, s.justifyContentBetween, s.row]}>
                  <Text
                    style={[
                      styles.fontSize18,
                      s.fontWeightBold,
                      s.my2,
                      s.mx3,
                      s.alignSelfStart,
                      s.col10,
                    ]}>
                    Cơ quan ban hành
                  </Text>
                  <View style={[s.col11]}>
                    <Text
                      style={[styles.fontSize16, s.my2, s.mx3, s.alignSelfEnd]}>
                      {item.co_quan_ban_hanh}
                    </Text>
                  </View>
                </View>
                <View style={[styles.separator]} />
                <View style={[s.flexRow, s.justifyContentBetween, s.row]}>
                  <Text
                    style={[
                      styles.fontSize18,
                      s.fontWeightBold,
                      s.my2,
                      s.mx3,
                      s.alignSelfStart,
                      s.col10,
                    ]}>
                    Hình thức văn bản
                  </Text>
                  <View style={[s.col11]}>
                    <Text
                      style={[styles.fontSize16, s.my2, s.mx3, s.alignSelfEnd]}>
                      {item.hinh_thuc_van_ban}
                    </Text>
                  </View>
                </View>
                <View style={[styles.separator]} />
                <View style={[s.flexRow, s.justifyContentBetween, s.row]}>
                  <Text
                    style={[
                      styles.fontSize18,
                      s.fontWeightBold,
                      s.my2,
                      s.mx3,
                      s.alignSelfStart,
                      s.col4,
                    ]}>
                    Lĩnh vực
                  </Text>
                  <View style={[s.col11]}>
                    <Text
                      style={[styles.fontSize16, s.my2, s.mx3, s.alignSelfEnd]}>
                      {item.linh_vuc}
                    </Text>
                  </View>
                </View>
                <View style={[styles.separator]} />
                <View style={[s.flexRow, s.justifyContentBetween, s.row]}>
                  <Text
                    style={[
                      styles.fontSize18,
                      s.fontWeightBold,
                      s.my2,
                      s.mx3,
                      s.alignSelfStart,
                      s.col10,
                    ]}>
                    Loại hình công văn
                  </Text>
                  <View style={[s.col11]}>
                    <Text
                      style={[styles.fontSize16, s.my2, s.mx3, s.alignSelfEnd]}>
                      {item.loai_hinh_cong_van}
                    </Text>
                  </View>
                </View>
                <View style={[styles.separator]} />
                <View style={[s.flexRow, s.justifyContentBetween, s.row]}>
                  <Text
                    style={[
                      styles.fontSize18,
                      s.fontWeightBold,
                      s.my2,
                      s.mx3,
                      s.alignSelfStart,
                      s.col6,
                    ]}>
                    Loại văn bản
                  </Text>
                  <View style={[s.col11]}>
                    <Text
                      style={[styles.fontSize16, s.my2, s.mx3, s.alignSelfEnd]}>
                      {item.loai_van_ban}
                    </Text>
                  </View>
                </View>
                <View style={[styles.separator]} />
                <View
                  style={[
                    s.alignItemsCenter,
                    s.justifyContentCenter,
                    s.rounded,
                    s.py1,
                    s.mt3,
                    s.mb2,
                  ]}>
                  {item.con_hieu_luc ? (
                    <Text style={[styles.textGreen, s.fontWeightBold]}>
                      Còn hiệu lực
                    </Text>
                  ) : (
                    <Text style={[s.fontWeightBold]}>Hết hiệu lực</Text>
                  )}
                </View>
                <TouchableOpacity
                  onPress={() => checkPermision(item.ten_tep_dinh_kem)}
                  style={{
                    backgroundColor: 'green',
                    borderRadius: 25,
                    height: 50,
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: 25,
                    marginHorizontal: 100,
                  }}>
                  <Text
                    style={{
                      color: 'white',
                      fontWeight: 'bold',
                      fontSize: 16,
                    }}>
                    Tải về
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          ))}
      </View>
    );
  }
};
export default DispatchDetails;
