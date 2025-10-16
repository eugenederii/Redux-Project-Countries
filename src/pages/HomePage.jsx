import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { List } from "../components/List";
import { Card } from "../components/Card";
import { Controls } from "../components/Controls";
import { useDispatch, useSelector } from "react-redux";
import {
  selectCounrtiesInfo,
  selectVisibleCountries,
} from "../store/countries/countries-selectors";

import { loadCountries } from "../store/countries/countries-actions";
import { selectSearch } from "../store/controls/controls-selectors";

export const HomePage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { status, error, quantity } = useSelector(selectCounrtiesInfo);
  const search = useSelector(selectSearch);

  const countries = useSelector((state) =>
    selectVisibleCountries(state, { search })
  );

  useEffect(() => {
    if (!quantity) {
      dispatch(loadCountries());
    }
  }, [dispatch, quantity]);

  return (
    <>
      <Controls />

      {error && <h2>Error</h2>}
      {status === "loading" && <h3>Loading...</h3>}

      {status === "received" && (
        <List>
          {countries.map((c) => {
            const countryInfo = {
              img: c.flags.png,
              name: c.name,
              info: [
                {
                  title: "Population",
                  description: c.population.toLocaleString(),
                },
                {
                  title: "Region",
                  description: c.region,
                },
                {
                  title: "Capital",
                  description: c.capital,
                },
              ],
            };

            return (
              <Card
                key={c.name}
                onClick={() => navigate(`/country/${c.name}`)}
                {...countryInfo}
              />
            );
          })}
        </List>
      )}
    </>
  );
};
