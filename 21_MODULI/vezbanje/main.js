/*
import {
  generateList,
  generateItem as generateListItem,
} from "./modules/list.js";
import {
  generateTable,
  generateTableRow,
  generateItem as generateTableItem,
} from "./modules/table.js";

let ul = generateList(document.body);
generateListItem(ul, "images/1.jpg");
generateListItem(ul, "images/2.jpg");
generateListItem(ul, "images/3.jpeg");

let table = generateTable(document.body);
let tr = generateTableRow(table);
generateTableItem(tr, "images/1.jpg");
generateTableItem(tr, "images/2.jpg");
generateTableItem(tr, "images/3.jpeg");
*/

import * as List from "./modules/list.js";
import * as Table from "./modules/table.js";

let ul = List.generateList(document.body);
List.generateItem(ul, "images/1.jpg");
List.generateItem(ul, "images/2.jpg");
List.generateItem(ul, "images/3.jpeg");

let table = Table.generateTable(document.body);
let tr = Table.generateTableRow(table);
Table.generateItem(tr, "images/1.jpg");
Table.generateItem(tr, "images/2.jpg");
Table.generateItem(tr, "images/3.jpeg");
