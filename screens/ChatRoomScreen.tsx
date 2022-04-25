import React from "react"
import { Text, View, StyleSheet, FlatList, SafeAreaView } from "react-native"
import Message from "../components/Message"
import chatRoomData from "../assets/dummy-data/Chats"
import MessageInput from "../components/MessageInput"

export default function ChatRoomScreen() {
    return (
        <SafeAreaView style={styles.page}>
            <FlatList
                data={chatRoomData.messages}
                // rename's the item from props to eachChatRoom
                renderItem={({ item: eachChat }) => <Message chat={eachChat} />}
                showsVerticalScrollIndicator={false}
                showsHorizontalScrollIndicator={false}
                inverted
                contentContainerStyle={{ flexDirection: "column-reverse" }}
            />
            <MessageInput />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    page: {
        backgroundColor: "black",
        flex: 1,
    },
})
