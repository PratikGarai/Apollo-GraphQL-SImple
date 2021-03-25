const { RESTDataSource } = require('apollo-datasource-rest');
const fetch = require('node-fetch');

class PeopleAPI extends RESTDataSource {
    constructor () {
        super();
        this.baseUrl = "http://localhost:5000/";
    }
    
    getAllPeople = async () => {
        const response = await fetch(this.baseUrl+"people");
        const res = await response.json();
        const p = Promise.all(res['data']['people'].map(person => this.personReducer(person)));
        return p;
    }

    postNewPerson = async (obj) => {
        const response = await fetch(this.baseUrl+"people", {
            method : 'POST', 
            headers : {
                'Content-Type' : 'application/json'
            },
            body : JSON.stringify(obj)
        });
        const res = await response.json();
        return this.postNewPersonResponseReducer(res);
    }
    
    personReducer = (person) => { 
        return {
            name : person.name, 
            age : person.age
        };
    }

    postNewPersonResponseReducer = (resp) => {
        console.log(resp);
        return {
            success : resp.success,
            message : resp.message
        };
    }
}

module.exports = PeopleAPI;