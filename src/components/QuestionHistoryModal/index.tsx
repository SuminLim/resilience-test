import React from 'react';
import ReactModal from "react-modal";
import styled from "styled-components";
import {QUESTION} from "../../constants";
import Button from "../Button";

interface QuestionHistoryModalProps {
  isOpen: boolean;
  scoreList: number[];

  onClose: () => void;
}

const ModalStyle: ReactModal.Styles = {
  content: {
    maxWidth: 680,
    margin: 'auto',
  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
  },
};

const Header = styled.header`
  height: 60px;
  > button {
    float: right;
  }
`;

const Result = styled.span`
  float: right;
`;

const QuestionHistoryModal: React.FC<QuestionHistoryModalProps> = ({ isOpen, scoreList, onClose }) => {
  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={onClose}
      appElement={document.getElementById('root')!}
      style={ModalStyle}
      shouldCloseOnOverlayClick
      shouldCloseOnEsc
    >
      <Header>
        <Button onClick={onClose}>X</Button>
      </Header>
      {scoreList.map((score, index) => (
        <div key={`question-history-${index}`}>
          {QUESTION[index].label}
          <Result> = {score}</Result>
        </div>
      ))}
    </ReactModal>
  );
};

export default QuestionHistoryModal;
