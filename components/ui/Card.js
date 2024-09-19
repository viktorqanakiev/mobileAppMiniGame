import { View, StyleSheet, Dimensions } from "react-native";
import Colors from "../../constants/colors";

function Card({ children }) {
  return <View style={styles.card}>{children}</View>;
}
export default Card;

const devicesWidth = Dimensions.get('window');



const styles = StyleSheet.create({
  card: {
    alignItems: "center",
    padding: 16,
    marginTop: devicesWidth < 380 ? 18 : 36,
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
