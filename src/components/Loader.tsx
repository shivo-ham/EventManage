import React from "react";
import { StyleSheet, View, Modal, Text, ActivityIndicator } from "react-native";
import { Colors } from "../constants/appConstants";
import c from '../style/index';

type LoaderProps = any & {
    visible: boolean,
    text: string
};

const Loader = ({ visible, text }: LoaderProps) => {

    return (
        <Modal transparent={true} animationType={"none"} visible={visible}>
            <View style={s.modalBackground}>
                <ActivityIndicator color={Colors.primary} size={"large"} />
                <Text style={s.textB}>{text ? text : "Please wait..."}</Text>
            </View>
        </Modal>
    );
};

export default Loader;

const s = StyleSheet.create({
    modalBackground: {
        alignItems: "center",
        backgroundColor: "rgba(255,255,255,0.8)",
        flex: 1,
        flexDirection: "column",
        justifyContent: "center",
    },
    textB: {
        top: 8,
        ...c.textMedium
    }
});
