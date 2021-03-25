module.exports = {
    Query : {
        people : (_, __, {dataSources}) =>{
            // console.log(dataSources);
            return dataSources.p.getAllPeople()
        }
    }
}