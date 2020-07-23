import React from "react";
import { View, Text, Button } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { SetUser, IsPlaying } from "../../store/actions/UserAction";
import styles from "../../styles";

const Result = ({ navigation }) => {
  const status = useSelector((state) => state.board.status);
  const name = useSelector((state) => state.user.name);
  const dispatch = useDispatch();
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => {},
    });
  }, [navigation]);
  return (
    <View style={[styles.menu_container]}>
      <Text style={[styles.title, styles.capitalize]}>{status}</Text>
      <View style={styles.button_menu}>
        <Button
          title="Play Again"
          onPress={() => {
            dispatch(SetUser(""));
            dispatch(IsPlaying(false));
            navigation.navigate("Home");
          }}
        />
        <Button
          title="Check Solution"
          onPress={() => {
            navigation.navigate("Solution");
          }}
        />
      </View>
    </View>
  );
};

export default Result;
