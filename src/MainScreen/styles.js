import {StyleSheet} from 'react-native';

const styles = () => StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: 'center',
      },
 
    inputView: {
      width: 40,
      borderWidth: 1,
      borderRadius: 4,
      elevation: 0.5,
      //shadowColor:currentTheme.BorderColor.BorderColorPrimary,
     // borderColor:currentTheme.BorderColor.BorderColorPrimary,
     // fontFamily: Util.getFontFamily('regular'),
      fontStyle: 'normal',
      fontWeight: 'bold',
      fontSize: 18,
      alignSelf:'center',
      // lineHeight: 25,
   //   color:currentTheme.THEME.TEXTCOLOR,
    },

  
    heightWidthZero: {
      height: 0,
      width: 0,
    },
    radioForgetView: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingLeft: '3%',
      // marginHorizontal: 7,
    },

  });
  export default styles;
  