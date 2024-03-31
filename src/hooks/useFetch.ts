import { useEffect, useState } from "react";

export function useFetch<T>(query: string) {
  const [data, setData] = useState<T | undefined>(undefined);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<boolean>(false);

  const fetchData = async (url: string) => {
    setLoading(true);
    try {
      const response = await fetch(url);
      const data = await response.json();
      setData(data);
    } catch (error) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData(query);
  }, [query]);

  return { data, loading, error };
}
