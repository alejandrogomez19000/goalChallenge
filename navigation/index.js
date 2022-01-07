import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import TodoList from '../views/TodoList';
import Home from '../views/Home';

import { routeNames } from './Routes';

const Stack = createNativeStackNavigator();


const Navigation = () =>
    <NavigationContainer>
        <Stack.Navigator screenOptions={{
            headerShown: false
        }}>
                        <Stack.Screen name={routeNames.HOME} component={Home} />

            <Stack.Screen name={routeNames.TODO_LIST} component={TodoList} />

        </Stack.Navigator>
    </NavigationContainer>


export default Navigation;