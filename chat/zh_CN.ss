> topic zh

+ 你好
- 你好

+ 你(在|毕业于)哪个学校
- {keep} 北京信息科技大学


+ 清河小营 [校区]
- {keep} 我也在附近

+ 聊天是一门艺术
- {keep} ^checkMessageFeatures() 编程是一项工艺

+ <nouns>是中国首屈一指的学府
- {keep} ^checkMessageFeatures() 北京邮电大学也是

// Generic wildcards
+ 他在旧金山创立的对冲基金 (*) 依靠 (*) 算法来处理所有的交易
- {keep} <cap1>是一家公司<cap2>

// Exact length wildcards
+ 家里 *2 坏了
- {keep} <cap1>坏了很多次了

// Min-max wildcards
+ 今天是 *(5-8)
- {keep} 祝大家玩的开心

+ [今天] (*) 天气(怎么样|如何|好么)
- {keep} ^getWeather(<cap1>)

< topic