import useSWR from 'swr';

function useUserData() {
    const fetcher = (...args) => fetch(...args).then(res => res.json());
    const { data, error } = useSWR("http://localhost:5000/users", fetcher, {
        revalidateOnFocus: true,
        refreshWhenHidden: true,
        refreshWhenOffline: true,
        shouldRetryOnError: true,
        refreshInterval: 1
    });

    if (error) return <div>failed to load</div>
    if (!data) return <div>loading...</div>

    return {
        data: data.data,
        loading: !error && !data,
        isError: error
    }
}

export default useUserData;