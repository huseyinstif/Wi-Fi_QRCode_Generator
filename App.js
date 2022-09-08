import React, { useState } from 'react';
import { View, StyleSheet, SafeAreaView, Image, TextInput } from 'react-native';
import { Button, ButtonGroup, withTheme, Text } from '@rneui/themed';




const App = () => {
  
  const[photo,setPhoto] = useState("https://avatars.githubusercontent.com/u/54823077?s=48&v=4");
  const[wifiName,setWifiName] = useState("TurkTelekom_T2182");
  const[wifiPassword,setWifiPassword] = useState("internet123");
  
  let generateQR = `WIFI:T:WPA;S:${wifiName};P:${wifiPassword};H:false;;`    
  
  const getPhoto = () => {
    setPhoto(`https://chart.googleapis.com/chart?chs=400x300&cht=qr&chl=${generateQR}&choe=UTF-8`);
  }

  return(
<SafeAreaView style={styles.container}>
    <View>
      <Text>Wi-Fi Name</Text>
    <TextInput
        style={styles.input}
        onChangeText={newWifiName => setWifiName(newWifiName)}
        value={wifiName}
      />
      <Text>Wi-Fi Password</Text>
      <TextInput
        style={styles.input}
        onChangeText={newWifiPassword => setWifiPassword(newWifiPassword)}
        value={wifiPassword}    
      />
            <Button
              title="Generate"
              buttonStyle={{ backgroundColor: 'rgba(214, 61, 57, 1)' }}
              onPress={getPhoto}
              containerStyle={{
                height: 40,
                width: 200,
                marginHorizontal: 50,
                marginVertical: 10,
              }}
              titleStyle={{ color: 'white', marginHorizontal: 20 }}
            />
    <Image
        style={styles.tinyLogo}
        source={{
          uri: photo,
        }}
      />
    </View>
</SafeAreaView>
  );
}


const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
  },
  tinyLogo: {
    width: 300,
    height: 300,
  },
  logo: {
    width: 66,
    height: 58,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});

export default App;

