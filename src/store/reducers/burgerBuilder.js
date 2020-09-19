import * as actionTypes from "../actions/actionTypes";
import { updateObject } from "../utility";

const INGREDIENTS_COST = {
  salad: 0.4,
  cheese: 0.6,
  meat: 2,
  bacon: 1.5,
};

const initialState = {
  ingredients: null,
  totalPrice: 4,
  error: false,
  building: false,
};

const addRemoveIngredient = (state, action, operation) => {
  let updatedIngredient;
  if (operation === "add") {
    updatedIngredient = {
      [action.ingredientName]: state.ingredients[action.ingredientName] + 1,
    };
  } else {
    updatedIngredient = {
      [action.ingredientName]: state.ingredients[action.ingredientName] - 1,
    };
  }
  const updatedIngredients = updateObject(state.ingredients, updatedIngredient);
  const updatedState = {
    ingredients: updatedIngredients,
    totalPrice:
      operation === "add"
        ? state.totalPrice + INGREDIENTS_COST[action.ingredientName]
        : state.totalPrice - INGREDIENTS_COST[action.ingredientName],
    building: true,
  };
  return updateObject(state, updatedState);
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_INGREDIENT:
      return addRemoveIngredient(state, action, "add");
    case actionTypes.REMOVE_INGREDIENT:
      return addRemoveIngredient(state, action, "sub");
    case actionTypes.SET_INGREDIENTS:
      return updateObject(state, {
        ingredients: {
          salad: action.ingredients.salad,
          bacon: action.ingredients.bacon,
          cheese: action.ingredients.cheese,
          meat: action.ingredients.meat,
        },
        totalPrice: 4,
        error: false,
        building: false,
      });
    case actionTypes.FETCH_INGREDIENTS_FALIED:
      return updateObject(state, { error: true });
    default:
      return state;
  }
};

export default reducer;
