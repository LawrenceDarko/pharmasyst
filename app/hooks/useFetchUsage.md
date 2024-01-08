import React, { useEffect } from 'react';
import useFetch from './useFetch';

interface UserData {
  id: number;
  name: string;
  email: string;
}

const ExampleComponent: React.FC = () => {
  const apiEndpoint = 'https://api.example.com/users';
  const requestData = { /* My request data */ };

  const {
    data,
    isLoading,
    isSuccess,
    isError,
    isRefetching,
    refetchData,
    resetState,
    transformResponse,
    setCustomHeaders,
    setConfig,
    cancelRequest,
    setPollingInterval,
  } = useFetch<UserData>(apiEndpoint, 'GET', requestData, {
    headers: {
      Authorization: 'Bearer yourAccessToken',
    },
  });

  useEffect(() => {
    // Example: Transforming the response data
    transformResponse((responseData) => {
      // Perform custom transformation here
      return responseData ? { ...responseData, transformed: true } : null;
    });

    // Example: Set custom headers dynamically
    setCustomHeaders({
      'X-Custom-Header': 'custom-value',
    });

    // Example: Set additional configuration dynamically
    setConfig({
      timeout: 5000,
    });

    // Example: Cancel the request
    // cancelRequest();

    // Example: Polling at intervals (e.g., every 5 seconds)
    const pollingInterval = setPollingInterval(5000);

    // Clean up function for polling
    return () => clearInterval(pollingInterval);
  }, [data]); // Include dependencies as needed

  return (
    <div>
      {isLoading && <p>Loading...</p>}
      {isSuccess && <p>Data: {JSON.stringify(data)}</p>}
      {isError && <p>Error occurred</p>}
      <button onClick={refetchData} disabled={isRefetching}>
        {isRefetching ? 'Refetching...' : 'Refetch Data'}
      </button>
      <button onClick={resetState}>Reset State</button>
    </div>
  );
};

export default ExampleComponent;
