import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { StatusBar } from "expo-status-bar";
import { useEffect } from "react";
import { Appearance } from "react-native";
// Appearance est utilisé pour que l'utilisateur choisit sa préférence entre le thème par défaut ou le thème sombre

import { Colors } from "@/constants/Colors";
// On appelles colors pour les couleurs qui vont apparaitre en fonction du mode choisi. Pour voir quelles sont les couleurs dispo ou pour éditer des nouvelles couleurs, ctrl + click sur Colors

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = Appearance.getColorScheme();
  const theme = colorScheme === "dark" ? Colors.dark : Colors.light;
  const [loaded] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    // Le composant Satck provenant de expo router permet donc de créer la
    // navigation dans l'application
    <Stack
      screenOptions={{
        headerStyle: { backgroundColor: theme.headerBackground },
        headerTintColor: theme.text,
        headerShadowVisible: false,
      }}
    >
      <Stack.Screen
        name="(tabs)"
        options={{ headerShown: false, title: "Home" }}
      />
      <Stack.Screen
        name="menu"
        options={{
          headerShown: true,
          title: "Menu",
          headerTitle: "Coffee Shop Menu",
        }}
      />
      <Stack.Screen
        name="contact"
        options={{
          headerShown: true,
          title: "Contact",
          headerTitle: "Contact Us",
        }}
      />

      {/* On donne le nom du dossier à Name, ainsi il reprendra les chemins vers tous les composant contenu dans ce dossier  */}
      <Stack.Screen name="+not-found" options={{ headerShown: false }} />
      {/* Ici stakc renvoie vers le fichier "+not-found" si la page et donc la route n'est pas trouvé */}
    </Stack>
    // <StatusBar style="auto" />
  );
}
