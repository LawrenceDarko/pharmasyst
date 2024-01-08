import { useState, useEffect } from 'react';
import axios from 'axios';
import useAxiosPrivate from './useAxiosPrivate';

const useFetch = (url: any, method = 'GET', config = {}) => {
    const axiosInstance = useAxiosPrivate();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [errorState, setErrorState] = useState(false)

  const fetchData = async () => {
    try {
      const response = await axiosInstance({
        url,
        method,
        ...config,
      });
      setData(response.data);
    } catch (error: any) {
      setError(error);
      setErrorState(true)
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // Empty dependency array means this effect runs once on mount

  return { data, loading, error, errorState, refetch: fetchData };
};

export default useFetch;
