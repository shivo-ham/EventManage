import React from 'react';
import {TouchableOpacity, StyleSheet, Text, ActivityIndicator} from 'react-native';
import { Colors, Fonts } from '../constants/appConstants';

type TextViewProps = {
  title: string,
  onPress:() => void,
  containerStyle: any,
  style: any,
  icon?:any,
  loading?: boolean
} 

const TextView = ({
  title,
  onPress,
  containerStyle,
  style,
  icon = null,
  loading,
  ...props
}:TextViewProps) => {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      style={[styles.btnContainer, containerStyle]}
      onPress={onPress}
      disabled={loading ? loading : false}
      {...props}>
      {icon ? icon : null}
      {loading ? (
        <ActivityIndicator color="white" size={'small'} />
      ) : (
        <Text style={[styles.btnText, style]}>{title}</Text>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  btnContainer: {
    backgroundColor: Colors.primary,
    height: 57,
    paddingHorizontal: 60,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15,
    flexDirection: 'row',
  },
  btnText: {
    color: Colors.white,
    fontSize: 16,
    fontFamily: Fonts.SemiBold,
    marginTop: 3,
  },
});

export default React.memo(TextView);