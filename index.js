const tmi = require('tmi.js');
const client = new tmi.Client({
	options: { debug: true },
	connection: {
		reconnect: true,
		secure: true
	},
	identity: {
		username: 'UdvozollekTiteket',
		password: 'oauth:cq6vcm8c3xzo5z8xoupfyuvi8n3d0g'
	},
    channels: [ 'matentv' ],

});
client.connect();

client.on('message', (channel, tags, message, self) => {
	if(self) return;
	if(message.toLowerCase() === 'hello') {
		client.say(channel, `@${tags.username}, Szia! HeyGuys`);
    }

        client.on('message', (channel, tags, message, self) => {
            if(self) return;
            if(message.toLowerCase() === '!razi') {
                client.say(channel, `@rRAZ1 a balynok! SeriousSloth`);
            }

                    client.on("subscription", function (channel, username, methods ) {

                        client.say(channel, username + "feliratkozott PogChamp " )
                        
                        });
                        
                        client.on("resub", function (channel, username, months, message, userstate, methods) {
                        
                        client.say(channel, username + " feliratkozott! Ez a " + months + ". hónapja PogChamp " )
                        
                        });
})});