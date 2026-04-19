import React, { useMemo } from "react";
import { FlatList, Pressable, Text, View } from "react-native";

import ScreenHeader from "../../components/Header/Header";
import SectionWrapper from "../../components/Section/SectionWrapper";
import { useAuth } from "../../context/AuthContext";
import useStyles from "./LoginScreen.styles";

type PlaceholderItem = { id: string; title: string };

export default function LoginScreen() {
  const styles = useStyles();
  const { setAuthenticated } = useAuth();
  const data = useMemo<PlaceholderItem[]>(
    () => [
      { id: "login", title: "Login (placeholder)" },
      { id: "social", title: "Social login (placeholder)" },
    ],
    []
  );

  return (
    <View style={styles.container}>
      <ScreenHeader title="Login" />

      <Pressable
        style={styles.testLoginButton}
        onPress={() => setAuthenticated(true)}
      >
        <Text style={styles.testLoginButtonLabel}>Test Login</Text>
      </Pressable>

      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContent}
        renderItem={({ item }) => (
          <SectionWrapper title={item.title}>
            <Text style={styles.placeholderText}>
              Auth UI will be implemented later.
            </Text>
          </SectionWrapper>
        )}
      />
    </View>
  );
}

