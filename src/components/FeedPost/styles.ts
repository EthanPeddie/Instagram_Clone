import {StyleSheet} from 'react-native';
import colors from '../../theme/colors';
import font from '../../theme/font';

export const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
  headerImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  headerText: {
    fontWeight: font.weight.bold,
    color: colors.black,
  },
  headerIcon: {
    marginLeft: 'auto',
  },
  contentImage: {
    width: '100%',
    aspectRatio: 1,
  },
  footerContainer: {
    padding: 10,
  },
  footerIcons: {
    flexDirection: 'row',
    marginBottom: 5,
  },
  footerIcon: {
    marginHorizontal: 5,
    color: colors.black,
  },
  text: {
    color: colors.black,
    lineHeight: 18,
  },
  bold: {
    fontWeight: font.weight.bold,
  },

  comment: {
    flexDirection: 'row',
    alignItems: 'center',
    lineHeight: 18,
  },
  commentText: {
    color: colors.black,
    flex: 1,
  },
});
