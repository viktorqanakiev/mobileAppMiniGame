import { View, Text, StyleSheet } from "react-native";
import Colors from "../../constants/colors";

function NumberContainer({children}) {
    return(
        <View style={styles.container}>
            <Text style={styles.numberText}>{children}</Text>
        </View>
    )
}
export default NumberContainer;

const styles = StyleSheet.create({
    container: {
        borderRadius: 8,
        borderColor: Colors.accent500,
        padding: 24,
        margin: 24,
        borderWidth: 4,
        alignItems: 'center',
        justifyContent: 'center'
    },
    numberText: {
        color: Colors.accent500,
        fontSize: 36,
    }
})
