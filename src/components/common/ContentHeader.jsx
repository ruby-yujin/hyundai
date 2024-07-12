import React from 'react';
import styled from 'styled-components';

function ContentHeader({children}) {
  return (
    <ContentHeaderWrap>{children}</ContentHeaderWrap>
  )
}

const ContentHeaderWrap = styled.div`
    padding:2rem 4rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export default ContentHeader;