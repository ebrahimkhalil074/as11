import React from 'react';
import { useTable } from 'react-table';

const ReactTable = ({ columns, data }) => {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({
    columns,
    data,
  });

  return (
    <table {...getTableProps()} className="table-auto w-full">
      <thead>
        {headerGroups.map((headerGroup,i) => (
          <tr key={i} {...headerGroup.getHeaderGroupProps()} className="bg-gray-200">
            {headerGroup.headers.map((column ,i) => (
              <th
              key={i}
                {...column.getHeaderProps()}
                className="px-4 py-2 text-left"
              >
                {column.render('Header')}
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row, i) => {
          prepareRow(row);
          return (
            <tr
              key={i}
              {...row.getRowProps()}
              className={i % 2 === 0 ? 'bg-gray-100' : 'bg-white'}
            >
              {row.cells.map((cell, j) => (
                <td key={j} {...cell.getCellProps()} className="border px-4 py-2">
                  {cell.column.id === 'image' ? (
                    <img
                      src={cell.value} // Assuming 'cell.value' contains the image URL
                      alt={`Image ${i}`}
                      className="w-20 h-20 object-cover rounded-full"
                    />
                  ) : (
                    cell.render('Cell')
                  )}
                </td>
              ))}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default ReactTable;
