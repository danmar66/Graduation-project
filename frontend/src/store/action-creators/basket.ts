import { Dispatch } from "react";
import { BasketAction, BasketActionTypes } from "../../types/basket";
import axios from "axios";

export const addToBasket = (id: string, getState: any) => {
  return async (dispatch: Dispatch<BasketAction>) => {
    try {
      const { data } = await axios.get(`http://localhost:5000/api/product/${id}`);

      dispatch({
        type: BasketActionTypes.ADD_TO_BASKET,
        payload: {
          id: data._id,
          img: data.img,
          title: data.title,
          price: data.price,
        },
      });

      localStorage.setItem("basket", JSON.stringify(data._id));
    } catch (error) {
      console.log(error);
    }
  };
};

export const deleteFromBasket =
  (id: string) => (dispatch: Dispatch<BasketAction>, getState: any) => {
    dispatch({
      type: BasketActionTypes.DELETE_FROM_BASKET,
      payload: id,
    });
  };
