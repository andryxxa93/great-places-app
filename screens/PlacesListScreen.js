import React from 'react';
import { FlatList, Platform, StyleSheet, Text, View } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { useSelector } from 'react-redux';

import HeaderButton from '../components/HeaderButton';
import PlaceItem from '../components/Item';

const PlacesListScreen = props => {
    const places = useSelector(state => state.places.places);
    
    return (
        <View>
            <FlatList
                data={places}
                keyExtractor={item => item.id}
                renderItem={({item}) => <PlaceItem 
                                            onSelect={() => {props.navigation.navigate('PlaceDetail', {placeTitle: item.title, placeID: item.id})}}
                                            image={item.image}
                                            title={item.title}
                                            addres={null}
                                    />
                            }
            />
        </View>
    )
}

PlacesListScreen.navigationOptions = navData => {
    return {
        headerTitle: 'Все места',
        headerRight: () => <HeaderButtons HeaderButtonComponent={HeaderButton}>
            <Item 
                title='Добавить место'
                onPress={() => navData.navigation.navigate('NewPlace')}
                iconName={Platform.OS === 'ios' ? 'ios-add' : 'md-add'}
            />
        </HeaderButtons>

    }
}

const styles = StyleSheet.create({

})

export default PlacesListScreen;