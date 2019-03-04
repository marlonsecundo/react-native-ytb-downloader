import { StyleSheet } from 'react-native';
import {
  colors, metrics, wp, hp,
} from '~/styles';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: colors.dark,
    flex: 1,
  },
  youtube: {
    marginTop: hp('10%'),
  },
});

export default styles;
