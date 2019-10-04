import React, { Component } from 'react';

import {
  Container,
  Products,
  Product,
  ProductImage,
  ProductTitle,
  ProductPrice,
} from './styles';

import Icon from 'react-native-vector-icons/MaterialIcons';

export default class Home extends Component {
  state = {
    cart: [],
  };

  render() {
    const { cart } = this.state;
    const { product } = this.props;

    return (
      <Container>
        <Products data={product} keyExtractor={item => item.id}>
          <Product>
            <ProductImage
              source={{ uri: '../../assets/teste/tenis1.jpg' }}
            ></ProductImage>
            <ProductTitle>Produto de teste</ProductTitle>
            <ProductPrice>R$120,00</ProductPrice>
            <Icon name="delete-forever" color="#fff" size={24} />
          </Product>
        </Products>
      </Container>
    );
  }
}
