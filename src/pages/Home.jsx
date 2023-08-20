import React, { useEffect, useState } from 'react';
import Spinner from '../components/Spinner';
import Product from '../components/Product';
import { products as localData } from '../data.js';

// const API_URL = 'https://api.escuelajs.co/api/v1/products';

const Home = () => {
    const [loading, setLoading] = useState(false);
    const [posts, setPosts] = useState([]);

    async function fetchProductData() {
        setLoading(true);
        try {
            // Fetching data directly from the imported localData
            setPosts(localData);
        } catch (error) {
            console.error("Error fetching data:", error);
            setPosts([]);
        }
        setLoading(false);
    }
    

    useEffect(() => {
        fetchProductData();
    }, []);

    return (
        <div>
            {loading ? (
                <Spinner />
            ) : (
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
    );
};

export default Home;
