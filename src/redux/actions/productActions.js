import * as actionTypes from "./actionTypes";

export function getProductsSuccess(products){
    return {type:actionTypes.GET_PRODUCTS_SUCCESS, payload: products}
}

export function getProducts() {
  return function(dispatch) {
    let url = "http://localhost:3000/products";
    return fetch(url)
      .then(resp => resp.json())
      .then(data => dispatch(getProductsSuccess(data)));
  };
}