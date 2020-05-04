import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FFF",
    paddingHorizontal: 25,
    paddingVertical: 25,
  },
  text: {
    fontFamily: "Poppins-Light",
    fontSize: 30,
    textAlign: "center",
    color: "#41414B",
    marginTop: 5,
    marginBottom: 75,
  },
  button: {
    backgroundColor: "#7159C1",
    paddingHorizontal: 25,
    paddingVertical: 15,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 90,
    position: "absolute",
    bottom: 25,
    right: 25,
  },
});
