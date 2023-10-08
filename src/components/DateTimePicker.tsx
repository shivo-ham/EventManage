import React from 'react';
import DateTimePickerModal from "react-native-modal-datetime-picker";

type DateTimePickerProps = {
    isVisible: boolean;
    mode: "datetime" | 'date' | undefined;
    minimumDate?: any;
    maximumDate?: any;
    onConfirm?: any;
    onCancel?: any;
}

const DateTimePicker = ({
    isVisible,
    mode,
    minimumDate,
    maximumDate,
    onConfirm,
    onCancel
}: DateTimePickerProps) => {
    return (
        <DateTimePickerModal
            isVisible={isVisible}
            mode={mode}
            minimumDate={minimumDate}
            maximumDate={maximumDate}
            onConfirm={onConfirm}
            onCancel={onCancel}
        />
    );
};
export default React.memo(DateTimePicker);