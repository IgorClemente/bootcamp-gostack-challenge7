import React, { Component } from 'react';
import { FlatList } from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';
import { formatPrice } from '../../util/format';

import NavigationService from '../../services/navigation';
import api from '../../services/api';

import {
  Container,
  Product,
  ProductImage,
  ProductTitle,
  ProductPrice,
  AddCart,
  ProductAmount,
  ProductAmountText,
  AddCartText,
} from './styles';

export default class Home extends Component {
  state = {
    products: [],
  };

  getProducts = async () => {
    const products = await api.get('/products');

    const data = products.data.map(product => ({
      ...product,
      priceFormatted: formatPrice(product.price),
    }));

    this.setState({ products: data });
  };

  renderProduct({ item }) {
    return (
      <Product key={item.id}>
        <ProductImage source={{ uri: item.image }}></ProductImage>
        <ProductTitle>{item.title}</ProductTitle>
        <ProductPrice>{item.priceFormatted}</ProductPrice>
        <AddCart
          onPress={() => {
            NavigationService.navigate('Cart');
          }}
        >
          <ProductAmount>
            <Icon name="add-shopping-cart" color="#fff" size={20} />
            <ProductAmountText>0</ProductAmountText>
          </ProductAmount>
          <AddCartText>ADICIONAR</AddCartText>
        </AddCart>
      </Product>
    );
  }

  componentDidMount() {
    this.getProducts();
  }

  render() {
    const { products } = this.state;

    return (
      <Container>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={products}
          keyExtractor={item => String(item.id)}
          renderItem={this.renderProduct}
        />
      </Container>
    );
  }
}
