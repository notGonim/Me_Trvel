import React from 'react'
import { Avatar } from '../../shared/components/UIElements/Avatar'
import { Link } from "react-router-dom";
import Card  from '../../shared/components/UIElements/Card'
import './UserItem.scss'

export const UserItem = ({ id, name, image, placeCount }) => {
    return (
        <li className="user_item">
                <Card className="user_item__content">
                    <Link to={`/${id}/places`}   >
                        <div className="user_item__image">
                            <Avatar image={image} alt={name} />
                        </div>
                        <div className="user_item__info">
                            <h2>{name}</h2>
                            <h3>{placeCount}  {placeCount === 1 ? 'Place' : 'Places'}  </h3>
                        </div>
                    </Link>
                </Card>
        </li>
    )
}
