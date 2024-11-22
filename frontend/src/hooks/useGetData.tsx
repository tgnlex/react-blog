import { useState, useEffect } from 'react';
import axios from 'axios';

function useGetData(url: string) {
  const [data, setData] = useState<unknown|null>(null);
  const [loading, setLoading] = useState<string|null>(null);
  const [error, setError] = useState<string|null>(null);

  useEffect(() => {
    setLoading('loading...');
    setData(null);
    setError(null);
    const source = axios.CancelToken.source();
    axios.get(url, { cancelToken: source.token })
    .then(res => {
        setLoading(null);
        res.data.content && setData(res.data.content);
    })
    .catch(err => {
        setLoading(null);
        setError(err.message);
    })
    return () => {
      source.cancel();
    }
  }, [url])
  return { data, loading, error }
}
export default useGetData