import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
const myImg = require('../../assets/1.png')
export default function AuthScreen({onAuthenticate}) {
  return (
    <View>
 <Image source={myImg} style={styles.image} />
 <Text style={styles.title}>EXPENIO</Text>
 <Text style={styles.description}>Going cashless has been never been this easier</Text>
   <TouchableOpacity
     onPress={onAuthenticate}
    style={styles.btn}
   >
    <Text style={styles.text}> Login</Text>
   </TouchableOpacity>
    </View>
  )
}
const styles = StyleSheet.create({
    btn: {
        width: 200,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        backgroundColor: '#0893FC',
        padding: 10,
        borderRadius: 5,
    },
    image: {
        width: 400,
        height: 461,
    },
    text: {
        color: '#fff',
        fontSize: 20,
        fontWeight: '500',
    },
    title: {
        fontSize: 50,
        fontWeight: '400',
        marginVertical: 30,
        textAlign: 'center',
    },
    description: {
        fontSize: 18,
        color: 'gray',
        textAlign: 'center',
        marginHorizontal: 20,
        marginBottom: 50,
    }
})