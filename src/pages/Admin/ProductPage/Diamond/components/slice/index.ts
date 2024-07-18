import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
    DiamondID: 0,
    imageUploadList: [],
    docsUploadList: []
}

export const name = 'upload';

export const uploadSlice = createSlice({
    name,
    initialState,
    reducers: {
        setDiamondID: (state, action) => {
            state.DiamondID = action.payload;
        },
        setImageUploadList: (state, action) => {
            state.imageUploadList = action.payload;
        },
        setDocsUploadList: (state, action) => {
            state.docsUploadList = action.payload;
        }
    }
});

export const { setDiamondID, setImageUploadList, setDocsUploadList } = uploadSlice.actions;

export default uploadSlice;