import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "./store";

type cardType ={
    name: "Arcade" | "Pro" | "Advanced" | null;
    price: number;
  };
  type serviceType ={
    checked:boolean,
    price:number
  }

type SubscriptionState = {
  subscription: "Monthly" | "Yearly";
  card: cardType,
  services: {
    "Online service": serviceType;
    "Larger storage": serviceType;
    "Customizable profile": serviceType;
  };
};

const serviceInitial = {
    checked:false,
    price:0
}

const initialState: SubscriptionState = {
  subscription: "Monthly",
  card: {name:null,price:0},
  services: {
    "Online service": serviceInitial,
    "Larger storage": serviceInitial,
    "Customizable profile": serviceInitial,
  },
};

export const subscriptionSliece = createSlice({
  name: "subscription",
  initialState,
  reducers: {
    subscription: (state) => {
      if (state.subscription === "Monthly") {
        state.subscription = "Yearly";
      } else {
        state.subscription = "Monthly";
      }
    },

    cardSelection: (
      state,
      action: PayloadAction<cardType>
    ) => {
      state.card = action.payload;
    },

    serviceAction: (
      state,
      action: PayloadAction<{service:"Online service" | "Larger storage" | "Customizable profile", price:number}>
    ) => {
      state.services = {
        ...state.services,
        [action.payload.service]: {
            checked: !state.services[action.payload.service]?.checked ,
            price: action.payload.price
        }
      };
    },
  },
});

export const { subscription, cardSelection, serviceAction } =
  subscriptionSliece.actions;

export const subscriptionState = (state: RootState) =>
  state.subscriptions.subscription;
export const cardState = (state: RootState) => state.subscriptions.card;
export const serviceState = (state: RootState) => state.subscriptions.services;

export default subscriptionSliece.reducer;
