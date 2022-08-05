import styled from 'styled-components';

interface IButton {
  currentLanguage: boolean;
}

export const TranslationContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 8px;
`;

export const Button = styled.button<IButton>`
  display: flex;
  align-items: center;
  justify-content: center;

  height: 36px;
  width: 36px;
  border-radius: 8px;
  background: transparent;
  border: none;

  transition: all 150ms ease-in-out;
  font-size: ${({ currentLanguage }) => (currentLanguage ? '28px' : '18px')};
  filter: ${({ currentLanguage }) => `grayscale(${currentLanguage ? 0 : 1})`};
  cursor: pointer;

  &:disabled {
    pointer-events: none;
    cursor: not-allowed;
  }

  &:hover {
    font-size: 28px;
    filter: grayscale(0);
  }
`;
