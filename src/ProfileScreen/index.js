import React, {useState, useEffect,} from 'react';
import { Image, View, Text, TouchableOpacity, ActivityIndicator, TextInput, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import styles from './styles'; 
import { useNavigation } from '@react-navigation/native';
var ImagePicker = require('react-native-image-picker');

const ProfileScreen = () => {
  let imageurl = 'https://helostatus.com/wp-content/uploads/2021/03/WhatsApp-DP.jpg';
  const navigation = useNavigation();

  const [loader, setLoader] = useState(false);
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [profilePic, setProfilePic] = useState(imageurl);


  useEffect(() => {
    getDataFromStorage();
    
  }, [0]);

  const getDataFromStorage=async()=>{
    setLoader(true);

    let namefromasync = await AsyncStorage.getItem('name');
    if( namefromasync != null || undefined ){
       
     var addressasync = await AsyncStorage.getItem('address');
     var phoneNumberasync = await AsyncStorage.getItem('phoneNumber');
     var ProfilePictureasync = await AsyncStorage.getItem('ProfilePicture');

     setName(namefromasync);
     setAddress(addressasync);
     setPhoneNumber(phoneNumberasync);
     setProfilePic(ProfilePictureasync);
    }
  
    setLoader(false);

  }



  const setDataToStorage =()=>{
   
    AsyncStorage.setItem('name',name);
    AsyncStorage.setItem('phoneNumber',phoneNumber );
    AsyncStorage.setItem('address',address);
    AsyncStorage.setItem('ProfilePicture',profilePic);
  //  getDataFromStorage();
  }

const  launchImageLibrary = () => {
  let options = {
    storageOptions: {
      skipBackup: true,
      path: 'images',
    },
  };
  ImagePicker.launchImageLibrary(options, (response) => {
    console.log('Response = ', response);

    if (response.didCancel) {
      console.log('User cancelled image picker');
    } else if (response.error) {
      console.log('ImagePicker Error: ', response.error);
    } else if (response.customButton) {
      console.log('User tapped custom button: ', response.customButton);
      alert(response.customButton);
    } else {
      const source = { uri: response.uri };
      console.log('response', JSON.stringify(response), response.assets[0]);
      setProfilePic(response.assets[0].uri);
      console.log('uri image response==>',response.assets[0].uri);

    }
  });

}


if(loader){
  return(
    <View style={styles.container}>
       <ActivityIndicator size="large" color="#00ff00" />
  </View>
  )
}
console.log('uri image profile==>',profilePic);

  return (
      <View style={styles.containerScreen}>

      <TouchableOpacity  onPress={()=> launchImageLibrary() }  >
        <Image
          style={styles.image}
          source={{
              uri: profilePic
            }}
          />
      </TouchableOpacity>
        <Text style={styles.text}>Name: {name}</Text>
        <Text style={styles.text}>Address: {address}</Text>
        <Text style={styles.text}>PhoneNumber: {phoneNumber}</Text>

       <View style={ styles.viewInput }>
        <TextInput
            style={styles.marginInput}
            placeholder="Name"
            onChangeText={text => setName(text)}
            defaultValue={name}
        />       
       </View>

       <View style={ styles.viewInput }>
        <TextInput
            style={styles.marginInput}
            placeholder="Address"
            onChangeText={text => setAddress(text)}
            defaultValue={address}
        />       
       </View>

       <View style={ styles.viewInput }>
        <TextInput
            style={styles.marginInput}
            maxLength={10}
            keyboardType='phone-pad'
            placeholder="Phone Number"
            onChangeText={text => setPhoneNumber(text)}
            defaultValue={phoneNumber}
        />       
       </View>

       <View>
        <TouchableOpacity 
          style={styles.button }
          onPress={()=> setDataToStorage()}
        >
          <Text>Submit</Text>
          </TouchableOpacity> 
        </View>

        <View>
        <TouchableOpacity 
          style={ styles.button }
          onPress={()=> navigation.navigate('Home')}
        >
          <Text>Go To Home</Text>
          </TouchableOpacity> 
        </View>
      </View>
    );
  
}

export default ProfileScreen;