import React, { useState } from 'react';
import gpl from 'graphql-tag';
import {useMutation} from '@apollo/client';

const PERSON_MUTATION = gpl`
    mutation  PersonAdd($name: String!, $age: Int!) {
        addPerson (name : $name, age: $age) {
            success,
        }
    }
`

const PeopleForm = () => {

    const [name, setName] = useState("");
    const [age, setAge] = useState(0);
    const [data, setData] = useState(null);
    const [submit , {loading, error}] = useMutation(PERSON_MUTATION, 
        {
            onCompleted(dt) {
                setData(dt);
            }
        }
    );

    var stuff = null;

    if(loading)
    {
        stuff = <div>Loading...<br/>
                    <pre>{JSON.stringify(loading,null,2)}</pre>
                </div>
    }
    else if(error)
    {
        stuff = <div>Error...<br/>
                    <pre>{JSON.stringify(error,null,2)}</pre>
                </div>
    }
    else if(data)
    {
        stuff = <>Data<br/>
                    <pre>{JSON.stringify(data,null,2)}</pre>
                </>
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        submit({variables : {name : name, age : Number(age)}});
        setName("");
        setAge(0);
    }

    return (
        <div>
            <div>
                Graphql State
                {stuff}
            </div>
            <hr />
            <br />
            People Form

            <hr /><br />
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Name</label>
                <input type="text" name="name" value={name} onChange={(e)=>setName(e.target.value)} /><br />
                <label htmlFor="age">Age</label>
                <input type="number" name="age" value={age} onChange={(e)=>setAge(e.target.value)} /><br/>
                <input type="submit"></input>
            </form>
        </div>
    )
}

export default PeopleForm;