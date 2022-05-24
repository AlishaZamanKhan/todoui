import React from "react";
import TableBody from "./TableBody";
import TableHeader from "./TableHeader";

function Table({data, columns}) {
	return (
		<table class="table">
            <TableHeader columns = {columns}/>
            <TableBody data = {data}/>
		</table>
	);
}

export default Table;
