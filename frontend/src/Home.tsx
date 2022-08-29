import React from "react";
import { useTranslation } from "react-i18next";
import { Button, StyleSheet, Text, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { LOCALIZATION } from "./const";
import { selectMobileOpen, toggleMobileOpen } from "./state";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "1em",
    color: "pink",
  },
});

export function Home() {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const mobileOpen = useSelector(selectMobileOpen);
  return (
    <View style={styles.container}>
      <Text>{t(LOCALIZATION.appTitle)}</Text>
      <Text>Open up App.tsx to start working on your app! MobileOpen: {mobileOpen ? "True" : "False"}</Text>
      <Button onPress={() => dispatch(toggleMobileOpen())} title="Click Here" />
    </View>
  );
}