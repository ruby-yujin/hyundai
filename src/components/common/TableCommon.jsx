import React,{useState} from 'react'
import styled from 'styled-components';
import {COMMON_TABLE_TH,COMMON_TABLE_DATA} from "../../constants/constants";

import Table from 'react-bootstrap/Table';

function TableCommon({ data }) {
  const [selectedRows, setSelectedRows] = useState([]);

  const handleSelectAll = (e) => {
    if (e.target.checked) {
      setSelectedRows(COMMON_TABLE_DATA.map((_, index) => index));
    } else {
      setSelectedRows([]);
    }
  };

  const handleSelectRow = (index) => {
    setSelectedRows(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };


  return (
    <TableCommonWrap>
    <Table>
    <thead>
        <tr>
          <th>
            <input 
              type="checkbox" 
              onChange={handleSelectAll}
              checked={selectedRows.length === COMMON_TABLE_DATA.length}
            />
          </th>
          {COMMON_TABLE_TH.map((item, index) => (
            <th key={index}>{item.th}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {COMMON_TABLE_DATA.map((row, rowIndex) => (
          <tr key={rowIndex}>
            <td>
              <input 
                type="checkbox"
                checked={selectedRows.includes(rowIndex)}
                onChange={() => handleSelectRow(rowIndex)}
              />
            </td>
            {COMMON_TABLE_TH.map((item, cellIndex) => (
              <td key={cellIndex}>{row[item.th.toLowerCase()]}</td>
            ))}
          </tr>
        ))}
      </tbody>
  </Table>
  </TableCommonWrap>
  )
}

const TableCommonWrap = styled.div`
    table {
      width:100%;
        thead tr th {
            font-size:1.4rem;
            background:#f1f6fc;
            color:#666;
            height: 28px;
        }
        tbody tr td {
          text-align: center;
          height: 28px;
          font-size:1.4rem;
        } 
    }
`;
export default TableCommon;