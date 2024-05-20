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
    input: {
        width: '100%',
        height: 40,
        padding: 5,
        backgroundColor: '#FFFFFF',
        borderRadius: 100,
        paddingLeft: 20,
        fontSize: 13,
        fontFamily: 'Poppins400',
        fontWeight: 400
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
        marginTop: 70
    },
    already: {
        fontSize: 16,
        fontFamily: 'Poppins400',
        fontWeight: 400
    },
    sign: {
        color: '#50C2C9',
        fontSize: 16,
        fontFamily: 'Poppins400',
        fontWeight: 400
    },
    welcome: {
        fontSize: 18,
        fontFamily: 'Poppins700',
        fontWeight: 700,
        marginTop: 30
    },
    help: {
        fontSize: 13,
        fontFamily: 'Poppins400',
        fontWeight: 400,
        width: 200,
        textAlign: 'center',
        marginBottom: 40
    }
});

export default styles;