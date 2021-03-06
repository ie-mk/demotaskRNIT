import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: 'center',
      },
    containerScreen: { 
      flex: 1,
      alignItems: 'center', 
      },
    image: {
       height: 150, 
       width: 150,
       borderRadius: 75,
       margin: 20,
       borderColor: 'black',
       borderWidth: 1,
       marginHorizontal: 3 
      },
     button: {
       padding:10,
       backgroundColor:'green', 
       borderRadius: 10, 
       marginTop: 100 
      },
      text: { 
        paddingBottom: 8
      },
      marginInput:{
        marginLeft: 10,
      }

  });
  export default styles;
  