import Styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = Styled.View`
  background: #fff;
  padding: 12px;
  margin: 20px;
  border-radius: 4px;
  justify-content: center;
`;

export const Products = Styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
})`
  padding: 5px;
`;

export const Product = Styled.View`
  margin-top: 20px;
`;

export const ProductImage = Styled.Image`
  width: 70px;
  height: 70px;
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
  flex: 1;
  flex-direction: column;
  text-align: left;
  margin: 0 10px;
`;

export const ProductDelete = Styled.TouchableOpacity`
  min-width: 14px;
  min-height: 14px;
  padding: 6px;
`;

export const ProductQuantity = Styled.TextInput`
  background: #fff;
  border: 1px solid #ddd;
  border-radius: 4px;
  padding: 4px 15px;
  margin: 0 5px;
  text-align: left;
  color: #666;
`;

export const ProductControls = Styled.View`
  background: #eee;
  border-radius: 5px;
  margin-top: 15px;
  width: 100%;

  padding: 10px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const ProductControlsButton = Styled.TouchableOpacity`
  min-width: 14px;
  min-height: 14px;
`;

export const ProductInfo = Styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const TotalOrder = Styled.Text`
  font-size: 16px;
  font-weight: bold;
`;

export const ProductControlsQuantity = Styled.View`
  flex-direction: row;
  align-items: center;
`;

export const OrderContainer = Styled.View`
  flex-direction: column;
  align-items: center;
`;

export const OrderTotal = Styled.View`
  align-items: center;
  margin: 15px 0;
`;

export const OrderTotalTitle = Styled.Text`
  color: #999;
  font-weight: bold;
  font-size: 20px;
`;

export const OrderTotalValue = Styled.Text`
  margin-top: 5px;
  color: #000;
  font-weight: bold;
  font-size: 30px;
`;

export const OrderFinalizeButton = Styled(RectButton)`
  background: #7259c1;
  padding: 12px;
  border-radius: 4px;
  width: 100%;
`;

export const OrderFinalizeButtonText = Styled.Text`
  color: #fff;
  font-weight: bold;
  text-align: center;
`;

export const ContainerEmpty = Styled.View`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const EmptyText = Styled.Text`
  margin-top: 20px;
  font-size: 20px;
  font-weight: bold;
  color: #000;
`;
