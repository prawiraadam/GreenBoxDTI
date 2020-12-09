import React from 'react';
import { StyleSheet, TouchableOpacity, Image } from 'react-native';
import { 
  IconDiscoverActive, 
  IconDiscoverInactive, 
  IconChartActive, 
  IconChartInactive, 
  IconProfileActive, 
  IconProfileInactive,
  IconListActive,
  IconListInactive,
  IconOrderActive,
  IconOrderInactive 
} from '../../../assets';

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
      {title === 'ProfileFarmer' && <Image
        style={styles.image}
        source={active ? IconProfileActive : IconProfileInactive}
      />}
      {title === "HomeFarmer" && <Image
        style={styles.image}
        source={active ? IconListActive : IconListInactive}
      />}
      {title === "OrderFarmer" && <Image
        style={styles.image}
        source={active ? IconOrderActive : IconOrderInactive}
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