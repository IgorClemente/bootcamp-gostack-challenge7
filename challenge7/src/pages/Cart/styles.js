import Styled from 'styled-components/native';

export const Container = Styled.View`
  background: #fff;
  padding: 12px;
  margin: 20px;
  border-radius: 4px;
  justify-content: center;
`;

export const Products = Styled.FlatList`
  padding: 12px;
  margin: 12px;
  background: #333;
`;

export const Product = Styled.View`
  flex: 1;
  background: #333;
  align-items: center;
  justify-content: center;
`;

export const ProductImage = Styled.Image`
  flex: 1;
  width: 100px;
  height: 100px;
`;

export const ProductTitle = Styled.Text`
  font-size: 14px;
  font-weight: bold;
`;

export const ProductPrice = Styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: #999;
`;
