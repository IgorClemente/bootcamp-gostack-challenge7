import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as CartActions from '../../store/modules/cart/actions';
import { formatPrice } from '../../util/format';

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
  ContainerEmpty,
  EmptyText,
} from './styles';

import Icon from 'react-native-vector-icons/MaterialIcons';

function Cart({ cart, updateAmountRequest, deleteProductSuccess, total }) {
  handleUpdateAmountIncrement = product => {
    const amount = product.amount + 1;
    updateAmountRequest(product.id, amount);
  };

  handleUpdateAmountDecrement = product => {
    const amount = product.amount - 1;
    updateAmountRequest(product.id, amount);
  };

  handleDeleteProduct = id => {
    deleteProductSuccess(id);
  };

  return (
    <Container>
      {cart.length ? (
        <>
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
                  <ProductDelete
                    onPress={() => this.handleDeleteProduct(item.id)}
                  >
                    <Icon name="delete-forever" color="#7159c1" size={24} />
                  </ProductDelete>
                </ProductInfo>
                <ProductControls>
                  <ProductControlsQuantity>
                    <ProductControlsButton
                      onPress={() => this.handleUpdateAmountDecrement(item)}
                    >
                      <Icon
                        name="remove-circle-outline"
                        size={20}
                        color="#7159c1"
                      />
                    </ProductControlsButton>
                    <ProductQuantity
                      editable={false}
                      value={String(item.amount)}
                    />
                    <ProductControlsButton
                      onPress={() => this.handleUpdateAmountIncrement(item)}
                    >
                      <Icon
                        name="add-circle-outline"
                        size={20}
                        color="#7159c1"
                      />
                    </ProductControlsButton>
                  </ProductControlsQuantity>
                  <TotalOrder>
                    {formatPrice(item.price * item.amount)}
                  </TotalOrder>
                </ProductControls>
              </Product>
            )}
          />
          <OrderContainer>
            <OrderTotal>
              <OrderTotalTitle>TOTAL</OrderTotalTitle>
              <OrderTotalValue>{formatPrice(total)}</OrderTotalValue>
            </OrderTotal>
            <OrderFinalizeButton>
              <OrderFinalizeButtonText>
                FINALIZAR PEDIDO
              </OrderFinalizeButtonText>
            </OrderFinalizeButton>
          </OrderContainer>
        </>
      ) : (
        <ContainerEmpty>
          <Icon name="remove-shopping-cart" size={64} color="#eee"></Icon>
          <EmptyText>Seu carrinho está vázio</EmptyText>
        </ContainerEmpty>
      )}
    </Container>
  );
}

const mapStateToProps = state => ({
  cart: state.cart,
  total: state.cart.reduce((total, product) => {
    total += product.price * product.amount;
    return total;
  }, 0),
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(CartActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Cart);
