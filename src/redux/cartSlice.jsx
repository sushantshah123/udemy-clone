import { createSlice } from "@reduxjs/toolkit";

const initialState ={
    carts:[],
    totalAmount:0,
    totalQuantity:0,
}

const cartSlice = createSlice({
    name:"cartslice",
    initialState,
    reducers:{
        addToCart:(state,action)=>{
            const item = state.carts.findIndex((item)=>item.id === action.payload.id)
      if (item>=0) {
        state.carts[item].quantity += 1;
     
      } else {   
        state.carts.push({...action.payload, quantity:1})
       
      }
        },
        removeFromCart:(state,action)=>{
            state.carts = state.carts.filter((item)=>item.id!== action.payload.id);
        },
        resetCart:(state)=>{
            state.carts = []
        },
        increaseQuantity:(state,action) => {
            const item = state.carts.findIndex((item)=>item.id === action.payload.id)
            if(state.carts[item].quantity < 4){
              state.carts[item].quantity += 1;
            }else{
              state.carts[item].quantity = 4;
            }
          },
          decreaseQuantity:(state, action) => {
            const item = state.carts.findIndex((item)=>item.id === action.payload.id)
            if(state.carts[item].quantity > 1){
              state.carts[item].quantity -= 1;
            }else{
              state.carts[item].quantity = 1;
            }
        },
        // subTotal:(state) => {
        //     let {totalAmount, totalQuantity} = state.carts.reduce((cartTotal, cartItem)=>{
        //          const {quantity, price} = cartItem;
        //          const itemTotal = quantity * price;
        //          cartTotal.totalAmount += itemTotal;
        //          cartTotal.totalQuantity += quantity;
        //          return cartTotal
        //     },{
        //        totalAmount: 0,
        //        totalQuantity: 0
        //     })
        //     state.totalAmount = parseInt(totalAmount.toFixed(2))
        //     state.totalQuantity = totalQuantity
        //   },

        subTotal: (state) => {
          const { totalAmount, totalQuantity } = state.carts.reduce(
            (cartTotal, cartItem) => {
              const { quantity, price } = cartItem;
              const itemTotal = quantity * price;
              cartTotal.totalAmount += itemTotal;
              cartTotal.totalQuantity += quantity;
              return cartTotal;
            },
            {
              totalAmount: 0,
              totalQuantity: 0,
            }
          );
          state.totalAmount = parseFloat(totalAmount.toFixed(2)); 
          state.totalQuantity = totalQuantity;
        },
        
        
    }
});

export const {addToCart, removeFromCart, resetCart, subTotal, increaseQuantity, decreaseQuantity} = cartSlice.actions;
export default cartSlice.reducer;