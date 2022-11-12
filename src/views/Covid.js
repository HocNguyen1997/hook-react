import { useEffect, useState, useCallback } from "react";
import axios from "axios";
import moment from "moment";

const Covid = () => {
  const [dataCovid, setDataCovid] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const fetchMyAPI = useCallback(async () => {
    let response = await axios.get(
      "https://api.covid19api.com/country/vietnam?from=2021-10-01T00:00:00Z&to=2021-10-20T00:00:00Z"
    );
    let data = response && response.data ? response.data : [];
    setDataCovid(data.reverse());
  }, []);

  useEffect(() => {
    try {
      fetchMyAPI();
      setIsLoading(false);
      setIsError(false);
    } catch (error) {
      setIsError(true);
      setIsLoading(false);
    }
  }, [fetchMyAPI]);
  return (
    <>
      <h3>Covid 19 tracking in VietName: </h3>
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Confirmed</th>
            <th>Active</th>
            <th>Deaths</th>
            <th>Recovered</th>
          </tr>
        </thead>
        <tbody>
          {isError === false &&
            isLoading === false &&
            dataCovid &&
            dataCovid.length > 0 &&
            dataCovid.map((item) => {
              return (
                <tr key={item.ID}>
                  <td>{moment(item.Date).format("DD/MM/YYYY")}</td>
                  <td>{item.Confirmed}</td>
                  <td>{item.Active}</td>
                  <td>{item.Deaths}</td>
                  <td>{item.Recovered}</td>
                </tr>
              );
            })}
          {isLoading === true && (
            <tr>
              <td colSpan={5} style={{ textAlign: "center" }}>
                isLoading...
              </td>
            </tr>
          )}
          {isError === true && (
            <tr>
              <td colSpan={5} style={{ textAlign: "center" }}>
                Something wrong...
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </>
  );
};

export default Covid;
