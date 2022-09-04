import {combineReducers} from '@reduxjs/toolkit';
import {recordsReducer} from "./records/records-reducer";

export enum NameSpace {
  Records= 'RECORDS'
}

export const rootReducer = combineReducers({
  [NameSpace.Records]: recordsReducer,
});

export type RootState = ReturnType<typeof rootReducer>;


