import React, { useState } from "react";
import { View, Text, Button } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { useDispatch } from "react-redux";
import { SetUser, IsPlaying } from "../../store/actions/UserAction";
import styles from "../../styles";

const Home = ({ navigation }) => {
  const [name, setName] = useState("");
  const dispatch = useDispatch();
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => {},
    });
  }, [navigation]);

  const setUser = (difficulty) => {
    if (name.length) {
      dispatch(SetUser(name));
      dispatch(IsPlaying(true));
      navigation.navigate("Game", { difficulty });
    }
  };

  return (
    <View>
      <Text
        style={[
          { alignSelf: "center", fontWeight: "bold", fontSize: 20 },
          styles.mt3,
        ]}
      >
        Input Your Name To Play
      </Text>
      <View
        style={[
          {
            margin: 10,
            borderColor: "#5645f7",
            borderWidth: 1,
          },
          styles.mt3,
        ]}
      >
        <TextInput
          value={name}
          onChangeText={(text) => {
            setName(text);
          }}
          maxLength={10}
          style={{
            backgroundColor: "#ccc",
            height: 50,
            textAlign: "center",
            color: "#333",
          }}
        />
      </View>
      <View style={[styles.button_menu, styles.mt3]}>
        <Button title="Easy" onPress={() => setUser("easy")} />
        <Button
          title="Medium"
          color="#34f576"
          onPress={() => setUser("medium")}
        />
        <Button title="Hard" color="#f56786" onPress={() => setUser("hard")} />
      </View>
    </View>
  );
};

export default Home;
