import React, { useEffect, useState } from 'react'
import Spinner from '../components/Spinner';
import Product from '../components/Product';

const Home = () => {
    const API_URL = 'https://fakestoreapi.com/products';
    const [loading, setLoading] = useState(false);
    const [posts, setPosts] = useState([]);
    async function fetchProductData() {
        setLoading(true);
        try {
            const res = await fetch(API_URL);
            const data = await res.json();
            setPosts(data);
        } catch (error) {
            console.log("Error ");
            setPosts([]);
        }
        setLoading(false);
    }

    useEffect(() => {
        fetchProductData();
    }, [])

    return (
        <div>
    {loading ? <Spinner /> : (
        <div>
            {posts.length > 0 ? (
                <div className='grid  xl:grid-cols-4 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-4 max-w-6xl p-2 mx-auto space-y-10 gap-4 min-h-[80vh]'>
                    {posts.map((post) => (
                        <Product key={post.id} post={post} />
                    ))}
                </div>
            ) : (
                <div className='flex justify-center items-center'>
                    <p>No data Found</p>
                </div>
            )}
        </div>
    )}
</div>

    )
};

export default Home; 
