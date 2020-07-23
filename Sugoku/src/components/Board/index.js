import React from "react";
import { View, TextInput } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { SetSubmitBoard } from "../../store/actions/BoardAction";
import styles from "../../styles";

export default function Board() {
  const board = useSelector((state) => state.board.board);
  const dispatch = useDispatch();
  return (
    <View
      style={[styles.container, styles.sudokuBoard, styles.mt3, styles.mb3]}
    >
      {board.map((col, i) => {
        return (
          <View key={i} style={styles.bigBox}>
            {col.map((row, j) => {
              return (
                <TextInput
                  key={j}
                  style={[
                    styles.smallBox,
                    (i + 1) % 3 === 0 && i !== 8 ? styles.rowBorder : {},
                    (j + 1) % 3 === 0 && j !== 8 ? styles.coloumnBorder : {},
                  ]}
                  value={row > 0 && row < 10 ? String(row) : null}
                  editable={row > 0 ? false : true}
                  maxLength={1}
                  keyboardType="numeric"
                  onChangeText={(text) => {
                    const newNum = Number(text);
                    if (!isNaN(newNum) && text.length === 1) {
                      dispatch(SetSubmitBoard(i, j, newNum));
                    }
                  }}
                />
              );
            })}
          </View>
        );
      })}
    </View>
  );
}
