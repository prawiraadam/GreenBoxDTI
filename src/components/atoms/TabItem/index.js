import React from 'react';
import { StyleSheet, TouchableOpacity, Image } from 'react-native';
import { IconDiscoverActive, IconDiscoverInactive, IconChartActive, IconChartInactive, IconProfileActive, IconProfileInactive } from '../../../assets';

const TabItem = ({title, active, onPress, onLongPress}) => {
  return (
    <TouchableOpacity 
      style={styles.container} 
      onPress={onPress} 
      onLongPress={onLongPress}
    >
      {title === "Discover" && <Image
        style={styles.image}
        source={active ? IconDiscoverActive : IconDiscoverInactive}
      />}
      {title === "Chart" && <Image
        style={styles.image}
        source={active ? IconChartActive : IconChartInactive}
      />}
      {title === "Profile" && <Image
        style={styles.image}
        source={active ? IconProfileActive : IconProfileInactive}
      />}
    </TouchableOpacity>
  )
}

export default TabItem;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center'
  },
  image: {
    height: 25,
    width: 25,
    marginVertical: 12
  }
});