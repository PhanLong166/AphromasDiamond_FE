import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
    ProductID: 0,
    DiamondID: 0,
    JewelrySettingID: 0,
    imageUploadList: [],
}

export const name = 'upload';

export const uploadSliceDiaProduct = createSlice({
    name,
    initialState,
    reducers: {
        setProductID: (state, action) => {
            state.ProductID = action.payload;
        },
        setDiamondID: (state, action) => {
            state.DiamondID = action.payload;
        },
        setJewelrySettingID: (state, action) => {
            state.JewelrySettingID = action.payload;
        },
        setImageUploadList: (state, action) => {
            state.imageUploadList = action.payload;
        },
    }
});

export const { setProductID, setDiamondID, setJewelrySettingID, setImageUploadList } = uploadSliceDiaProduct.actions;

export default uploadSliceDiaProduct;