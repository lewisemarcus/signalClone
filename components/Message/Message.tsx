import React from "react"
import { View, Text, StyleSheet, FlatList } from "react-native"

export default function Message({ chat }) {
    const blue = "#3777f0"
    const grey = "lightgrey"
    const myId = "u1"

    // const isMe = () => {
    //     for (let each of chat) {
    //         if (each.user.id === "u1") return true
    //     }
    // }

    const isMe = chat.user.id === myId

    return (
        <View
            style={[
                styles.container,
                {
                    backgroundColor: isMe ? grey : blue,
                    marginLeft: isMe ? "auto" : 10,
                },
            ]}
        >
            <Text style={{ color: isMe ? "black" : "white" }}>
                {chat.content}
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#3777f0",
        padding: 10,
        margin: 10,
        borderRadius: 10,
        maxWidth: "65%",
    },
    text: {
        color: "white",
    },
})
