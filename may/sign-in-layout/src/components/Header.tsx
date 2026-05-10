import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

export default function Header() {
  return (
    <View style={styles.container}>
      <Image
        source={require("@/assets/logo/image.png")}
        style={{ width: 100, height: 100 }}
      />

      <Text style={styles.title}>Sign In</Text>
      <Text style={styles.subtitle}>
        Let's experience the joy Of telecare Al.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    marginTop: 60,
    marginBottom: 40,
  },
  logoPlaceholder: {
    width: 80,
    height: 80,
    backgroundColor: "#e2e8f0",
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 24,
  },
  placeholderText: {
    color: "#94a3b8",
    fontWeight: "bold",
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#0f172a",
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: "#64748b",
  },
  icon: {
    width: 48,
    height: 48,
    resizeMode: "contain",
  },
});
