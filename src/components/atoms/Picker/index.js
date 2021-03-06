import React, { useState } from "react";
import { View, StyleSheet, Text } from "react-native";
import { Picker } from "@react-native-community/picker";
import { colors } from '../../../utils';
import Gap from "../../atoms/Gap";

const Pickers = ({title, progress}) => {
  const [selectedValue, setSelectedValue] = useState("farmer");

  if(progress){
    return (
      <View>
        <Text style={styles.title}>{title}</Text>
        <Gap height={5}/>
        <View style={styles.container}>
          <Picker
            selectedValue={selectedValue}
            style={{ height: 50, width: '100%'}}
            onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
          >
            <Picker.Item label="Progress" value="progress" />
            <Picker.Item label="On Hold" value="onhold" />
            <Picker.Item label="Done" value="done" />
          </Picker>
        </View>
      </View>
    );
  }
  return (
    <View>
      <Text style={styles.title}>{title}</Text>
      <Gap height={5}/>
      <View style={styles.container}>
        <Picker
          selectedValue={selectedValue}
          style={{ height: 50, width: '100%'}}
          onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
        >
          <Picker.Item label="Petani" value="farmer" />
          <Picker.Item label="Distributor" value="distributor" />
        </Picker>
      </View>
    </View>
  );
}

export default Pickers;

const styles = StyleSheet.create({
  title: {
    color: colors.grey1
  },
  container: {
    borderColor: colors.grey4,
    borderWidth: 2,
    borderRadius: 10
  }
});

