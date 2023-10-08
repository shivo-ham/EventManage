import React from 'react'
import { View, StyleSheet, Text, TextInput as Input } from 'react-native'
import { Colors } from "../constants/appConstants";
import c from '../style';

type TextInputProps = any & {
  innerRef: any,
  errorText: string,
  autoCompleteType?: boolean,
  title: string,
  status: string,
  disabled: boolean,
  onPress: () => void,
  containerStyle: any
}

export default function TextInput(
  { innerRef, errorText, autoCompleteType = false, title, status, containerStyle, disabled, onPress, ...props }: TextInputProps): JSX.Element {

  return (
    <View style={[styles.container, { ...containerStyle }]}>
      {title ? (
        <Text style={c.textRegular}>{title}</Text>
      ) : null}
      <Input
        ref={innerRef}
        style={styles.input}
        selectionColor={Colors.primary}
        underlineColor="transparent"
        autoCompleteType={autoCompleteType}
        {...props}
      />
      {errorText ? <Text style={styles.error}>{errorText}</Text> : null}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginVertical: 12
  },
  input: {
    borderWidth:1.2,
    width:'100%',
    height:36,
    marginTop: 8,
    paddingHorizontal:8,
    color:Colors.black
  },
  error: {
    fontSize: 13,
    color: Colors.red,
    paddingTop: 8,
  },
})