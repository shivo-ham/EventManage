import React from 'react';
import { View, StyleSheet } from 'react-native';
import ActionSheet from 'react-native-actions-sheet';
import { Colors } from '../constants/appConstants';
import TextView from './TextView';

type MediaPickerSheetProps = any & {
  onCameraPress: () => void,
  onGalleryPress: () => void,
  onClosePress: () => void,
  sheetRef: any
  showDeleteOption: boolean
}

type RenderActionButtonProps = any & {
  onPress: () => void,
  title: string,
  containerStyle: any,
  style: any
}

const MediaPickerSheet = ({
  onCameraPress,
  onGalleryPress,
  onClosePress,
  sheetRef,
  showDeleteOption = true
}: MediaPickerSheetProps) => {
  const RenderActionButton = ({
    onPress,
    title,
    containerStyle = {},
    style = {},
  }: RenderActionButtonProps) => {
    return (
      <TextView
        onPress={onPress}
        title={title}
        containerStyle={[styles.sheetItemContainer, containerStyle]}
        style={[styles.sheetItemTxt, style]}
      />
    );
  };

  const Options = () => {
    return (
      <View style={styles.sheetContainer}>
        <RenderActionButton onPress={onCameraPress} title={'Camera'} />
        <RenderActionButton onPress={onGalleryPress} title={'Gallery'} />
        {showDeleteOption ?
          <RenderActionButton
            onPress={onClosePress}
            title={'Close'}
            containerStyle={styles.noBorder}
            style={styles.redText}
          /> : null
        }
      </View>
    );
  };
  return (
    <ActionSheet ref={sheetRef}>
      <Options />
    </ActionSheet>
  );
};

const styles = StyleSheet.create({
  sheetContainer: { marginVertical: 10 },
  sheetItemContainer: {
    width: '100%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 1,
    backgroundColor: Colors.white,
  },
  noBorder: { borderBottomWidth: 0 },
  redText: { color: Colors.red },
  sheetItemTxt: { color: Colors.black },
});

export default MediaPickerSheet;