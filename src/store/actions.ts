import {createAction} from '@reduxjs/toolkit';
import {Record} from "../data";

export enum ActionType {
  RecordsLoaded = 'data/records-loaded',
  RecordDeleted = 'data/record-deleted',
  RecordOpened = 'record/record-opened',
}

export const recordsLoaded = createAction(
  ActionType.RecordsLoaded,
  (records: Record[]) => ({
    payload: {
      records,
    },
  }),
);

export const recordDeleted = createAction(
  ActionType.RecordDeleted,
  (recordId: string) => ({
    payload: {
      recordId,
    },
  }),
);

export const recordOpened = createAction(
  ActionType.RecordOpened,
  (recordId: string) => ({
    payload: {
      recordId,
    },
  }),
);
