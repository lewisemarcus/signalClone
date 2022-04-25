import React from "react"
import { View, Text, StyleSheet, TextInput } from "react-native"

export default function MessageInput() {
    return (
        <View style={styles.root}>
            <View style={styles.inputContainer}>
                <TextInput />
            </View>
            <View style={styles.buttonContainer}>
                <Text style={styles.buttonText}>Send</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    root: {
        padding: 10,
        flexDirection: "row",
    },
    inputContainer: {
        marginRight: 10,
        backgroundColor: "lightgrey",
        flex: 1,
        color: "white",
        borderRadius: 25,
    },
    buttonContainer: {
        color: "white",
        width: 50,
        height: 50,
        backgroundColor: "#3777f0",
        borderRadius: 25,
        justifyContent: "center",
        alignItems: "center",
    },
    buttonText: {
        color: "white",
        fontSize: 12,
    },
})
