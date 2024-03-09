import React,{useEffect, useState} from 'react'
import './Feed.css'
import moment from 'moment';
import thum1 from '../../assets/thumbnail1.png'
import thum2 from '../../assets/thumbnail2.png'
import thum3 from '../../assets/thumbnail3.png'
import thum4 from '../../assets/thumbnail4.png'
import thum5 from '../../assets/thumbnail5.png'
import thum6 from '../../assets/thumbnail6.png'
import thum7 from '../../assets/thumbnail7.png'
import thum8 from '../../assets/thumbnail8.png'
import { Link } from 'react-router-dom'
import {API_KEY} from '../../data'
import { value_converter } from '../../data';
const Feed = ({category}) => {
  const [data,setData] =useState([]);
  const fetchData = async()=>{
    const vdo_list = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=US&videoCategoryId=${category}&key=${API_KEY}`;
    await fetch(vdo_list).then(response=>response.json()).then(data=>setData(data.items))
  }
  useEffect(()=>{
    fetchData();
  },[category])
  return (
    <div className="feed">
      {data.map((item,index)=>{
        return(
          <Link to ={`video/${item.snippet.categoryId}/${item.id}`} className='card'>
          <img src={item.snippet.thumbnails.medium.url} alt="" />
          <h2>{item.snippet.title}</h2>
          <h4>{item.snippet.channelTitle}</h4>
          <p>{value_converter(item.statistics.viewCount)} views &bull; {moment(item.snippet.publishedAt).fromNow()}</p>
        </Link>
        )
      })}
    </div>
  )
}

export default Feed