import Styled from 'styled-components/native';

import logo from '../../assets/logo.png';

export const Wrapper = Styled.SafeAreaView`
  background: #141419;
  flex-direction: row;
`;

export const Container = Styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
  padding: 20px;
`;

export const Logo = Styled.Image.attrs({
  source: logo,
})`
  width: 185px;
  height: 24px;
`;

export const BasketContainer = Styled.TouchableOpacity`
  width: 24px;
  height: 24px;
  flex: 1;
  align-items: flex-end;
  justify-content: flex-end;
`;

export const CartQuantity = Styled.Text`
  position: absolute; 
  color: #FFF;
  background: #7159c1;
  top: -8px;
  right: -8px;
  min-width: 18px;
  min-height: 18px;
  border-radius: 9px;
  text-align: center;
  font-size: 12px;
  padding: 2px;
  overflow: hidden;
`;
