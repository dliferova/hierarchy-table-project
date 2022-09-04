import {Record} from "../../data";
import {createReducer} from '@reduxjs/toolkit';
import {recordDeleted, recordOpened, recordsLoaded} from "../actions";

type StateData = {
  records: Record[],
  openedRecords: string[],
}

const initialState: StateData = {
  records: [],
  openedRecords: [],
}

export const recordsReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(recordsLoaded, (state, action) => {
      state.records = action.payload.records;
    })
    .addCase(recordDeleted, (state, action) => {
      const newRecords = [...state.records]
      const index = newRecords.findIndex(record => record.data.ID === action.payload.recordId)
      newRecords.splice(index, 1)
      state.records = newRecords
    })
    .addCase(recordOpened, (state, action) => {
      const openedRecords = [...state.openedRecords]
      const index = openedRecords.findIndex((id) => id === action.payload.recordId)

      if (index === -1) {
        openedRecords.push(action.payload.recordId)
      } else {
        openedRecords.splice(index, 1)
      }

      state.openedRecords = openedRecords;
    })
});



