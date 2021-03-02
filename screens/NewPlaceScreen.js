import React, { useState } from 'react';
import { Button, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import { useDispatch } from 'react-redux';
import * as placesActions from '../store/places-actions';

import * as Colors from '../constants/Colors';
import ImgPicker from '../components/ImagePicker';

const NewPlaceScreen = props => {

    const [title, setTitle] = useState('');
    const [image, setImage] = useState()
    const dispatch = useDispatch()

    const titleChangeHandler = text => {
        setTitle(text);
    }
    const savePlaceHandler = () => {
        dispatch(placesActions.addPlace(title, image))
        props.navigation.goBack();
    }

    const imageTakenhandler = imagePath => {
        setImage(imagePath)
    }

    return (
        <ScrollView>
            <View style={styles.form}>
                <Text style={styles.label}>
                    Title
                </Text>
                <ImgPicker
                    onImageTaken={imageTakenhandler}
                />
                <TextInput 
                    onChangeText={titleChangeHandler}
                    value={title}
                    style={styles.input}/>
                <Button
                    title='Save Place'
                    color={Colors.primary}
                    onPress={savePlaceHandler}
                />
            </View>
        </ScrollView>
    )
}

NewPlaceScreen.navigationOptions = navData => {
    return {
        headerTitle: 'Добавить место',
    }
}

const styles = StyleSheet.create({
    form: {
        margin: 20
    },
    label: {
        fontSize: 18,
        marginBottom: 15
    },
    input: {
        borderBottomColor: '#ccc',
        borderBottomWidth: 1,
        marginBottom: 15,
        paddingVertical: 4,
        paddingHorizontal: 2
    }
})

export default NewPlaceScreen;