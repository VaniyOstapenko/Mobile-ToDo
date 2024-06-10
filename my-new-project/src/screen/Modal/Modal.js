import { View } from 'react-native';
import styles from './style';

export default function Modal({ active, setActive }) {
    return (
        <View style={active ? styles.modal : styles.modal_active} onPress={() => setActive(false)}>
            <View style={styles.modal_content} onPress={e => e.stopPropagation()}>

            </View>
        </View>
    );
}


