import { createSlice } from "@reduxjs/toolkit";
import zxcvbn from "zxcvbn";
import { lowers, numbers, symbols, uppers } from "./type";

export interface GeneratorState {
  password: {
    password: string;
    score: number;
    crack_times: string;
  };
  length: number;
  includeLowercase: boolean;
  includeUppercase: boolean;
  includeNumber: boolean;
  includeSymbols: boolean;
}

const initialState: GeneratorState = {
  password: {
    password: "",
    score: 0,
    crack_times: "0",
  },
  length: 5,
  includeLowercase: true,
  includeUppercase: true,
  includeNumber: true,
  includeSymbols: true,
};

export const generatorSlice = createSlice({
  name: "generator",
  initialState,
  reducers: {
    generatePassword: (state) => {
      const password = generate(
        state.length,
        state.includeLowercase,
        state.includeUppercase,
        state.includeNumber,
        state.includeSymbols
      );
      const strength = zxcvbn(password);
      state.password = {
        password: password,
        score: strength.score,
        crack_times: strength.crack_times_display.offline_fast_hashing_1e10_per_second.toString(),
      };
    },
    changeLength: (state, action) => {
      state.length = action.payload;
      const password = generate(
        state.length,
        state.includeLowercase,
        state.includeUppercase,
        state.includeNumber,
        state.includeSymbols
      );
      const strength = zxcvbn(password);
      state.password = {
        password: password,
        score: strength.score,
        crack_times: strength.crack_times_display.offline_fast_hashing_1e10_per_second.toString(),
      };
    },
    toggleIncludeLowercase: (state) => {
      state.includeLowercase = !state.includeLowercase;
      const password = generate(
        state.length,
        state.includeLowercase,
        state.includeUppercase,
        state.includeNumber,
        state.includeSymbols
      );
      const strength = zxcvbn(password);
      state.password = {
        password: password,
        score: strength.score,
        crack_times: strength.crack_times_display.offline_fast_hashing_1e10_per_second.toString(),
      };
    },
    toggleIncludeUppercase: (state) => {
      state.includeUppercase = !state.includeUppercase;
      const password = generate(
        state.length,
        state.includeLowercase,
        state.includeUppercase,
        state.includeNumber,
        state.includeSymbols
      );
      const strength = zxcvbn(password);
      state.password = {
        password: password,
        score: strength.score,
        crack_times: strength.crack_times_display.offline_fast_hashing_1e10_per_second.toString(),
      };
    },
    toggleIncludeNumber: (state) => {
      state.includeNumber = !state.includeNumber;
      const password = generate(
        state.length,
        state.includeLowercase,
        state.includeUppercase,
        state.includeNumber,
        state.includeSymbols
      );
      const strength = zxcvbn(password);
      state.password = {
        password: password,
        score: strength.score,
        crack_times: strength.crack_times_display.offline_fast_hashing_1e10_per_second.toString(),
      };
    },
    toggleIncludeSymbols: (state) => {
      state.includeSymbols = !state.includeSymbols;
      const password = generate(
        state.length,
        state.includeLowercase,
        state.includeUppercase,
        state.includeNumber,
        state.includeSymbols
      );
      const strength = zxcvbn(password);
      state.password = {
        password: password,
        score: strength.score,
        crack_times: strength.crack_times_display.offline_slow_hashing_1e4_per_second.toString(),
      };
    },
  },
});

const generate = (
  length: number,
  includeLowercase: boolean,
  includeUppercase: boolean,
  includeNumber: boolean,
  includeSymbols: boolean
) => {
  let charset = "";
  charset += includeLowercase ? lowers : "";
  charset += includeUppercase ? uppers : "";
  charset += includeNumber ? numbers : "";
  charset += includeSymbols ? symbols : "";
  let password = "";
  if (charset.length === 0) {
    return password;
  }

  self.crypto.getRandomValues(new Uint32Array(length)).forEach((x) => {
    password += charset[x % charset.length];
  });

  return password;
};

export const {
  generatePassword,
  changeLength,
  toggleIncludeLowercase,
  toggleIncludeUppercase,
  toggleIncludeNumber,
  toggleIncludeSymbols,
} = generatorSlice.actions;

export default generatorSlice.reducer;
