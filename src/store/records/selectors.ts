import {NameSpace, RootState} from '../root-reducer';
import {Record} from "../../data";

type State = RootState;

export const getRecords = (state: State): Record[] => state[NameSpace.Records].records;
export const getOpenedRecord = (state: State): string[] => state[NameSpace.Records].openedRecords;
