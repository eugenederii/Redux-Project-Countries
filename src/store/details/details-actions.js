export const SET_LOADING = "@@/SET_LOADING";
export const SET_ERROR = "@@/SET_ERROR";
export const SET_COUNTRY = "@@/SET_COUNTRY";
export const CLEAR_DETAILS = "@@/CLEAR_DETAILS";
export const SET_NEIGHBORDS = "@@/SET_NEIGHBORDS";

const setLoading = () => ({
  type: SET_LOADING,
});

const setError = (error) => ({
  type: SET_ERROR,
  payload: error,
});

const setCountry = (country) => ({
  type: SET_COUNTRY,
  payload: country,
});

export const clearDetails = () => ({
  type: CLEAR_DETAILS,
});

const setNeighbords = (countries) => ({
  type: SET_NEIGHBORDS,
  payload: countries,
});

export const loadCountryByName =
  (name) =>
  (dispatch, _, { client, api }) => {
    dispatch(setLoading());

    client
      .get(api.searchByCountry(name))
      .then(({ data }) => dispatch(setCountry(data[0])))
      .catch((err) => dispatch(setError(err.message)));
  };

export const loadNeighbords =
  (borders) =>
  (dispatch, _, { client, api }) => {
    client
      .get(api.filterByCode(borders))
      .then(({ data }) =>
        dispatch(setNeighbords(data.map((country) => country.name)))
      )
      .catch(console.error);
  };
