import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
  const [data, setData] = useState({});
  useEffect(() => {
    fetch(
      `https://2024-03-06.currency-api.pages.dev/v1/currencies/${currency}.json`
    )
      .then((resp) => resp.json())
      .then((resp) => setData(resp[currency]));
  }, [currency]);

  return data;
}
export default useCurrencyInfo
