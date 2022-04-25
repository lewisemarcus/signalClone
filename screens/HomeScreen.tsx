import * as React from "react"

import {
    Text,
    View,
    StyleSheet,
    Image,
    Appearance,
    FlatList,
} from "react-native"

import ChatRoomItem from "../components/ChatRoomItem"
import chatRoomsData from "../assets/dummy-data/ChatRooms"

export default function TabOneScreen() {
    return (
        <View style={styles.page}>
            {/* {chatRoomsData.map((chatRoomData) => (
                <ChatRoomItem chatRoom={chatRoomData} />
            ))} */}
            {/* FlatList enables scrollability */}
            <FlatList
                data={chatRoomsData}
                // rename's the item from props to eachChatRoom
                renderItem={({ item: eachChatRoom }) => (
                    <ChatRoomItem chatRoom={eachChatRoom} />
                )}
                showsVerticalScrollIndicator={false}
                showsHorizontalScrollIndicator={false}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    page: {
        flex: 1,
    },
})
