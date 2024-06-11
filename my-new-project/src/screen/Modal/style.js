import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    modal: {
        height: '100%',
        width: '100%',
        backgroundColor: 'rgba(0,0,0,0.4)',
        position: 'fixed',
        top: 0,
        left: 0,
        alignItems: 'center',
        justifyContent: 'center',
        display: 'none'
    },
    modal_active: {
        height: '20%',
        width: '80%',
        backgroundColor: 'gray',
        position: 'fixed',
        top: 560,
        left: 35,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 15,
    },
    modal_content: {
        padding: 20,
        borderRadius: 12,
        backgroundColor: 'white',
        height: '80%',
        width: '90%',
        opacity: 1
    }
})

export default styles;