import {Record} from "../../data";

export type RowProps = {
  row: Record;
  onRowDelete: (id: string) => void;
}
