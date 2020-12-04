import React, {Component} from 'react';
import {View, Text, Picker, StyleSheet} from 'react-native';

class Pickers extends Component {
  state = {user: ''};
  updateUser = (user) => {
    this.setState({user: user});
  };
  render() {
    return (
      <View>
        <Text style={styles.text}>Pekerjaan</Text>
        <Picker selectedValue={this.state.user} onValueChange={this.updateUser}>
          <Picker.Item label="-- Pilih Pekerjaan Anda --" value="null" />
          <Picker.Item label="Petani" value="petani" />
          <Picker.Item label="Distributor" value="distributor" />
        </Picker>
      </View>
    );
  }
}
export default Pickers;

const styles = StyleSheet.create({
  text: {fontSize: 16, color: '#7D8797', marginBottom: 6},
});
