import {
  Image,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Link } from "expo-router";

// Color palette from mockup
const colors = {
  primary: "#85CC17",
  background: "#F6F6F6",
  surface: "#FFFFFF",
  border: "#EFEFEF",
  textSecondary: "#A2A7A3",
};

const HomeScreen = () => {
  return (
    <SignIn />
  );
};

function SignIn() {
  const [focusedEmail, setFocusedEmail] = useState(false);
  const [focusedPass, setFocusedPass] = useState(false);
  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        style={styles.flex}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <View style={styles.content}>
          <View
            style={{ margin: 30, justifyContent: "center", alignItems: "center" }}
          >
            <Image
              source={require("@/assets/images/Logo.png")}
              style={{ height: 100, width: 100 }}
            />
          </View>

          <Text style={styles.title}>Sign In</Text>
          <Text style={styles.subtitle}>
            Let's experience the joy of telecare AI.
          </Text>

          <Text style={styles.email}>Email Address</Text>
          <TextInput
            placeholder="Email"
            placeholderTextColor={colors.textSecondary}
            style={[styles.input, focusedEmail && styles.inputFocused]}
            onFocus={() => setFocusedEmail(true)}
            onBlur={() => setFocusedEmail(false)}
          />

          <Text style={styles.password}>Password</Text>
          <TextInput
            placeholder="Password"
            secureTextEntry
            placeholderTextColor={colors.textSecondary}
            style={[styles.input, focusedPass && styles.inputFocused]}
            onFocus={() => setFocusedPass(true)}
            onBlur={() => setFocusedPass(false)}
          />

          <Pressable style={styles.button}>
            <Text style={styles.buttonText}>Sign In →</Text>
          </Pressable>

          <View style={styles.imageContainer}>
            <Image
              style={styles.image}
              source={require("@/assets/images/facebook-icon.png")}
              height={55}
              width={55}
            />

            <Image
              style={styles.image}
              source={require("@/assets/images/google-icon.png")}
              height={55}
              width={55}
            />

            <Image
              style={styles.image}
              source={require("@/assets/images/insta-icon.png")}
              height={55}
              width={55}
            />
          </View>

          <View style={styles.bottomContainer}>
            <Text style={styles.bottomText}>Don't have an account? </Text>
            <Link href="/SignUp">
              <Text style={[styles.bottomText, { color: colors.primary }]}>Sign Up.</Text>
            </Link>
          </View>

          <Link href="/ForgotPassword">
            <Text style={styles.forgotPassword}>Forgot Password?</Text>
          </Link>
          
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  imageContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 20,
    gap: 5,
  },
  flex: {
    flex: 1,
  },
  content: {
    flex: 1,
    padding: 24,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#333",
    textAlign: "center",
  },
  subtitle: {
    fontSize: 16,
    fontWeight: "300",
    marginBottom: 35,
    color: "gray",
    textAlign: "center",
  },
  email: {
    fontWeight: "600",
    textAlign: "left",
    marginLeft: 4,
    marginBottom: 5,
  },
  password: {
    fontWeight: "600",
    textAlign: "left",
    marginLeft: 4,
    marginBottom: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 20,
    padding: 14,
    fontSize: 16,
    marginBottom: 12,
    backgroundColor: colors.surface,
    color: "#333",
  },
  bottomContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
  },
  bottomText: {
    fontWeight: "500",
  },
  button: {
    backgroundColor: colors.primary,
    padding: 16,
    borderRadius: 20,
    alignItems: "center",
  },
  buttonText: {
    color: "#FFFFFF",
    fontWeight: "bold",
    fontSize: 16,
  },
  image: {
    borderWidth: 1.5,
    borderColor: "#c2c2c2",
    borderRadius: 15,
    margin: 5,
    padding: 10,
  },
  inputFocused: {
    borderColor: "#85CC17", // color when focused
    borderWidth: 2, // optional: change width on focus
  },
  forgotPassword: {
    textAlign: "center",
    color: colors.primary,
    fontWeight: "600",
    marginTop: 10,
    marginBottom: 10,
  },
});
