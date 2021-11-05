import { StatusBar as StatusBarExpo } from "expo-status-bar";
import React from "react";
import {
  StyleSheet,
  SafeAreaView,
  Platform,
  StatusBar,
  View,
  Text,
  FlatList,
} from "react-native";
import { Card } from "./components";

const data: any[] = [];

for (let i = 1; i < 100; i++) {
  data.push({
    id: i,
    name: `name ${i}`,
    gen: "1 gen",
    types: ["water"],
    img: `https://pokego.ru/img/pokemon/${i}.png`,
  });
}

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Filters</Text>
      <FlatList
        style={styles.cardWrapper}
        data={data}
        keyExtractor={(item) => item.id}
        numColumns={4}
        renderItem={({ item }) => (
          <Card
            key={item.id}
            pokedex={item.id}
            gen={item.gen}
            types={item.types}
            name={item.name}
            img={item.img}
            onPress={() => alert(item.id)}
          />
        )}
      />
      <StatusBarExpo style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  cardWrapper: {
    paddingLeft: 10,
    paddingRight: 10,
  },
});
