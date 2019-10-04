import React, { Component } from 'react';

import { Container, Products } from './styles';

import Icon from 'react-native-vector-icons/MaterialIcons';

export default class Home extends Component {
  render() {
    return (
      <Container>
        <Products>
          <Product>
            <ProductImage></ProductImage>
            <ProductTitle></ProductTitle>
            <ProductPrice></ProductPrice>
            <Icon name="" />
          </Product>
        </Products>
      </Container>
    );
  }
}
