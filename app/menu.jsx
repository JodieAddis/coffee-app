import {
  Appearance,
  Platform,
  StyleSheet,
  View,
  Text,
  Image,
  FlatList,
  ScrollView,
  SafeAreaView,
} from "react-native";

import { Colors } from "@/constants/Colors";
import { MENU_ITEMS } from "@/constants/MenuItems";
import MENU_IMAGES from "@/constants/MenuImages";

export default function MenuScreen() {
  const colorScheme = Appearance.getColorScheme();
  const theme = colorScheme === "dark" ? Colors.dark : Colors.light;

  const styles = createStyles(theme, colorScheme);

  // On crée un un container car le résultat sera différent en fonction du modèle du mobile utilisé
  // On applique l'élément plateform car la "décision" sera prise en fonction de celle-ci. On précise OS pour iOS et Android
  //   Regarder pour l'utilisation de ScrollView et  SafeAreaView
  const Container = Platform.OS === "web" ? ScrollView : SafeAreaView;
  const separatorComp = <View style={styles.separator} />;

  const headerComp = <Text>Top of list</Text>;
  const footerComp = <Text style={{ color: theme.text }}>End of Menu</Text>;

  return (
    <Container>
      <FlatList
        data={MENU_ITEMS}
        keyExtractor={(item) => item.id.toString()}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.contentContainer}
        ItemSeparatorComponent={separatorComp}
        // ListHeaderComponent={headerComp}
        ListFooterComponent={footerComp}
        // ListHeaderComponentStyle={styles.headerList}
        ListFooterComponentStyle={styles.footerList}
        // Ce props est au cas ou il n'y aurait pas de données
        ListEmptyComponent={<Text>No items</Text>}
        renderItem={({ item }) => (
          <View style={styles.row}>
            <View style={styles.menuTextRow}>
              <Text style={[styles.menuItemTitle, styles.menuItemText]}>
                {item.title}
              </Text>
              <Text style={styles.menuItemText}>{item.description}</Text>
            </View>
            <Image source={MENU_IMAGES[item.id - 1]} style={styles.menuImage} />
            {/* On doit écrire ceci car la position en 1 est en fait 0 comme nous sommes dans un array */}
          </View>
        )}
      />
    </Container>
  );
}

function createStyles(theme, colorScheme) {
  return StyleSheet.create({
    contentContainer: {
      paddingTop: 10,
      paddingBottom: 20,
      paddingHorizontal: 12,
      backgroundColor: theme.background,
    },
    separator: {
      height: 1,
      backgroundColor: colorScheme === "dark" ? "papayawhip" : "#000",
      width: "50%",
      maxWidth: 300,
      marginHorizontal: "auto",
      marginBottom: 10,
    },
    footerList: {
      marginHorizontal: "auto",
    },
    headerList: {
      marginHorizontal: "auto",
      color: "#000000",
    },
    row: {
      flexDirection: "row",
      width: "100%",
      maxWidth: 600,
      height: 100,
      marginBottom: 10,
      borderStyle: "solid",
      borderColor: colorScheme === " dark" ? "papayawhip" : "#fff",
      borderWidth: 1,
      borderRadius: 20,
      overflow: "hidden",
      marginHorizontal: "auto",
    },
    menuTextRow: {
      width: "65%",
      paddingTop: 10,
      paddingLeft: 10,
      paddingRight: 5,
      flexGrow: 1,
    },
    menuItemTitle: {
      fontSize: 18,
      textDecorationLine: "underline",
    },
    menuItemText: {
      color: theme.text,
    },
    menuImage: {
      width: 100,
      height: 100,
    },
  });
}
