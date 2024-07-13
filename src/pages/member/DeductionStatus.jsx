import React from "react";

import OuterLayOutWrap from "../../components/common/OuterLayout";
import InnerContent from "../../components/common/InnerContent";
import TopTab from "../../components/member/TopTab";
import TableFilter from "../../components/common/TableFilter";
import ContentHeader from "../../components/common/ContentHeader";
import ContentBottom from "../../components/common/ContentBottom";
import BtnReload from "../../components/common/BtnReload";
import TableCommon from "../../components/common/TableCommon";
import Btn2wayBottom from "../../components/common/Btn2wayBottom";

function DeductionStatus() {
  return (
    <OuterLayOutWrap>
      <TopTab />
      <InnerContent>
        <ContentHeader>
          <TableFilterBox>
            <TableFilter
              filterId=""
              labelText={"총 가입단체 수 : "}
              value={0}
              onChange={() => {}}
            />
            <TableFilter
              filterId=""
              labelText={"현재 가입단체 수 : "}
              value={0}
              onChange={() => {}}
            />
          </TableFilterBox>
          <BtnReload />
        </ContentHeader>
        <ContentBottom>
          <TableCommon />
          <Btn2wayBottom />
        </ContentBottom>
      </InnerContent>
    </OuterLayOutWrap>
  );
}

const TableFilterBox = styled.div`
  display: flex;
  gap: 20px;
`;

export default DeductionStatus;
