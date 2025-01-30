// Arrivée ici à 24 min : https://www.youtube.com/watch?v=czhLCGuu_AU&ab_channel=DaveGray

import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Pressable,
} from "react-native";
import icedCoffeeImage from "@/assets/images/iced-coffee.png";
import React from "react";
import { Link } from "expo-router";

const app = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={icedCoffeeImage}
        resizeMode="cover"
        style={styles.image}
      >
        <Text style={styles.title}>Coffee Shop</Text>
        <Link href="/menu" style={{ marginHorizontal: "auto" }} asChild>
          <Pressable style={styles.button}>
            <Text style={styles.buttonText}>Our Menu</Text>
          </Pressable>
        </Link>
        <Link href="/contact" style={{ marginHorizontal: "auto" }} asChild>
          <Pressable style={styles.button}>
            <Text style={styles.buttonText}>Contact Us</Text>
          </Pressable>
        </Link>
      </ImageBackground>
    </View>
  );
};

export default app;

//Création d'un style css qui sera ensuite appelée et passer en props dans les composants pour qu'ils soient appliqués
const styles = StyleSheet.create({
  container: {
    flex: 1, //Permet que le container soit de la taille de l'écran
    flexDirection: "column",
  },
  title: {
    color: "white",
    fontSize: 42,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
    marginBottom: 120,
  },
  link: {
    color: "white",
    fontSize: 42,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
    textDecorationLine: "underline",
    padding: 4,
  },
  button: {
    height: 60,
    width: 150,
    borderRadius: 20,
    backgroundColor: "rgba(0,0,0,0.75)",
    padding: 6,
    justifyContent: "center",
    marginBottom: 50,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
    padding: 4,
  },
  image: {
    width: "100%",
    heigth: "100%",
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
});
