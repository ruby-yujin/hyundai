import React from "react";
import ReactModal from "react-modal";
import { X } from "lucide-react";
import styled from "styled-components";

ReactModal.setAppElement("#root");

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    backgroundColor: "#fffded",
    padding: "2.5rem 5rem",
    borderRadius: "0"
  },
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.75)"
  }
};

const CustomModal = ({ isOpen, closeModal, children }) => {
  return (
    <CustomModalWrap>
      <ReactModal
        isOpen={isOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        {children}
      </ReactModal>
    </CustomModalWrap>
  );
};

const CustomModalWrap = styled.div``;

export default CustomModal;
