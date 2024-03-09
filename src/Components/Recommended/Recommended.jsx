import React, { useEffect, useState } from 'react';
import './Recommended.css';
import { API_KEY, value_converter } from '../../data';
import { Link } from 'react-router-dom';

const Recommended = ({ categoryId }) => {
    const [apiData, setApiData] = useState([]);

    const fetchVideoData = async () => {
        const relateVdo = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=30&regionCode=US&videoCategoryId=${categoryId}&key=${API_KEY}`;
        await fetch(relateVdo)
            .then(res => res.json())
            .then(data => setApiData(data.items));
    };

    useEffect(() => {
        fetchVideoData();
    }, []);

    return (
        <div className='recommend'>
            {apiData.map((item, index) => (
                <Link to={`/video/${item.snippet.categoryId}/${item.id}`} key={index} className="side-vdo-list">
                    <img src={item.snippet.thumbnails.medium.url} alt="" />
                    <div className="vdo-info">
                        <h4>{item.snippet.title}</h4>
                        <p>{item.snippet.channelTitle}</p>
                        <p>{value_converter(item.statistics.viewCount)} Views</p>
                    </div>
                </Link>
            ))}
        </div>
    );
};

export default Recommended;
