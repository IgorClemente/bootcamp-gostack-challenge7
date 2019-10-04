import React, { Component } from 'react';

import {
  Container,
  Products,
  Product,
  ProductImage,
  ProductTitle,
  ProductPrice,
  ProductDetails,
  ProductDelete,
  ProductQuantity,
  ProductControls,
  ProductControlsButton,
  ProductInfo,
} from './styles';

import Icon from 'react-native-vector-icons/MaterialIcons';

export default class Home extends Component {
  state = {
    cart: [
      {
        id: 1,
        title: 'Tênis de Caminhada Leve Confortável',
        price: 179.9,
        priceFormatted: 'R$ 129,90',
        image:
          'https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/modulo-redux/tenis1.jpg',
      },
    ],
  };

  render() {
    const { cart } = this.state;
    const { product } = this.props;

    return (
      <Container>
        <Products
          data={cart}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <Product>
              <ProductInfo>
                <ProductImage source={{ uri: item.image }}></ProductImage>
                <ProductDetails>
                  <ProductTitle>{item.title}</ProductTitle>
                  <ProductPrice>{item.priceFormatted}</ProductPrice>
                </ProductDetails>
                <ProductDelete>
                  <Icon name="delete-forever" color="#7159c1" size={24} />
                </ProductDelete>
              </ProductInfo>
              <ProductControls>
                <ProductControlsButton onPress={() => {}}>
                  <Icon
                    name="remove-circle-outline"
                    size={20}
                    color="#7159c1"
                  />
                </ProductControlsButton>
                <ProductQuantity type="number" value={0} />
                <ProductControlsButton onPress={() => {}}>
                  <Icon name="add-circle-outline" size={20} color="#7159c1" />
                </ProductControlsButton>
              </ProductControls>
            </Product>
          )}
        />
      </Container>
    );
  }
}
