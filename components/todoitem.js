import React from 'react'
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity
} from "react-native";
import { MaterialIcons } from '@expo/vector-icons';

export default function TodoItem({ item, pressHandler }) {
    return (
        <TouchableOpacity onPress={() => pressHandler(item.key)}>
            <View style={styles.item}>
                <MaterialIcons name="delete" size={24} color="black" />
                <Text style={styles.textMargin}>
                    {item.text}
                </Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    item: {
        padding: 16,
        marginTop: 16,
        borderWidth: 1,
        borderRadius: 10,
        flexDirection: 'row', 
        borderColor: 'coral',
        backgroundColor: 'coral'
    },
    textMargin: {
        marginLeft: 20,
    }
})