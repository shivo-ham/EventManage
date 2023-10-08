import { Dimensions } from 'react-native';
const SCREEN_HEIGHT = Dimensions.get('window').height;
const SCREEN_WIDTH = Dimensions.get('window').width;
import {
    widthPercentageToDP,
    heightPercentageToDP,
    listenOrientationChange,
    removeOrientationListener
} from 'react-native-responsive-screen';

const Constants = {
    API_BASE_URL: 'https://nifty-bhaskara.103-177-225-105.plesk.page/api/',
    API_BASE_URL_LOCAL: 'https://nifty-bhaskara.103-177-225-105.plesk.page/api/',
    SENTRY_INTERNAL_DSN: '',
    REQUEST_TIMEOUT: 20000 * 1,
    dateFormat: 'DD/MM/YYYY',
    timeFormat: 'DD/MM/YYYY h:mm:ss a',
    dateFormatApi: 'YYYY/MM/DD',
    config: {
        velocityThreshold: 0.3,
        directionalOffsetThreshold: 80
    }
};
const Colors = {
    primary: '#1e1d1d', //181C32
    secondary: '#4a47b0',
    acent: '#0d0f35',
    statusBarColor: 'rgba(97, 50, 40,1)',
    textColor: '#8590a5',
    shadow: '#fcf8e3',
    green: '#39b18d',
    pink: '#ff4081',
    viewBox: '#f8f8f8',
    white: '#fff',
    black: '#000',
    blacklight: 'rgb(67, 67, 67)',
    medium_gray: 'rgba(125, 125, 130, 0.5)',
    dark_gray: '#7C7C80',
    cool_gray: 'rgba(125, 125, 130, 0.7)',
    light_gray: 'rgba(125, 125, 130, 0.1)',
    light: 'rgb(240, 240, 240)',
    themePurple: '#5E488C',
    lightPurple: '#CAC3D9',
    themeColor: '#414858',
    maroon: '#613228',
    blueViolet: '#8A2BE2',
    blue: '#0000FF',
    red: '#c02729',
    lightsky: '#eff7fe',
    lightBlue: '#549cf8',
    gray: '#808080',
    drawerFirst: '#1F9CD4',
    drawerSecond: '#6772AA',
    filterBg: '#D2D2D4'
};

const Dimens = {
    textSizeBottomBar: 12,
    textSizeExtraSmall: 14,
    textSizeSmall: 16,
    textSizeMedium: 18,
    textSizeLarge: 20,
    textSizeExtraLarge: 30
};

const Screen = {
    height: SCREEN_HEIGHT,
    width: SCREEN_WIDTH,
    wp: widthPercentageToDP,
    hp: heightPercentageToDP,
    scale: Dimensions.get('window').scale,
    fontScale: Dimensions.get('window').fontScale,
    OrientationChange: listenOrientationChange,
    OrientationListener: removeOrientationListener
};

const Fonts = {
    Bold: 'OpenSans-Bold',
    BoldItalic: 'OpenSans-BoldItalic',
    ExtraBold: 'OpenSans-ExtraBold',
    ExtraBoldItalic: 'OpenSans-ExtraBoldItalic',
    Italic: 'OpenSans-Italic',
    Light: 'OpenSans-Light',
    LightItalic: 'OpenSans-LightItalic',
    Regular: 'OpenSans-Regular',
    SemiBold: 'OpenSans-SemiBold',
    SemiBoldItalic: 'OpenSans-SemiBoldItalic'
};

const ImageView = {
    delete: require('../assets/delete.png')
};

const Strings = {};

const Storage_Key = {
    eventData: '@eventData5'
};

const daysOfTheWeek = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday'
];
const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
];

export {
    Constants,
    Colors,
    Dimens,
    Screen,
    Fonts,
    ImageView,
    Strings,
    daysOfTheWeek,
    months,
    Storage_Key
};
