import React from 'react';
import {
  View, Text, TextInput, SafeAreaView, KeyboardAvoidingView,
} from 'react-native';

import { YoutubeIcon } from '~/assets/icons';

import styles from './styles';

export default class Main extends React.Component {
  state = {
    textInput: '',
  };

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <KeyboardAvoidingView>
          <YoutubeIcon style={styles.youtube} />
          <Text />
          <TextInput
            value={this.state.textInput}
            onChange={(value) => {
              this.setState({ textInput: value });
            }}
          />
        </KeyboardAvoidingView>
      </SafeAreaView>
    );
  } 
}
