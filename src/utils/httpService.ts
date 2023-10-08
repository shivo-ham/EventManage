import { Constants } from "../constants/appConstants";

const BaseUrl = __DEV__ ? Constants.API_BASE_URL : Constants.API_BASE_URL;
export const ADD_EDIT_EVENT = BaseUrl + 'Event/AddEditEvent';
export const GET_EVENTS = BaseUrl + 'Event/GetEvents';
