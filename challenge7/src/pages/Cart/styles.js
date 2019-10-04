import Styled from 'styled-components/native';

export const Container = Styled.View`
  background: #fff;
  padding: 12px;
  margin: 20px;
  border-radius: 4px;
  justify-content: center;
`;

export const Products = Styled.FlatList`
  padding: 5px;
`;

export const Product = Styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const ProductImage = Styled.Image`
  width: 60px;
  height: 60px;
`;

export const ProductTitle = Styled.Text.attrs({
  numberOfLines: 2,
})`
  font-size: 14px;
`;

export const ProductPrice = Styled.Text`
  font-size: 16px;
  font-weight: bold;
  margin-top: 5px;
`;

export const ProductDetails = Styled.View`
  flex-direction: column;
  text-align: left;
  margin: 0 5px;
`;

export const ProductDelete = Styled.TouchableOpacity``;

export const ProductQuantity = Styled.InputText``;

export const ProductControls = Styled.View`
  background: #eee;
`;

export const ProductControlsButton = Styled.TouchableOpacity``;
export const ProductInfo = Styled.View``;
