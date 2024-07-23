import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
    ProductID: 0,
    imageUploadList: [],
    docsUploadList: []
}

export const name = 'upload';

export const uploadSliceProduct = createSlice({
    name,
    initialState,
    reducers: {
        setProductID: (state, action) => {
            state.ProductID = action.payload;
        },
        setImageUploadList: (state, action) => {
            state.imageUploadList = action.payload;
        },
        setDocsUploadList: (state, action) => {
            state.docsUploadList = action.payload;
        },
    }
});

export const { setProductID, setImageUploadList, setDocsUploadList } = uploadSliceProduct.actions;

export default uploadSliceProduct;