const axios = require('axios')
const riotClient = axios.create({
    baseURL: 'https://br1.api.riotgames.com/lol/',
    headers: { "X-Riot-Token": "RGAPI-6b636794-e7a5-406a-8b3b-d012df50dc4b",}
  });
const appRouter = (app) =>{
    app.get('/', (req,res)=>{
        riotClient.get('platform/v3/champion-rotations')
        .then(response => res.status(200).send(response.data))
        .catch(e => console.log(e.message))
    })
}

module.exports = appRouter