import { StyleSheet } from "react-native";


export default HomePageStyle = StyleSheet.create({
    mainCont: {
        // borderWidth:1,
        // padding: 20,
        flex:1,
        // margin: 10,
        backgroundColor: 'white',
    },
    secCont: {
        // borderWidth: 1
    },
    headCont: {
        // borderWidth: 1,
        padding: 20,
        paddingVertical: 20,
        marginBottom: 20,
    },
    head: {
        fontSize: 45,
        // color: 'white',
        color: 'rgb(58,54,119)',
        fontWeight: '700',
        letterSpacing: 3
    },
    date: {
        fontWeight: '500',
        color: 'black',
        padding: 10,
        fontSize: 15,
        color: 'grey'
    },
    categoryCont: {
        // borderWidth:2,
        flexDirection: 'row',
        flexWrap:"wrap",
        // alignItems: 'center'
    },
    categoryBtn: {
        borderRadius: 10,
        width:'50%',
        alignItems:'center',
        padding: 20,
        height:150,
        borderColor:'rgb(242,243,247)',
        borderWidth: 2,
        // margin: 20,
        backgroundColor: '#E6E6FA',
        flexDirection: 'row',
        justifyContent: 'center',

    },
    categoryText: {
        fontSize: 20,
        fontWeight: '600',
        // color: 'blue',
        color: 'rgb(58,54,119)',
        textDecorationLine: 'underline',
        textDecorationStyle: 'double'
    },
    categoryTextsub: {
        textDecorationLine: 'line-through',
        padding: 5
    },
    imgs:{
        marginRight: 10
    }
})