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

const colors = {
  primary: "#85CC17",
  background: "#F6F6F6",
  surface: "#FFFFFF",
  border: "#EFEFEF",
  textSecondary: "#A2A7A3",
};

export default function SignUp() {
  const [focusedEmail, setFocusedEmail] = useState(false);
  const [focusedPass, setFocusedPass] = useState(false);
  const [focusedName, setFocusedName] = useState(false);
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

          <Text style={styles.title}>Sign Up</Text>
          <Text style={styles.subtitle}>
            Sign up in 1 minute for free!
          </Text>

          <Text style={styles.label}>Full Name</Text>
          <TextInput
            placeholder="Full Name"
            placeholderTextColor={colors.textSecondary}
            style={[styles.input, focusedName && styles.inputFocused]}
            onFocus={() => setFocusedName(true)}
            onBlur={() => setFocusedName(false)}
          />

          <Text style={styles.label}>Email Address</Text>
          <TextInput
            placeholder="Email"
            placeholderTextColor={colors.textSecondary}
            style={[styles.input, focusedEmail && styles.inputFocused]}
            onFocus={() => setFocusedEmail(true)}
            onBlur={() => setFocusedEmail(false)}
          />

          <Text style={styles.label}>Password</Text>
          <TextInput
            placeholder="Password"
            secureTextEntry
            placeholderTextColor={colors.textSecondary}
            style={[styles.input, focusedPass && styles.inputFocused]}
            onFocus={() => setFocusedPass(true)}
            onBlur={() => setFocusedPass(false)}
          />

          <Pressable style={styles.button}>
            <Text style={styles.buttonText}>Sign Up →</Text>
          </Pressable>

          <View style={styles.bottomContainer}>
            <Text style={styles.bottomText}>Already have an account? </Text>
            <Link href="/">
              <Text style={[styles.bottomText, { color: colors.primary }]}>Sign In.</Text>
            </Link>
          </View>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
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
  label: {
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
    alignItems: "center",
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
  inputFocused: {
    borderColor: "#85CC17",
    borderWidth: 2,
  }
});