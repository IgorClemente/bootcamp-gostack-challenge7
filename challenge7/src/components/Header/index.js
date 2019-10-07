import React from 'react';

import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {
  Wrapper,
  Container,
  Logo,
  BasketContainer,
  CartQuantity,
} from './styles';

function Header({ amount }) {
  return (
    <Wrapper>
      <Container>
        <Logo />
        <BasketContainer>
          <Icon name="shopping-basket" color="#FFF" size={24} />
          <CartQuantity>{amount || 0}</CartQuantity>
        </BasketContainer>
      </Container>
    </Wrapper>
  );
}

const mapStateToProps = state => ({
  amount: state.cart.length,
});

export default connect(
  mapStateToProps,
  null
)(Header);
