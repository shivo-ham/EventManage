import { StyleSheet } from 'react-native';
import { Colors, Dimens, Fonts } from '../constants/appConstants';

const c = StyleSheet.create({
    rootCenter: {
        flex: 1,
        color: Colors.white,
        justifyContent: 'center',
        alignItems: 'center'
    },
    flexCenter: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    flexWrap: {
        flex: 1,
        flexWrap: 'wrap'
    },
    rowCenter: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    rowCenterSpaceBetween: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 10,
        paddingBottom: 8
    },
    textRegular: {
        fontFamily: Fonts.Regular,
        fontSize: Dimens.textSizeExtraSmall,
        color: Colors.primary
    },
    textMedium: {
        fontFamily: Fonts.Regular,
        fontSize: Dimens.textSizeExtraSmall,
        color: Colors.primary
    },
    textBold: {
        fontFamily: Fonts.Bold,
        fontSize: Dimens.textSizeExtraSmall,
        color: Colors.secondary
    },
    modalRoot: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.primary
    },
    img20: {
        height: 20,
        width: 20,
        tintColor: Colors.white
    },
    margin8: {
        margin: 8
    }
});

export default c;
