import {combineReducers, configureStore, createReducer} from "@reduxjs/toolkit";
import SwapReducer from "@/src/state/swap/reducerSwap";
import AddLiquidityReducer from "@/src/state/addLiquidity/reducerAddLiquidity";

const store = configureStore({
    reducer: combineReducers({
        swap: SwapReducer,
        addLiquidity: AddLiquidityReducer
    })
});

export default store;
