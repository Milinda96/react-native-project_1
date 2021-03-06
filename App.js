// import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  View,
  FlatList,
  Platform,
  StatusBar,
  Alert,
  TouchableWithoutFeedback,
  Keyboard
} from "react-native";
import Header from './components/header';
import TodoItem from './components/todoitem';
import AddTodo from './components/addtodo';

export default function App() {
  const [todos, setTodos] = useState([
    { text: 'Coding now', key: '1' },
    { text: 'Coding now', key: '2' },
    { text: 'Coding now', key: '3' },
  ]);

  const pressHandler = (key) => {
    setTodos((prevTodos) => {
      return prevTodos.filter(todo => todo.key != key);
    })
  }

  const submitHandler = (text) => {

    if (text.length > 3) {
      setTodos((prevTodos) => {
        return [
          { text: text, key: Math.random().toString() },
          ...prevTodos
        ]
      });
    } else {
      Alert.alert('oops!', 'Todo must be over 3 chars long', [
        { text: 'Understood', onPress: () => console.log('Alert Closed') }
      ]);
    }

  }
  return (
    <TouchableWithoutFeedback onPress={() => {
      Keyboard.dismiss();
      console.log('Dismissed keyboard');
    }}>
      <View style={styles.container}>
        {/* header */}
        <Header />
        <View style={styles.content}>
          <AddTodo submitHandler={submitHandler} />
          <View style={styles.list}>
            <FlatList
              data={todos}
              renderItem={({ item }) => (
                <TodoItem item={item} pressHandler={pressHandler} />
              )}
            />
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  content: {
    padding: 20,
  },
  list: {
    marginTop: 20
  }
});
