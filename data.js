'use strict';
/* ============================================================
   内容数据 —— 全部改成你自己的
   ============================================================ */

/* 锁屏密码 / 用户名 */
window.CONFIG = { passcode: '1234', userName: '小明' };

/* 【这里改锁屏通知】 */
window.LOCK_NOTES = [
  { title: '日历倒计时', body: '', time: '今天' },
  { title: 'Vernon', body: 'Dinner tonight？', time: '现在' },
];

/* 【这里改主屏应用顺序】id 对应 apps.js 里的 VIEWS */
/* 【这里改主屏应用顺序】 */
window.HOME_APPS = ['kakao', 'phone', 'messages', 'photos', 'instagram', 'safari', 'settings', 'notes', 'twitter'];
window.DOCK_APPS = ['phone', 'safari', 'messages', 'kakao'];

window.APP_NAMES = {
  kakao: 'KakaoTalk',
  phone: '电话',
  messages: '信息',
  photos: '照片',
  instagram: 'Instagram',
  safari: 'Safari',
  settings: '设置',
  notes: '备忘录',
  twitter: 'Twitter'
};

/* 【这里改人名】聊天列表顺序 */
window.CHAT_NAMES = ['Vernon', '工作群', '妈妈'];

/* 【这里改聊天内容】
   格式：[文字, 'them' 或 'me', 时间]
   'them' = 对方发的，'me' = 你发的
*/
window.CHATS = {
  'Vernon': [
    // --- 25年某日 初次认识 ---
    ['2025年6月17日', 'date'], // 👈 日期分割线
    ['很高兴认识你', 'them', '18:00'],
    ['我也是', 'me', '18:02'],
    
    // --- 25年某日 第一次约会 ---
    ['2025年6月20日', 'date'], // 👈 日期分割线
    ['上次说的那家餐厅空了位置，我预约了，要不要一起吃', 'them', '15:32'],
    ['什么时候？', 'me', '16:05'],
    ['周日晚上6点', 'them', '16:06'],
    ['好，到时候见', 'me', '16:07'],

    // --- 25年某日 暧昧拉扯 ---
    ['2025年6月22日', 'date'], // 👈 日期分割线
    ['今天谢谢你呀，饭很好吃！', 'me', '21:30'],
    ['不用谢', 'them', '21:35'],
    ['对了，你说的那家蛋糕在哪里？', 'them', '21:36'],
    ['那正好，我下次请你吃吧！', 'me', '21:38'],
    ['好，不过最近比较忙', 'them', '21:40'],
    ['等你有空告诉我', 'me', '21:41'],
    ['嗯', 'them', '21:45'],
    ['到家了吗', 'them', '22:10'],
    ['到了到了', 'me', '22:12'],
    ['晚安', 'them', '22:30'],
    ['晚安', 'me', '22:31'],

    // --- 25年某日 工作室探班 ---
    ['2025年6月25日', 'date'], // 👈 日期分割线
    ['今天有空吗', 'them', '10:00'],
    ['要不要来工作室坐坐', 'them', '10:01'],
    ['要带蛋糕过来吗', 'me', '10:05'],
    ['再好不过', 'them', '10:06']


  ]
};

/* 【这里改自动回复】你在聊天室发消息后，对方自动回一句 */
window.AUTO_REPLY = {
  'Vernon': ['好呀～', '那就这么说定了', '待会见！'],
  '工作群': ['收到', '好的', '没问题'],
  '妈妈': ['好，注意身体', '早点休息', '记得穿外套']
};

/* 【这里改好友列表】 */
window.FRIENDS = [
  { name: 'Vernon', status: 'V' },
  { name: '妈妈', status: '注意身体' },
  { name: '考瑞亚远征队', status: '3 人' },
  { name: '最好的蜜蜜', status: '在忙' },
  { name: '组长', status: '旅行中' }
];

/* ============================================================
   电话
   ============================================================ */
/* 【这里改通话记录】 */
window.CALLS = [
  { name: 'Vernon', type: '来电', time: '今天 14:02', miss: false },
  { name: '妈妈', type: '未接', time: '今天 09:10', miss: true },
  { name: '工作群', type: '去电', time: '昨天', miss: false }
];

/* ============================================================
   信息
   ============================================================ */
