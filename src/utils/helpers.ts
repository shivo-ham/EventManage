import { showMessage } from 'react-native-flash-message';
import { Colors, daysOfTheWeek, months } from '../constants/appConstants';
import { StatusBar } from 'react-native';

/** Checks for empty value
 * @param {string} str        The string to check
 * @param {string} fieldName  The fieldname
 * @returns {string}  Returns error string if empty, otherwise returns empty string
 */
export function emptyValidator(
    str: any,
    fieldName: string = 'This field'
): string {
    const _str = str.trim();
    return !_str ? `${fieldName} can't be empty` : '';
}

/** modify the string value and return the new one
 * @param {string} fieldName  The fieldname
 * @returns {string}  Returns new string
 */
export function stringValidator(fieldName: string = 'This field'): string {
    return `${fieldName} can't be empty`;
}

/** Formats the given date
 * @param {Date}  d The date object
 * @returns {string}  The formatted date
 */
export function formatDate(d: Date): string {
    const dayOfTheWeek = daysOfTheWeek[d.getUTCDay()].substring(0, 3);
    const month = months[d.getUTCMonth()].substring(0, 3);
    return `${dayOfTheWeek}, ${month} ${d.getUTCDate()} ${d.getUTCFullYear()}`;
}

/** Shows a popup banner message (top of screen)
 * @param {string}        message     The message title
 * @param {string|null}   description The description of the message
 * @param {boolean}       error       Whether the message is an error
 * @returns {void}
 */
export function showPopupMessage(
    message: string,
    description: string,
    error = false
): void {
    showMessage({
        message,
        description,
        backgroundColor: !error ? Colors.secondary : Colors.red,
        color: error ? '#fff' : '#fff',
        type: 'default',
        floating: true,
        statusBarHeight: StatusBar.currentHeight,
        duration: error ? 5000 : 3000
    });
}
