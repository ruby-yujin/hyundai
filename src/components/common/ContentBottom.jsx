import React from 'react';
import styled from 'styled-components';

function ContentBottom({children}) {
  return (
    <ContentBottomWrap>{children}</ContentBottomWrap>
  )
}

const ContentBottomWrap = styled.div`
    padding:0rem 4rem 2rem;
    /* display: flex;
    justify-content: space-between;
    align-items: center; */
`;

export default ContentBottom;