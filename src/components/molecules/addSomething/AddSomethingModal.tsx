import BasicButton from '@/buttons/BasicButton';
import BasicInput, { BasicInputProps } from '@/inputs/BasicInput';
import Close from '@/icons/close.svg';
import styled, { css } from 'styled-components';
import { FormEvent, MouseEventHandler } from 'react';

const Container = styled.div`
  width: 100%;
  height: 100%;
  z-index: 100;
  position: fixed;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: flex-start;
  cursor: pointer;
`;

const Modal = styled.div`
  display: flex;
  position: absolute;
  margin-top: 1.875rem;
  flex-direction: column;
  width: 100%;
  max-width: 31.25rem;
  align-items: center;
`;

const Box = styled.div`
  ${({ theme }) => {
    const { colors } = theme;
    return css`
      display: flex;
      flex-direction: column;
      width: 100%;
      background-color: ${colors.secondary};
      border-radius: 0.25rem 0.25rem 0 0;
      padding: 1.25rem;
      gap: 1.25rem;

      form {
        display: flex;
        flex-direction: column;
        gap: 1.25rem;
      }

      svg {
        color: ${colors.primary};
      }
    `;
  }}
`;

const InputZone = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
`;

const ButtonZone = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  gap: 1.25rem;
`;

interface AddSomethingModalProps extends BasicInputProps {
  show: boolean;
  onCloseModal: () => void;
  onSubmit: (event: FormEvent<HTMLFormElement>) => void;
  onClick: MouseEventHandler<HTMLButtonElement>;
}

const AddSomethingModal = ({ show, onCloseModal, onSubmit, placeholder, onChange, value, onClick }: AddSomethingModalProps) => {
  if (!show) {
    return null;
  }

  const stopPropagation = (e: any) => {
    e.stopPropagation();
  };

  return (
    <Container onClick={onCloseModal}>
      <Modal onClick={stopPropagation}>
        <Box>
          <BasicButton ariaLabel="나가기" form="CLEAR" onClick={onCloseModal}>
            <Close />
          </BasicButton>
          <form onSubmit={onSubmit}>
            <InputZone>
              <BasicInput placeholder={placeholder} onChange={onChange} value={value} />
            </InputZone>
            <ButtonZone>
              <BasicButton ariaLabel="추가" form="OK" onClick={onClick}>
                추가
              </BasicButton>
              <BasicButton ariaLabel="취소" form="NO" onClick={onClick}>
                취소
              </BasicButton>
            </ButtonZone>
          </form>
        </Box>
      </Modal>
    </Container>
  );
};

export default AddSomethingModal;