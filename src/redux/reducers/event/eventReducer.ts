import { createSlice } from '@reduxjs/toolkit';

const eventReducer = createSlice({
  name: "event",
  initialState: {
    event: [],
  },
  reducers: {
    setEvent: (state:any, action:any) => {
      state.event = action?.payload?.eventList ?? [];
    },
    clearEvent: (state:any) => {
      state.event = [];
    }
  }
})

export const { setEvent, clearEvent } = eventReducer.actions
export const selectEvent = (state:any) => state.event;
export default eventReducer.reducer