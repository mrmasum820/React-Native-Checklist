import { useEffect, useState } from 'react'
import { View, Text, SafeAreaView, StatusBar, StyleSheet, FlatList, ActivityIndicator } from 'react-native'

export default function Loading() {
    const [postList, setPostList] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    const fetchData = async (limit=10) => {
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=${limit}`)
        const data = await response.json()
        // console.log(data);
        setPostList(data)
        setIsLoading(false)
    }

    useEffect(()=> {
        fetchData()
    }, [])

    if(isLoading) {
        return (
            <SafeAreaView style={styles.loadingContainer}>
                <ActivityIndicator size="large" color="#0000ff" />
                    <Text>Loading...</Text>
            </SafeAreaView>
        )
    }

  return (
    <SafeAreaView style={styles.container}>
        <View style={styles.listContainer}>
            <FlatList
                data={postList}
                renderItem = {({item})=> {
                    return (
                        <View style={styles.card}>
                            <Text style={styles.titleText}>{item.title}</Text>
                            <Text style={styles.bodyText}>{item.body}</Text>
                        </View>
                    )
                }}
                ItemSeparatorComponent={() => <View style={{height: 16}} />}
                ListEmptyComponent={<Text>No post found</Text>}
                ListHeaderComponent={<Text style={styles.headerTitle}>Post Lists</Text>}
                ListFooterComponent={<Text style={styles.footerTitle}>End of post</Text>}
            />
        </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#f5f5f5",
        paddingTop: StatusBar.currentHeight
    },
    listContainer: {
        flex: 1,
        paddingHorizontal: 20
    },
    card: {
        backgroundColor: "#fff",
        padding: 16,
        borderRadius: 8,
        borderWidth: 1,
    },
    titleText: {
        fontSize: 28,
    },
    bodyText: {
        fontSize: 22,
        color: '#666'
    },
    headerTitle: {
        fontSize: 24,
        marginVertical: 16
    },
    footerTitle: {
        fontSize: 20,
        marginVertical: 16
    },
    loadingContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})