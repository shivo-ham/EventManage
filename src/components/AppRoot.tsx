import React from 'react';
import { SafeAreaView, StyleSheet, StatusBar, View } from 'react-native';
import { Colors } from '../constants/appConstants';
type AppRootProps = any & {
  children: any;
};

export default function AppRoot({ children }: AppRootProps) {
  return (
    <View style={{ flex: 1, backgroundColor: Colors.black }}>
      <StatusBar backgroundColor={Colors.black} barStyle={'light-content'} />
      <SafeAreaView style={styles.container}>
        <View style={{ flex: 1 }}>{children}</View>
      </SafeAreaView>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
});
