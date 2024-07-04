import React from 'react';
import { useMemoStore } from '../store/MemoList';
import styled from 'styled-components';

const MemoElem = (props) => {
  const { children, id } = props;
  const { removeMemo } = useMemoStore();
  return (
    <MemoElemWrapper>
      <div>{children}</div>
      <RemoveBtn onClick={() => removeMemo(id)}>삭제</RemoveBtn>
    </MemoElemWrapper>
  );
};

export default MemoElem;

const MemoElemWrapper = styled.div`
  position: relative;
  width: 200px;
  height: 200px;
  padding: 16px;
  border: 1px solid orange;
  background-color: lightyellow;
  border-radius: 8px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 16px;
  z-index: 999;
`;

const RemoveBtn = styled.button`
  padding: 4px 7px;
  background-color: transparent;
  border: 1px solid #ccc;
  color: #999;
  position: absolute;
  top: 4px;
  right: 4px;
`;
