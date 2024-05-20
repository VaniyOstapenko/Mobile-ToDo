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
        justifyContent: 'center',
    },
    img: {
        width: 230,
        height: 170,
        resizeMode: 'contain',
        marginTop: 70
    },
    button: {
        width: '100%',
        borderRadius: 6,
        backgroundColor: '#50C2C9',
        color: 'white',
        padding: 10,
        textAlign: 'center',
        marginTop: 100,
        fontSize: 18,
        fontFamily: 'Poppins600',
        fontWeight: 600
    },
    gets: {
        fontFamily: 'Poppins700',
        fontSize: 18,
        fontWeight: 700,
        marginTop: 65
    },
    lorem: {
        fontFamily: 'Poppins400',
        fontSize: 13,
        fontWeight: 400,
        textAlign: 'center',
        width: 190,
        marginTop: 20
    }
});

export default styles;