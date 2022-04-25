import * as React from "react"

import { Text, View, StyleSheet, Image, Appearance } from "react-native"

export default function TabOneScreen() {
    return (
        <View style={styles.container}>
            <Image
                source={{
                    uri: "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/elon.png",
                }}
                style={styles.image}
            />
            <View style={styles.rightContainer}>
                <View style={styles.row}>
                    <Text style={styles.name}>Elong Tusk</Text>
                    <Text style={styles.text}>11:11 AM</Text>
                </View>
                <Text style={styles.text}>Hola hola coca cola</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    text: {
        color: "white",
    },
    container: {
        flexDirection: "row",
        padding: 10,
        flexWrap: "wrap",
    },
    image: {
        height: 60,
        width: 60,
        borderRadius: 30,
        marginRight: 10,
    },
    name: {
        color: "white",
        fontWeight: "bold",
    },
    row: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
    rightContainer: {
        flex: 1,
    },
})
