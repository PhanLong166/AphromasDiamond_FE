import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
    JewelrySettingID: 0,
    // settingVariantList: [],
    JewelrySettingVariantID: 0,
    imageUploadList: [],
}

export const name = 'upload';

export const uploadSliceSetting = createSlice({
    name,
    initialState,
    reducers: {
        setJewelrySettingID: (state, action) => {
            state.JewelrySettingID = action.payload;
        },
        setJewelrySettingVariantID: (state, action) => {
            state.JewelrySettingVariantID = action.payload;
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

export const { setJewelrySettingID, setJewelrySettingVariantID, setImageUploadList } = uploadSliceSetting.actions;

export default uploadSliceSetting;