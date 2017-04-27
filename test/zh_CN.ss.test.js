/**
 * Test Dialog Support with Chinese Lang 
 */
const test = require('ava')
const superagent = require('superagent')
const config = require('../config/environment')
const baseUrl = `http://localhost:${config.node.port}`

test.only('Test api:getReply', async function (t) {
    let result = await superagent.post(`${baseUrl}/api/v1/chabot/reply`)
        .set("Content-Type", "application/json")
        .send({
            fromUserId: "hain",
            textMessage: "hello"
        })
    let reply = result.body
    console.log('getReply', reply)
    t.is(reply.rc, 0, "Response code should be 0.")
    t.truthy(reply.data.string, "Reply string should non-empty.")
    t.pass()
})

