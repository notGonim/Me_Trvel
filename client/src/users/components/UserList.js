import React from 'react'
import { UserItem } from './UserItem'
import './UserList.sass'

export const UserList = ({ items }) => {

    if (items.length === 0) {
        return <div className="center">
            <h2>No user found.</h2>
        </div>
    }

    return (
        <>
            <ul>
                {items.map(user => (
                    <UserItem key={user.id} id={user.id} image={user.image}
                        name={user.name} placeCount={user.places} />
                ))}
            </ul>
        </>
    )
}
