import { FormEvent, MouseEventHandler } from 'react';
import BasicInput, { BasicInputProps } from '@/inputs/BasicInput';
import Close from '@/icons/close.svg';
import styled, { css } from 'styled-components';
import Button from '@/buttons/Button';
import SearchResult from '../search/SearchResult';

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

const Top = styled.div`
  position: absolute;
  right: 0.625rem;
  top: 0.3125rem;
`;

const InputZone = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  padding-top: 1.25rem;
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
  onCancelClick: MouseEventHandler<HTMLButtonElement>;
  searchValue: [];
  onResultClick: MouseEventHandler<HTMLLIElement>;
}

const AddSomethingModal = ({
  show,
  onCloseModal,
  onSubmit,
  placeholder,
  onChange,
  value,
  onCancelClick,
  searchValue,
  onResultClick,
}: AddSomethingModalProps) => {
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
          <Top>
            <Button ariaLabel="나가기" buttonType="clear" onClick={onCloseModal} buttonRole="event">
              <Close />
            </Button>
          </Top>
          <form onSubmit={onSubmit}>
            <InputZone>
              <BasicInput placeholder={placeholder} onChange={onChange} value={value} />
            </InputZone>
            <ButtonZone>
              <Button type="submit" ariaLabel="팔로워 추가" buttonType="primary" buttonRole="event">
                추가
              </Button>
              <Button type="reset" ariaLabel="팔로워 추가 취소" buttonType="cancel" onClick={onCancelClick} buttonRole="event">
                취소
              </Button>
            </ButtonZone>
          </form>
        </Box>
        <SearchResult searchValue={searchValue} onClick={onResultClick} />
      </Modal>
    </Container>
  );
};

export default AddSomethingModal;
