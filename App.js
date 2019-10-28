/**
 * CREATE CAMPAIGN SCREEN 3
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

export default class createcampaign extends React.Component {
  state = {
    Campaign_Title: '', Campaign_Description: ''
  }
  onChangeText = (key, val) => {
    this.setState({ [key]: val })
  }
  createcampaign = async () => {
    const { Campaign_Title, Campaign_Description } = this.state
    try {
      // here place your createcampaign logic
      console.log('user successfully createcampaign!: ', success)
    } catch (err) {
      console.log('error creating campaign: ', err)
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder='Campaign_Title'
          autoCapitalize="none"
          placeholderTextColor='white'
          onChangeText={val => this.onChangeText('Campaign_Title', val)}
        />
        <TextInput
          style={styles.input}
          placeholder='Campaign_Description'
          secureTextEntry={False}
          autoCapitalize="none"
          placeholderTextColor='white'
          onChangeText={val => this.onChangeText('Campaign_Description', val)}
        />
        <Button
          title='createcampaign'
          onPress={this.createcampaign}
        />
      </View>
    )
  }
}
handleUploadPhoto = () => {
  fetch("http://localhost:1000/api/upload", {
    method: "POST",
    body: createFormData(this.state.photo, { userId: "000" })
  })
    .then(response => response.json())
    .then(response => {
      console.log("upload success", response);
      alert("Upload success!");
      this.setState({ photo: null });
    })
    .catch(error => {
      console.log("upload error", error);
      alert("Upload failed!");
    });
};
try {
      // here place your terms and condition logic
      console.log('The platform is free for organizers.  Transaction fee is
       2.9% plus $0.03 per donation.  By continuing, you agree to the Qwuizz
       terms and acknowledgement receipt of our Privacy Policy!: ', continue)
    }
const styles = StyleSheet.create({
  input: {
    width: 400,
    height: 65,
    backgroundColor: '#42A5F5',
    margin: 12,
    padding: 9,
    color: 'white',
    borderRadius: 15,
    fontSize: 20,
    fontWeight: '500',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})
 
