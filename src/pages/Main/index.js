import React from 'react';
import {
  Text, TextInput, SafeAreaView, TouchableOpacity,
} from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { YoutubeIcon } from '~/assets/icons';
import styles from './styles';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as DownloadsActions } from '~/store/ducks/downloads';

class Main extends React.Component {
  state = {
    textInput: '',
  };

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <KeyboardAwareScrollView enableOnAndroid extraScrollHeight={styles.keyboardAware.height}>
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
        </KeyboardAwareScrollView>
      </SafeAreaView>
    );
  }
}

const mapStateToProps = state => ({
  downloads: state.downloads,
});

const mapDispatchToProps = dispatch => bindActionCreators(DownloadsActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Main);
