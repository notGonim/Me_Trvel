import React from 'react'
import './UserItem.sass'

export const UserItem = ({ id, name, image, placeCount }) => {
    return (
        <li className="user_item">
            <div className="user_item__content">
                <div className="user_item__image">
                    <img src={image} alt="user photo" />
                </div>
                <div className="user_item__info">
                    <h2>{name}</h2>
                    <h3>{placeCount}  {placeCount === 1 ? 'Place' : 'Places'}  </h3>
                </div>
            </div>
        </li>
    )
}
