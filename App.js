import { Dimensions, ScrollView, StyleSheet, Text, View } from "react-native";
import * as Location from "expo-location";
import { useEffect, useState } from "react";

//핸드폰의 가로사이즈
const { width: SCREEN_WIDTH } = Dimensions.get("window");

export default function App() {
  const [location, setLocation] = useState();
  const [ok, setOk] = useState(true);
  const ask = async () => {
    const { granted } = await Location.requestForegroundPermissionsAsync();
    if (!granted) {
      setOk(false);
    }
  };
  useEffect(() => {
    ask();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.city}>
        <Text style={styles.cityName}>Seoul</Text>
      </View>
      {/* 스크롤뷰를 가로로 해서 수평으로 스크롤하고 스크롤바를 삭제함. */}
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.weather}
      >
        <View style={styles.day}>
          <Text style={styles.temp}>27</Text>
          <Text style={styles.description}>Sunny</Text>
        </View>
        <View style={styles.day}>
          <Text style={styles.temp}>27</Text>
          <Text style={styles.description}>Sunny</Text>
        </View>
        <View style={styles.day}>
          <Text style={styles.temp}>27</Text>
          <Text style={styles.description}>Sunny</Text>
        </View>
        <View style={styles.day}>
          <Text style={styles.temp}>27</Text>
          <Text style={styles.description}>Sunny</Text>
        </View>
      </ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "tomato",
  },
  city: {
    flex: 1.2,
    justifyContent: "center",
    alignItems: "center",
  },
  cityName: {
    fontSize: 58,
    fontWeight: "500",
  },
  weather: {},
  day: {
    width: SCREEN_WIDTH,
    alignItems: "center",
  },
  temp: {
    marginTop: 50,
    fontWeight: "600",
    fontSize: 178,
  },
  description: {
    marginTop: -30,
    fontSize: 60,
  },
});
