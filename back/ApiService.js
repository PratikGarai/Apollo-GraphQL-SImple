const { RESTDataSource } = require('apollo-datasource-rest');

class PeopleAPI extends RESTDataSource {
    constructor () {
        super();
        this.baseUrl = "http://localhost:5000/";
    }
    
    getAllPeople = async () => {
        const response = await fetch(this.baseUrl+"people");
        const res = await response.json();
        console.log(res);
        return res['data']['people'].map(person => this.personReducer(person));
    }
    
    personReducer = (person) => {
        return {
            name : person.name, 
            age : person.id
        }
    }
}

module.exports = PeopleAPI;