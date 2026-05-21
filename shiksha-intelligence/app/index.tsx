import { useEffect, useState } from "react";
import { Redirect } from "expo-router";
import * as SecureStore from "expo-secure-store";
import { View, ActivityIndicator } from "react-native";

export default function Index() {
  const [hasToken, setHasToken] = useState<boolean | null>(null);

  useEffect(() => {
    async function checkSession() {
      try {
        const token = await SecureStore.getItemAsync("accessToken");
        setHasToken(!!token);
      } catch {
        setHasToken(false);
      }
    }
    checkSession();
  }, []);

  if (hasToken === null) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "#FFFFFF" }}>
        <ActivityIndicator size="large" color="#0F172A" />
      </View>
    );
  }

  return hasToken ? <Redirect href="/home" /> : <Redirect href="/(auth)/welcome" />;
}