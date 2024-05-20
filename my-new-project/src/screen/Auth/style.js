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
        alignItems: 'center',
        justifyContent: 'center'
    },
    img: {
        width: 170,
        resizeMode: 'contain',
        marginBottom: 70
    },
    input: {
        width: '100%',
        height: 40,
        padding: 5,
        backgroundColor: '#FFFFFF',
        borderRadius: 100,
        paddingLeft: 20,
        fontSize: 13,
        fontFamily: 'Poppins400',
        fontWeight: 400,
        marginTop: 20
    },
    button: {
        width: '100%',
        borderRadius: 6,
        backgroundColor: '#50C2C9',
        color: 'white',
        padding: 10,
        textAlign: 'center',
        fontSize: 18,
        fontFamily: 'Poppins600',
        fontWeight: 600,
        marginTop: 40
    },
    forget: {
        color: '#50C2C9',
        marginTop: 40
    },
    welcome: {
        fontSize: 18,
        fontFamily: 'Poppins700',
        fontWeight: 700,
        marginBottom: 30,
        marginTop: 50
    },
    account: {
        fontSize: 16,
        fontFamily: 'Poppins400',
        fontWeight: 400,
        marginTop: 20
    },
    sign_up: {
        color: '#50C2C9',
        fontSize: 16,
        fontFamily: 'Poppins400',
        fontWeight: 400
    }
});

export default styles;