import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 50,
    paddingHorizontal: 25,
    alignItems: "center",
    backgroundColor: "#FFF",
  },
  title: {
    fontFamily: "Poppins-Regular",
    fontSize: 30,
    color: "#7159C1",
    marginBottom: 70,
  },
  progressContainer: {
    marginBottom: 100,
  },
  timeContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
  timeEllapsed: {
    fontFamily: "Poppins-Light",
    fontSize: 70,
    color: "#000022",
  },
  timeUnity: {
    fontFamily: "Poppins-Regular",
    fontSize: 15,
    color: "#000022",
  },
});
