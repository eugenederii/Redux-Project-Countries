export const SET_COUNTRIES = "SET_COUNTRIES";
export const SET_LOADING = "SET_LOADING";
export const SET_ERROR = "SET_ERROR";

export const setCountries = (country) => ({
  type: SET_COUNTRIES,
  payload: country,
});

export const setLoading = () => ({
  type: SET_LOADING,
});

export const setError = (err) => ({
  type: SET_ERROR,
  payload: err,
});

export const loadCountries =
  () =>
  (dispatch, _, { client, api }) => {
    dispatch(setLoading());

    client
      .get(api.ALL_COUNTRIES)
      .then(({ data }) => {
        const countries = data.filter(
          (country) => country.name !== "Russian Federation" // idi naxyi
        );

        dispatch(setCountries(countries));
      })
      .catch((err) => dispatch(setError(err)));
  };
