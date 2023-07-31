/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-case-declarations */
import {
  ADD_TO_CART,
  UPDATE_CART,
  REMOVE_FROM_CART,
  CHECKOUT,
  SET_DELIVERY_CHOICE,
} from '../../actions/actionTypes';

// Vérifier et créer les clés manquantes dans le stockage local avec des valeurs par défaut
if (!localStorage.getItem('items')) {
  localStorage.setItem('items', JSON.stringify([]));
}

if (!localStorage.getItem('delivery')) {
  localStorage.setItem('delivery', JSON.stringify('standard'));
}

// Initialisation de "initialState"
const initialState: {
  items: any;
  delivery: string;
} = {
  items: JSON.parse(localStorage.getItem('items') || '[]'),
  delivery: JSON.parse(localStorage.getItem('delivery') || '"standard"'),
};

const mapItem = (item, payload) => {
  if (item.id === payload.product.id) {
    return { ...item, quantity: item.quantity + 1 };
  }
  return item;
};
const updateMapItem = (item, payload) => {
  if (item.id === payload.id) {
    return { ...item, quantity: payload.quantity };
  }
  return item;
};
const filterItem = (item, payload) => item.id !== payload.id;

const cart = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_TO_CART:
      const itemFound = !!state.items.find(
        (item) => item.id === payload.product.id
      );
      if (itemFound) {
        return {
          ...state,
          items: state.items.map((item) => mapItem(item, payload)),
        };
      }
      return {
        ...state,
        items: [{ ...payload.product, quantity: 1 }, ...state.items],
      };
    case REMOVE_FROM_CART:
      return {
        ...state,
        items: state.items.filter((item) => filterItem(item, payload)),
      };
    case UPDATE_CART:
      return {
        ...state,
        items: state.items.map((item) => updateMapItem(item, payload)),
      };
    case SET_DELIVERY_CHOICE:
      return { ...state, delivery: payload.choice };
    case CHECKOUT:
      return { delivery: 'standard', items: [] };
    default:
      return state;
  }
};
export default cart;
