import React from 'react';

import Icon from 'react-native-vector-icons/MaterialIcons';
import {
  Wrapper,
  Container,
  Logo,
  BasketContainer,
  CartQuantity,
} from './styles';

export default function Header() {
  return (
    <Wrapper>
      <Container>
        <Logo />
        <BasketContainer>
          <Icon name="shopping-basket" color="#FFF" size={24} />
          <CartQuantity>1</CartQuantity>
        </BasketContainer>
      </Container>
    </Wrapper>
  );
}
