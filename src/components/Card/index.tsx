import React from 'react';

import { Card as Container } from './styles';

interface ICard {
  children: React.ReactNode;
}

export const Card: React.FC<ICard> = ({ children }) => (
  <Container>{children}</Container>
);
