import React, { useState, useCallback } from "react";
import { NavigationContainer } from "@react-navigation/native";
import Routes from "./src/routes";
import { AppLoading } from "expo";

import * as Font from "expo-font";

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  const onFinish = useCallback(() => {
    setIsLoading(false);
  }, [setIsLoading]);

  const loadCustomFonts = useCallback(async () => {
    setIsLoading(true);

    return await Font.loadAsync({
      "Poppins-Light": require("./assets/fonts/Poppins-Light.ttf"),
      "Poppins-Regular": require("./assets/fonts/Poppins-Regular.ttf"),
      "Poppins-Bold": require("./assets/fonts/Poppins-Bold.ttf"),
    });
  }, [setIsLoading]);

  return (
    <>
      {isLoading ? (
        <AppLoading startAsync={loadCustomFonts} onFinish={onFinish} />
      ) : (
        <NavigationContainer>
          <Routes />
        </NavigationContainer>
      )}
    </>
  );
}
