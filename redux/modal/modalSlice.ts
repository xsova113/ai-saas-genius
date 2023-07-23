import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

export interface ModalState {
  isOpen: boolean;
}

const initialState: ModalState = {
  isOpen: false,
};

export const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    onOpen: (state) => {
      state.isOpen = true;
    },
    onClose: (state) => {
      state.isOpen = false;
    },
  },
});

export const isOpen = (state: RootState) => state.modal.isOpen;

// Action creators are generated for each case reducer function
export const { onOpen, onClose } = modalSlice.actions;

export default modalSlice.reducer;
