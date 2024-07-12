import React from 'react'
import styled from 'styled-components';
import {RefreshCcw} from "lucide-react"

function BtnReload() {
  return (
    <BtnReloadWrap><RefreshCcw color="#ffffff" size={14}/>새로고침</BtnReloadWrap>
  )
}

const BtnReloadWrap = styled.button`
  width:84px;
  height:24px;
  color:#fff;
  background:#1f3e74;
  font-size:1.2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  svg {  margin-right: 5px;}

`;

export default BtnReload