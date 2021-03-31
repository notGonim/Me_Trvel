import React from 'react'
import { UserList } from '../components/UserList'

export const User = () => {

    //adding dummy data to test my design 
    const Users = [
        {
            id: 'ui1',
            name: 'mhmod gonim',
            image: 'https://pbs.twimg.com/profile_images/1234781420809334784/oSL_R0um_400x400.jpg',
            places: 3
        }
    ]

    return (
        <>
            <UserList items={Users} />
        </>
    )
}
