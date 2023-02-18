import { StyleSheet } from "react-native";


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#2241F2',
      alignItems: 'center',
      justifyContent: 'center',
    },

    Titulo:{
      fontSize:28,
      color:'#f4f6fc',
      margin:20,
      top:20,
      left:10
    },
    input: {
      width: '80%',
      height: 30,
      backgroundColor: '#F0F0F2',
      marginVertical: 10,
      paddingHorizontal: 10,
    },
    button: {
      width: 200,
      height: 30,
      backgroundColor: '#040926',
      borderRadius: 5,
      alignItems: 'center',
      justifyContent: 'center',
    },
    buttonText: {
      color: '#FFFFFF',
      fontWeight: 'bold',
    },
    logo:{ 
      width: 148,
       height: 148
       },
       projetoEstilo:{
        padding:10,
        flexDirection:'row',
        margin:5,
        alignItems: 'center',
        backgroundColor:'#050a30',
        borderRadius:5,
        borderBottomWidth:2
       },
       projText:{
        margin:10,
        textAlignVertical:'center',
        color:'#ffff'

       },
       projBtn:{
          flex: 1,
          justifyContent: 'flex-end',
          alignItems: 'flex-end',
          padding: 16,
       },
       projBtnTex:{
        position: 'absolute',
          top: -16,
          right: -20,
          color:'#4ba8eb'
       }
  });
  
  export default styles;