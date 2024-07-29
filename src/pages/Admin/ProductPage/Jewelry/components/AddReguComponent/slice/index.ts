import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
    ProductID: 0,
    JewelrySettingID: 0,
    imageUploadList: [],
}

export const name = 'upload';

export const uploadSliceReguProduct = createSlice({
    name,
    initialState,
    reducers: {
        setProductID: (state, action) => {
            state.ProductID = action.payload;
        },
        setJewelrySettingID: (state, action) => {
            state.JewelrySettingID = action.payload;
        },
        setImageUploadList: (state, action) => {
            state.imageUploadList = action.payload;
        },
    }
});

export const { setProductID, setJewelrySettingID, setImageUploadList } = uploadSliceReguProduct.actions;

export default uploadSliceReguProduct;