import { AntDesign, FontAwesome, Ionicons } from "@expo/vector-icons";
import { useRouter, type Href } from "expo-router";
import type { ReactNode } from "react";
import { useRef, useState } from "react";
import {
  Image,
  KeyboardAvoidingView,
  Modal,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { images } from "@/constants/images";

type AuthMode = "sign-up" | "sign-in";

type AuthScreenProps = {
  mode: AuthMode;
};

const codeSlots = Array.from({ length: 6 });

export function AuthScreen({ mode }: AuthScreenProps) {
  const router = useRouter();
  const codeInputRef = useRef<TextInput>(null);
  const [email, setEmail] = useState("alex@gmail.com");
  const [password, setPassword] = useState("password");
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [verificationCode, setVerificationCode] = useState("");

  const isSignUp = mode === "sign-up";
  const title = isSignUp ? "Create your account" : "Welcome back";
  const subtitle = isSignUp
    ? "Start your language journey today ✨"
    : "Continue your language journey today ✨";
  const primaryLabel = isSignUp ? "Sign Up" : "Sign In";
  const footerText = isSignUp
    ? "Already have an account?"
    : "Need a new account?";
  const footerAction = isSignUp ? "Log in" : "Sign up";
  const footerHref = (isSignUp ? "/sign-in" : "/sign-up") as Href;

  function openVerificationModal() {
    setVerificationCode("");
    setIsModalVisible(true);
    setTimeout(() => codeInputRef.current?.focus(), 250);
  }

  function handleCodeChange(value: string) {
    const nextCode = value.replace(/\D/g, "").slice(0, 6);
    setVerificationCode(nextCode);

    if (nextCode.length === 6) {
      setTimeout(() => {
        setIsModalVisible(false);
        router.replace("/" as Href);
      }, 150);
    }
  }

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.content}
      >
        <Pressable
          accessibilityLabel="Go back"
          className="h-11 w-11 items-start justify-center"
          onPress={() => router.back()}
        >
          <Ionicons name="chevron-back" size={34} color="#020A2F" />
        </Pressable>

        <View className="mt-6">
          <Text className="font-poppins-bold text-[30px] leading-[38px] text-[#020A2F]">
            {title}
          </Text>
          <Text className="mt-4 font-poppins-medium text-[17px] leading-[26px] text-[#68718D]">
            {subtitle}
          </Text>
        </View>

        <View className="mt-7 items-center">
          <View className="relative h-[148px] w-full items-center overflow-visible">
            <Text className="absolute left-[92px] top-[42px] font-poppins-bold text-[25px] text-[#FF9700]">
              ✦
            </Text>
            <Text className="absolute right-[76px] top-[54px] font-poppins-bold text-[25px] text-[#62A9FF]">
              ✦
            </Text>
            <Text className="absolute right-[92px] top-[94px] font-poppins-bold text-[25px] text-[#FFD24C]">
              ✦
            </Text>
            <Image
              source={images.mascotAuth}
              className="absolute top-0 h-[190px] w-[190px]"
              resizeMode="contain"
            />
          </View>
        </View>

        <View className="gap-4">
          <View className="min-h-[86px] justify-center rounded-[18px] border border-[#E9ECF3] bg-white px-5">
            <Text className="font-poppins-medium text-[14px] leading-[20px] text-[#77809A]">
              Email
            </Text>
            <TextInput
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
              autoCapitalize="none"
              autoCorrect={false}
              textContentType="emailAddress"
              style={styles.input}
            />
          </View>

          {isSignUp ? (
            <View className="min-h-[86px] flex-row items-center rounded-[18px] border border-[#E9ECF3] bg-white px-5">
              <View className="flex-1">
                <Text className="font-poppins-medium text-[14px] leading-[20px] text-[#77809A]">
                  Password
                </Text>
                <TextInput
                  value={password}
                  onChangeText={setPassword}
                  secureTextEntry={!isPasswordVisible}
                  autoCapitalize="none"
                  autoCorrect={false}
                  textContentType="newPassword"
                  style={styles.input}
                />
              </View>

              <Pressable
                accessibilityLabel={
                  isPasswordVisible ? "Hide password" : "Show password"
                }
                className="h-11 w-11 items-end justify-center"
                onPress={() => setIsPasswordVisible((c) => !c)}
              >
                <Ionicons
                  name={isPasswordVisible ? "eye-off-outline" : "eye-outline"}
                  size={28}
                  color="#6B7490"
                />
              </Pressable>
            </View>
          ) : null}

          <Pressable
            className="mt-2 min-h-[62px] items-center justify-center rounded-[16px] bg-[#6347F5]"
            onPress={openVerificationModal}
          >
            <Text className="font-poppins-bold text-[20px] leading-[28px] text-white">
              {primaryLabel}
            </Text>
          </Pressable>
        </View>

        <View className="mt-8 flex-row items-center gap-5">
          <View className="h-px flex-1 bg-[#E8EBF2]" />
          <Text className="font-poppins-medium text-[15px] leading-[22px] text-[#747C96]">
            or continue with
          </Text>
          <View className="h-px flex-1 bg-[#E8EBF2]" />
        </View>

        <View className="mt-6 gap-3">
          <SocialButton
            label="Continue with Google"
            icon={<AntDesign name="google" size={22} color="#4285F4" />}
          />
          <SocialButton
            label="Continue with Facebook"
            icon={<FontAwesome name="facebook" size={24} color="#1877F2" />}
          />
          <SocialButton
            label="Continue with Apple"
            icon={<AntDesign name="apple" size={24} color="#020A2F" />}
          />
        </View>

        <View className="mt-auto flex-row items-center justify-center pt-12">
          <Text className="font-poppins-medium text-[16px] leading-[24px] text-[#747C96]">
            {footerText}{" "}
          </Text>
          <Pressable onPress={() => router.push(footerHref)}>
            <Text className="font-poppins-bold text-[16px] leading-[24px] text-[#563DFF]">
              {footerAction}
            </Text>
          </Pressable>
        </View>
      </ScrollView>

      <Modal
        visible={isModalVisible}
        transparent
        animationType="fade"
        onRequestClose={() => setIsModalVisible(false)}
      >
        <KeyboardAvoidingView
          behavior={process.env.EXPO_OS === "ios" ? "padding" : "height"}
          style={styles.modalKeyboardView}
        >
          <View className="flex-1 justify-end bg-black/40 px-5 pb-8">
            <View className="rounded-[24px] bg-white px-5 pb-6 pt-7">
              <Text className="text-center font-poppins-bold text-[24px] leading-[32px] text-[#020A2F]">
                Check your email
              </Text>
              <Text className="mt-3 text-center font-poppins-medium text-[15px] leading-[24px] text-[#68718D]">
                You have received an email. Enter the verification code to
                continue.
              </Text>

              <Pressable
                className="mt-7 flex-row justify-between gap-2"
                onPress={() => codeInputRef.current?.focus()}
              >
                {codeSlots.map((_, index) => {
                  const digit = verificationCode[index];

                  return (
                    <View
                      key={index}
                      className={`h-14 flex-1 items-center justify-center rounded-[14px] border ${
                        digit ? "border-[#6347F5]" : "border-[#E9ECF3]"
                      } bg-white`}
                    >
                      <Text className="font-poppins-bold text-[22px] leading-[28px] text-[#020A2F]">
                        {digit ?? ""}
                      </Text>
                    </View>
                  );
                })}
              </Pressable>

              <TextInput
                ref={codeInputRef}
                value={verificationCode}
                onChangeText={handleCodeChange}
                keyboardType="number-pad"
                textContentType="oneTimeCode"
                maxLength={6}
                autoFocus
                style={styles.hiddenCodeInput}
              />
            </View>
          </View>
        </KeyboardAvoidingView>
      </Modal>
    </SafeAreaView>
  );
}

/* ✅ FIXED SOCIAL BUTTON */
function SocialButton({ label, icon }: { label: string; icon: ReactNode }) {
  return (
    <Pressable className="min-h-[62px] flex-row items-center justify-center rounded-[16px] border border-[#EDF0F5] bg-white px-5">
      {/* Icon container */}
      <View className="absolute left-5 h-10 w-10 items-center justify-center">
        {icon}
      </View>

      {/* Label */}
      <Text className="font-poppins-semibold text-[17px] leading-[24px] text-[#020A2F] text-center">
        {label}
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  content: {
    flexGrow: 1,
    paddingHorizontal: 30,
    paddingBottom: 36,
    paddingTop: 24,
  },
  input: {
    color: "#020A2F",
    fontFamily: "Poppins-Medium",
    fontSize: 18,
    lineHeight: 26,
    marginTop: 8,
    padding: 0,
  },
  modalKeyboardView: {
    flex: 1,
  },
  hiddenCodeInput: {
    height: 1,
    opacity: 0,
    position: "absolute",
    width: 1,
  },
});
