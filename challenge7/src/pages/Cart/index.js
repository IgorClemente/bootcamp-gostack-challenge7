import React from 'react';
import { connect } from 'react-redux';

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
  TotalOrder,
  ProductControlsQuantity,
  OrderContainer,
  OrderTotal,
  OrderTotalTitle,
  OrderTotalValue,
  OrderFinalizeButton,
  OrderFinalizeButtonText,
} from './styles';

import Icon from 'react-native-vector-icons/MaterialIcons';

function Cart({ cart }) {
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
              <ProductControlsQuantity>
                <ProductControlsButton onPress={() => {}}>
                  <Icon
                    name="remove-circle-outline"
                    size={20}
                    color="#7159c1"
                  />
                </ProductControlsButton>
                <ProductQuantity editable={false} value={'0'} />
                <ProductControlsButton onPress={() => {}}>
                  <Icon name="add-circle-outline" size={20} color="#7159c1" />
                </ProductControlsButton>
              </ProductControlsQuantity>
              <TotalOrder>R$1290,00</TotalOrder>
            </ProductControls>
          </Product>
        )}
      />
      <OrderContainer>
        <OrderTotal>
          <OrderTotalTitle>TOTAL</OrderTotalTitle>
          <OrderTotalValue>R$1280,45</OrderTotalValue>
        </OrderTotal>
        <OrderFinalizeButton>
          <OrderFinalizeButtonText>FINALIZAR PEDIDO</OrderFinalizeButtonText>
        </OrderFinalizeButton>
      </OrderContainer>
    </Container>
  );
}

const mapStateToProps = state => ({
  cart: state.cart,
});

export default connect(
  mapStateToProps,
  null
)(Cart);
