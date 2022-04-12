import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, } from "react-native";

export default Item = (props) => {
    return (
        <View style={styles.tasklist}>
            <View style={styles.taskContainer}>
                <Text style={styles.task} >{props.task}</Text>
            </View>
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        marginHorizontal: 20,
    },
    tasklist:{
        marginTop:-15
    },
    indexContainer: {
        backgroundColor: '#3E3364',
        borderRadius: 12,
        marginRight: 10,
        alignItems: 'center',
        justifyContent: 'center',
        width: 50,
        height: 50,
    },
    index: {
        color: '#fff',
        fontSize: 20,
    },
    taskContainer: {
        backgroundColor: 'white',
        borderRadius: 12,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        flex: 1,
        paddingHorizontal: 10,
        paddingVertical:5,
        minHeight: 50,
        marginTop:20,
        borderColor:'black',
        borderTopWidth: 2,
        borderBottomWidth:2,
    },
    task: {
        color: 'black',
        width: 300,
        fontSize: 20,
        fontWeight:"bold",
    },
    delete: {
        marginLeft: 10,
    },
});