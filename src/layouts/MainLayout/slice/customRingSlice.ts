import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface CustomState {
    selectedDiamond: number,
    selectedSetting: number,
    completedRing: number
}

const initialRingState: CustomState = {
    selectedDiamond: 0,
    selectedSetting: 0,
    completedRing: 0
}

export const customSlice = createSlice({
    name: 'customRing',
    initialState: initialRingState,
    reducers: {
        setSelectedDiamond: (state, action: PayloadAction<number>) => {
            state.selectedDiamond = action.payload
        },
        setSelectedSetting: (state, action: PayloadAction<number>) => {
            state.selectedSetting = action.payload;
        },
        setCompletedRing: (state, action: PayloadAction<number>) => {
            state.completedRing = action.payload;
        }
    }
});

export const { setSelectedDiamond, setSelectedSetting, setCompletedRing } = customSlice.actions;

export default customSlice.reducer;