/* 【这里改短信】[文字, 'them' 或 'me', 时间] */
window.SMS = {
  'Vernon': [
    ['晚上见！', 'them', '14:10'],
    ['好', 'me', '14:11']
  ],
  '10086': [
    ['您的流量已到账', 'them', '昨天']
  ]
};
/* 短信列表顺序 */
window.SMS_NAMES = ['Vernon', '10086'];

/* ============================================================
   照片
   ============================================================ */
/* 【这里改照片】color 是占位色块，换成图片可用 src */
window.PHOTOS = [
  // 普通照片
{ src: 'photos/9.jpg', label: '景色', date: '2025-06-20' },
 { src: 'photos/2.jpg', label: '食物', date: '2025-06-22' },
{ src: 'photos/3.jpg', label: '食物', date: '2025-06-22' },
{ src: 'photos/4.jpg', label: '食物', date: '2025-06-22' },
{ src: 'photos/5.jpg', label: '食物', date: '2025-06-22' },
{ src: 'photos/6.jpg', label: '食物', date: '2025-06-22' },
{ src: 'photos/7.jpg', label: '食物', date: '2025-06-22' },
{ src: 'photos/8.jpg', label: '食物', date: '2025-06-22' },
  
  // 私密照片
 { src: 'photos/车.jpg',date: '2026-08-15', album: 'secret' },
{ src: 'photos/镜头.jpg',date: '2026-07-28', album: 'secret' },
 { src: 'photos/骑车.jpg', date: '2026-01-22', album: 'secret' },
{ src: 'photos/笨.jpg',date: '2025-08-12', album: 'secret' }
];
/* ============================================================
   Instagram 数据
   ============================================================ */
// 🌟 1. 你的个人主页数据（只有你自己发的，按九宫格显示）
window.IG_POSTS = [
  { id: 1, author: '你', imgs: ['photos/2.jpg'], likes: 128, caption: '今天的晚餐，某人请客 🍽️', time: '2小时前', date: '2026-06-22 20:00', comments: [] },
  { id: 2, author: '你', imgs: ['photos/3.jpg', 'photos/4.jpg'], likes: 256, caption: '周末的汉江，风很大。🌬️', time: '昨天', date: '2026-06-21 15:00', comments: [] },
  { id: 3, author: '你', imgs: ['photos/9.jpg'], likes: 89, caption: '月亮和你。🌙', time: '3天前', date: '2026-06-19 22:00', comments: [] },
  { id: 4, author: '你', imgs: ['photos/1.jpg'], likes: 312, caption: '胶片记录生活。📷', time: '1周前', date: '2026-06-16 12:00', comments: [] }
];

// 🌟 2. 软件首页动态流（包含所有人发的，按时间混排）
window.IG_FEED = [
  { id: 5, author: 'vernonline', avatar: 'photos/v.jpg',imgs: ['photos/a.jpg'], likes: 628234, caption: '👀', time: '刚刚', date: '2026-10-14 21:00', comments: [] },
  { id: 1, author: '你', imgs: ['photos/2.jpg'], likes: 128, caption: '今天的晚餐，某人请客 🍽️', time: '2小时前', date: '2026-06-22 20:00', comments: [] },
  { id: 6, author: 'vernonline', avatar: 'photos/v.jpg',imgs:['photos/b.jpg', 'photos/c.jpg', 'photos/d.jpg', 'photos/e.jpg'], likes: 452048, caption: 'VERNONLINE@vernonline', time: '昨天', date: '2026-06-21 15:00', comments: [] },
  { id: 2, author: '你', imgs: ['photos/3.jpg', 'photos/4.jpg'], likes: 256, caption: '周末的汉江，风很大。🌬️', time: '昨天', date: '2026-06-21 15:00', comments: [] },
  { id: 7, author: '蜜蜜', imgs: ['photos/9.jpg'], likes: 89, caption: '月亮和你。🌙', time: '3天前', date: '2026-06-19 22:00', comments: [] },
  { id: 3, author: '你', imgs: ['photos/9.jpg'], likes: 89, caption: '月亮和你。🌙', time: '3天前', date: '2026-06-19 22:00', comments: [] }
];

// 🌟 3. 个人主页信息
window.IG_PROFILE = {
  name: '你',
  handle: 'your_handle',
  bio: '记录生活 ✨',
  posts: window.IG_POSTS.length, // 自动计算你的帖子数量
  followers: 1280,
  following: 96
};

