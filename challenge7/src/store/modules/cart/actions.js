export function addToCartRequest(id) {
  return {
    type: '@cart/ADD_PRODUCT_REQUEST',
    id,
  };
}

export function addToCartSuccess(product) {
  return {
    type: '@cart/ADD_PRODUCT_SUCCESS',
    product,
  };
}

export function 
