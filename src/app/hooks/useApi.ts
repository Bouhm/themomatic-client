import { useState, useCallback } from 'react';
import { IThemeConfig } from '../data/interfaces';

const useApi = (apiUrl: string) => {
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState<string|null>(null);
  const [data, setData] = useState<IThemeConfig|null>(null)

  const request = useCallback(async (endpoint: string, method = 'POST', query = '') => {
    setLoading(true);
    setError(null);

    try {
      const headers = {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.CLIENT_KEY}`, // Bare bones measure
      };

      const options: RequestInit = {
        method,
        headers,
        body: JSON.stringify({
          query
        })
      };

      const response = await fetch(`${apiUrl}${endpoint}`, options);

      if (!response.ok) {
        throw new Error(`Error: ${response.status} ${response.statusText}`);
      }

      const result = await response.json();
      setData(result.data)
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError('An unknown error occurred');
      }
    } finally {
      setLoading(false);
    }
  }, [apiUrl]);

  return {
    isLoading,
    error,
    data,
    generateTheme: (query: string) => request('/generateTheme', 'POST', query),
  };
};

export default useApi;