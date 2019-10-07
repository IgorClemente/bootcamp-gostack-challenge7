import React, { Component } from 'react';
import { FlatList } from 'react-native';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Icon from 'react-native-vector-icons/MaterialIcons';
import { formatPrice } from '../../util/format';
import api from '../../services/api';

import * as CartActions from '../../store/modules/cart/actions';

import NavigationService from '../../services/navigation';

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

class Home extends Component {
  state = {
    products: [],
  };

  componentDidMount() {
    this.getProducts();
  }

  handleAddProduct = item => {
    const { addToCartRequest } = this.props;
    addToCartRequest(item.id);
  };

  getProducts = async () => {
    const products = await api.get('/products');

    const data = products.data.map(product => ({
      ...product,
      priceFormatted: formatPrice(product.price),
    }));

    this.setState({ products: data });
  };

  renderProduct = ({ item }) => {
    return (
      <Product key={item.id}>
        <ProductImage source={{ uri: item.image }}></ProductImage>
        <ProductTitle>{item.title}</ProductTitle>
        <ProductPrice>{item.priceFormatted}</ProductPrice>
        <AddCart onPress={() => this.handleAddProduct(item)}>
          <ProductAmount>
            <Icon name="add-shopping-cart" color="#fff" size={20} />
            <ProductAmountText>0</ProductAmountText>
          </ProductAmount>
          <AddCartText>ADICIONAR</AddCartText>
        </AddCart>
      </Product>
    );
  };

  render() {
    const { products } = this.state;

    return (
      <Container>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={products}
          extraData={this.props}
          keyExtractor={item => String(item.id)}
          renderItem={this.renderProduct}
        />
      </Container>
    );
  }
}

const mapDispatchToProps = dispatch =>
  bindActionCreators(CartActions, dispatch);

export default connect(
  null,
  mapDispatchToProps
)(Home);
