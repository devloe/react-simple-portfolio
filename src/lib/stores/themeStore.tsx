import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { detectColorScheme, setColorScheme } from "../util";

export type Skin = "dark" | "light";

export type ThemeState = {
    skin: Skin
}

const initialSkin = detectColorScheme();

setColorScheme(initialSkin);

const initialState: ThemeState = {
    skin: initialSkin
}

const slice = createSlice({
    name: 'theme',
    initialState,
    reducers: {
      setSkin: (state, action: PayloadAction<Skin>) => { 
        state.skin = action.payload;

        setColorScheme(action.payload);
      }
    }
  })

  export default slice;