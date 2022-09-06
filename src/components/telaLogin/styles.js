import { StyleSheet } from "react-native";

const styles = StyleSheet.create ({
    boxLogin: {
        flex:1,
        alignItems:'center',
        justifyContent: 'center',
        padding:25,
        marginTop:60,
    },

    textTitle:{
        color:'#008000',
        textAlign:'center',
        fontSize:36,
        fontWeight:'bold',
        marginBottom:30,
        marginTop:15,
    },

    Input:{
        width:360,
        margin: 5,
        height: 40,
        paddingLeft: 40,
        paddingHorizontal: 20,
        borderWidth:2,
        borderColor:'#1C1C1C',
        borderRadius: 8, 
        textAlign:'center',
        fontSize: 22,
        borderColor:'#e4e7eb',
        placeholderTextColor: '#006400',
    },

    bntEntrar:{
        width:360,
        margin: 5,
        height: 40,
        paddingLeft: 40,
        paddingHorizontal: 20,
        borderWidth: 2,
        borderColor:'#e4e7eb',
        backgroundColor:'#006400',
        borderRadius: 8, 
        fontSize: 22,
    },

    TextBntEntrar: {
        fontSize:22,
        textAlign:'center',
        justifyContent:'center',
        color:'#FFF',
    },

    textRecSenha:{
        margin:5,
        color:'#1E90FF',
        fontSize:14,
        textAlign:'center',
        justifyContent:'center',
    },

    textCopy:{
        width:'100%',
        marginTop:185,
        fontSize:18,
        color:'#006400'
    },
});

export default styles