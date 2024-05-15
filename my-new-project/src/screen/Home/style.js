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
        width: 150,
        height: 150,
        resizeMode: 'contain'
    }
});

export default styles;