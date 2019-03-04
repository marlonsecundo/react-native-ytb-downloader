import React from 'react';
import {
  View,
  Text,
  TextInput,
  SafeAreaView,
  KeyboardAvoidingView,
  TouchableOpacity,
} from 'react-native';

import { YoutubeIcon } from '~/assets/icons';

import styles from './styles';

export default class Main extends React.Component {
  state = {
    textInput: '',
  };

  render() {
    return (
      <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
        <SafeAreaView>
          <YoutubeIcon style={styles.youtube} />
          <Text style={styles.text1}>Youtube Playlist</Text>
          <Text style={styles.text2}>Downloader</Text>
          <TextInput
            style={styles.textInput}
            value={this.state.textInput}
            placeholder="Playlist Link Here"
            placeholderTextColor={styles.placeHolder.color}
            underlineColorAndroid={styles.underlineAndroidColor.color}
            onChange={(value) => {
              this.setState({ textInput: value.text });
            }}
          />
          <TouchableOpacity style={styles.button} onPress={() => {}}>
            <Text style={styles.buttonText}>Download</Text>
          </TouchableOpacity>
        </SafeAreaView>
      </KeyboardAvoidingView>
    );
  }
}
