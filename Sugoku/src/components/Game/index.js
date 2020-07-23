import React, { useEffect } from "react";
import { Text, View, Button, ScrollView } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import {
  ValidateBoard,
  SetBoard,
  SetSubmitBoard,
} from "../../store/actions/BoardAction";
import styles from "../../styles";
import Board from "../Board";

const Game = (props) => {
  const { navigation, route } = props;
  const { difficulty } = route.params;
  const dispatch = useDispatch();
  const submitSdk = useSelector((state) => state.board.submitBoard);
  const userName = useSelector((state) => state.user.user);
  const isPlaying = useSelector((state) => state.user.playing);

  useEffect(() => {
    dispatch(SetBoard(difficulty));
    dispatch(SetSubmitBoard());
  }, [difficulty, userName, isPlaying]);

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => {},
    });
  }, [navigation, userName]);

  console.log(submitSdk);
  return (
    <ScrollView style={styles.scrollView}>
      <View style={[styles.head, styles.mt3]}>
        <Text style={styles.title}>Sugoku</Text>
        <Text style={styles.name}>{userName}</Text>
      </View>
      <Board />
      <View style={styles.button}>
        <Button
          title="Validate"
          onPress={() => {
            const data = { board: submitSdk };
            dispatch(ValidateBoard(data, navigation.navigate));
          }}
        />
      </View>
    </ScrollView>
  );
};

export default Game;
