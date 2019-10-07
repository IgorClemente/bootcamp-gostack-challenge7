import { call, select, all, put, takeLatest } from 'redux-saga/effects';

import api from '../../../services/api';
import { formatPrice } from '../../../util/format';

import { addToCartSuccess } from './actions';

import NavigationService from '../../../services/navigation';

function* addToCart({ id }) {
  const productExists = yield select(state =>
    state.cart.find(product => product.id === id)
  );

  if (productExists) {
    //
  } else {
    const response = yield call(api.get, `/products/${id}`);

    const data = {
      ...response.data,
      amount: 1,
      priceFormatted: formatPrice(response.data.price),
    };

    yield put(addToCartSuccess(data));

    NavigationService.navigate('Cart');
  }
}

export default all([takeLatest('@cart/ADD_PRODUCT_REQUEST', addToCart)]);
