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

for (let i = 1; i < 100; i += 4) {
  data.push([
    {
      id: i,
      name: `name ${i}`,
      gen: "1 gen",
      types: ["water"],
      img: `https://pokego.ru/img/pokemon/${i}.png`,
    },
    {
      id: i + 1,
      name: `name ${i + 1}`,
      gen: "1 gen",
      types: ["water"],
      img: `https://pokego.ru/img/pokemon/${i + 1}.png`,
    },
    {
      id: i + 2,
      name: `name ${i + 2}`,
      gen: "1 gen",
      types: ["water"],
      img: `https://pokego.ru/img/pokemon/${i + 2}.png`,
    },
    {
      id: i + 3,
      name: `name ${i + 3}`,
      gen: "1 gen",
      types: ["water"],
      img: `https://pokego.ru/img/pokemon/${i + 3}.png`,
    },
  ]);
}

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Filters</Text>
      <FlatList
        data={data}
        keyExtractor={(item, index) => item[0].id.toString()}
        renderItem={({ item }) => (
          <View style={styles.cardWrapper} key={item[0].id}>
            {item.map((pokemon: any) => (
              <Card
                key={pokemon.id}
                pokedex={pokemon.id}
                gen={pokemon.gen}
                types={pokemon.types}
                name={pokemon.name}
                img={pokemon.img}
                onPress={() => alert(pokemon.id)}
              />
            ))}
          </View>
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
    flexDirection: "row",
    justifyContent: "space-between",
    flexWrap: "wrap",
  },
});
