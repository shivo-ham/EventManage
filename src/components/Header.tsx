import React from 'react'
import { StyleSheet, Text } from 'react-native'
import { Colors, Fonts } from '../constants/appConstants'

export default function Header(props: any): JSX.Element {
  return <Text style={styles.header} {...props} />
}

const styles = StyleSheet.create({
  header: {
    fontSize: 26,
    textAlign:'center',
    color: Colors.primary,
    fontFamily:Fonts.Bold,
    paddingVertical: 12,
  },
})
