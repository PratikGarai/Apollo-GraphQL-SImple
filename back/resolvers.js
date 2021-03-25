module.exports = {
    Query : {
        people : (_, __, {dataSources}) =>{
            return dataSources.p.getAllPeople()
        }
    },

    Mutation : {
        addPerson : async (_, {name, age}, {dataSources}) => {
            return dataSources.p.postNewPerson({
                name : name, 
                age : age
            });
        }
    }
}