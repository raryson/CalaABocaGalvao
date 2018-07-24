const express = require('express')
const app = express()
const PubNub = require('pubnub')
const request = require('request');
const urlWebHook = 'https://hooks.slack.com/services/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'

var options = {
    uri: urlWebHook,
    method: 'POST',
    json: {
      "text": "MANO, FICA QUIETO"
    }
  };

app.listen(3000)

pubnub = new PubNub({
    publishKey : 'pub-c-1ec1d8e8-b956-465a-8baf-81abed6ba834',
    subscribeKey : 'sub-c-5d568d86-8ee2-11e8-a15f-2efe3b6c3d95',
})
pubnub.subscribe({
    channels: ['calaABocaGalvao']
})
pubnub.addListener({
    message: (m) => {
        if(m.channel === 'calaABocaGalvao')
        {
            if(m.message.text == "MandarOSlackCalarABoca")
            {
                request(options, function (error, response, body) {
                    if (!error && response.statusCode == 200) {
                      console.log("mando calar a boca msm")
                    }
                  })
            }
        }
    }
})