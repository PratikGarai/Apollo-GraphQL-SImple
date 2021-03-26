import React from 'react';
import {useQuery} from '@apollo/client';
import gpl from 'graphql-tag';


const PEOPLE_QUERY = gpl`
        query People {
            people {
            name
            age
            }
        }
    `;

const People = () => {

    const {data , loading, error} = useQuery(PEOPLE_QUERY);

    if(loading)
    {
        return (
            <div>
                <p>Loading Data....</p>
                <pre>{JSON.stringify(loading, null, 2)}</pre>
            </div>
        )
    }
    if(error)
    {
        return (
            <div>
                <p>Some error occured!</p>
                <pre>{JSON.stringify(error, null, 2)}</pre>
            </div>
        )
    }
    return (
        <div>
            <p>Data : </p>
            <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
    )
}

export default People;