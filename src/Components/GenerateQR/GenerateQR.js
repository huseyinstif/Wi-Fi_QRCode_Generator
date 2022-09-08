import React, { useState } from 'react';
import { View, SafeAreaView, Image } from 'react-native';
import { Button, Text , Input} from '@rneui/themed';

import styles from './GenerateQR.Styled';

const GenerateQRComponent = () => {
  const[photo,setPhoto] = useState("https://chart.googleapis.com/chart?chs=400x300&cht=qr&chl=WIFI:T:WPA;S:wifiName;P:wifiPassword;H:false;;&choe=UTF-8");
  const[wifiName,setWifiName] = useState("Wi-Fi Name");
  const[wifiPassword,setWifiPassword] = useState("Wi-Fi Password");
  let generateQR = `WIFI:T:WPA;S:${wifiName};P:${wifiPassword};H:false;;`; 
  
  const getPhoto = () => {
      setPhoto(`https://chart.googleapis.com/chart?chs=400x300&cht=qr&chl=${generateQR}&choe=UTF-8`);
  }
  
  return(
  <SafeAreaView style={styles.container}>
      <View>
        <Input
        placeholder=""
        onChangeText={newWifiName => setWifiName(newWifiName)}
        label="Wi-Fi Name"
        leftIcon={{ type: 'font-awesome', name: 'wifi' }}
        />
      </View>
      <View>
        <Input
        placeholder=""
        onChangeText={newWifiPassword => setWifiPassword(newWifiPassword)}
        label="Wi-Fi Password"
        leftIcon={{ type: 'font-awesome', name: 'key' }}
        />
      </View>
      <View>
        <Button
          title={'Generate QR'}
          containerStyle={styles.buttonStyle}
          onPress={getPhoto}
        />
      </View>      
      <View style={styles.qrCodeView}>
        <Image
              style={styles.qrCodeImg}
              source={{
                uri: photo,
              }}
            />
      </View>
  </SafeAreaView>
    );
  }

export default GenerateQRComponent;