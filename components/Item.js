import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import * as Colors from '../constants/Colors';

const PlaceItem = props => {
   return (
       <TouchableOpacity style={styles.placeItem} onPress={props.onSelect}>
           <Image style={styles.image} source={{uri: props.image}}/>
           <View style={styles.informContainer}>
               <Text style={styles.title}>{props.title}</Text>
               <Text style={styles.addres}>{props.addres}</Text>
           </View>
       </TouchableOpacity>
   )
}

const styles = StyleSheet.create({
    placeItem: {
        borderBottomColor: '#ccc',
        borderBottomWidth: 1,
        paddingVertical: 15,
        paddingHorizontal: 30,
        flexDirection: 'row',
        alignItems: 'center'
    },
    image: {
        width: 70,
        height: 70,
        borderRadius: 35,
        backgroundColor: 'blue',
        borderColor: Colors.primary,
        borderWidth: 1
    },
    informContainer: {
        marginLeft: 25,
        width: 250,
        justifyContent: 'center',
        alignItems: 'flex-start'
    },
    title: {
        color: 'black',
        fontSize: 18,
        marginBottom: 5
    },
    addres: {
        color: '#666',
        fontSize: 16
    }
})

export default PlaceItem;