window.IG_HOME_DATA = {
  stories: ['你的快拍', 'vernonline', '蜜蜜', '小雅', '组长']
};


/* ============================================================
   Safari
   ============================================================ */
/* 【这里改收藏夹】[首字母, 名称, 颜色] */
window.SAFARI_FAVS = [
  ['A', 'Apple', '#333333'],
  ['G', 'Google', '#4285f4'],
  ['B', 'Bilibili', '#fb7299'],
  ['W', '微博', '#e6162d'],
  ['T', '淘宝', '#ff5000'],
  ['Z', '知乎', '#0066ff'],
  ['J', '京东', '#e1251b'],
  ['M', '地图', '#34c759']
];

/* ============================================================
   设置
   ============================================================ */
/* 【这里改设置项】[颜色, 图标 key, 名称] */
window.SETTINGS_ROWS = [
  ['#ff9500', 'bell', '通知'],
  ['#007aff', 'speaker', '声音与触感'],
  ['#5856d6', 'moon', '专注模式'],
  ['#34c759', 'person', 'Face ID 与密码'],
  ['#8e8e93', 'gear', '通用']
];

/* ============================================================
   Twitter 数据配置
   ============================================================ */
window.TW_DATA = {
  me: {
    name: '你',
    handle: '@you',
    bio: '记录生活。',
    avatar: 'photos/avatar.jpg', 
    tweets: [
      { id: 1, text: '为什么是remember', time: '2小时前', likes: 1 },
      { id: 2, text: '我好想他。', time: '昨天', likes: 1 },
      { id: 3, text: '希望你快乐', time: '昨天', likes: 1 },
      { id: 4, text: '我真的有这么恋爱脑吗！！', time: '昨天', likes: 1 },
      { id: 5, text: '他好笨。', time: '昨天', likes: 1 },
      { id: 6, text: '汉江边风是不是太大了！', time: '2026-01-22', likes: 1, comments: [
          { name: '蜜蜜', text: '让你出去约会、、、', time: '2025-06-17' } ]},
      { id: 7, text: '托某人的福吃上了', time: '2025-06-22', imgs:['photos/2.jpg', 'photos/3.jpg'], likes: 2, comments: [ { name: '蜜蜜', text: '好吃的也不带我', time: '2025-06-17' } ] },
      { id: 8, text: '吃饭是约会的意思吗', time: '2025-06-20', likes: 1, comments: [
          { name: '蜜蜜', text: '你完了', time: '2025-06-20' }]}, 
      { id: 9, text: '蜜蜜让我当心点坏男人', time: '2025-06-17', likes: 1, comments: [
          { name: '蜜蜜', text: '我会时刻盯着你的', time: '2025-06-17' } ] }, 
      { id: 10, text: '今天的月亮很漂亮。', time: '2025-06-17', likes: 1, imgs: ['photos/9.jpg'] },
      { id: 11, text: '到底谁在过521！！', time: '2025-05-21', likes: 1},
      { id: 12, text: '在大量糖分中发现少量血液', time: '2025-05-10', likes: 1},
      { id: 13, text: '这大首尔竟然没有属于我的帅哥', time: '2025-04-29', likes: 1}
    ]
  }, // 🌟 核心修复：这里必须是逗号，绝对不能是 }
  
mimi: {
    name: '蜜蜜',
    handle: '@mimi_daily',
    bio: '干饭第一名！',
    avatar: 'photos/mimi.jpg', // 找张图片放进去，或者先留空用首字母
    tweets: [
      { id: 101, text: '今天喝到了超好喝的奶茶！', time: '2025-05-13', likes: 12,comments: [
          { name: '我', text: '快发给我', time: '2025-05-13' }] },
      { id: 102, text: '全网征集周末圣水洞逛街搭子一枚', time: '2025-05-08', comments: [
          { name: '我', text: '除了我你还想和谁逛', time: '2025-05-08' }] },
      { id: 5, text: '我蜜蜜完了。她要被坏男人骗走了www', time: '2025-06-22', likes: 45,comments: [
          { name: '我', text: '不要这样说~', time: '2026-05-22' }] }
    ]
  },

  vn: {
    name: 'vn',
    handle: '@vn',
    bio: 'Leave a message.',
    avatar: 'photos/v.jpg',
    tweets: [
      { id: 8, text: '紧张。', time: '2026-06-22', likes: 1 },
      { id: 7, text: '紧张。', time: '2026-06-22', likes: 1 },
      { id: 6, text: '紧张。', time: '2026-06-22', likes: 1 },
      { id: 4, text: '好吃。', time: '2026-06-22', imgs: ['photos/5.jpg'],private: true},
      { id: 3,text: '紧张。', time: '2026-06-22', likes: 1, private: true},
      { id: 2, text: '好不容易让珉奎哥把那个预约让给我。', time: '2025-06-20', likes: 8, private: true },
      { id: 1, text: '她说今天的月亮很漂亮。', time: '2025-06-17', imgs: ['photos/9.jpg'], private: true}
    ]
  }
};

