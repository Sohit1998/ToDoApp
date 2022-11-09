import { StyleSheet } from "react-native";

export default UserInputStyle = StyleSheet.create({
    inputCont: {
        borderWidth: 2,
        flex:1,
        padding:20,
        backgroundColor: 'white',
        justifyContent: 'space-between'

    },
    title: {
        borderWidth:2,
        borderColor:'rgb(242,243,247)',
        padding: 15,
        margin: 10,
        borderRadius: 10,
    },
    btnCont: {
        // borderWidth:2,
        alignSelf: 'center',
        padding: 20,
        width: 220,
        // paddingHorizontal:40,
        borderRadius:50,
        backgroundColor: 'rgb(236,88,91)',
        marginBottom: 30,
        
    },
    btnText: {
        fontWeight: '700',
        color: 'white',
        textAlign: 'center'
    }

})