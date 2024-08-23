import { Bike } from "./models/Bike";
import { Chair } from "./models/Chair";
import { Clock } from "./models/Clock";
import { Drawer } from "./models/Drawer";
import { Purifier } from "./models/Purifier";
import { Room } from "./models/Room";
import { Table } from "./models/Table";
import { Trash } from "./models/Trash";
import { Tree } from "./models/Tree";

function Apartment() {
    return (
        <>
            <Room />
            <Chair />
            <Clock />
            <Bike />
            <Drawer />
            <Purifier />
            <Table />
            <Trash />
            <Tree />
        </>
    );
}

export default Apartment;