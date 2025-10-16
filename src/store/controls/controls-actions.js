export const SET_SEARCH = "@@/SET_SEARCH";
export const SET_REGION = "@@/SET_REGION";
export const CLEAR_REGION = "@@/CLEAR_REGION";

export const setSearch = (search) => ({
  type: SET_SEARCH,
  payload: search,
});

export const setRegion = (region) => ({
  type: SET_REGION,
  payload: region,
});

export const clearRegion = () => ({
  type: CLEAR_REGION,
});
