import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Search from '../components/Search';

const Home = () => {
    const [loading, setLoading] = useState(false);

    const handleSearchSubmit = (isLoading) => {
        setLoading(isLoading);
    };

    return (
        <div className='home-styled'>
            <Navbar />
            <div className='content'>
                <div className='title'>
                    <h1>Hello,</h1>
                    <h2>How can I help you today?</h2>
                </div>
                <div className='grid'></div>
            </div>
            <Search handleSearchSubmit={handleSearchSubmit} />
            {loading && (
                <div className='overlay'>
                    <div className='loading-spinner'>
                        <i className="fas fa-spinner fa-spin fa-5x"></i>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Home;