/* ============================================================
   Safari 搜索记录（线索）
   ============================================================ */
window.SAFARI_HISTORY = [
  { text: '爱是永恒的吗', time: '09:30' },
  { text: '圣水 草莓蛋糕', time: '09:15' }, 
  { text: '送什么胶片比较合适', time: '昨天' },
  { text: '怎么样算在一起了', time: '昨天' }
];


/* ============================================================
   分角色互动剧本
   ============================================================ */
window.STORY_SCRIPTS = {
  'Vernon': [
    { them: 'Dinner tonight？',me: '最近你不是比较忙', me: '过两天再说吧',them: '其实还好', them: '那过两天见',them: '你上次说的那家蛋挞要去吃吗',delay: 1000 },
    { me: '到时候说吧', them: '好',delay: 3000 },
    { them: '你还好吗？',me: '没事，你快去联系吧', delay: 1000, isEnd: true }
  ],
  'Vernon_Act2': [
    { me: '（发了一张秘密相册里的截图）', them: '……你终于找到这个相册了。', delay: 1500 },
    { me: '里面的照片……', them: '我以为你永远都不会想起来。那张照片，是我们第一次去海边的时候拍的。', delay: 2000 },
    { me: '对不起，我忘了这么久。', them: '没关系，只要你还在，忘了就忘了。以后我陪你重新拍。', delay: 2500, isEnd: true }
  ]
};

/* ============================================================
   日历事件数据
   ============================================================ */
window.CALENDAR_EVENTS = {
  // 格式：'日期号': [{ time: '时间', title: '事件名' }]
  '11': [{ time: '全天', title: '♥ 纪念日' }],
  '15': [{ time: '18:00', title: '和Vernon吃饭' }],
  '25': [{ time: '全天', title: '圣诞节' }]
};


/* ============================================================
   备忘录数据
   ============================================================ */
window.NOTES_DATA = [
  { 
    id: 1, 
    title: '欧巴车', 
    content: '今天将是我无比拥护崔瀚率先生的一天！感谢他让我也体验了一把法拉利的副驾！太爽了！蜜蜜马上就要说我见色忘义了，我发誓苟富贵莫相忘！！', 
    time: '2026-08-15' 
  },
  { 
    id: 2, 
    title: '真是服了他了', 
    content: '居然把手机镜头烧坏了，他自己还不知道？！打视频的时候以为只有他能看见呢，结果我截图发给他才知道彻底报废了，等着我给你从中国带双卡双待吧。，，，不过这种死亡滤镜这么可爱啊、、、', 
    time: '2026-07-28' 
  },
  { 
    id: 3, 
    title: '🛒 购物清单', 
    content: '- 洗发水（快用完了）\n- 维生素 C\n- 手机壳（买个透明防摔的）\n- 隐形眼镜护理液\n- 黑色签字笔一盒', 
    time: '10月12日' 
  },
  { 
    id: 4, 
    title: '谁大冬天骑车', 
    content: '骑到一半去买手套了，难道不知道汉江的风多大吗！崔瀚率笨蛋！冻感冒了怎么办！', 
    time: '2026-01-22' 
  },
   { 
    id: 5, 
    title: '直男品味', 
    content: '我迟早要把他衣柜里这些连连看的衣服给扔了，这衣服哪里好看了还买两件一摸一样的、、、他说给我一件我才不要、、自己留着穿吧', 
    time: '2025-08-12' 
  }
];


