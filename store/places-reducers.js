import * as firebase from 'firebase';
import { ADD_PLACE } from "./places-actions"
import Place from '../models/place';

const initialState = {
    places: []
}

export default (state = initialState, action) => {
    switch (action.type) {
        case ADD_PLACE:
            const newPlace = new Place(new Date().toString(), action.placeData.title, action.placeData.image)
            const uploadImage = async(uri) => {
                const response = await fetch(uri);
                const blob = await response.blob();
                const ref = firebase.storage().ref().child(newPlace.id);
                return ref.put(blob);
            }
            uploadImage(action.placeData.image)
            return {
                places: state.places.concat(newPlace)
            }
        default:
            return state
    }
}