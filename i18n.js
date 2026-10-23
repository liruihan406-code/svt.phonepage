'use strict';
/* ============================================================
   界面文案 + 日期/时间格式化
   ============================================================ */

const LANG = window.LANG || 'zh';
const LOCALE = { zh: 'zh-CN', en: 'en-US' }[LANG] || 'zh-CN';

/* 界面文案：只放通用文字，人名和聊天内容在 data.js */
const UI = {
  home:        { zh: '主屏幕', en: 'Home' },
  now:         { zh: '现在', en: 'now' },
  swipeUp:     { zh: '向上轻扫以打开', en: 'Swipe up to open' },
  enterPass:   { zh: '输入密码', en: 'Enter Passcode' },
  emergency:   { zh: '紧急情况', en: 'Emergency' },
  cancel:      { zh: '取消', en: 'Cancel' },
  delete:      { zh: '删除', en: 'Delete' },
  search:      { zh: '搜索', en: 'Search' },
  folders:     { zh: '文件夹', en: 'Folders' },
  allDay:      { zh: '全天', en: 'All-day' },
  noEvents:    { zh: '无日程', en: 'No Events' },
  today:       { zh: '今天', en: 'Today' },
  yesterday:   { zh: '昨天', en: 'Yesterday' },
  inbox:       { zh: '收件箱', en: 'Inbox' },
  edit:        { zh: '编辑', en: 'Edit' },
  chats:       { zh: '聊天', en: 'Chats' },
  friends:     { zh: '好友', en: 'Friends' },
  openChat:    { zh: '开放聊天', en: 'OpenChat' },
  shopping:    { zh: '购物', en: 'Shopping' },
  more:        { zh: '更多', en: 'More' },
  photo:       { zh: '照片', en: 'Photo' },
  msgInput:    { zh: '消息', en: 'Message' },
  searchWeb:   { zh: '搜索或输入网站名称', en: 'Search or enter website name' },
  library:     { zh: '图库', en: 'Library' },
  select:      { zh: '选择', en: 'Select' },
  nPhotos:     { zh: '{0} 张照片', en: '{0} Photos' },
  songs:       { zh: '歌曲', en: 'Songs' },
  libraryMu:   { zh: '资料库', en: 'Library' },
  play:        { zh: '播放', en: 'Play' },
  shuffle:     { zh: '随机播放', en: 'Shuffle' },
  recents:     { zh: '最近通话', en: 'Recents' },
  mobile:      { zh: '手机', en: 'mobile' },
  favorites:   { zh: '个人收藏', en: 'Favorites' },
  contacts:    { zh: '通讯录', en: 'Contacts' },
  keypad:      { zh: '拨号键盘', en: 'Keypad' },
  voicemail:   { zh: '语音留言', en: 'Voicemail' },
  seoul:       { zh: '北京', en: 'Beijing' },
  mostlySunny: { zh: '大部晴朗', en: 'Mostly Sunny' },
  hiLo:        { zh: '最高:21° 最低:12°', en: 'H:21° L:12°' },
  acct:        { zh: '账户、iCloud、媒体与购买项目', en: 'Account, iCloud, Media & Purchases' },
  airplane:    { zh: '飞行模式', en: 'Airplane Mode' },
  on:          { zh: '打开', en: 'On' },
  cellular:    { zh: '蜂窝网络', en: 'Cellular' },
  battery:     { zh: '电池', en: 'Battery' },
  general:     { zh: '通用', en: 'General' },
  access:      { zh: '辅助功能', en: 'Accessibility' },
  camera:      { zh: '相机', en: 'Camera' },
  wallpaper:   { zh: '墙纸', en: 'Wallpaper' },
  notif:       { zh: '通知', en: 'Notifications' },
  sound:       { zh: '声音与触感', en: 'Sounds & Haptics' },
  focus:       { zh: '专注模式', en: 'Focus' },
  screenTime:  { zh: '屏幕使用时间', en: 'Screen Time' },
  faceid:      { zh: '面容 ID 与密码', en: 'Face ID & Passcode' },
  privacy:     { zh: '隐私与安全性', en: 'Privacy & Security' }
};

function t(k, ...a) {
  const e = UI[k];
  let s = e ? (e[LANG] ?? e.zh) : k;
  a.forEach((v, i) => { s = s.split('{' + i + '}').join(v); });
  return s;
}

/* ---------- 日期/时间 ---------- */
const _fc = {};
const _f = o => { const k = JSON.stringify(o); return _fc[k] || (_fc[k] = new Intl.DateTimeFormat(LOCALE, o)); };
const _d = (y, m, d, h = 12, mi = 0) => new Date(y, m - 1, d, h, mi);

function fmtTime(min) {
  min = ((Math.round(min) % 1440) + 1440) % 1440;
  return _f({ hour: 'numeric', minute: '2-digit' }).format(_d(2026, 10, 17, Math.floor(min / 60), min % 60));
}
const fmtFull   = (y, m, d) => _f({ year: 'numeric', month: 'long', day: 'numeric', weekday: 'long' }).format(_d(y, m, d));
const fmtYMD    = (y, m, d) => _f({ year: 'numeric', month: 'long', day: 'numeric' }).format(_d(y, m, d));
const fmtMD     = (m, d)    => _f({ month: 'long', day: 'numeric' }).format(_d(2026, m, d));
const fmtYM     = (y, m)    => _f({ year: 'numeric', month: 'long' }).format(_d(y, m, 1));
const fmtMonth  = m         => _f({ month: 'long' }).format(_d(2026, m, 1));
const fmtYear   = y         => _f({ year: 'numeric' }).format(_d(y, 6, 1));
const fmtNum    = (y, m, d) => _f({ year: 'numeric', month: 'numeric', day: 'numeric' }).format(_d(y, m, d));
const wdLong    = (y, m, d) => _f({ weekday: 'long' }).format(_d(y, m, d));
const wdShort   = (y, m, d) => _f({ weekday: 'short' }).format(_d(y, m, d));
const wdNarrow  = ()        => [0,1,2,3,4,5,6].map(i => _f({ weekday: 'narrow' }).format(_d(2026, 10, 4 + i)));
const fmtLockDate = ()      => _f({ month: 'long', day: 'numeric', weekday: 'long' }).format(new Date());
const fmtHour     = h       => _f({ hour: 'numeric' }).format(_d(2026, 10, 17, h, 0));

function alarmParts(h, mi) {
  const ps = _f({ hour: 'numeric', minute: '2-digit' }).formatToParts(_d(2026, 10, 17, h, mi));
  const di = ps.findIndex(p => p.type === 'dayPeriod');
  const dp = di >= 0 ? ps[di].value : '';
  const tm = ps.filter(p => p.type !== 'dayPeriod').map(p => p.value).join('').trim();
  const hi = ps.findIndex(p => p.type === 'hour');
  return { dp, tm, before: di >= 0 && di < hi };
}

function fmtLabel(l, full) {
  if (l === '今天') return full ? fmtFull(2026, 10, 17) : t('today');
  if (l === '昨天') return t('yesterday');
  return l;
}

document.documentElement.lang = LANG;