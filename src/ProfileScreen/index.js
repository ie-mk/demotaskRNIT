import React, {useState, useEffect,} from 'react';
import { Button,Image, View, Text, TouchableOpacity, ActivityIndicator, TextInput } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
// import styles from './styles'; 
import { useNavigation } from '@react-navigation/native';

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
if(loader){
  return(
    <View style={styles.container}>
       <ActivityIndicator size="large" color="#00ff00" />
  </View>
  )
}

  return (
      <View style={{ flex: 1,
       alignItems: 'center', 
      // justifyContent: 'center' 
       }}>

        <Image
        style={{ height: 100, width: 100,borderRadius: 50,margin: 50 }}
        source={{
          uri: profilePic
        }}
      />
        <Text >Name: {name}</Text>
        <Text style={{ paddingBottom: 10 }}>Address: {address}</Text>
        <Text style={{ paddingBottom: 10 }}>PhoneNumber: {phoneNumber}</Text>

       <View style={
           { justifyContent:'center',height: 40,width: '80%', borderColor:'red', margin:10,  backgroundColor:'#e3e3e3'}}>
        <TextInput
           style={{marginLeft: 10,}}

            placeholder="Name"
            onChangeText={text => setName(text)}
            defaultValue={name}
        />       
       </View>

       <View style={{ justifyContent:'center',height: 40,width: '80%', borderColor:'red', margin:10,  backgroundColor:'#e3e3e3'}}>
        <TextInput
           style={{marginLeft: 10,}}

            placeholder="Address"
            onChangeText={text => setAddress(text)}
            defaultValue={address}
        />       
       </View>

       <View style={{ justifyContent:'center',height: 40,width: '80%', borderColor:'red', margin:10,  backgroundColor:'#e3e3e3'}}>
        <TextInput
           style={{marginLeft: 10,}}
            maxLength={10}
            keyboardType='phone-pad'
            placeholder="Phone Number"
            onChangeText={text => setPhoneNumber(text)}
            defaultValue={phoneNumber}
        />       
       </View>

       <View>
        <TouchableOpacity 
          style={{padding:10,backgroundColor:'green', borderRadius: 10, marginTop: 30 }}
          onPress={()=> setDataToStorage()}
        >
          <Text>Submit</Text>
          </TouchableOpacity> 
        </View>

        <View>
        <TouchableOpacity 
          style={{padding:10,backgroundColor:'green', borderRadius: 10, marginTop: 30 }}
          onPress={()=> navigation.navigate('Home')}
        >
          <Text>Go To Home</Text>
          </TouchableOpacity> 
        </View>
      </View>
    );
  
}

export default ProfileScreen;
