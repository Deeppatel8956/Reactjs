import React,{useEffect, useState} from 'react';
import './HomeVideos.css'
import SkeletonLoader from '../Skeletonloader/SkeletonLoader';
import VideoCard from '../Videocard/VideoCard';
function HomeVideos(props) {
    const [pages,setPages]=useState(1)
    const[loading,setLoading]=useState(false)
    const[end,setEnd]=useState(false)
    const [videos,setVideos]=useState([])
    const [error,setError]=useState('')

    useEffect(()=>{
        const fetchDatas=async()=>{
            setLoading(true)
            try {
                const responce=await fetch(
                    `http://localhost:3000/videos?_page=${pages}&_limit=5`
                )
                if (!responce.ok) {
                    throw new Error(`HTTP error! Status: ${responce.status}`);
                }
                const dataArr=await responce.json()
                  if (!dataArr) {
                     setError(`Data not recive`)
                     return
                  }
                  if (dataArr.length<1) {
                    setEnd(true)
                  }
                  setVideos((pre)=>[...pre,...dataArr])
            } catch (error) {
                setError(`${error.message}`)                
            }finally{
                setLoading(false)
            }
        }
        fetchDatas()
    },[pages])

    const handelscroll=()=>{
        if (window.innerHeight+document.documentElement.scrollTop+1>=
            document.documentElement.scrollHeight
        ) {
            if(!end){
                setPages((pre)=>pre+1)
            }
        }
    }

    useEffect(()=>{
        window.addEventListener('scroll',handelscroll)
        return()=>window.removeEventListener('scroll',handelscroll)
    },[])

    if (loading) {
        return <SkeletonLoader/>
    }

    if (error) {
        return <p>{error}</p>
    }
    return (
        <div className='homeVidoes'>
            <h2>Recommended</h2>
            <div className='homeVideosItem'>
            {videos.map((item) => {
					return (
						<VideoCard
							key={item.id}
							title={item.title}
							views={item.views}
							timestamp={item.timestamp}
							channelImage={item.channelImage}
							channel={item.channel}
							image={item.image}
							path={`/videoplaypage/${item.id}`}
						/>
					);
				})}
            </div>
        </div>
    );
}

export default HomeVideos;