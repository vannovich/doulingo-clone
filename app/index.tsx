import { Image, Text, View } from "react-native";

import { images } from "@/constants/images";

export default function Index() {
  return (
    <View className="app-screen flex-1 items-center justify-center px-6">
      <View className="app-card w-full items-center gap-6 p-6">
        <Image
          source={images.mascotLogo}
          className="h-28 w-28"
          resizeMode="contain"
        />
        <View className="items-center gap-2">
          <Text className="type-h1 text-center">Lingua</Text>
          <Text className="type-body-md text-center color-lingua-green">
            A playful AI language learning app built with Expo.
          </Text>
        </View>
      </View>
    </View>
  );
}
