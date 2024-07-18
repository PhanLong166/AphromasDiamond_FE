import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
    DiamondID: 0,
    imageUploadList: [],
    docsUploadList: [],
    Certificate: {
        Name: '',
        DiamondID: 0
    }
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
        },
        setCertificate: (state, action) => {
            state.Certificate = action.payload;
        }
    }
});

export const { setDiamondID, setImageUploadList, setDocsUploadList, setCertificate } = uploadSlice.actions;

export default uploadSlice;