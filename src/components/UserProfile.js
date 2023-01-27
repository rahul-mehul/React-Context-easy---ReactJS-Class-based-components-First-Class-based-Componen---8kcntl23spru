import { useContext } from 'react'
import React from 'react'
import { UserContext } from "./App"

const UserProfile = () => {
    const detail = useContext(UserContext);
    return (
        <>
            <h1 id='name'>Name:- {detail.name}</h1>
            <h1 id='age'>Age:- {detail.age}</h1>
        </>
    )

}

export { UserProfile }