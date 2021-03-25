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
        //console.log("P : ", p);
        return p;
    }
    
    personReducer = (person) => {
        const obj =  {
            name : person.name, 
            age : person.age
        }

        //console.log('obj: ', obj);
        return obj;
    }
}

module.exports = PeopleAPI;