import React from "react";
import styled from "styled-components";
import { BrowserRouter } from "react-router-dom";
import CustomRouter from "./CustomRouter";
import { NavProvider } from "./context/useNav";

//TODO: Modal
import { useModal } from "./context/useModal";
import CustomModal from "./components/common/CustomModal";

const App = () => {
  const { isOpen, openModal, closeModal } = useModal();

  return (
    <NavProvider>
      <div className="App">
        <BtnModalTest onClick={openModal}>모달버튼</BtnModalTest>
        <CustomModal isOpen={isOpen} closeModal={closeModal}>
          <ModalIcon>
            <img src="/img/icon_notice.png" alt="공지 아이콘" />
          </ModalIcon>
          <ModalDecs>사원정보가 없습니다.</ModalDecs>
          <ModalDecs>시스템 사용 등록해주세요.</ModalDecs>
        </CustomModal>
        <BrowserRouter>
          <CustomRouter />
        </BrowserRouter>
      </div>
    </NavProvider>
  );
};

// TODO 임시 모달버튼
const BtnModalTest = styled.button`
  font-size: 18px;
  color: #000;
  position: fixed;
  top: 14px;
  right: 10px;
  z-index: 10;
  background: yellow;
`;

const ModalIcon = styled.h2`
  margin: 0 auto 15%;
  text-align: center;
  > img {
    display: inline-block;
    max-width: 200px;
  }
`;

const ModalDecs = styled.p`
  font-size: 20px;
  text-align: center;
  margin-bottom: 2%;
`;

export default App;
