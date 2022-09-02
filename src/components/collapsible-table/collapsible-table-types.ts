import {Record} from "../../data";

export type CollapsibleTableProps = {
  records: Record[],
  onRowDelete: (id: string) => void;
}
