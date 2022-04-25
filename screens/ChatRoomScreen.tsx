import React from "react"
import { Text, View, StyleSheet, FlatList } from "react-native"
import Message from "../components/Message"
import chatRoomData from "../assets/dummy-data/Chats"

export default function ChatRoomScreen() {
    return (
        <View style={styles.page}>
            <FlatList
                data={chatRoomData.messages}
                // rename's the item from props to eachChatRoom
                renderItem={({ item: eachChat }) => <Message chat={eachChat} />}
                showsVerticalScrollIndicator={false}
                showsHorizontalScrollIndicator={false}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    page: {
        backgroundColor: "black",
        flex: 1,
    },
})
