import AsyncStorage from '@react-native-async-storage/async-storage';
const PrefManager = {
    setValue: function (key: any, value: any) {
        AsyncStorage.setItem(key, JSON.stringify(value));
    },
    getValue: async (key: any) => {
        let value = '';
        try {
            value = (await AsyncStorage.getItem(key)) || '';
        } catch (error) {}
        return value ? JSON.parse(value) : value;
    },
    removeValue: async (key: any) => {
        await AsyncStorage.removeItem(key);
    }
};
export default PrefManager;
