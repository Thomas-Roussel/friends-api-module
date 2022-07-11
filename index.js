const fetch = (...args) =>
    import('node-fetch').then(({ default: fetch }) => fetch(...args));

module.exports = {

    getServer: async function (apikey, serverId, inSeconds) {

        if (!apikey || apikey == '') throw new Error('No API Key sended')
        if (!serverId || serverId == '') throw new Error('No server id sended')

        var reponse;
        if(inSeconds === true) reponse = await fetch(`https://api.friends-bot.fr/servers/${apikey}/${serverId}?time=seconds`, { method: 'GET' })
        else reponse = await fetch(`https://api.friends-bot.fr/servers/${apikey}/${serverId}`, { method: 'GET' })

        if(reponse == 'Invalid API Key') throw new Error('Invalid API Key sended')
        if(reponse == 'Invalid server id') throw new Error('Invalid server id sended')

        reponse = await reponse.json();
        return reponse;
    }

}
