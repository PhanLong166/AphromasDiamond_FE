import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
    ProductID: 0,
    imageUploadList: [],
    JewelrySettingID: 0,
}

export const name = 'upload';

export const uploadSliceDiaProduct = createSlice({
    name,
    initialState,
    reducers: {
        setProductID: (state, action) => {
            state.ProductID = action.payload;
        },
        setImageUploadList: (state, action) => {
            state.imageUploadList = action.payload;
        },
    }
});

export const { setProductID, setImageUploadList } = uploadSliceDiaProduct.actions;

export default uploadSliceDiaProduct;