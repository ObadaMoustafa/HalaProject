import { useState } from "react";
const useFetch = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  async function performFetch(url, method, body) {
    setError(null);
    setIsLoading(true);

    try {
      const response = await fetch(url, {
        headers: {
          "Content-Type": "application/json",
        },
        method,
        body: JSON.stringify(body),
      });

      const incomingData = await response.json();
      if (!incomingData.success) {
        setError(incomingData.result);
        return;
      } else {
        return incomingData;
      }
    } catch (error) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  }

  return { isLoading, error, performFetch };
};

export default useFetch;
