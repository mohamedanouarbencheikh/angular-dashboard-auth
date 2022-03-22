import {Table1Data} from "./table1Data";
import {Table2Data} from "./table2Data";
import {Table2} from "./table2";

export class Dashboard{
  id:string="";
  graphe1 : Array<Array<number>> = new Array<Array<number>>();
  graphe2 : Array<number> = new Array<number>();
  graphe3 : Array<number> = new Array<number>();
  graphe4 : Array<number> = new Array<number>();
  table1Data : Array<Table1Data> = new Array<Table1Data>();
  table2 : Table2 = new Table2();
}
