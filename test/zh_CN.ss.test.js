/**
 * Test Dialog Support with Chinese Lang 
 */
const test = require('ava')
const superagent = require('superagent')
const config = require('../config/environment')
const baseUrl = `http://localhost:${config.node.port}`

test.only('Test api:getReply(hello)', async function (t) {
    let result = await superagent.post(`${baseUrl}/api/v1/chabot/reply`)
        .set("Content-Type", "application/json")
        .send({
            fromUserId: "hain",
            textMessage: "hello"
        })
    let reply = result.body
    console.log('getReply(hello)', reply)
    t.is(reply.rc, 0, "Response code should be 0.")
    t.pass()
})

/**
 * Test Alternates
 */
test.only('Test Alternates api:getReply(你在哪个学校)', async function (t) {
    let result = await superagent.post(`${baseUrl}/api/v1/chabot/reply`)
        .set("Content-Type", "application/json")
        .send({
            fromUserId: "hain",
            textMessage: "你在哪个学校"
        })
    let reply = result.body
    console.log('getReply(你在哪个学校)', reply)
    t.is(reply.rc, 0, "Response code should be 0.")
    t.is(reply.data.string, "北京信息科技大学", "Reply string should be 北京信息科技大学.")
    t.pass()
})

/**
 * Test Alternates
 */
test.only('Test Alternates api:getReply(你毕业于哪个学校)', async function (t) {
    let result = await superagent.post(`${baseUrl}/api/v1/chabot/reply`)
        .set("Content-Type", "application/json")
        .send({
            fromUserId: "hain",
            textMessage: "你毕业于哪个学校"
        })
    let reply = result.body
    console.log('getReply(你毕业于哪个学校)', reply)
    t.is(reply.rc, 0, "Response code should be 0.")
    t.is(reply.data.string, "北京信息科技大学", "Reply string should be 北京信息科技大学.")
    t.pass()
})