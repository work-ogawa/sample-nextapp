import useSWR from 'swr';

type User = {
    name: string
}

const Profile = () => {
    // fetcher関数に URL が渡される.
    // fetcherはデータを返す任意の非同期関数が入る
    const { data, error } = useSWR<User>('/api/User', fetcher)

    if (error) return <div>failed to load.</div>
    if (!data) return <div>loading...</div>
    return <div>Hello {data.name}!</div>
}
