import React from 'react';
import { StyleSheet, View } from 'react-native';
import { TabItem } from '../../../components';

const BottomNavigator = ({ state, descriptors, navigation }) => {
  return (
    <View style={styles.container}>
      {state.routes.map((route, index) => {

        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        console.log(label);

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <TabItem 
            key={index}
            title={label} 
            active={isFocused}
            onPress={onPress} 
            onLongPress={onLongPress}
          />
        );
      })}
    </View>
  )
}

export default BottomNavigator;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 53,
    paddingVertical: 8,
    backgroundColor: 'white',
    borderTopWidth: 2,
    borderTopColor: 'rgba(220, 220, 220, 0.8)'
  }
})