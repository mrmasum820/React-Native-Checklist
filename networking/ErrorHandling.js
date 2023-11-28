import { useEffect, useState } from 'react'
import { View, Text, SafeAreaView, StatusBar, StyleSheet, FlatList, ActivityIndicator, TextInput, Button } from 'react-native'


export default function ErrorHandling() {
    const [postList, setPostList] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [refreshing, setRefreshing] = useState(false)
    const [postTitle, setPostTitle] = useState('')
    const [postBody, setPostBody] = useState('')
    const [isPosting, setIsPosting] = useState(false)
    const [error, setError] = useState('')

    // localhost is not working on android emulator

    const fetchData = async (limit=10) => {
        try{
            const response = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=${limit}`)
        const data = await response.json()
        // console.log(data);
        setPostList(data)
        setIsLoading(false)
        setError('')
        } catch(error){
            console.error('Error fetching data: ', error)
            setIsLoading(false)
            setError('Failed to fetch data')
        }
    }

    const handleRefresh = () => {
        setRefreshing(true)
        fetchData(20)
        setRefreshing(false)
    }

    const addPost = async () => {
        setIsPosting(true)
        try{
            const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
            body: JSON.stringify({
                title: postTitle,
                body: postBody
            })
        })
        const newPost = await response.json()
        console.log(newPost);
        setPostList([newPost, ...postList])
        setPostTitle('')
        setPostBody('')
        setIsPosting(false)
        setError('')
        } catch(error){
            console.error('Error adding post: ', error)
            setIsPosting(false)
            setIsLoading(false)
        }
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
        {error ? (
            <View style={styles.errorContainer}>
                <Text style={styles.errorText}>{error}</Text>
            </View>
        ) : (
            <>
        <View style={styles.inputContainer} >
            <TextInput style={styles.input} placeholder='post title' value={postTitle} onChangeText={setPostTitle} />
            <TextInput style={styles.input} placeholder='post body' value={postBody} onChangeText={setPostBody} />
            <Button title={isPosting ? 'Adding...' : 'Add post'} 
            onPress={addPost} 
            disabled={isPosting} />
        </View>
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
                refreshing={refreshing}
                onRefresh={(handleRefresh)}
            />
        </View>
        </>
        )
    }
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
    },
    inputContainer: {
        padding: 16,
        backgroundColor: '#fff',
        borderRadius: 8,
        borderWidth: 1,
        margin: 16
    },
    input: {
        heigth: 40,
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 8,
        padding: 8,
        marginBottom: 8
    },
    errorContainer: {
        backgroundColor: '#FFC0CB',
        padding: 16,
        borderRadius: 8,
        borderWidth: 1,
        margin: 16,
        alignItems: 'center'
    },
    errorText: {
        fontSize: 18,
        color: '#D8000C',
        textAlign: 'center'
    }
})