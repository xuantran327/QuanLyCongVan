import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
  Image,
  Platform,
  PermissionsAndroid,
  Linking,
} from 'react-native';
import RNFetchBlob from 'rn-fetch-blob';
import SelectDropdown from 'react-native-select-dropdown';
import BootstrapStyleSheet from 'react-native-bootstrap-styles';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {useNavigation} from '@react-navigation/native';
import {ScrollView} from 'react-native-gesture-handler';
import DatePicker from 'react-native-date-picker';
// import DocumentPicker from 'react-native-document-picker';

import {faCalendarAlt} from '@fortawesome/free-solid-svg-icons/faCalendarAlt';

import {styles} from '../../../styles';
import {ipAddress, getExtension, getDate, getDateAlt} from '../../../function';

const bootstrapStyleSheet = new BootstrapStyleSheet();
const {s, c} = bootstrapStyleSheet;

const UpdateDispatchScreen = props => {
  const [fileName, setFileName] = useState('');
  const [base64, setBase64] = useState('');
  const ImagePicker = require('react-native-image-picker');
  const handleChoosePhoto = () => {
    let options = {
      noData: true,
      includeBase64: true,
    };
    ImagePicker.launchImageLibrary(options, response => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('Image Picker Error: ', response.error);
      }
      if (response) {
        // console.log(Object.values(response)[0][0].fileName);
        setFileName(Object.values(response)[0][0].fileName);
        setBase64(Object.values(response)[0][0].base64);
        setUri(
          `data:image/${getExtension(
            Object.values(response)[0][0].fileName,
          )};base64,${Object.values(response)[0][0].base64}`,
        );
      }
    });
  };
  const handleUploadPhoto = (base64, fileName) => {
    fetch(`http://${IP_ADDRESS}/QuanLyCongVan/public/api/slide/upload`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        base64: base64,
        fileName: fileName,
      }),
    })
      .then(res => res.json())
      .then(resData => {
        setFileName(fileName);
      })
      .catch(error => {
        Alert.alert('Error', error.message);
      });
  };
  const navigation = useNavigation();
  const IP_ADDRESS = ipAddress();
  const [data, setData] = useState([]);
  const [uri, setUri] = useState(
    `http://${IP_ADDRESS}/QuanLyCongVan/public/image/thumbnail/thumbnail-default.png`,
  );
  const [name, setName] = useState('');
  const [soHieu, setSoHieu] = useState('');
  const [TYND, setTYND] = useState('');
  const [nguoiKy, setNguoiKy] = useState('');
  const [ngayLap, setNgayLap] = useState(new Date());
  const [ngayKy, setNgayKy] = useState(new Date());
  const [ngayHieuLuc, setNgayHieuLuc] = useState(new Date());
  const [ngayChuyen, setNgayChuyen] = useState(new Date());
  const [ngayLapText, setNgayLapText] = useState('');
  const [ngayKyText, setNgayKyText] = useState('');
  const [ngayHieuLucText, setNgayHieuLucText] = useState('');
  const [ngayChuyenText, setNgayChuyenText] = useState('');
  const [ngayLapShow, setNgayLapShow] = useState(false);
  const [ngayKyShow, setNgayKyShow] = useState(false);
  const [ngayHieuLucShow, setNgayHieuLucShow] = useState(false);
  const [ngayChuyenShow, setNgayChuyenShow] = useState(false);
  const [radiobtn, setRadiobtn] = useState(['Còn', 'Hết']);
  const [check, setCheck] = useState(0);
  const [CQBH, setCQBH] = useState([]);
  const [HTVB, setHTVB] = useState([]);
  const [linhVuc, setLinhVuc] = useState([]);
  const [LHCV, setLHCV] = useState([]);
  const [loaiVanBan, setLoaiVanBan] = useState([]);
  const [CQBHid, setCQBHid] = useState(2);
  const [HTVBid, setHTVBid] = useState(1);
  const [linhVucId, setLinhVucId] = useState(1);
  const [LHCVid, setLHCVid] = useState(1);
  const [loaiVanBanId, setLoaiVanBanId] = useState(1);
  const [docFile, setDocFile] = useState('');
  const [docFileUri, setDocFileUri] = useState('');
  const option = Object.values(props)[1].params.option;
  const updateDispatch = opt => {
    let url = '';
    if (!opt) {
      url = `http://${IP_ADDRESS}/QuanLyCongVan/public/api/dispatch/add`;
    } else {
      url = `http://${IP_ADDRESS}/QuanLyCongVan/public/api/dispatch/edit/${
        Object.values(props)[1].params.dispatchId
      }`;
    }
    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        // name: name,
        thumbnail: fileName,
        soHieu: soHieu,
        trichYeuNoiDung: TYND,
        nguoiKy: nguoiKy,
        ngayLap: getDateAlt(ngayLap),
        ngayKy: getDateAlt(ngayKy),
        ngayHieuLuc: getDateAlt(ngayHieuLuc),
        ngayChuyen: getDateAlt(ngayChuyen),
        conHieuLuc: check,
      }),
    })
      .then(res => res.json())
      .then(resData => {
        if (resData.errors) {
          let errorArray = Object.values(resData.errors);
          let errorString = '';
          for (let key in errorArray) {
            errorString += errorArray[key][0];
            if (key != errorArray.length) {
              errorString += '\n';
            }
          }
          Alert.alert('Thông báo', errorString);
        } else {
          Alert.alert('Thông báo', resData.message);
          handleUploadPhoto(base64, fileName);
          if (!option) {
            navigation.goBack();
          }
        }
      })
      .catch(error => {
        Alert.alert('Error', error.message);
      });
  };
  let id = 1;
  let url = '';
  if (option) {
    id = Object.values(props)[1].params.dispatchId;
    url = `http://${IP_ADDRESS}/QuanLyCongVan/public/api/dispatch/${id}`;
  } else {
    url = `http://${IP_ADDRESS}/QuanLyCongVan/public/api/info`;
  }
  // if (option) {
  //   const id = Object.values(props)[1].params.dispatchId;
  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    })
      .then(response => response.json())
      .then(data => {
        setCQBH(data.coquanbanhanh);
        setHTVB(data.hinhthucvanban);
        setLHCV(data.loaihinhcongvan);
        setLinhVuc(data.linhvuc);
        setLoaiVanBan(data.loaivanban);
        if (option) {
          let congVan = data.congvan;
          setCQBHid(congVan.id_co_quan_ban_hanh);
          setHTVBid(congVan.id_hinh_thuc_van_ban);
          setLHCVid(congVan.id_loai_hinh_cong_van);
          setLinhVucId(congVan.id_linh_vuc);
          // console.log(data.coquanbanhanh);
          setLoaiVanBan(congVan.id_loai_van_ban);
          setData(congVan);
          setSoHieu(congVan.so_hieu);
          setTYND(congVan.trich_yeu_noi_dung);
          setNguoiKy(congVan.nguoi_ky);
          setNgayLap(new Date(congVan.ngay_lap));
          setNgayKy(new Date(congVan.ngay_ky));
          setNgayHieuLuc(new Date(congVan.ngay_hieu_luc));
          setNgayChuyen(new Date(congVan.ngay_chuyen));
          setNgayLapText(congVan.ngay_lap ? getDate(congVan.ngay_lap) : '');
          setNgayKyText(congVan.ngay_ky ? getDate(congVan.ngay_ky) : '');
          setNgayHieuLucText(
            congVan.ngay_hieu_luc ? getDate(congVan.ngay_hieu_luc) : '',
          );
          setNgayChuyenText(
            congVan.ngay_chuyen ? getDate(congVan.ngay_chuyen) : '',
          );
          setDocFile(congVan.ten_tep_dinh_kem);
          setCheck(congVan.con_hieu_luc);
          setUri(
            `http://${IP_ADDRESS}/QuanLyCongVan/public/image/thumbnail/${congVan.thumbnail}`,
          );
        }
      });
  }, [IP_ADDRESS, id, option, url]);
  const getFileExtention = fileUrl => {
    // To get the file extension
    return /[.]/.exec(fileUrl) ? /[^.]+$/.exec(fileUrl) : undefined;
  };
  const download = fileUrl => {
    let FILE_URL = fileUrl;
    // let date = new Date();
    // // File URL which we want to download

    // // Function to get extention of the file url
    // let file_ext = getFileExtention(FILE_URL);

    // file_ext = '.' + file_ext[0];

    // // config: To get response by passing the downloading related options
    // // fs: Root directory path to download
    // const {config, fs} = RNFetchBlob;
    // let RootDir = fs.dirs.DownloadDir;
    // let options = {
    //   fileCache: true,
    //   addAndroidDownloads: {
    //     path:
    //       RootDir +
    //       '/file_' +
    //       Math.floor(date.getTime() + date.getSeconds() / 2) +
    //       file_ext,
    //     description: 'Downloading file...',
    //     notification: true,
    //     // useDownloadManager works with Android only
    //     useDownloadManager: true,
    //     title:
    //       'file_' +
    //       Math.floor(date.getTime() + date.getSeconds() / 2) +
    //       file_ext,
    //   },
    // };
    // config(options)
    //   .fetch('GET', FILE_URL)
    //   .then(res => {
    //     // Alert after successful downloading
    //     console.log('res -> ', JSON.stringify(res));
    //     alert('File Downloaded Successfully.');
    //   });
    Linking.canOpenURL(FILE_URL).then(supported => {
      if (supported) {
        Linking.openURL(FILE_URL);
      } else {
        console.warn('Cannot open URL:', FILE_URL);
      }
    });
  };
  const checkPermision = async filename => {
    const fileUrl =
      `http://${IP_ADDRESS}/QuanLyCongVan/public/upload/` + filename;
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
  // const DocumentPicker = require('react-native-document-picker');
  const handleFileUpload = async () => {
    // try {
    //   const options = {
    //     type: '*/*',
    //     copyToCacheDirectory: true,
    //     multiple: false,
    //     // You can add more specific file types here
    //     // For example: .doc, .docx, .pdf, .xls, .zip, .rar
    //     // Make sure to add the appropriate MIME type for each file type
    //     // You can find a list of MIME types at https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Common_types
    //     // The example below allows doc, docx, pdf, xls, zip, and rar files
    //     allowedFileTypes: ['doc', 'docx', 'pdf', 'xls', 'zip', 'rar'],
    //   };
    //   const result = DocumentPicker.getDocumentAsync(options);
    //   if (result.type === 'success') {
    //     setDocFileUri(result.uri);
    //     const formData = new FormData();
    //     formData.append('file', {
    //       uri: result.uri,
    //       name: result.name,
    //       type: result.type,
    //     });
    //     const response = await fetch(
    //       `http://${IP_ADDRESS}/QuanLyCongVan/public/api/dispatch/upload`,
    //       {
    //         headers: {
    //           Accept: 'application/json',
    //           'Content-Type': 'multipart/form-data',
    //         },
    //         body: formData,
    //       },
    //     );
    //     console.log('Upload response:', response);
    //   }
    // } catch (error) {
    //   console.warn('File upload error', error);
    // }
  };
  // }
  return (
    <ScrollView style={[s.m4]} showsVerticalScrollIndicator={false}>
      {/* <Text style={[styles.fontSize16, s.my2, s.fontWeightBold, s.ml2]}>
        Cơ quan ban hành
      </Text>
      <SelectDropdown
        dropdownStyle={[styles.inputView]}
        data={['a', 'c', 'd']}
        onSelect={(selectedItem, index) => {
          console.log(selectedItem + ' ' + index);
        }}
        buttonTextAfterSelection={(selectedItem, index) => {
          return selectedItem;
        }}
        rowTextForSelection={(item, index) => {
          return item;
        }}
      /> */}
      {/* <Text style={[styles.fontSize16, s.my2, s.fontWeightBold, s.ml2]}>
        Hình thức văn bản
      </Text>
      <View style={styles.inputView}>
        <TextInput
          style={[styles.inputText]}
          placeholder="Nhập số hiệu..."
          placeholderTextColor="green"
          value={soHieu}
          onChangeText={value => setSoHieu(value)}
        />
      </View>
      <Text style={[styles.fontSize16, s.my2, s.fontWeightBold, s.ml2]}>
        Lĩnh vực
      </Text>
      <View style={styles.inputView}>
        <TextInput
          style={[styles.inputText]}
          placeholder="Nhập số hiệu..."
          placeholderTextColor="green"
          value={soHieu}
          onChangeText={value => setSoHieu(value)}
        />
      </View>
      <Text style={[styles.fontSize16, s.my2, s.fontWeightBold, s.ml2]}>
        Loại hình công văn
      </Text>
      <View style={styles.inputView}>
        <TextInput
          style={[styles.inputText]}
          placeholder="Nhập số hiệu..."
          placeholderTextColor="green"
          value={soHieu}
          onChangeText={value => setSoHieu(value)}
        />
      </View>
      <Text style={[styles.fontSize16, s.my2, s.fontWeightBold, s.ml2]}>
        Loại văn bản
      </Text>
      <View style={styles.inputView}>
        <TextInput
          style={[styles.inputText]}
          placeholder="Nhập số hiệu..."
          placeholderTextColor="green"
          value={soHieu}
          onChangeText={value => setSoHieu(value)}
        />
      </View> */}
      <Text style={[styles.fontSize16, s.my2, s.fontWeightBold, s.ml2]}>
        Số hiệu
      </Text>
      <View style={styles.inputView}>
        <TextInput
          style={[styles.inputText]}
          placeholder="Nhập số hiệu..."
          placeholderTextColor="green"
          value={soHieu}
          onChangeText={value => setSoHieu(value)}
        />
      </View>
      <Text style={[styles.fontSize16, s.my2, s.fontWeightBold, s.ml2]}>
        Trích yếu nội dung
      </Text>
      <View
        style={{
          width: '100%',
          backgroundColor: 'white',
          borderRadius: 10,
          borderWidth: 1,
          borderColor: '#CCCCCC',
          height: 100,
          marginBottom: 20,
          paddingHorizontal: 10,
        }}>
        <TextInput
          editable
          style={{
            height: 100,
            color: 'black',
            textAlignVertical: 'top',
          }}
          multiline={true}
          numberOfLines={4}
          placeholderTextColor="green"
          value={TYND}
          onChangeText={value => setTYND(value)}
        />
      </View>
      <Text style={[styles.fontSize16, s.my2, s.fontWeightBold, s.ml2]}>
        Người ký
      </Text>
      <View style={styles.inputView}>
        <TextInput
          style={[styles.inputText]}
          placeholder="Nhập người ký..."
          placeholderTextColor="green"
          value={nguoiKy}
          onChangeText={value => setNguoiKy(value)}
        />
      </View>
      <Text style={[styles.fontSize16, s.my2, s.fontWeightBold, s.ml2]}>
        Thumbnail
      </Text>
      <TouchableOpacity style={[s.mb4]} onPress={handleChoosePhoto}>
        <Image
          style={{
            width: '100%',
            height: 250,
          }}
          source={{
            uri: uri,
          }}
          resizeMode="contain"
        />
      </TouchableOpacity>
      <Text style={[styles.fontSize16, s.my2, s.fontWeightBold, s.ml2]}>
        Ngày lập
      </Text>
      <View style={styles.inputView}>
        <TextInput
          editable={false}
          selectTextOnFocus={false}
          style={[styles.inputText]}
          placeholderTextColor="green"
          value={ngayLapText}
          onChangeText={value => setNgayLapText(value)}
        />
        <TouchableOpacity onPress={() => setNgayLapShow(true)}>
          <FontAwesomeIcon
            icon={faCalendarAlt}
            style={{marginTop: -35, alignSelf: 'flex-end'}}
          />
        </TouchableOpacity>
      </View>
      <DatePicker
        modal
        open={ngayLapShow}
        date={ngayLap}
        onConfirm={date => {
          setNgayLapShow(false);
          setNgayLap(date);
          console.log(date);
          setNgayLapText(getDate(date));
        }}
        onCancel={() => {
          setNgayLapShow(false);
        }}
        mode="date"
        locale="vi"
      />
      <Text style={[styles.fontSize16, s.my2, s.fontWeightBold, s.ml2]}>
        Ngày ký
      </Text>
      <View style={styles.inputView}>
        <TextInput
          editable={false}
          selectTextOnFocus={false}
          style={[styles.inputText]}
          placeholderTextColor="green"
          value={ngayKyText}
          onChangeText={value => setNgayKyText(value)}
        />
        <TouchableOpacity onPress={() => setNgayKyShow(true)}>
          <FontAwesomeIcon
            icon={faCalendarAlt}
            style={{marginTop: -35, alignSelf: 'flex-end'}}
          />
        </TouchableOpacity>
      </View>
      <DatePicker
        modal
        open={ngayKyShow}
        date={ngayKy}
        onConfirm={date => {
          setNgayKyShow(false);
          setNgayKy(date);
          console.log(date);
          setNgayKyText(getDate(date));
        }}
        onCancel={() => {
          setNgayKyShow(false);
        }}
        mode="date"
        locale="vi"
      />
      <Text style={[styles.fontSize16, s.my2, s.fontWeightBold, s.ml2]}>
        Ngày hiệu lực
      </Text>
      <View style={styles.inputView}>
        <TextInput
          editable={false}
          selectTextOnFocus={false}
          style={[styles.inputText]}
          placeholderTextColor="green"
          value={ngayHieuLucText}
          onChangeText={value => setNgayHieuLucText(value)}
        />
        <TouchableOpacity onPress={() => setNgayHieuLucShow(true)}>
          <FontAwesomeIcon
            icon={faCalendarAlt}
            style={{marginTop: -35, alignSelf: 'flex-end'}}
          />
        </TouchableOpacity>
      </View>
      <DatePicker
        modal
        open={ngayHieuLucShow}
        date={ngayHieuLuc}
        onConfirm={date => {
          setNgayHieuLucShow(false);
          setNgayHieuLuc(date);
          console.log(date);
          setNgayHieuLucText(getDate(date));
        }}
        onCancel={() => {
          setNgayHieuLucShow(false);
        }}
        mode="date"
        locale="vi"
      />
      <Text style={[styles.fontSize16, s.my2, s.fontWeightBold, s.ml2]}>
        Ngày chuyển
      </Text>
      <View style={styles.inputView}>
        <TextInput
          editable={false}
          selectTextOnFocus={false}
          style={[styles.inputText]}
          placeholderTextColor="green"
          value={ngayChuyenText}
          onChangeText={value => setNgayChuyenText(value)}
        />
        <TouchableOpacity onPress={() => setNgayChuyenShow(true)}>
          <FontAwesomeIcon
            icon={faCalendarAlt}
            style={{marginTop: -35, alignSelf: 'flex-end'}}
          />
        </TouchableOpacity>
      </View>
      <DatePicker
        modal
        open={ngayChuyenShow}
        date={ngayChuyen}
        onConfirm={date => {
          setNgayChuyenShow(false);
          setNgayChuyen(date);
          console.log(date);
          setNgayChuyenText(getDate(date));
        }}
        onCancel={() => {
          setNgayChuyenShow(false);
        }}
        mode="date"
        locale="vi"
      />
      <Text style={[styles.fontSize16, s.my2, s.fontWeightBold, s.ml2]}>
        Còn hiệu lực
      </Text>
      <View style={[s.flexRow, s.justifyContentStart, s.row, s.ml1, s.mb4]}>
        {radiobtn &&
          radiobtn.map((data, key) => {
            return (
              <View key={key} style={[s.col4]}>
                {check == key ? (
                  <TouchableOpacity style={[s.flexRow, s.justifyContentStart]}>
                    <Image
                      style={{width: 20, height: 20}}
                      source={{
                        uri: `http://${IP_ADDRESS}/QuanLyCongVan/public/image/selected.png`,
                      }}
                    />
                    <Text style={[s.ml2]}>{data}</Text>
                  </TouchableOpacity>
                ) : (
                  <TouchableOpacity
                    style={[s.flexRow, s.justifyContentStart]}
                    onPress={() => {
                      setCheck(key);
                    }}>
                    <Image
                      style={{width: 20, height: 20}}
                      source={{
                        uri: `http://${IP_ADDRESS}/QuanLyCongVan/public/image/unselected.png`,
                      }}
                    />
                    <Text style={[s.ml2]}>{data}</Text>
                  </TouchableOpacity>
                )}
              </View>
            );
          })}
      </View>
      <>
        {option ? (
          <TouchableOpacity
            onPress={() => checkPermision(docFile)}
            style={[styles.loginBtn]}>
            <Text style={styles.loginText}>Tải tệp về</Text>
          </TouchableOpacity>
        ) : (
          <></>
        )}
      </>
      <TouchableOpacity onPress={handleFileUpload} style={[styles.loginBtn]}>
        <Text style={styles.loginText}>Tải tệp lên</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.loginBtn]}
        onPress={() => updateDispatch(option)}>
        <Text style={styles.loginText}>Lưu thông tin</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};
export default UpdateDispatchScreen;
