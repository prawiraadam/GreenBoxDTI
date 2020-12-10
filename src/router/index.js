import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {BottomNavigator} from '../components';
import {
  GetStarted,
  SignIn,
  SignUp,
  Splash,
  Discover,
  Chart,
  Checkout,
  Profile,
  DescriptionItem,
  UpdateProfile,
  HomeFarmer,
  OrderFarmer,
  ProfileFarmer,
  PaymentMethod,
  EditAddItem,
  DetailOrder
} from '../pages';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator tabBar={(props) => <BottomNavigator {...props} />}>
      <Tab.Screen name="Discover" component={Discover} />
      <Tab.Screen name="Chart" component={Chart} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
};

const BottomTabNavigatorFarmer = () => {
  return (
    <Tab.Navigator tabBar={(props) => <BottomNavigator {...props} />}>
      <Tab.Screen name="HomeFarmer" component={HomeFarmer} />
      <Tab.Screen name="OrderFarmer" component={OrderFarmer} />
      <Tab.Screen name="ProfileFarmer" component={ProfileFarmer} />
    </Tab.Navigator>
  );
};

const Router = () => {
  return (
    <Stack.Navigator initialRouteName="MainPageFarmer">
      <Stack.Screen
        name="Splash"
        component={Splash}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="GetStarted"
        component={GetStarted}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="SignUp"
        component={SignUp}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="SignIn"
        component={SignIn}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="MainPage"
        component={BottomTabNavigator}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="MainPageFarmer"
        component={BottomTabNavigatorFarmer}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="DescriptionItem"
        component={DescriptionItem}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="UpdateProfile"
        component={UpdateProfile}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="PaymentMethod"
        component={PaymentMethod}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen 
        name="Checkout"
        component={Checkout}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen 
        name="EditAddItem"
        component={EditAddItem}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen 
        name="DetailOrder"
        component={DetailOrder}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

export default Router;
