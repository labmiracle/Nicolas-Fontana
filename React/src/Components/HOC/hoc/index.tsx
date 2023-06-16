import { useEffect, useState } from "react";

export interface Posts {
    userId: number;
    id: number;
    title: string;
    body: string;
}

export const withDataFetched = (Component: React.ComponentType<{ posts: Posts[] }>) => {
    const WrappedComponent = ({ url }: { url: string }) => {
        const [posts, setPosts] = useState([]);
        useEffect(() => {
            const fetchData = async () => {
                try {
                    const response = await fetch(url);
                    const data = await response.json();
                    setPosts(data);
                } catch (error) {
                    console.error("Error fetching data: ", error);
                }
            };
            fetchData();
        }, [url]);

        return <Component posts={posts} />;
    };
    return WrappedComponent;
};
