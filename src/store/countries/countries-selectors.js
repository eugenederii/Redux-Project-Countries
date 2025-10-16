export const selectCounrtiesInfo = (state) => ({
  status: state.countries.status,
  error: state.countries.error,
  quantity: state.countries.length,
});

export const selectAllCountries = (state) => state.countries.list;
export const selectVisibleCountries = (state, { search = "" }) => {
  return state.countries.list.filter((country) =>
    country.name.toLowerCase().includes(search.toLocaleLowerCase())
  );
};
