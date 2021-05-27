import React, {useState, useEffect,} from 'react';
import { Image, View, Text, TouchableOpacity, ActivityIndicator } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import styles from './styles'; 
import { useNavigation } from '@react-navigation/native';

const MainScreen = () => {
 let imageurl = 'https://helostatus.com/wp-content/uploads/2021/03/WhatsApp-DP.jpg';
  const navigation = useNavigation();


  const [loader, setLoader] = useState(false);
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [profilePic, setProfilePic] = useState(imageurl);


  useEffect(() => {
   getDataFromStorage();

    const unsubscribe = navigation.addListener('focus', () => {
        console.log('FocusListener ==> ')
        getDataFromStorage();
    });
  
      return () => {
        // Unsubscribe for the focus Listener
        unsubscribe;
      };
    
  }, [navigation]);

  const getDataFromStorage = async () => {

    setLoader(true);
  let namefromasync = await AsyncStorage.getItem('name');
    console.log('willFocusListener ==> namefromasync ',namefromasync)

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

  
if(loader){
  return(
    <View style={styles.container}>
       <ActivityIndicator size="large" color="#00ff00" />
  </View>
  )
}
  return (
    <View style={styles.containerScreen}>

        <Image
            style={styles.image}
            source={{
            uri: profilePic
          }}
          />
        <Text style={styles.text}>Name: {name}</Text>
        <Text style={styles.text}>Address: {address}</Text>
        <Text style={styles.text}>PhoneNumber: {phoneNumber}</Text>

        <View>
        <TouchableOpacity 
          style={styles.button }
          onPress={()=> {
              navigation.navigate('Profile');
            }}
        >
          <Text>Go To Profile</Text>
          </TouchableOpacity> 
        </View>
      </View>
    );
  
}

export default MainScreen;

