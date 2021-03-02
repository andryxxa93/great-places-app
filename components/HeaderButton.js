import React from 'react';
import {HeaderButton} from 'react-navigation-header-buttons';
import { Ionicons } from '@expo/vector-icons';

import * as Colors from '../constants/Colors';
import { Platform } from 'react-native';

const CustomHeaderButtom = props => {
    return <HeaderButton {...props}
            IconComponent={Ionicons}
            iconSize={23}
            color={Platform.OS === 'ios' ? Colors.primary : 'white'}
        />
}

export default CustomHeaderButtom;