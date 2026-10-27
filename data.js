// 英语练习数据文件 —— Claude 每次练习后更新
// 修改这里，网站刷新即可看到最新内容
const PRACTICE_DATA = {

  updatedAt: "2026-10-27",

  // ============ 每日题包（按日期） ============
  packs: [
    {
      date: "2026-10-26", weekday: "周一", type: "中译英",
      items: [
        { q: "表哥下个月结婚，我一定要去参加婚礼，和家人一起创造美好的回忆。",
          a: "My brother is getting married next month, and I'm going to attend the wedding and make some good memories with my family.",
          notes: ["get married（口语说\"要结婚了\"）", "attend a wedding（不说 participate）", "make memories（不说 create）"] },
        { q: "明早出发去出差，我就简单带点必需品：充电器、一个包，还有睡衣。",
          a: "I'm going on a business trip tomorrow. I'll just bring the basics, like my charger, a bag, and some sleepwear.",
          notes: ["go on a business trip（固定搭配）", "the basics / essentials（必需品）", "sleepwear（睡衣）"] },
        { q: "朋友问我在酒席上想吃什么。其实我不挑食，他们上什么菜我都乐意，偶尔还想放纵吃一顿。",
          a: "I'm not a picky eater — I'll be happy with whatever they serve. And I might have a cheat meal now and then.",
          notes: ["not a picky eater（不挑食）", "whatever they serve（宴席上菜用 serve）", "have a cheat meal（放纵餐搭配 have）"] },
        { q: "我理想的早餐要有充足的蛋白质，比如鸡蛋和牛肉，再配点蔬菜和碳水，比如米饭或面条。",
          a: "My ideal breakfast would include plenty of protein, like eggs and beef, along with some vegetables and some carbs, like rice or noodles.",
          notes: ["would include（理想描述用虚拟）", "along with（再配上）", "carbs（碳水，不是 carbon dioxide 😄）"] },
        { q: "嗓子终于完全好了。虽然我休息了五天没锻炼，但研究表明这样并不会掉力量，我明天就能回归常规训练了。",
          a: "My throat has finally healed. Even though I took five days off, studies show that won't make me lose strength, so I can get back to my regular workout routine tomorrow.",
          notes: ["take five days off（take + 时长 + off）", "studies show（不是 survey）", "make you lose strength", "get back to my regular workout routine"] },
        { q: "说实话，每天吃一样的东西、做一样的训练挺无聊的，但为了增肌和健康，我还是会坚持自己的习惯，并且确保在训练日之间安排休息日。",
          a: "To be honest, eating the same food and doing the same workout every day is boring, but I stick to my routine to build muscle and stay healthy. I also make sure to schedule some rest days between my workout days.",
          notes: ["boring 修饰事物 / bored 描述感受", "stick to（坚持习惯，不是 insist on）", "build muscle（muscle 不可数）"] },
        { q: "我今天时间很紧，只能练 10 分钟英语。",
          a: "I'm short on time today, so I can only practice English for 10 minutes.",
          notes: ["short on time（时间紧）", "practice English FOR 10 minutes（语序 + for）—— 顽固户第 3 次终于全对 🎉"] },
        { q: "婚礼前一晚我们会一起吃晚饭，然后回酒店休息，为第二天的婚礼做好准备——我会放轻松，好好休息。",
          a: "We'll have dinner together the night before the wedding, then go back to the hotel to rest and get ready for the big day. I'll take it easy and sleep well.",
          notes: ["have dinner（不加 a）", "the night before the wedding（不加 at）", "take it easy（放轻松，easy 是形容词）"] }
      ]
    },
    {
      date: "2026-10-27", weekday: "周二", type: "挑错改错",
      items: [
        { q: "I was five days off from the gym because of my cold, but I will insist on my training plan next week.",
          a: "I took five days off from the gym because of my cold, but I'll stick to my training plan next week.",
          notes: ["take + 时长 + off", "stick to（坚持习惯），insist on 是\"坚持主张\""] },
        { q: "I usually eat healthy, but I like to get a cheat meal on Saturday nights.",
          a: "I usually eat healthy, but I like to have a cheat meal on Saturday nights.",
          notes: ["have a cheat meal"] },
        { q: "Protein is important — it helps you grow muscles after a hard workout.",
          a: "Protein is important — it helps you build muscle after a hard workout.",
          notes: ["build muscle（增肌固定搭配，muscle 不可数）"] },
        { q: "I will have a business trip to Shanghai tomorrow, so I just take some necessaries like my charger and sleep clothes.",
          a: "I'm going on a business trip to Shanghai tomorrow, so I'll just bring the basics, like my charger and some sleepwear.",
          notes: ["go on a business trip", "the basics（不是 necessaries）", "sleepwear（不是 sleep clothes）"] },
        { q: "Don't worry about the menu — I'm not a picky eater, and I will be happy with everything they provide.",
          a: "Don't worry about the menu — I'm not a picky eater, and I'll be happy with whatever they serve.",
          notes: ["whatever they serve（上菜用 serve）"] },
        { q: "It was my cousin's wedding last month. We went back to our hometown and created many common memories together.",
          a: "It was my cousin's wedding last month. We went back to our hometown and made some good memories together.",
          notes: ["make memories（不说 create/common，together 已含\"共同\"）"] },
        { q: "After this busy week, I just want to easy myself and have a long sleep.",
          a: "After this busy week, I just want to take it easy and get some good sleep.",
          notes: ["take it easy（easy 是形容词，不能当动词）"] },
        { q: "The survey shows that resting for one week doesn't weak your strength — actually it helps.",
          a: "Studies show that resting for one week won't make you lose strength — actually it helps.",
          notes: ["studies show（复数主语，动词不加 s，不加 the）", "make you lose strength（weak 是形容词）"] }
      ]
    }
  ],

  // ============ 错题本 ============
  // status: active 活跃 | watching 观察中 | graduated 已毕业
  // 毕业标准：自由输出中自然用对 2 次
  errorBank: [
    { id: "make-memories", category: "搭配", wrong: "created many common memories", right: "made some good memories together", note: "固定搭配 make memories；together 已含\"共同\"，不说 common memories", wrongCount: 1, lastWrong: "2026-10-27", status: "active" },
    { id: "studies-show", category: "词汇", wrong: "the survey shows…doesn't weak your strength", right: "studies show that… won't make you lose strength", note: "研究表明用 studies（survey 是问卷调查）；weak 是形容词", wrongCount: 1, lastWrong: "2026-10-27", status: "active" },
    { id: "easy-myself", category: "中式直译", wrong: "I will easy myself", right: "I'll take it easy", note: "\"放轻松自己\"的典型直译；easy 是形容词不能作动词", wrongCount: 1, lastWrong: "2026-10-26", status: "active" },
    { id: "grow-muscles", category: "搭配", wrong: "grow muscles", right: "build muscle", note: "增肌固定说 build muscle，muscle 不可数", wrongCount: 1, lastWrong: "2026-10-26", status: "active" },
    { id: "cheat-meal", category: "搭配", wrong: "get a cheat meal", right: "have a cheat meal", note: "cheat meal 搭配 have", wrongCount: 1, lastWrong: "2026-10-26", status: "active" },
    { id: "business-trip", category: "搭配", wrong: "have a business trip", right: "go on a business trip", note: "出差是 go on a business trip", wrongCount: 1, lastWrong: "2026-10-26", status: "active" },
    { id: "necessaries", category: "词汇", wrong: "necessaries", right: "the basics / essentials", note: "必需品口语说 basics 或 essentials", wrongCount: 1, lastWrong: "2026-10-26", status: "active" },
    { id: "carbs", category: "词汇", wrong: "carbon dioxide diet", right: "carbs / carbohydrates", note: "碳水是 carbs；carbon dioxide 是二氧化碳 😄", wrongCount: 1, lastWrong: "2026-10-23", status: "active" },
    { id: "check-whether", category: "句式", wrong: "check out if I have mistakes", right: "check whether I made any mistakes", note: "check whether + 从句", wrongCount: 1, lastWrong: "2026-10-23", status: "watching" },
    { id: "much-busy", category: "语法", wrong: "much busy", right: "really busy", note: "much 不能直接修饰形容词", wrongCount: 1, lastWrong: "2026-09-16", status: "watching" },

    { id: "convenient", category: "搭配", wrong: "when you are convenient", right: "whenever it's convenient for you", note: "人不能做 convenient 的主语", wrongCount: 3, lastWrong: "2026-10-17", status: "graduated", graduatedOn: "2026-10-19" },
    { id: "full-nights-sleep", category: "搭配", wrong: "after the whole night sleep", right: "after a full night's sleep", note: "固定短语 a full night's sleep", wrongCount: 4, lastWrong: "2026-10-19", status: "graduated", graduatedOn: "2026-10-21" },
    { id: "devote-to", category: "搭配", wrong: "devote ourselves in/into", right: "devote myself to…", note: "固定搭配 devote oneself TO（同 stick to / look forward to 队伍）", wrongCount: 2, lastWrong: "2026-10-21", status: "graduated", graduatedOn: "2026-10-23" },
    { id: "practice-for-10", category: "句式", wrong: "practise 10 minutes english", right: "practice English for 10 minutes", note: "语序：先宾语再时长，加 for", wrongCount: 2, lastWrong: "2026-10-23", status: "graduated", graduatedOn: "2026-10-26" },
    { id: "front-desk", category: "介词", wrong: "put it in the front desk", right: "left it at the front desk", note: "前台用 at；放置/留下用 left", wrongCount: 3, lastWrong: "2026-10-16", status: "graduated", graduatedOn: "2026-10-17" },
    { id: "work-out", category: "搭配", wrong: "exercise my back", right: "work out my back", note: "健身动作用 work out + 部位", wrongCount: 3, lastWrong: "2026-10-19", status: "graduated", graduatedOn: "2026-10-19" },
    { id: "physically-mentally", category: "中式直译", wrong: "both of my mental and physical are exhausted", right: "exhausted both physically and mentally", note: "用副词 physically and mentally 修饰形容词", wrongCount: 2, lastWrong: "2026-10-16", status: "graduated", graduatedOn: "2026-10-16" },
    { id: "recharge", category: "搭配", wrong: "recover the energy", right: "helps me recharge", note: "恢复精力/充电用 recharge", wrongCount: 2, lastWrong: "2026-10-23", status: "graduated", graduatedOn: "2026-10-23" },
    { id: "fruitful", category: "词汇", wrong: "I feel fruitful tonight", right: "It's been a productive evening", note: "充实的晚上用 productive / full evening", wrongCount: 1, lastWrong: "2026-10-16", status: "graduated", graduatedOn: "2026-10-16" },
    { id: "straightly", category: "词汇", wrong: "go straightly to sleep", right: "go straight to sleep", note: "straight 本身就是副词，没有 straightly", wrongCount: 1, lastWrong: "2026-10-22", status: "graduated", graduatedOn: "2026-10-22" },
    { id: "run-out-of", category: "搭配", wrong: "I ran out my data", right: "I ran out of mobile data", note: "run out OF + 名词", wrongCount: 1, lastWrong: "2026-10-21", status: "graduated", graduatedOn: "2026-10-22" },
    { id: "video-call", category: "搭配", wrong: "give a video call", right: "have a video call with…", note: "视频通话搭配 have", wrongCount: 1, lastWrong: "2026-10-23", status: "graduated", graduatedOn: "2026-10-26" },
    { id: "sore-throat", category: "词汇", wrong: "having an ache for my throat", right: "I have a sore throat", note: "嗓子疼固定说 a sore throat", wrongCount: 2, lastWrong: "2026-10-19", status: "graduated", graduatedOn: "2026-10-20" },
    { id: "attend-wedding", category: "搭配", wrong: "participate the wedding", right: "attend the wedding", note: "参加婚礼/活动用 attend", wrongCount: 1, lastWrong: "2026-10-23", status: "graduated", graduatedOn: "2026-10-26" },
    { id: "five-days-off", category: "句式", wrong: "I was five days off", right: "I took five days off / I was off for five days", note: "take + 时长 + off；或 off for + 时长（时长放后面）", wrongCount: 1, lastWrong: "2026-10-26", status: "graduated", graduatedOn: "2026-10-27" },
    { id: "sleepwear", category: "词汇", wrong: "sleeping clothes", right: "sleepwear", note: "睡衣口语说 sleepwear", wrongCount: 1, lastWrong: "2026-10-26", status: "graduated", graduatedOn: "2026-10-27" },
    { id: "serve", category: "词汇", wrong: "happy with everything they provide", right: "happy with whatever they serve", note: "宴席上菜用 serve", wrongCount: 1, lastWrong: "2026-10-26", status: "graduated", graduatedOn: "2026-10-27" },
    { id: "have-dinner", category: "搭配", wrong: "have a dinner", right: "have dinner", note: "泛指吃饭不加 a", wrongCount: 1, lastWrong: "2026-10-23", status: "graduated", graduatedOn: "2026-10-26" },
    { id: "ac-on", category: "搭配", wrong: "kept the air-conditioning opened", right: "slept with the AC on", note: "开着空调睡觉：with the AC on", wrongCount: 1, lastWrong: "2026-10-19", status: "graduated", graduatedOn: "2026-10-22" }
  ],

  // ============ 笔记库（按场景） ============
  notes: [
    { scene: "健身与恢复", items: [
      { en: "I've been working overtime for several days.", zh: "我连续加班好几天了。" },
      { en: "A good night's sleep helps me recharge.", zh: "睡个好觉帮我恢复精力。" },
      { en: "I worked out my shoulders after work.", zh: "下班后练了肩。（work out my ___）" },
      { en: "I did a light back workout — just six sets.", zh: "轻量背部训练，就六组。" },
      { en: "Playing basketball gives my legs a better workout than going to the gym.", zh: "打篮球比健身房更练腿。（gives ___ a workout）" },
      { en: "My sore throat has finally healed.", zh: "嗓子终于好了。" },
      { en: "I took five days off from exercising.", zh: "我休息了五天没锻炼。（take + 时长 + off）" },
      { en: "Studies show that taking five days off won't make you lose strength.", zh: "研究表明休息五天不会掉力量。" },
      { en: "I make sure to schedule some rest days between my workout days.", zh: "确保训练日之间安排休息日。" },
      { en: "I stick to my routine to build muscle and stay healthy.", zh: "坚持习惯增肌保持健康。（stick to，不是 insist on）" },
      { en: "I'll take it easy and get some rest.", zh: "放轻松好好休息。" }
    ]},
    { scene: "出差与交接", items: [
      { en: "I'm going on a business trip tomorrow.", zh: "明天出差。（go on a trip）" },
      { en: "I'll just bring the basics.", zh: "只带必需品。（basics/essentials）" },
      { en: "some sleepwear", zh: "睡衣（不说 sleeping clothes）" },
      { en: "I left the documents at the front desk.", zh: "文件放前台了。（left ___ at ___）" },
      { en: "Pick it up whenever it's convenient for you — no rush.", zh: "你方便的时候随时取，不着急。" },
      { en: "I ran out of mobile data during the day.", zh: "白天流量用完了。（run out of）" },
      { en: "I'm short on time today.", zh: "今天时间很紧。（short on ___）" }
    ]},
    { scene: "饮食", items: [
      { en: "I'm not a picky eater.", zh: "我不挑食。" },
      { en: "I'll be happy with whatever they serve.", zh: "上什么菜我都乐意。" },
      { en: "I might have a cheat meal now and then.", zh: "偶尔放纵吃一顿。" },
      { en: "My ideal breakfast would include plenty of protein, along with some vegetables and carbs.", zh: "理想早餐：充足蛋白质配蔬菜碳水。" },
      { en: "carbs / carbohydrates", zh: "碳水（千万别说 carbon dioxide）" }
    ]},
    { scene: "婚礼与社交", items: [
      { en: "attend my friend's wedding", zh: "参加婚礼（不说 participate）" },
      { en: "make some good memories together", zh: "一起创造美好回忆（make，不说 create/common）" },
      { en: "We'll have dinner together the night before the wedding.", zh: "婚礼前一晚一起吃晚饭（have dinner 不加 a）。" },
      { en: "get ready for the big day", zh: "为大日子做好准备。" },
      { en: "have a video call with my girlfriend", zh: "和女朋友视频通话。" }
    ]},
    { scene: "睡前与日常", items: [
      { en: "I slept with the AC on last night.", zh: "昨晚开空调睡觉。" },
      { en: "I put some cream on my toe, but it hasn't healed completely yet.", zh: "涂了药膏但还没完全好。" },
      { en: "I scroll on my phone to unwind before bed.", zh: "睡前刷手机放松。" },
      { en: "Then I go straight to sleep.", zh: "然后直接睡觉。（没有 straightly）" },
      { en: "get a haircut", zh: "理发。" }
    ]},
    { scene: "沟通与练习", items: [
      { en: "Could you check whether I made any mistakes?", zh: "检查我有没有犯错。（check whether）" },
      { en: "Let's wrap up today's practice.", zh: "结束今天的练习。" },
      { en: "Rephrase what I say in a more natural way.", zh: "用更自然的方式重述。" },
      { en: "How can you tell whether my pronunciation is correct?", zh: "你怎么判断我的发音对不对？" },
      { en: "It's been a really productive evening.", zh: "今晚很充实有收获。" },
      { en: "I want to devote myself to this project.", zh: "全身心投入项目。（devote to）" }
    ]}
  ],

  // ============ 必背 20 句 ============
  recite: [
    { group: "健身与恢复", items: [
      { wrong: "I have work overtime", right: "I've been working overtime for several days." },
      { wrong: "recover the energy", right: "A good night's sleep helps me recharge." },
      { wrong: "after the whole night sleep", right: "I'll recover after a full night's sleep." },
      { wrong: "exercise my back", right: "I worked out my shoulders after work." },
      { wrong: "gives better workout on my legs", right: "Playing basketball gives my legs a better workout than the gym does." }
    ]},
    { group: "交接与便利", items: [
      { wrong: "I reserve a file", right: "I left the documents at the front desk." },
      { wrong: "when you are convenient", right: "Pick it up whenever it's convenient for you — no rush." },
      { wrong: "I ran out my data", right: "I ran out of mobile data during the day." },
      { wrong: "the time is very intense", right: "I'm short on time today." }
    ]},
    { group: "睡前流程", items: [
      { wrong: "kept the airconditioning opened", right: "I slept with the AC on last night." },
      { wrong: "a pain throat", right: "I have a sore throat." },
      { wrong: "put the crime on my toe", right: "I put some cream on my toe, but it hasn't healed completely yet." },
      { wrong: "scroll the phone to get relaxed", right: "I scroll on my phone to unwind before bed." },
      { wrong: "go straightly to sleep", right: "Then I go straight to sleep." }
    ]},
    { group: "工作与表态", items: [
      { wrong: "devote ourselves into", right: "I want to devote myself to this project." },
      { wrong: "practise 10 minutes english", right: "I can only practice English for 10 minutes today." },
      { wrong: "I feel fruitful", right: "It's been a really productive evening." },
      { wrong: "give a video call", right: "I had a video call with my girlfriend tonight." }
    ]},
    { group: "沟通与练习", items: [
      { wrong: "check out if I have mistakes", right: "Could you check whether I made any mistakes?" },
      { wrong: "finish the practice today", right: "Let's wrap up today's practice." }
    ]}
  ]
};
