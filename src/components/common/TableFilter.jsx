import React from 'react';
import styled from 'styled-components';


function TableFilter({filterId,labelText,value,onChange}) {
  return (
    <FilterGroup>
        <label htmlFor={labelText} id={filterId}>{labelText}</label>
        <input type="text" maxLength={"100"} value={value} onChange={onChange}/>
    </FilterGroup>
  )
}

const FilterGroup = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap:10px;
    label {
        font-size:1.6rem;
        color:#000;
        font-weight:500;
    }
    input {
        width: 30px;
        height: 20px;
        border: 1px solid #666;
        border-radius: 6px;
        padding:2px;
        font-size:1.1rem;
    }
`;

export default TableFilter;