import Styled from 'styled-components/native';
import { darken } from 'polished';

export const Container = Styled.View`
  background: #191920;
`;

export const Product = Styled.View`
  background: #fff;
  padding: 10px;
  margin: 15px;
  width: 220px;
  border-radius: 4px;
`;

export const ProductImage = Styled.Image`
  width: 200px;
  height: 200px;
`;

export const ProductTitle = Styled.Text`
  font-size: 16px;
`;

export const ProductPrice = Styled.Text`
  margin: 14px 0;
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 14px;
`;

export const AddCart = Styled.TouchableOpacity`
  background: #7159c1;
  margin-top: auto;
  border-radius: 4px;

  flex-direction: row;
  align-items: center;
`;

export const ProductAmount = Styled.View`
  background: ${darken(0.03, '#7159c1')};
  padding: 12px;

  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;

  flex-direction: row;
  align-items: center;
`;

export const ProductAmountText = Styled.Text`
  color: #fff;
  margin: 0 4px 0 5px;
`;

export const AddCartText = Styled.Text`
  flex: 1;
  color: #fff;
  text-align: center;
  font-weight: bold;
  font-size: 14px;
`;
