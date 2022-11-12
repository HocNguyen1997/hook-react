import { useEffect, useState } from "react";
import axios from "axios";
import moment from "moment";

const Covid = () => {
  const [dataCovid, setDataCovid] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(async () => {
    setTimeout(async () => {
      let res = await axios.get(
        "https://api.covid19api.com/country/vietnam?from=2021-10-01T00:00:00Z&to=2021-10-20T00:00:00Z"
      );
      let data = res && res.data ? res.data : [];
      setDataCovid(data.reverse());
      setLoading(false);
    }, 500);
  }, []);
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
          {loading === false &&
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
          {loading === true && (
            <tr>
              <td colSpan={5} style={{ textAlign: "center" }}>
                Loading...
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </>
  );
};

export default Covid;
