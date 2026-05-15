import { MaterialIcons } from "@expo/vector-icons";
import { Link, Stack, type Href } from "expo-router";
import { Image, Pressable, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { images } from "@/constants/images";

export default function OnboardingScreen() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#FFFFFF" }}>
      <Stack.Screen options={{ headerShown: false }} />

      <View className="flex-1 px-6 pt-6 pb-6">
        {/* Header */}
        <View className="items-center mb-10">
          <View className="flex-row items-center gap-2">
            <Image
              source={images.mascotLogo}
              className="h-[52px] w-[52px]"
              resizeMode="contain"
            />
            <Text className="font-poppins-bold text-[34px] leading-[42px] text-[#020A2F]">
              VanoLingo
            </Text>
          </View>
        </View>

        {/* Title */}
        <View className="mb-10">
          <Text className="font-poppins-bold text-[34px] leading-[46px] text-[#020A2F]">
            Your AI language{"\n"}
            <Text className="text-[#553CFF]">teacher.</Text>
          </Text>

          <Text className="mt-3 font-poppins-medium text-[18px] leading-[28px] text-[#66708B]">
            Real conversations, personalized{"\n"}
            lessons anytime, anywhere.
          </Text>
        </View>

        {/* Center visuals */}
        <View className="flex-1 items-center justify-center relative">
          {/* Speech bubbles */}
          <View className="absolute left-0 top-2 rounded-2xl bg-[#EEF8FF] px-5 py-3">
            <Text className="font-poppins-medium text-[22px] text-[#03061C]">
              Hello!
            </Text>
            <View className="absolute bottom-[-12px] right-6 h-0 w-0 border-l-[16px] border-t-[14px] border-l-transparent border-t-[#EEF8FF]" />
          </View>

          <View className="absolute right-0 top-0 rounded-2xl bg-[#F7F5FF] px-5 py-3">
            <Text className="font-poppins-medium text-[22px] text-[#523DFF]">
              iHola!
            </Text>
            <View className="absolute bottom-[-12px] left-5 h-0 w-0 border-r-[16px] border-t-[14px] border-r-transparent border-t-[#F7F5FF]" />
          </View>

          <View className="absolute right-2 top-28 rounded-2xl bg-[#FFF4F0] px-5 py-3">
            <Text className="font-poppins-medium text-[22px] text-[#FF4D3F]">
              {"\u4F60\u597D!"}
            </Text>
            <View className="absolute bottom-[-12px] left-5 h-0 w-0 border-r-[16px] border-t-[14px] border-r-transparent border-t-[#FFF4F0]" />
          </View>

          {/* Mascot */}
          <Image
            source={images.mascotWelcome}
            className="h-[320px] w-[320px] mt-10"
            resizeMode="contain"
          />
        </View>
        {/* Button */}
        <Link href={"/sign-up" as Href} asChild>
          <Pressable className="mt-6 rounded-2xl bg-[#5A3BFF] shadow-md active:opacity-90">
            <View className="min-h-[64px] flex-row items-center justify-center px-6">
              <Text className="font-poppins-bold text-[20px] text-white">
                Get Started
              </Text>

              <MaterialIcons
                name="keyboard-arrow-right"
                size={38}
                color="#FFFFFF"
                style={{ position: "absolute", right: 20 }}
              />
            </View>
          </Pressable>
        </Link>
      </View>
    </SafeAreaView>
  );
}
