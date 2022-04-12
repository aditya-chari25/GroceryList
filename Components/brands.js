import React from "react";
import {
  Keyboard,
  Text,
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { useState } from "react/cjs/react.development";
import { Dimensions } from "react-native-web";
import Item from "./Item";
import Ionicons from '@expo/vector-icons/Ionicons';

var width = Dimensions.get("window").width; //full width

const Brands = () => {
  const [value, setValue] = useState("");
  const [tasks, setTasks] = useState([]);
  const handleAddTask = (value) => {
    if (value == null) return;
    setTasks([...tasks, value]);
    Keyboard.dismiss();
    setValue(null);
  };

  const onChangeText = (text) => {
    setValue(text);
  };
  return (
    <View
      style={{
        marginTop: 2,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text
        style={{
          color: "black",
          fontWeight: "bold",
          fontSize: 30,
        }}
      >
        Grocery
        <Text style={{ color: "red" }}> Items</Text>
      </Text>
      <View style={{flexDirection:"row"}}>
        <TextInput
          placeholder="Add Task..."
          onChangeText={onChangeText}
          placeholderTextColor="grey"
          style={styles.input}
        />
        <Ionicons name="add-circle-outline" size={40} color="black" 
        onPress={() => handleAddTask(value)}
        style={styles.iconplace}/>
      </View>
        <ScrollView style={styles.scrollView}>
        {
        tasks.map((task, index) => {
          return (
            <View key={index} style={styles.taskContainer}>
             <Item index={index + 1} task={task} />
            </View>
          );
        })
      }
        </ScrollView>
      
    </View>
  );
};

export default Brands;

const styles = StyleSheet.create({
  container: {
    paddingTop: 23,
    backgroundColor: '#1E1A3C',
  },
  input: {
    margin: 15,
    height: 40,
    borderColor: "black",
    borderWidth: 1,
    width: 300,
    paddingHorizontal: 10,
    fontSize:20
  },
  scrollView: {
    marginTop:10,
  },
  submitButton: {
    backgroundColor: "green",
    padding: 10,
    margin: 15,
    height: 40,
  },
  submitButtonText: {
    color: "white",
  },
  iconplace:{
      marginTop:5
  }
});
