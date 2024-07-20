import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
    JewelryID: 0,
    settingVariantList: [],
    imageUploadList: [],
    // Certificate: {
    //     Name: '',
    //     DiamondID: 0
    // }
}

export const name = 'upload';

export const uploadSliceSetting = createSlice({
    name,
    initialState,
    reducers: {
        setJewelryID: (state, action) => {
            state.JewelryID = action.payload;
        },
        setSettingVariantList: (state, action) => {
            state.settingVariantList = action.payload;
        },
        setImageUploadList: (state, action) => {
            state.imageUploadList = action.payload;
        },
        // setDocsUploadList: (state, action) => {
        //     state.docsUploadList = action.payload;
        // },
        // setCertificate: (state, action) => {
        //     state.Certificate = action.payload;
        // }
    }
});

export const { setJewelryID, setSettingVariantList, setImageUploadList } = uploadSliceSetting.actions;

export default uploadSliceSetting;