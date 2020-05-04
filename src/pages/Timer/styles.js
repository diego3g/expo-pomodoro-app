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
    marginBottom: 25,
  },
  timeContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
  timerSettingsContainer: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    marginBottom: 50,
  },
  timerSettingsOption: {
    alignItems: "center",
    justifyContent: "center",
  },
  timeText: {
    fontFamily: "Poppins-Regular",
    fontSize: 20,
    textAlign: "center",
    padding: 5,
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
