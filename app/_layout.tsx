import "../global.css";

import { useEffect } from "react";

import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { StatusBar } from "expo-status-bar";

import { colors, fontFamily } from "@/theme";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [fontsLoaded] = useFonts({
    [fontFamily.regular]: require("../assets/fonts/Poppins-Regular.ttf"),
    [fontFamily.medium]: require("../assets/fonts/Poppins-Medium.ttf"),
    [fontFamily.semiBold]: require("../assets/fonts/Poppins-SemiBold.ttf"),
    [fontFamily.bold]: require("../assets/fonts/Poppins-Bold.ttf"),
  });

  useEffect(() => {
    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <>
      <StatusBar style="dark" backgroundColor={colors.neutral.background} />
      <Stack
        screenOptions={{
          contentStyle: { backgroundColor: colors.neutral.background },
          headerShadowVisible: false,
          headerStyle: { backgroundColor: colors.neutral.background },
          headerTitleStyle: {
            color: colors.neutral.textPrimary,
            fontFamily: fontFamily.semiBold,
          },
        }}
      />
    </>
  );
}
