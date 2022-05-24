const TableHeader = ({columns}) => {
    console.log(columns);
    return ( 
        <>
        <thead>
            <tr>
                {columns.map((col) => {
                    return (
                        <>
                            <th >
                                {" "}
                                {col.label} 
                            </th>
                        </>
                    );
                })}
            </tr>
        </thead>
    </>
     );
}
 
export default TableHeader;