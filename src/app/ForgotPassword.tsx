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

export default function ForgotPassword() {
  const [focusedEmail, setFocusedEmail] = useState(false);

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
              style={{ height: 80, width: 80 }}
            />
          </View>

          <Text style={styles.title}>Forgot Password</Text>
          <Text style={styles.subtitle}>
            Select how you want to reset your password
          </Text>

          <Text style={styles.label}>Email Address</Text>
          <TextInput
            placeholder="Enter your email"
            placeholderTextColor={colors.textSecondary}
            style={[styles.input, focusedEmail && styles.inputFocused]}
            onFocus={() => setFocusedEmail(true)}
            onBlur={() => setFocusedEmail(false)}
          />

          <Pressable style={styles.button}>
            <Text style={styles.buttonText}>Reset Password →</Text>
          </Pressable>

          <View style={styles.dividerContainer}>
            <View style={styles.dividerLine} />
            <Text style={styles.dividerText}>OR</Text>
            <View style={styles.dividerLine} />
          </View>

          <Text style={styles.optionsTitle}>Choose Verification Method</Text>

          <Pressable style={styles.optionCard}>
            <View style={styles.optionContent}>
              <Image
                source={require("@/assets/images/google-icon.png")}
                style={styles.optionIcon}
              />
              <View style={styles.optionTextContainer}>
                <Text style={styles.optionTitle}>2 Factor Authentication</Text>
                <Text style={styles.optionDescription}>
                  Reset using your backup codes
                </Text>
              </View>
            </View>
            <Text style={styles.arrow}>›</Text>
          </Pressable>

          <Pressable style={styles.optionCard}>
            <View style={styles.optionContent}>
              <Image
                source={require("@/assets/images/google-icon.png")}
                style={styles.optionIcon}
              />
              <View style={styles.optionTextContainer}>
                <Text style={styles.optionTitle}>Google Authenticator</Text>
                <Text style={styles.optionDescription}>
                  Verify using the Google Auth app
                </Text>
              </View>
            </View>
            <Text style={styles.arrow}>›</Text>
          </Pressable>

          <View style={styles.bottomContainer}>
            <Text style={styles.bottomText}>Remember your password? </Text>
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
    fontSize: 14,
    fontWeight: "300",
    marginBottom: 25,
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
    marginBottom: 16,
    backgroundColor: colors.surface,
    color: "#333",
  },
  inputFocused: {
    borderColor: "#85CC17",
    borderWidth: 2,
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
  dividerContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 20,
  },
  dividerLine: {
    flex: 1,
    height: 1,
    backgroundColor: colors.border,
  },
  dividerText: {
    paddingHorizontal: 10,
    color: colors.textSecondary,
    fontWeight: "600",
  },
  optionsTitle: {
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 12,
    color: "#333",
  },
  optionCard: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: colors.surface,
    borderRadius: 16,
    padding: 14,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: colors.border,
  },
  optionContent: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
  },
  optionIcon: {
    width: 40,
    height: 40,
    borderRadius: 10,
    marginRight: 12,
  },
  optionTextContainer: {
    flex: 1,
  },
  optionTitle: {
    fontSize: 15,
    fontWeight: "600",
    color: "#333",
    marginBottom: 2,
  },
  optionDescription: {
    fontSize: 12,
    color: colors.textSecondary,
  },
  arrow: {
    fontSize: 24,
    color: colors.textSecondary,
    marginLeft: 8,
  },
  bottomContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 20,
  },
  bottomText: {
    fontWeight: "500",
  },
});