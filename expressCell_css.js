import {Dimensions,Platform ,StyleSheet} from 'react-native';

export default {

    contaier: {
        flexDirection:'row',
        width:Dimensions.get('window').width,
        justifyContent: 'flex-start',
        alignItems:'flex-start',
        paddingLeft:10,
    },

    middleView: {

        width:Dimensions.get('window').width,
        justifyContent:'flex-start',
        alignItems:'flex-start',
        height:50,
        // backgroundColor: '#e0e0e0',
       borderLeftWidth:2,
       borderColor:'gray',
        
    },
    bottomView : {
        
        flexDirection:'column',
        flex:1,
        justifyContent:"center",
        alignItems:'flex-start',
        marginTop:0,
        marginLeft:20,
        width:Dimensions.get('window').width,
        borderBottomWidth:1,
        borderColor:'',
        
    },

    expressLeft: {
        position:'absolute',
        left:6,
        top:20,
        backgroundColor:'#e0e0e0',
        height:10,
        width:10,
        borderRadius:5
        

    }


};