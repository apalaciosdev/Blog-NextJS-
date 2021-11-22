import React from 'react'

export const Podcast = ({ episode }) => {
  return (
    <div>
      <iframe 
        src={`https://open.spotify.com/embed/episode/${episode}` }
        width="300"
        height="380" 
        frameBorder="0" 
        allowtransparency="true" 
        allow="encrypted-media"
      >

      </iframe>
    </div>
  )
}

