const { summonerClient, riotClient } = require('../services/http')
const appRouter = (app) =>{
    app.get('/', (req,res)=>{
        riotClient.get('platform/v3/champion-rotations')
        .then(response => res.send(response.data))
        .catch(e => console.log(e.message)) 
    })
    app.get('/summoner/:summonerId',(req,res)=>{
        const {summonerId} = req.params
        summonerClient.byId(summonerId)
            .then(response => res.send(response))
    })
    app.get('/summoner/by-name/:summonerName',(req,res)=>{
        const {summonerName} = req.params   
        summonerClient.byName(summonerName)
        .then(response => res.send(response))
    })
    app.get('/summoner/by-account/:summonerAccount',(req,res)=>{
        const {summonerAccount} = req.params
        summonerClient.byAccont(summonerAccount)
        .then(response=> res.send(response))
    })
}

module.exports = appRouter