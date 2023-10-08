import React from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator,
  Text,
} from 'react-native';
import { Colors, Dimens, Fonts } from '../constants/appConstants';

type ButtonProps = any & {
  text: string;
  visible?: boolean;
  onPress: () => void;
  style: any;
  top: string | number;
  bottom: string | number;
};

export default function Button({
  onPress,
  text,
  style,
  visible,
  top,
  bottom,
}: ButtonProps) {
  return (
    <TouchableOpacity
      style={[style, { marginTop: top, marginBottom: bottom }]}
      activeOpacity={visible ? 1 : 0.6}
      onPress={visible ? null : onPress}>
      {visible ? (
        <ActivityIndicator size="small" color={'white'} />
      ) : (
        <Text style={pageStyle.textBtn}>{text}</Text>
      )}
    </TouchableOpacity>
  );
}
const pageStyle = StyleSheet.create({
  textBtn: {
    fontFamily: Fonts.SemiBold,
    fontSize: Dimens.textSizeSmall,
    color: Colors.white,
  },
});
