import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    wrapper: {
        width: '100%',
        height: '100%',
        backgroundColor: '#F0F4F3',
        alignItems: 'center'
    },
    container: {
        width: '80%',
        flex: 1,
        flexDirection: 'column',
        gap: 20,
        alignItems: 'center',
        justifyContent: 'center'
    },
    img: {
        width: 170,
        resizeMode: 'contain'
    },
    input: {
        width: '100%',
        padding: 5,
        backgroundColor: '#FFFFFF',
        borderRadius: 100,
        paddingLeft: 20,
    },
    button: {
        width: '100%',
        borderRadius: 6,
        backgroundColor: '#50C2C9',
        color: 'white',
        padding: 10,
        textAlign: 'center'
    },
    sign: {
        color: '#50C2C9'
    },
    welcome: {
        fontSize: 18,
        fontFamily: 'Poppin',
        fontWeight: 700
    }
});

export default styles;