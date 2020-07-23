import { Dimensions, StyleSheet } from "react-native";

const vw = Dimensions.get("screen").width;

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
    backgroundColor: "#fa3476",
  },
  container: {
    flex: 1,
    backgroundColor: "#fa3476",
    alignItems: "center",
    justifyContent: "center",
  },
  menu_container: {
    flex: 1,
    backgroundColor: "#fa3476",
    alignItems: "center",
    justifyContent: "space-around",
  },
  sudokuBoard: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  head: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  title: {
    fontSize: 40,
    color: "#fff",
    fontWeight: "bold",
  },
  name: {
    fontSize: 30,
    color: "#fff",
    fontWeight: "bold",
  },
  bigBox: {
    width: vw,
    paddingHorizontal: 20,
    backgroundColor: "#fa3476",
    color: "#fff",
    textAlign: "center",
    textAlignVertical: "center",
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
  },
  rowBorder: {
    borderBottomWidth: 3,
  },
  coloumnBorder: {
    borderRightWidth: 3,
  },
  smallBox: {
    flex: 1,
    backgroundColor: "#eee",
    borderWidth: 1,
    borderColor: "#333",
    color: "#333",
    textAlign: "center",
    textAlignVertical: "center",
    fontWeight: "bold",
  },
  button: {
    margin: 20,
  },
  button_menu: {
    width: vw,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
  },
  capitalize: {
    textTransform: "capitalize",
  },
  white: {
    color: "#fff",
  },
  mt3: {
    marginTop: 20,
  },
  mb3: {
    marginBottom: 20,
  },
});

export default styles;
