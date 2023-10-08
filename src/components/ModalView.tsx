import React from 'react';
import {
  StyleSheet,
  View,
  Modal,
  TouchableWithoutFeedback,
} from 'react-native';
import { Colors, Screen } from '../constants/appConstants';

type ModalViewProps = any & {
  visible: boolean,
  children: any,
  onClose: () => void
}

const ModalView = ({ visible, children, onClose }: ModalViewProps) => {
  return (
    <Modal
      transparent={true}
      animationType={'fade'}
      visible={visible}
      onRequestClose={onClose}>
      <TouchableWithoutFeedback
        style={{ flex: 1 }}
        onPress={onClose}>
        <View style={styles.modalBackground}>
          <View style={styles.ViewWrapper}>
            {children}
          </View>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  )
}

const styles = StyleSheet.create({
  modalBackground: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#00000040'
  },
  ViewWrapper: {
    backgroundColor: Colors.primary,
    elevation: 2,
    height: Screen.wp(70),
    width: Screen.wp(86),
    borderRadius: 5,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around'
  }
});

export default ModalView;
