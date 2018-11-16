const axios = require('axios')
const baseURL = 'https://br1.api.riotgames.com/lol/'
const headers = { "X-Riot-Token": "RGAPI-6b636794-e7a5-406a-8b3b-d012df50dc4b"}
const riotClient = axios.create({ baseURL,headers });

const summonerBaseURI =  'summoner/v3/summoners/'
class summonerClient {
    static byAccont(accountId){
        return riotClient.get(`${summonerBaseURI}by-account/${accountId}`)
        .then( res => res.data)
        .catch(e => console.log(e.message))
    }
    static byName(summonerName){
        return riotClient.get(`${summonerBaseURI}by-name/${summonerName}`)
        .then(res => res.data)
        .catch(e => console.log(e))
    }
    static byId(summonerId){
        return riotClient.get(`${summonerBaseURI}${summonerId}`)
        .then(res => res.data)
        .catch(e => console.log(e))
    }
}

module.exports = { riotClient, summonerClient }