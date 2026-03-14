import { createSlice } from "@reduxjs/toolkit"

const productSlice = createSlice({
  name: "products",
  initialState: {
    lista: []
  },
  reducers: {
    setProdutos(state, action) {
      state.lista = action.payload
    }
  }
})

export const { setProdutos } = productSlice.actions

export default productSlice.reducer