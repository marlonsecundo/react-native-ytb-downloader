import { StyleSheet } from 'react-native';
import {
  colors, metrics, fonts, wp, hp,
} from '~/styles';

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    alignSelf: 'center',
    backgroundColor: colors.primary,
    borderRadius: wp('10%'),
    height: hp('7%'),
    justifyContent: 'center',
    marginTop: metrics.baseMargin / 2,
    width: wp('45%'),
  },

  buttonText: {
    color: colors.secondary,
  },

  container: {
    backgroundColor: colors.dark,
    flex: 1,
  },

  keyboardAware: {
    height: hp('3%'),
  },

  placeHolder: {
    color: colors.placeHolderColor,
  },

  safeArea: {
    flex: 1,
  },

  text1: {
    alignSelf: 'center',
    color: colors.secondary,
    fontFamily: fonts.titleFamily,
    fontSize: fonts.title,
    marginTop: metrics.baseMargin,
  },

  text2: {
    alignSelf: 'center',
    color: colors.secondary,
    fontFamily: fonts.titleFamily,
    fontSize: fonts.title,
    marginTop: metrics.baseMargin / 4,
  },

  textInput: {
    color: colors.secondary,
    marginHorizontal: metrics.baseMargin,
    marginTop: metrics.baseMargin,
  },

  underlineAndroidColor: {
    color: colors.secondary,
  },

  youtube: {
    alignSelf: 'center',
    marginTop: hp('10%'),
  },
});

export default styles;
