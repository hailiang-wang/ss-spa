/**
 * Test Dialog Support with Chinese Lang 
 */
const test = require('ava')
const superagent = require('superagent')
const config = require('../config/environment')
const baseUrl = `http://localhost:${config.node.port}`

async function getReply(textMessage) {
    let result = await superagent.post(`${baseUrl}/api/v1/chabot/reply`)
        .set("Content-Type", "application/json")
        .send({
            fromUserId: "hain",
            textMessage: textMessage
        })
    return result.body
}

/**
 * Test Functional API
 * Test api:getReply(hello)
 */
test.before(async t => {
    let reply = await getReply('hello')
    console.log('getReply(hello)', reply)
    t.is(reply.rc, 0, "Response code should be 0.")
    t.pass()
})

/**
 * Test Alternates
 */
test('Test Trigger: Alternates api:getReply(你在哪个学校)', async function (t) {
    let reply = await getReply('你在哪个学校')
    console.log('getReply(你在哪个学校)', reply)
    t.is(reply.data.string, "北京信息科技大学", "Reply string should be 北京信息科技大学.")
    t.pass()
})

test('Test Trigger: Alternates api:getReply(你毕业于哪个学校)', async function (t) {
    let reply = await getReply('你毕业于哪个学校')
    console.log('getReply(你毕业于哪个学校)', reply)
    t.is(reply.data.string, "北京信息科技大学", "Reply string should be 北京信息科技大学.")
    t.pass()
})

/**
 * Test Optionals
 */
test('Test Trigger: Optionals api:getReply(清河小营)', async function (t) {
    let reply = await getReply('清河小营')
    console.log('getReply(清河小营)', reply)
    t.is(reply.data.string, "我也在附近", "Reply string should be 我也在附近.")
    t.pass()
})

test('Test Trigger: Optionals api:getReply(清河小营校区)', async function (t) {
    let reply = await getReply('清河小营校区')
    console.log('getReply(清河小营校区)', reply)
    t.is(reply.data.string, "我也在附近", "Reply string should be 我也在附近.")
    t.pass()
})

/**
 * Test Segmenter 
 */
test('Test Trigger: Optionals api:getReply(聊天是一门艺术)', async function (t) {
    let reply = await getReply('聊天是一门艺术')
    console.log('getReply(聊天是一门艺术)', reply)
    t.truthy(reply.data.lang_code === 'cmn', "Reply string should be 我也在附近.")
    t.truthy(reply.data.nlp_chinese.cut.length > 0, "Reply should contain nlp_chinese.cut")
    t.truthy(reply.data.nlp_chinese.keywords.length > 0, "Reply should contain nlp_chinese.keywords")
    t.pass()
})

/**
 * Test Capture value
 */
test('Test Trigger: Capture Value', async function (t) {
    let reply = await getReply('他在旧金山创立的对冲基金Numerai依靠人工智能算法来处理所有的交易')
    console.log('getReply(他在旧金山创立的对冲基金Numerai依靠人工智能算法来处理所有的交易)', reply)
    t.is(reply.data.string, 'Numerai是一家公司人工智能', 'Reply string should contain captured values.')
    t.pass()
})

test('Test Trigger: Capture Value with word number', async function (t) {
    let reply = await getReply('家里冰箱坏了')
    console.log('getReply(家里冰箱坏了)', reply)
    t.is(reply.data.string, '冰箱坏了很多次了', 'Reply string should contain captured values.')

    reply = await getReply('家里灯坏了')
    console.log('getReply(家里灯坏了)', reply)
    t.is(reply.data.string, '', 'Reply string should not contain anything.')

    t.pass()
})

test('Test Trigger: Capture Value with Min-max wildcards', async function (t) {
    let reply = await getReply('今天是五一劳动节')
    console.log('getReply(今天是五一劳动节)', reply)
    t.is(reply.data.string, '祝大家玩的开心', 'Reply string should be resonable.')

    reply = await getReply('今天是节日')
    console.log('getReply(今天是节日)', reply)
    t.is(reply.data.string, '', 'Reply string should not contain anything')

    t.pass()
})

test('Test Trigger: Parts of speech', async function (t) {
    let reply = await getReply('清华大学是中国首屈一指的学府')
    console.log('getReply(清华大学是中国首屈一指的学府)', reply)
    t.is(reply.data.string, '北京邮电大学也是', 'Reply string should be resonable.')

    t.pass()
})


