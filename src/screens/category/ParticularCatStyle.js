import { StyleSheet } from "react-native";

export default partiularCatStyle = StyleSheet.create({
    categoryCont: {
        borderWidth: 1,
        padding: 10,
        flex:1,
        backgroundColor: 'white'
    },
    particularDataCont: {
        // borderWidth:1,
        borderRadius: 5,
        padding:10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        // backgroundColor: 'rgb(137,197,62)',
        backgroundColor: '#E6E6FA',
        marginVertical: 5,
    },
    btnCont: {
        flexDirection: 'row'
    },
    editBtnCont: {
        // borderWidth: 2,
        backgroundColor: '#007791',
        padding: 1,
        width: 80,
        margin: 2,
        alignItems :'center',
        justifyContent: 'center',
        borderRadius: 10
    },
    editBtnText: {
        color: 'white',
        fontWeight: '700'
    },

    addBtnCont: {
        position:'absolute',
        right: 0,
        bottom: 0,
        // borderWidth: 2,
        padding: 35,
        borderTopLeftRadius: 20,
        backgroundColor: 'rgb(236,88,91)',
        

    },
    title: {
        fontSize: 23,
        padding: 5,
        fontWeight: '700',
        color: '#073980',
    },
    subTitle: {
        padding: 10,
        color: '#073980'
    }
})