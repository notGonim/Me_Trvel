import React from 'react'
import './Avatar.scss'
export const Avatar = ({image ,alt,}) => {
    return (
        <div className="avatar"  >
            <img src={image} alt={alt}  />
        </div>
    )
}
