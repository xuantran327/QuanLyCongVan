import React, {useState, useEffect, useRef} from 'react';
import {View, Text, Image, Alert} from 'react-native';
import BootstrapStyleSheet from 'react-native-bootstrap-styles';
import {ScrollView} from 'react-native-gesture-handler';

import {styles} from '../../styles';
import {ipAddress} from '../../function';

const bootstrapStyleSheet = new BootstrapStyleSheet();
const {s, c} = bootstrapStyleSheet;

const Slide = () => {
  const IP_ADDRESS = ipAddress();
  const [image, setImage] = useState([]);
  const [imgActive, setImgActive] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const onchange = nativeEvent => {
    if (nativeEvent) {
      const slide = Math.ceil(
        nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width,
      );
      if (slide != imgActive) {
        setImgActive(slide);
      }
    }
  };
  useEffect(() => {
    fetch(`http://${IP_ADDRESS}:8080/QuanLyCongVan/public/api/slide`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    })
      .then(response => response.json())
      .then(image => {
        setImage(image);
        console.log(image);
        setIsLoaded(true);
      });
  }, [IP_ADDRESS]);
  if (!isLoaded) {
    return (
      <View
        style={[
          styles.wrap,
          s.bgWhite,
          s.alignItemsCenter,
          s.justifyContentCenter,
        ]}>
        <Text style={[styles.fontSize25, s.fontWeightBold]}>
          Đang tải slide...
        </Text>
      </View>
    );
  } else if (image.length == 0) {
    return (
      <Image
        resizeMode="stretch"
        style={[styles.wrap]}
        source={{
          uri: `http://${IP_ADDRESS}:8080/QuanLyCongVan/public/image/slide/default.png`,
        }}
      />
    );
  } else {
    return (
      <View style={[styles.wrap]}>
        <ScrollView
          onScroll={({nativeEvent}) => onchange(nativeEvent)}
          showsHorizontalScrollIndicator={false}
          pagingEnabled
          horizontal
          style={[styles.wrap]}>
          {image &&
            image.map((e, index) => (
              <Image
                key={index}
                resizeMode="cover"
                style={[styles.wrap]}
                source={{
                  uri:
                    `http://${IP_ADDRESS}:8080/QuanLyCongVan/public/image/slide/` +
                    e.image,
                }}
              />
            ))}
        </ScrollView>
        <View style={[styles.wrapDot]}>
          {image &&
            image.map((e, index) => (
              <Text
                key={index}
                style={imgActive == index ? styles.dotActive : styles.dot}>
                •
              </Text>
            ))}
        </View>
      </View>
    );
  }
};
export default Slide;
