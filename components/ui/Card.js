import { View, StyleSheet } from "react-native";
import Colors from "../../constants/colors";

function Card({ children }) {
  return <View style={styles.card}>{children}</View>;
}
export default Card;

const styles = StyleSheet.create({
  card: {
    alignItems: "center",
    padding: 16,
    marginTop: 36,
    marginHorizontal: 24,
    backgroundColor: Colors.primary800,
    borderRadius: 8,
    //only android property for shadow
    elevation: 4,
    //only ios shadows
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.25,
  },
});
