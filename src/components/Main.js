import '../style.css';
import React from 'react'
import PodcastRow from './PodcastRow';
import Podcast from './podcast';
import Author from './Author';
import { useState,useEffect } from 'react';
import axios from 'axios'

function Main({authors}){
     const [episodes,setEpisodes]=useState([])
     const [selectedPodcast,setSelectedPodcast]=useState(null)

     const selectPodcast=(podcast,event)=>{
      event.preventDefault()
      console.log('selectPodcast: '+JSON.stringify(podcast))
      setSelectedPodcast(podcast)
     }

     useEffect(()=>{
        console.log("SELECTED PODCAST CHANGED: "+JSON.stringify(selectedPodcast))
        if(!selectedPodcast)
          return
        const url=`https://podcast-deployment-backend.onrender.com/searchRoute/feed?url=${selectedPodcast.feed}`
        axios({
          url,
          method:'get'
        })
        .then(({data})=>{
          console.log('FEED: '+JSON.stringify(data))
          const {item} = data
          const tracks=item.map((t,index)=>{
              return{
                id:index,
                episodeTitle:t.title[0],
                //description:t.description[0],
                imageAlt:selectedPodcast.imageAlt,
                trackurl:t.enclosure[0]['$'].url
              }
          })

          setEpisodes(tracks)
        })
        .catch(err=>{

        })
     },[selectedPodcast])
  


  const podcasts=[
    {id:0,episodeTitle:"Episode 02: Brewed Bliss",author:"Danielle Perry",date:"November 9, 2023",duration:"44 mins",imageAlt:"/images/featured-2.jpg",trackurl:'https://dts.podtrac.com/redirect.mp3/api.spreaker.com/download/episode/53549830/just_friends_america_s_love_affair_with_coffee.mp3'},
    {id:1,episodeTitle:"Episode 04: Paws and Listen",author:"Ella Watkins",date:"November 5, 2023",duration:"16 mins",imageAlt:"/images/featured-1.jpg",trackurl:'https://media.blubrry.com/your_new_puppy/traffic.libsyn.com/yournewpuppy/YNPEpisode088.mp3'},
    {id:2,episodeTitle:"Episode 03: Chapter Chat",author:"Luke Hayes",date:"October 29, 2023",duration:"54 mins",imageAlt:"/images/featured-3.jpg",trackurl:'https://traffic.libsyn.com/secure/currentlyreadingpodcast/CRS6E14FinalEdit.mp3?dest-id=789821'}
]
//  const authors=[
//    {id:0,author:"Danielle Perry",categories:['coffee','chill'],imageAlt:"/images/featured-2.jpg"},
//    {id:1,author:"Luke Hayes",categories:['reading','peace'],imageAlt:"/images/featured-3.jpg"},
//    {id:2,author:"Ella Watkins",categories:['dogs','puppy'],imageAlt:"/images/featured-1.jpg"},
//    {id:3,author:"Danielle Perry",categories:['coffee','chill'],imageAlt:"/images/featured-2.jpg"},
//    {id:4,author:"Luke Hayes",categories:['reading','peace'],imageAlt:"/images/featured-3.jpg"},
//    {id:5,author:"Ella Watkins",categories:['dogs','puppy'],imageAlt:"/images/featured-1.jpg"}
//  ]

    return(
        <div>
          <div className="col-lg-6 col-md-8 mt-10">
      <h1 className="fw-bold">Searched <span style={{ color: '#967E76' }}>Podcasts</span></h1>
    </div>

    <div className="album bg-body-tertiary">
      <div className="container">
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
        {authors && authors.map(author => (
          <Author
          key={author.id}
          {...author}
          onSelect={(e)=>selectPodcast(author,e)}
        />
        ))}

        </div>
      </div>
    </div>
    <br/>
    <br/>
    <br/>
    <div className="album bg-body-tertiary">
      <div className="container">
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
          {episodes.map(podcast=><Podcast key={podcast.id} {...podcast} />)}
        </div>
      </div>
    </div>
    <br/>
    <br/>
    <br/>
        <div className="col-lg-6 col-md-8">
      <h1 className="fw-bold">Featured <span style={{ color: '#967E76' }}>Podcasts</span></h1>
    </div>

    <div className="album bg-body-tertiary">
      <div className="container">
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
          {podcasts.map(podcast=><PodcastRow key={podcast.id} {...podcast}/>)}
        </div>
      </div>
    </div>
      
    
    
        </div>
        
    )
    

}

export default Main;

