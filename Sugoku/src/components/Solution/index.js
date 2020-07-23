import React, { useEffect } from "react";
import { View, Text } from "react-native";
import Board from "../Board";
import { SolutionBoard } from "../../store/actions/BoardAction";
import { useDispatch, useSelector } from "react-redux";
import styles from "../../styles";

const Solution = () => {
  const board = useSelector((state) => state.board.board);
  const dispatch = useDispatch();
  useEffect(() => {
    const data = { board };
    dispatch(SolutionBoard(data));
  });
  return (
    <View style={styles.container}>
      <Text style={[styles.title, styles.mt3]}>Solution</Text>
      <Board />
    </View>
  );
};

export default Solution;
