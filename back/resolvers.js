module.exports = {
    Query : {
        people : ( parent, args, context, info ) => {
            return dataSources.peopleAPI.getAllPeople()
        }
    }
}