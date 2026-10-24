'use strict';

/* 本地存储：聊天记录 */
function saveChatData() {
  localStorage.setItem('my_yume_chats', JSON.stringify(CHATS));
}
function loadChatData() {
  const saved = localStorage.getItem('my_yume_chats');
  if (saved) {
    const parsed = JSON.parse(saved);
    for (let name in parsed) {
      CHATS[name] = parsed[name];
    }
  }
}
loadChatData();

/* App 图标定义 */
function kakaoIcon(){ return `<div style="width:100%;height:100%;background:#fee500;display:grid;place-items:center"><svg viewBox="0 0 60 60" width="100%" height="100%"><path d="M30 14.5c-11.9 0-21.5 7.4-21.5 16.5 0 5.9 4 11.1 10 14l-2.2 7.8c-.2.7.6 1.3 1.2.8l9.2-6.1c1.1.1 2.2.2 3.3.2 11.9 0 21.5-7.4 21.5-16.6S41.9 14.5 30 14.5Z" fill="#3a1d1d"/><g fill="#fee500"><circle cx="21.5" cy="31" r="2.7"/><circle cx="30" cy="31" r="2.7"/><circle cx="38.5" cy="31" r="2.7"/></g></svg></div>`; }

function phoneIcon(){ return `<div style="width:100%;height:100%;background:linear-gradient(135deg,#65f38f,#28c253);display:grid;place-items:center"><svg viewBox="0 0 24 24" width="60%" fill="#fff"><path d="M6.6 3.2c.6-.3 1.4-.1 1.8.5l1.9 3c.4.6.3 1.4-.2 1.9l-1.4 1.3a12.4 12.4 0 0 0 5.4 5.4l1.3-1.4c.5-.5 1.3-.6 1.9-.2l3 1.9c.6.4.8 1.2.5 1.8l-.9 1.9c-.5 1-1.6 1.6-2.7 1.4C10 19.6 4.4 14 3.3 6.8c-.2-1.1.4-2.2 1.4-2.7Z"/></svg></div>`; }
function messagesIcon(){ return `<div style="width:100%;height:100%;background:linear-gradient(135deg,#65f38f,#28c253);display:grid;place-items:center"><svg viewBox="0 0 24 24" width="60%" fill="#fff"><path d="M12 3.5c-5.2 0-9.5 3.4-9.5 7.6 0 2.4 1.4 4.5 3.6 5.9L5.2 21l4.3-2.4c.8.2 1.6.3 2.5.3 5.2 0 9.5-3.4 9.5-7.6S17.2 3.5 12 3.5Z"/></svg></div>`; }

function photosIcon(){ 
  return `<div style="width:100%;height:100%;background:#fff;display:grid;place-items:center;border-radius:14.5px;overflow:hidden;">
    <svg viewBox="0 0 60 60" width="100%" height="100%">
      <!-- 8片彩色花瓣 -->
      <ellipse cx="30" cy="18" rx="4.5" ry="11" fill="#ff3b30" transform="rotate(0 30 30)"/>
      <ellipse cx="30" cy="18" rx="4.5" ry="11" fill="#ff9500" transform="rotate(45 30 30)"/>
      <ellipse cx="30" cy="18" rx="4.5" ry="11" fill="#ffcc00" transform="rotate(90 30 30)"/>
      <ellipse cx="30" cy="18" rx="4.5" ry="11" fill="#34c759" transform="rotate(135 30 30)"/>
      <ellipse cx="30" cy="18" rx="4.5" ry="11" fill="#5ac8fa" transform="rotate(180 30 30)"/>
      <ellipse cx="30" cy="18" rx="4.5" ry="11" fill="#007aff" transform="rotate(225 30 30)"/>
      <ellipse cx="30" cy="18" rx="4.5" ry="11" fill="#5856d6" transform="rotate(270 30 30)"/>
      <ellipse cx="30" cy="18" rx="4.5" ry="11" fill="#af52de" transform="rotate(315 30 30)"/>
      <!-- 中间留白 -->
      <circle cx="30" cy="30" r="5" fill="#fff"/>
    </svg>
  </div>`; 
}

function instagramIcon(){ return `<div style="width:100%;height:100%;background:linear-gradient(45deg,#ffc35c,#ff3d6e 50%,#7c3bf0);display:grid;place-items:center"><svg viewBox="0 0 60 60" width="60%" fill="none" stroke="#fff" stroke-width="3.2"><rect x="14" y="14" width="32" height="32" rx="9"/><circle cx="30" cy="30" r="8"/><circle cx="40" cy="20" r="2" fill="#fff" stroke="none"/></svg></div>`; }

function safariIcon(){ return `<div style="width:100%;height:100%;background:#fff;display:grid;place-items:center"><svg viewBox="0 0 60 60" width="100%" height="100%"><circle cx="30" cy="30" r="26" fill="#1e8ef0"/><circle cx="30" cy="30" r="23" fill="#3aa8ff"/><path d="M30 30 44 16 34 34Z" fill="#ff3b30"/><path d="M30 30 16 44 26 26Z" fill="#fff"/></svg></div>`; }

function settingsIcon(){ return `<div style="width:100%;height:100%;background:linear-gradient(135deg,#a7adb6,#6d727b);display:grid;place-items:center"><svg viewBox="0 0 60 60" width="70%" fill="none" stroke="#e9eaee" stroke-width="3"><circle cx="30" cy="30" r="16" stroke-dasharray="4.5 4.6" stroke-width="7"/><circle cx="30" cy="30" r="12" fill="#878c95"/><circle cx="30" cy="30" r="5" stroke-width="3"/></svg></div>`; }

function notesIcon(){ return `<div style="width:100%;height:100%;background:#fff;display:flex;flex-direction:column;border-radius:14.5px;overflow:hidden;box-shadow:inset 0 0 0 0.5px rgba(0,0,0,0.1);"><div style="height:22%;background:#fff;border-bottom:1px solid #e5e5ea;display:flex;align-items:center;padding:0 15%;"><div style="width:100%;height:1px;background:#e5e5ea;"></div></div><div style="flex:1;display:flex;flex-direction:column;justify-content:space-evenly;padding:0 15%;"><div style="width:100%;height:1px;background:#e5e5ea;"></div><div style="width:100%;height:1px;background:#e5e5ea;"></div><div style="width:100%;height:1px;background:#e5e5ea;"></div></div></div>`; }

function twitterIcon(){ return `<div style="width:100%;height:100%;background:#000;display:grid;place-items:center"><svg viewBox="0 0 24 24" width="55%" fill="#fff"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg></div>`; }
function calendarIcon(){ 
  return `<div style="width:100%;height:100%;background:#fff;display:flex;flex-direction:column;border-radius:14.5px;overflow:hidden;">
    <div style="height:16px;background:#ff3b30;width:100%;"></div>
    <div style="flex:1;display:flex;justify-content:center;align-items:center;font-size:28px;font-weight:300;color:#000;padding-top:2px;">
      ${new Date().getDate()}
    </div>
  </div>`; 
}

const APP_ICONS = {
  kakao: kakaoIcon,
  phone: phoneIcon,
  messages: messagesIcon,
  photos: photosIcon,
  instagram: instagramIcon,
  safari: safariIcon,
  settings: settingsIcon,
  notes: notesIcon,
  twitter: twitterIcon,
  calendar: calendarIcon
};

/* KakaoTalk */
let chatId = 'Vernon';
function openChat(name){ chatId = name; push('chatRoom'); }

const VIEWS = {};
const tabbar = (items,on)=>`<div class="tabbar">${items.map(([ic,l,fn],i)=>`<button class="${i===on?'on':''}" onclick="${fn||''}">${ic}<span>${l}</span></button>`).join('')}</div>`;

VIEWS.kakao = () => ({
  cls:'kk',
  html:`<div class="kk-h"><b>${t('chats')}</b><span>
    <button onclick="push('search')">${G.search}</button>
    <button onclick="toast('新建聊天')">${G.chatPlus}</button>
    <button onclick="push('more')">${G.gear}</button>
  </span></div>
  <div class="scroll">${CHAT_NAMES.map(n=>{
    const arr=CHATS[n]||[]; const last=arr[arr.length-1];
    return `<button class="crow" onclick="openChat('${esc(n)}')">
      <div class="av">${esc(n[0])}</div>
      <div style="flex:1;min-width:0">
        <div class="cn">${esc(n)}</div>
        <div class="cp">${last?esc(last[0]):''}</div>
      </div>
      <div style="display:flex;flex-direction:column;align-items:flex-end;gap:6px">
        <span class="ct">${last?last[2]:''}</span>
      </div>
    </button>`;
  }).join('')}</div>
  ${tabbar([
    [G.person,t('friends'),"push('friends')"],
    [G.chat,t('chats'),"show('kakao')"],
    [G.globe,t('openChat'),"toast('开放聊天')"],
    [G.bag,t('shopping'),"toast('购物')"],
    [G.dotsH,t('more'),"push('more')"]
  ],1)}`
});

let storyProgress = JSON.parse(localStorage.getItem('my_story_progress')) || {};
function saveStoryProgress() {
  localStorage.setItem('my_story_progress', JSON.stringify(storyProgress));
}

VIEWS.chatRoom = () => {
  const isStory = window.STORY_SCRIPTS && window.STORY_SCRIPTS[chatId]; 
  const currentStep = isStory ? (storyProgress[chatId] || 0) : -1;
  const scene = isStory ? isStory[currentStep] : null;
  const isLocked = isStory && (!scene || scene.isEnd);

  let bottomHtml = '';
  
  if (isLocked) {
    // 🔒 剧情结束，输入框变灰锁死
    bottomHtml = `<div class="cin safe" style="pointer-events:none; opacity:0.6;">
      <button class="plus-btn">+</button>
      <div class="fld ph" style="color:#aaa;">无法发送消息</div>
      <button class="emoji-btn">☺</button>
      <button class="snd" style="background:#e5e5ea;">
        <svg viewBox="0 0 24 24" fill="none" stroke="#aaa" stroke-width="2.5"><path d="M12 19V5M6 11l6-6 6 6"/></svg>
      </button>
    </div>`;
  } else {
    // 🌟 正常打字 / 剧本模式
    const inputText = scene ? scene.me : '';
    const isActive = scene || pendingText.length > 0; 
    
    bottomHtml = `<div class="cin safe" id="cin">
      <button class="plus-btn" onclick="openAttach()">+</button>
      
      <div class="fld ${inputText ? '' : 'ph'}" id="fld" onclick="${scene ? 'sendStoryMsg()' : 'openKbd()'}">
        ${inputText ? esc(inputText) : '뭐를?'}
      </div>
      
      <button class="emoji-btn" onclick="${scene ? '' : 'toggleEmoji()'}">☺</button>
      
      <button class="snd" id="snd" style="${isActive ? 'background:#fee500;transform:scale(1)' : 'background:#e5e5ea;transform:scale(.85)'}" onclick="${scene ? 'sendStoryMsg()' : 'sendMsg()'}">
        <svg viewBox="0 0 24 24" fill="none" stroke="${isActive ? '#3a1d1d' : '#aaa'}" stroke-width="2.5"><path d="M12 19V5M6 11l6-6 6 6"/></svg>
      </button>
    </div>
    <div class="cand" id="cand" style="display:none"></div>
    <div class="kbd" id="kbd"></div>`;
  }

  return {
    cls:'chat',
    html:`<div class="chat-h">
      <button class="bk" onclick="back()">${G.chevL}<span></span></button>
      <div class="nm" onclick="showProfile('${esc(chatId)}')">${esc(chatId)}</div>
      <div class="rt">
        <button onclick="push('search')">${G.search}</button>
        <button onclick="openChatMenu()">${G.menu}</button>
      </div>
    </div>
    <div class="msgs" id="msgs">${renderMessages(chatId)}</div>
    ${bottomHtml}`,
    init:()=>{ 
      const b=$('#msgs'); if(b)b.scrollTop=b.scrollHeight; 
      if(scene) setTimeout(()=>{ if(b) b.scrollTop=b.scrollHeight; }, 100);
    }
  };
};
function sendStoryMsg() {
  const isStory = window.STORY_SCRIPTS[chatId];
  const step = storyProgress[chatId] || 0;
  const scene = isStory[step];
  if (!scene) return;

  const arr = CHATS[chatId] || (CHATS[chatId]=[]);
  arr.push([scene.me, 'me', nowTime()]);
  saveChatData();
  refreshChat();

  showTyping();

  setTimeout(() => {
    hideTyping();
    arr.push([scene.them, 'them', nowTime()]);
    saveChatData();
    refreshChat();
    
    storyProgress[chatId] = step + 1;
    saveStoryProgress();

    setTimeout(() => {
      if(view === 'chatRoom') show('chatRoom', 'none');
    }, 500);
  }, scene.delay || 1000);
}

function renderMessages(name){
  const arr = CHATS[name] || [];
  if(!arr.length) return `<div style="text-align:center;color:#6b7b8a;font-size:13px;margin-top:30px">还没有消息，打个招呼吧</div>`;
  
  return arr.map(([txt,w,tm],i)=>{
    if(w === 'date') {
      return `<div style="display:flex; justify-content:center; margin: 16px 0;"><span style="background: rgba(0,0,0,0.15); color: #fff; font-size: 12px; padding: 4px 12px; border-radius: 14px;">${txt}</span></div>`;
    }

    const prev = arr[i-1] || [];
    const next = arr[i+1] || [];
    const first = i===0 || prev[1] !== w || prev[1] === 'date';
    const last = i===arr.length-1 || next[1] !== w || next[1] === 'date' || next[2] !== tm;
    const timeHtml = last ? `<div class="tm">${tm}</div>` : '';

    return `<div class="ln ${w==='me'?'me':'th'} ${first?'first':''}">
      ${w!=='me'&&first?`<div class="sav">${esc(name[0])}</div>`:''}
      <div class="col">
        ${w!=='me'&&first?`<div class="who">${esc(name)}</div>`:''}
        <div class="wrap">
          ${w==='me'?timeHtml:''}
          <div class="bb">${esc(txt)}</div>
          ${w!=='me'?timeHtml:''}
        </div>
      </div>
    </div>`;
  }).join('');
}

function refreshChat(){
  const b=$pg('#msgs'); if(!b)return;
  b.innerHTML = renderMessages(chatId);
  b.scrollTop = b.scrollHeight;
}
function showTyping(){
  const b=$pg('#msgs'); if(!b||$pg('#typ'))return;
  b.insertAdjacentHTML('beforeend', `<div class="ln th first" id="typ"><div class="sav">${esc(chatId[0])}</div><div class="col"><div class="who">${esc(chatId)}</div><div class="wrap"><div class="bb typing"><i></i><i></i><i></i></div></div></div></div>`);
  b.scrollTop = b.scrollHeight;
}
function hideTyping(){ const x=$pg('#typ'); if(x)x.remove(); }

function openChatMenu(){
  const d=document.createElement('div'); d.className='sheet';
  d.innerHTML=`<div class="g">
    <button onclick="closeSheet();showProfile('${esc(chatId)}')">查看资料</button>
    <button onclick="closeSheet();toast('已开启消息免打扰')">消息免打扰</button>
    <button onclick="closeSheet();toast('已加入收藏')">收藏聊天</button>
    <button class="red" onclick="closeSheet();clearChat()">清空聊天记录</button>
  </div><button class="c" onclick="closeSheet()">取消</button>`;
  d.onclick=e=>{ if(e.target===d) closeSheet(); };
  OV.appendChild(d);
  d.animate([{opacity:0},{opacity:1}],{duration:200});
}
function closeSheet(){ const s=OV.querySelector('.sheet,.profile'); if(s) s.remove(); }
function clearChat(){ CHATS[chatId]=[]; refreshChat(); toast('已清空'); }
function showProfile(name){
  const d=document.createElement('div'); d.className='profile';
  d.innerHTML=`<div class="card">
    <div class="big">${esc(name[0])}</div>
    <h3>${esc(name)}</h3>
    <p>KakaoTalk 好友</p>
    <div class="btns">
      <button onclick="closeSheet()">关闭</button>
      <button class="pri" onclick="closeSheet();toast('已发起聊天')">聊天</button>
    </div>
  </div>`;
  d.onclick=e=>{ if(e.target===d) closeSheet(); };
  OV.appendChild(d);
  d.animate([{opacity:0},{opacity:1}],{duration:200});
}
function openAttach(){
  const d=document.createElement('div'); d.className='sheet';
  d.innerHTML=`<div class="g">
    <button onclick="closeSheet();toast('相册')">${G.photo} 相册</button>
    <button onclick="closeSheet();toast('拍照')">${G.camera} 拍照</button>
    <button onclick="closeSheet();toast('文件')">${G.file} 文件</button>
    <button onclick="closeSheet();toast('礼物')">${G.gift} 礼物</button>
  </div><button class="c" onclick="closeSheet()">取消</button>`;
  d.onclick=e=>{ if(e.target===d) closeSheet(); };
  OV.appendChild(d);
  d.animate([{opacity:0},{opacity:1}],{duration:200});
}

VIEWS.friends = () => ({
  cls:'kk',
  html:`<div class="kk-h"><b>${t('friends')}</b><span><button onclick="push('search')">${G.search}</button><button onclick="toast('添加好友')">${G.chatPlus}</button></span></div>
  <div class="scroll">${FRIENDS.map(f=>`
    <button class="fr-row" onclick="openChat('${esc(f.name)}')">
      <div class="av">${esc(f.name[0])}</div>
      <div class="fn">${esc(f.name)}<div class="fs">${esc(f.status)}</div></div>
      <button onclick="event.stopPropagation();toast('已发消息')">${G.chat}</button>
    </button>`).join('')}</div>
  ${tabbar([
    [G.person,t('friends'),"show('friends')"],
    [G.chat,t('chats'),"show('kakao')"],
    [G.globe,t('openChat'),"toast('开放聊天')"],
    [G.bag,t('shopping'),"toast('购物')"],
    [G.dotsH,t('more'),"push('more')"]
  ],0)}`
});

VIEWS.more = () => ({
  cls:'kk',
  html:`<div class="kk-h"><b>${t('more')}</b></div>
  <div class="scroll" style="padding-top:104px">
    <div class="more-sec">Kakao</div>
    <button class="more-row" onclick="toast('我的资料')"><span class="mi" style="background:#fee500">${G.person}</span><span>我的资料</span><small>${CONFIG.userName}</small></button>
    <button class="more-row" onclick="toast('通知设置')"><span class="mi" style="background:#ff9500">${G.bell}</span><span>${t('notif')}</span></button>
    <button class="more-row" onclick="toast('主题')"><span class="mi" style="background:#5856d6">${G.theme}</span><span>主题</span></button>
    <div class="more-sec">其他</div>
    <button class="more-row" onclick="toast('隐私')"><span class="mi" style="background:#34c759">${G.lock}</span><span>隐私</span></button>
    <button class="more-row" onclick="toast('版本 1.0')"><span class="mi" style="background:#8e8e93">${G.info}</span><span>关于</span><small>1.0</small></button>
    <button class="more-row" onclick="closeApp()"><span class="mi" style="background:#ff3b30">${G.exit}</span><span>退出 KakaoTalk</span></button>
  </div>
  ${tabbar([
    [G.person,t('friends'),"push('friends')"],
    [G.chat,t('chats'),"show('kakao')"],
    [G.globe,t('openChat'),"toast('开放聊天')"],
    [G.bag,t('shopping'),"toast('购物')"],
    [G.dotsH,t('more'),"show('more')"]
  ],4)}`
});

VIEWS.search = () => ({
  cls:'kk',
  html:`<div class="search-bar">
    <div class="sb">${G.search}<input id="q" placeholder="搜索聊天或好友" oninput="doSearch()"></div>
    <button onclick="back()">取消</button>
  </div>
  <div class="search-list" id="searchList">${searchResults('')}</div>`
});
function searchResults(q){
  q = (q||'').trim().toLowerCase();
  const names = [...new Set([...CHAT_NAMES, ...FRIENDS.map(f=>f.name)])];
  const hit = names.filter(n=>!q || n.toLowerCase().includes(q));
  if(!hit.length) return `<div style="text-align:center;color:#aaa;font-size:14px;margin-top:40px">没有结果</div>`;
  return hit.map(n=>`<button class="crow" onclick="openChat('${esc(n)}')"><div class="av">${esc(n[0])}</div><div style="flex:1"><div class="cn">${esc(n)}</div><div class="cp">${CHATS[n]?esc((CHATS[n].slice(-1)[0]||[''])[0]):'好友'}</div></div></button>`).join('');
}
function doSearch(){
  const q = $('#q') ? $('#q').value : '';
  const l = $('#searchList'); if(l) l.innerHTML = searchResults(q);
}

function sendMsg(){
  const txt = pendingText.trim();
  if(!txt) return;
  
  const arr = CHATS[chatId] || (CHATS[chatId]=[]);
  arr.push([txt, 'me', nowTime()]);
  saveChatData();
  
  pendingText=''; pinyinBuf='';
  setField('', false);
  $('#snd').classList.remove('on');
  hideCand();
  refreshChat();
  closeKbd();

  const replies = window.AUTO_REPLY[chatId] || ['嗯嗯', '然后呢？'];
  const reply = replies[Math.floor(Math.random()*replies.length)];
  
  showTyping();
  const currentChat = chatId; 
  
  setTimeout(()=>{
    hideTyping();
    const a = CHATS[currentChat];
    a.push([reply, 'them', nowTime()]);
    saveChatData();
    
    if (view === 'chatRoom' && chatId === currentChat) {
      refreshChat();
    } else {
      showNotification(currentChat, reply);
    }
  }, 1200 + Math.random()*800);
}

/* 电话 */
let dialValue = '';
VIEWS.phone = () => ({
  html:`<div class="nav solid" style="position:absolute;z-index:6;top:0;left:0;right:0;height:98px;padding:54px 8px 0;display:grid;grid-template-columns:1fr auto 1fr;align-items:center;background:rgba(249,249,249,.9);backdrop-filter:blur(20px)">
    <span></span><div class="nb-title" style="opacity:1">${t('recents')}</div><span></span>
  </div>
  <div class="scroll" style="padding-top:98px">
    <h1 class="lt">${t('recents')}</h1>
    <div style="margin:0 16px;background:#fff;border-radius:11px;overflow:hidden">
      ${CALLS.map(c=>`<div class="rec-row ${c.miss?'miss':''}">
        <div class="pn"><b>${esc(c.name)}</b><small>${c.type} · ${t('mobile')}</small></div>
        <span class="pd">${c.time}</span>
        <span class="inf">${G.info.replace('<svg','<svg width="22" style="color:var(--blue)"')}</span>
      </div>`).join('')}
    </div>
  </div>
  <div class="ph-tabs">
    <button>${G.person}<span>${t('favorites')}</span></button>
    <button class="on">${G.bell}<span>${t('recents')}</span></button>
    <button onclick="push('dial')">${G.plusSq}<span>${t('keypad')}</span></button>
    <button>${G.info}<span>${t('voicemail')}</span></button>
  </div>`
});

VIEWS.dial = () => ({
  html:`<div class="nav solid" style="position:absolute;z-index:6;top:0;left:0;right:0;height:98px;padding:54px 8px 0;display:grid;grid-template-columns:1fr auto 1fr;align-items:center;background:rgba(249,249,249,.9);backdrop-filter:blur(20px)">
    <button class="nb-back" onclick="back()">${G.chevL}返回</button><div class="nb-title" style="opacity:1">${t('keypad')}</div><span></span>
  </div>
  <div class="scroll" style="padding-top:98px">
    <div class="dial-num" id="dialNum"></div>
    <div class="dialpad">
      ${[1,2,3,4,5,6,7,8,9].map(n=>`<button class="pk" onclick="dialPress('${n}')"><b>${n}</b><small>${['','ABC','DEF','GHI','JKL','MNO','PQRS','TUV','WXYZ'][n-1]}</small></button>`).join('')}
      <span></span><button class="pk" onclick="dialPress('0')"><b>0</b><small>+</small></button><span></span>
    </div>
    <button class="dial-del" onclick="dialDel()">删除</button>
    <div class="dial-call" onclick="toast('正在呼叫…')"><svg viewBox="0 0 24 24" fill="#fff"><path d="M6.6 3.2c.6-.3 1.4-.1 1.8.5l1.9 3c.4.6.3 1.4-.2 1.9l-1.4 1.3a12.4 12.4 0 0 0 5.4 5.4l1.3-1.4c.5-.5 1.3-.6 1.9-.2l3 1.9c.6.4.8 1.2.5 1.8l-.9 1.9c-.5 1-1.6 1.6-2.7 1.4C10 19.6 4.4 14 3.3 6.8c-.2-1.1.4-2.2 1.4-2.7Z"/></svg></div>
  </div>`
});
function dialPress(n){ dialValue += n; const d=$pg('#dialNum'); if(d)d.textContent=dialValue; vib(5); }
function dialDel(){ dialValue = dialValue.slice(0,-1); const d=$pg('#dialNum'); if(d)d.textContent=dialValue; }

/* 信息 */
let smsId = 'Vernon';
VIEWS.messages = () => ({
  html:`<div class="nav solid" style="position:absolute;z-index:6;top:0;left:0;right:0;height:98px;padding:54px 8px 0;display:grid;grid-template-columns:1fr auto 1fr;align-items:center;background:rgba(249,249,249,.9);backdrop-filter:blur(20px)">
    <span></span><div class="nb-title" style="opacity:1">信息</div><span></span>
  </div>
  <div class="scroll" style="padding-top:98px">
    <h1 class="lt">信息</h1>
    ${SMS_NAMES.map(n=>{
      const arr = SMS[n]||[]; const last = arr[arr.length-1];
      return `<button class="msg-row" onclick="smsId='${esc(n)}';push('smsRoom')">
        <div class="av" style="background:#34c759">${esc(n[0])}</div>
        <div class="bd"><div class="l1"><b>${esc(n)}</b><span>${last?last[2]:''}</span></div>
        <div class="pv">${last?esc(last[0]):''}</div></div>
      </button>`;
    }).join('')}
  </div>`
});
VIEWS.smsRoom = () => ({
  cls:'chat',
  html:`<div class="chat-h">
    <button class="bk" onclick="back()">${G.chevL}<span></span></button>
    <div class="nm">${esc(smsId)}</div>
    <div class="rt">${G.info}</div>
  </div>
  <div class="msgs" id="msgs">${(SMS[smsId]||[]).map(([txt,w,tm],i)=>{
    const arr = SMS[smsId]; const first = i===0 || arr[i-1][1]!==w;
    return `<div class="ln ${w==='me'?'me':'th'} ${first?'first':''}">
      ${w!=='me'&&first?`<div class="sav">${esc(smsId[0])}</div>`:''}
      <div class="col"><div class="wrap">
        ${w==='me'?`<div class="tm">${tm}</div>`:''}
        <div class="bb" style="${w==='me'?'background:#34c759;color:#fff':''}">${esc(txt)}</div>
        ${w!=='me'?`<div class="tm">${tm}</div>`:''}
      </div></div>
    </div>`;
  }).join('')}</div>
  <div class="cin safe">
    <div class="fld ph" onclick="toast('短信输入')">短信</div>
    <button class="snd" style="background:#34c759;transform:scale(1)" onclick="toast('已发送')">${G.arrowUp.replace('<svg','<svg style="stroke:#fff"')}</button>
  </div>`
});

/* 相册 */
let photoView = 'albums';

VIEWS.photos = () => {
  if (photoView === 'secret') {
    const secretPhotos = window.PHOTOS.filter(p => p.album === 'secret');
    return {
      html: `
      <div class="nav solid" style="position:absolute;z-index:6;top:0;left:0;right:0;height:98px;padding:54px 8px 0;display:grid;grid-template-columns:1fr auto 1fr;align-items:center;background:rgba(249,249,249,0.95);backdrop-filter:blur(10px);border-bottom:0.5px solid #e5e5ea;">
        <button class="nb-back" onclick="photoView='albums'; show('photos')" style="display:flex;align-items:center;color:var(--blue);font-size:17px;">
          <svg viewBox="0 0 12 20" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="width:12px;height:20px;margin-right:4px;"><path d="M10 2 2 10l8 8"/></svg>相册
        </button>
        <div class="nb-title" style="opacity:1;font-weight:600;">私密相册</div>
        <span></span>
      </div>
      <div class="scroll" style="padding-top:98px">
        <div class="ph-grid" style="display:grid;grid-template-columns:repeat(3,1fr);gap:2px;">
          ${secretPhotos.map((p) => {
             const realIndex = window.PHOTOS.indexOf(p);
             const bg = p.src ? `background:url(${p.src}) center/cover;` : `background:${p.color || '#eee'};`;
             return `<button onclick="openViewer(${realIndex})" style="padding:0; border:0; background:none; aspect-ratio:1;">
                <div style="width:100%; height:100%; ${bg} display:grid; place-items:center; color:#fff; font-size:12px;">${!p.src ? (p.label || '') : ''}</div>
             </button>`;
          }).join('')}
        </div>
      </div>`
    };
  }

  if (photoView === 'recent') {
    const recentPhotos = window.PHOTOS.filter(p => !p.album);
    const groups = {};
    recentPhotos.forEach(p => {
      const d = p.date || '未知时间';
      if (!groups[d]) groups[d] = [];
      groups[d].push(p);
    });

    let recentHtml = '';
    Object.keys(groups).forEach(dateStr => {
      recentHtml += `<div style="font-size:18px; font-weight:700; padding:20px 16px 10px; color:#000;">${dateStr}</div>`;
      recentHtml += `<div class="ph-grid" style="display:grid;grid-template-columns:repeat(3,1fr);gap:2px;">`;
      groups[dateStr].forEach(p => {
        const realIndex = window.PHOTOS.indexOf(p);
        const bg = p.src ? `background:url(${p.src}) center/cover;` : `background:${p.color || '#eee'};`;
        recentHtml += `<button onclick="openViewer(${realIndex})" style="padding:0; border:0; background:none; aspect-ratio:1;">
           <div style="width:100%; height:100%; ${bg} display:grid; place-items:center; color:#fff; font-size:12px;">${!p.src ? (p.label || '') : ''}</div>
        </button>`;
      });
      recentHtml += `</div>`;
    });

    return {
      html: `
      <div class="nav solid" style="position:absolute;z-index:6;top:0;left:0;right:0;height:98px;padding:54px 8px 0;display:grid;grid-template-columns:1fr auto 1fr;align-items:center;background:rgba(249,249,249,0.95);backdrop-filter:blur(10px);border-bottom:0.5px solid #e5e5ea;">
        <button class="nb-back" onclick="photoView='albums'; show('photos')" style="display:flex;align-items:center;color:var(--blue);font-size:17px;">
          <svg viewBox="0 0 12 20" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="width:12px;height:20px;margin-right:4px;"><path d="M10 2 2 10l8 8"/></svg>相册
        </button>
        <div class="nb-title" style="opacity:1;font-weight:600;">最近项目</div>
        <span></span>
      </div>
      <div class="scroll" style="padding-top:98px">
        ${recentHtml || '<div style="text-align:center; color:#8e8e93; margin-top:40px;">暂无照片</div>'}
      </div>`
    };
  }

  return {
    html: `
    <div class="nav solid" style="position:absolute;z-index:6;top:0;left:0;right:0;height:98px;padding:54px 8px 0;display:grid;grid-template-columns:1fr auto 1fr;align-items:center;background:rgba(249,249,249,0.95);backdrop-filter:blur(10px);border-bottom:0.5px solid #e5e5ea;">
      <span></span>
      <div class="nb-title" style="opacity:1;font-weight:600;">图库</div>
      <span style="justify-self:end;color:var(--blue);font-size:17px;padding-right:16px;">选择</span>
    </div>
    <div class="scroll" style="padding-top:98px">
      <h1 class="lt">图库</h1>
      <div style="background:#fff; border-radius:11px; margin:0 16px; overflow:hidden;">
        
        <div onclick="photoView='recent'; show('photos')" style="padding: 12px 16px; border-bottom: 0.5px solid #e5e5ea; display:flex; justify-content:space-between; align-items:center; cursor:pointer;">
          <div>
            <div style="font-size:16px; font-weight:500;">最近项目</div>
            <div style="font-size:13px; color:#8e8e93; margin-top:2px;">${window.PHOTOS.filter(p=>!p.album).length} 张照片</div>
          </div>
          <div style="width:50px; height:50px; border-radius:6px; background:#eee; overflow:hidden;">
             ${window.PHOTOS.filter(p=>!p.album)[0]?.src 
               ? `<img src="${window.PHOTOS[0].src}" style="width:100%;height:100%;object-fit:cover">` 
               : `<div style="width:100%;height:100%;background:${window.PHOTOS[0]?.color || '#eee'}"></div>`}
          </div>
        </div>

        <div onclick="promptSecretAlbum()" style="padding: 12px 16px; display:flex; justify-content:space-between; align-items:center; cursor:pointer;">
          <div>
            <div style="font-size:16px; font-weight:500;">🔒 私密相册</div>
            <div style="font-size:13px; color:#8e8e93; margin-top:2px;">已锁定</div>
          </div>
          <div style="width:50px; height:50px; border-radius:6px; background:#e5e5ea; display:grid; place-items:center; color:#8e8e93;">
            <svg viewBox="0 0 24 24" width="24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
          </div>
        </div>
        
      </div>
    </div>`
  };
};

/* 相册解锁 */
let albumPincode = ''; 
const ALBUM_PASSWORD = '0218'; 

function promptSecretAlbum() {
  albumPincode = ''; 
  const p = $('#albumPinL');
  
  p.innerHTML = `
    <div class="pt">输入密码以解锁相册</div>
    <div class="pdots" id="albumDots">${[0,1,2,3].map(()=>`<i></i>`).join('')}</div>
    <div class="pkeys">
      ${[1,2,3,4,5,6,7,8,9].map(n=>`<button class="pk" onclick="albumPinPress('${n}',this)"><b>${n}</b><small>${['','ABC','DEF','GHI','JKL','MNO','PQRS','TUV','WXYZ'][n-1]}</small></button>`).join('')}
      <span></span>
      <button class="pk" onclick="albumPinPress('0',this)"><b>0</b><small></small></button>
      <span></span>
    </div>
    <div class="pbot">
      <button></button>
      <button id="albumPcancel" onclick="albumPinDelOrCancel()">取消</button>
    </div>
  `;
  
  p.style.display = 'flex';
  p.getAnimations().forEach(a=>a.cancel());
  p.animate([{opacity:0, transform:'translateY(40px)'},{opacity:1, transform:'none'}], {duration:420, easing:'cubic-bezier(.2,.9,.25,1)', fill:'forwards'});
}

function albumPinPress(n, el) {
  if (albumPincode.length >= 4) return;
  el.classList.add('dn');
  setTimeout(()=>el.classList.remove('dn'), 90);
  vib(8);
  
  albumPincode += n;
  const dots = $('#albumDots');
  dots.innerHTML = [0,1,2,3].map(i=>`<i class="${i<albumPincode.length?'on':''}"></i>`).join('');
  
  if (albumPincode.length === 4) {
    if (albumPincode === ALBUM_PASSWORD) {
      setTimeout(albumUnlockSuccess, 140);
    } else {
      setTimeout(() => {
        dots.classList.remove('shake'); void dots.offsetWidth; dots.classList.add('shake'); vib([60,40,60]);
        setTimeout(() => { albumPincode = ''; dots.innerHTML = [0,1,2,3].map(()=>`<i></i>`).join(''); }, 420);
      }, 120);
    }
  }
}

function albumPinDelOrCancel() {
  if (albumPincode) {
    albumPincode = albumPincode.slice(0, -1);
    $('#albumDots').innerHTML = [0,1,2,3].map(i=>`<i class="${i<albumPincode.length?'on':''}"></i>`).join('');
    return;
  }
  const p = $('#albumPinL');
  p.animate([{opacity:1},{opacity:0, transform:'translateY(30px)'}], {duration:300}).onfinish = () => { p.style.display = 'none'; };
}

function albumUnlockSuccess() {
  const p = $('#albumPinL');
  p.animate([{opacity:1},{opacity:0, transform:'translateY(30px)'}], {duration:300}).onfinish = () => { p.style.display = 'none'; };
    
  photoView = 'secret';
  show('photos');
  toast('私密相册已解锁');
  
  setTimeout(() => {
    document.querySelectorAll('.banner').forEach(b => b.remove());
    showNotification('Vernon', '你看到那个相册了吗？');
    
    setTimeout(() => {
      const banner = document.querySelector('.banner');
      if (banner) {
        banner.addEventListener('click', function handleClick(e) {
          e.stopPropagation(); 
          banner.classList.remove('show');
          setTimeout(() => banner.remove(), 400);
          banner.removeEventListener('click', handleClick);
        });
      }
    }, 100); 
  }, 10000);
}


/* ============================================================
   Instagram (完美修复版)
   ============================================================ */
function getIGProfile() {
  const saved = localStorage.getItem('my_ig_profile');
  if (saved) return JSON.parse(saved);
  return window.IG_PROFILE || { name: '你', handle: 'your_handle', bio: '记录生活', posts: 4, followers: 128, following: 96 };
}

// 1. 你的个人主页 (九宫格)
VIEWS.instagram = () => {
  const prof = getIGProfile();
  return {
    cls:'ig',
    html:`<div class="ig-h">
      <b>${esc(prof.handle || prof.name)} <span style="font-size:14px;font-weight:400;color:#555;">▾</span></b>
      <div style="display:flex; gap:16px;">
        <svg viewBox="0 0 24 24" style="width:24px;height:24px;stroke:#000;fill:none;stroke-width:1.8;"><path d="M12 5v14M5 12h14"/></svg>
        <svg viewBox="0 0 24 24" style="width:24px;height:24px;stroke:#000;fill:none;stroke-width:1.8;"><path d="M4 7h16M4 12h16M4 17h16"/></svg>
      </div>
    </div>
    <div class="scroll" style="padding-top:104px; padding-bottom:100px;">
      
      <div class="igp">
        <div class="pp" style="background:linear-gradient(45deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888); padding:3px;">
          <div style="width:100%;height:100%;border-radius:50%;background:#fff;display:grid;place-items:center;">
            <div style="width:100%;height:100%;border-radius:50%;background:#dbdbdb;display:grid;place-items:center;font-size:30px;font-weight:600;color:#555;">
              ${esc(prof.name[0] || 'U')}
            </div>
          </div>
        </div>
        <div class="st">
          <span><b>${prof.posts}</b>帖子</span>
          <span><b>${prof.followers}</b>粉丝</span>
          <span><b>${prof.following}</b>关注</span>
        </div>
      </div>

      <div class="igbio" style="margin-top:4px;">
        <b>${esc(prof.name)}</b><br>
        <span style="color:#333; white-space:pre-wrap;">${esc(prof.bio)}</span>
      </div>
      <div class="igbtn">
        <button onclick="toast('已关注')" style="background:#efefef;">关注</button>
        <button onclick="toast('发消息')" style="background:#efefef;">发消息</button>
      </div>

      <div class="iggrid">
        ${window.IG_POSTS.map((p, i)=>`
          <button onclick="openIGDetailById(${p.id})" style="padding:0; border:0; background:#eee; position:relative; aspect-ratio:1;">
            <img src="${p.imgs[0]}" style="width:100%; height:100%; object-fit:cover;">
            ${p.imgs.length > 1 ? `<svg style="position:absolute; top:6px; right:6px; width:18px; fill:#fff;" viewBox="0 0 24 24"><path d="M4 6h16v12H4z" fill="none" stroke="#fff" stroke-width="2"/><path d="M8 2h14v14" fill="none" stroke="#fff" stroke-width="2"/></svg>` : ''}
          </button>
        `).join('')}
      </div>
    </div>
    
    <div class="tabbar" style="background:#fff; border-top:1px solid #efefef; justify-content:space-around; z-index:10;">
      <button onclick="show('igHome')"><svg viewBox="0 0 24 24" fill="none" stroke="#000" stroke-width="2" style="width:26px; height:26px;"><path d="M12 3 2 12h3v8h5v-5h4v5h5v-8h3Z"/></svg></button>
      <button onclick="toast('搜索')"><svg viewBox="0 0 24 24" fill="none" stroke="#000" stroke-width="2" style="width:26px; height:26px;"><circle cx="11" cy="11" r="7"/><path d="m20 20-4-4"/></svg></button>
      <button onclick="toast('发布')"><svg viewBox="0 0 24 24" fill="none" stroke="#000" stroke-width="2" style="width:26px; height:26px;"><rect x="3.5" y="3.5" width="17" height="17" rx="5"/><path d="M12 8v8M8 12h8"/></svg></button>
      <button onclick="toast('Reels')"><svg viewBox="0 0 24 24" fill="none" stroke="#000" stroke-width="2" style="width:26px; height:26px;"><rect x="3.5" y="3.5" width="17" height="17" rx="4"/><path d="M3.5 8.5h17M9 3.5l2.5 5M14.5 3.5 17 8.5"/></svg></button>
      <button onclick="show('instagram')" style="width:28px; height:28px; border-radius:50%; background:#000; color:#fff; font-size:14px; font-weight:bold; display:grid; place-items:center;">${esc(prof.name[0] || 'U')}</button>
    </div>`
  };
};



/* ============================================================
   1. 你的个人主页（九宫格）—— 只显示你自己的帖子
   ============================================================ */
VIEWS.instagram = () => {
  const prof = getIGProfile();
  // 过滤出 author 为 '你' 的帖子
  const myPosts = window.IG_POSTS.filter(p => p.author === '你');

  return {
    cls: 'ig',
    html: `<div class="ig-h">
      <b>${esc(prof.handle || prof.name)} <span style="font-size:14px;font-weight:400;color:#555;">▾</span></b>
      <div style="display:flex; gap:16px;">
        <svg viewBox="0 0 24 24" style="width:24px;height:24px;stroke:#000;fill:none;stroke-width:1.8;"><path d="M12 5v14M5 12h14"/></svg>
        <svg viewBox="0 0 24 24" style="width:24px;height:24px;stroke:#000;fill:none;stroke-width:1.8;"><path d="M4 7h16M4 12h16M4 17h16"/></svg>
      </div>
    </div>
    <div class="scroll" style="padding-top:104px; padding-bottom:100px;">
      <div class="igp">
        <div class="pp" style="background:linear-gradient(45deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888); padding:3px;">
          <div style="width:100%;height:100%;border-radius:50%;background:#fff;display:grid;place-items:center;">
            <div style="width:100%;height:100%;border-radius:50%;background:#dbdbdb;display:grid;place-items:center;font-size:30px;font-weight:600;color:#555;">
              ${esc(prof.name[0] || 'U')}
            </div>
          </div>
        </div>
        <div class="st">
          <span><b>${myPosts.length}</b>帖子</span>
          <span><b>${prof.followers}</b>粉丝</span>
          <span><b>${prof.following}</b>关注</span>
        </div>
      </div>
      <div class="igbio" style="margin-top:4px;">
        <b>${esc(prof.name)}</b><br>
        <span style="color:#333; white-space:pre-wrap;">${esc(prof.bio)}</span>
      </div>
      <div class="igbtn">
        <button onclick="toast('已关注')" style="background:#efefef;">关注</button>
        <button onclick="toast('发消息')" style="background:#efefef;">发消息</button>
      </div>
      <div class="iggrid">
        ${myPosts.map((p, i)=>`
          <button onclick="openIGDetailById(${p.id})" style="padding:0; border:0; background:#eee; position:relative; aspect-ratio:1;">
            <img src="${p.imgs[0]}" style="width:100%; height:100%; object-fit:cover;">
            ${p.imgs.length > 1 ? `<svg style="position:absolute; top:6px; right:6px; width:18px; fill:#fff;" viewBox="0 0 24 24"><path d="M4 6h16v12H4z" fill="none" stroke="#fff" stroke-width="2"/><path d="M8 2h14v14" fill="none" stroke="#fff" stroke-width="2"/></svg>` : ''}
          </button>
        `).join('')}
      </div>
    </div>
    <div class="tabbar" style="background:#fff; border-top:1px solid #efefef; justify-content:space-around; z-index:10;">
      <button onclick="show('igHome')"><svg viewBox="0 0 24 24" fill="none" stroke="#000" stroke-width="2" style="width:26px; height:26px;"><path d="M12 3 2 12h3v8h5v-5h4v5h5v-8h3Z"/></svg></button>
      <button onclick="toast('搜索')"><svg viewBox="0 0 24 24" fill="none" stroke="#000" stroke-width="2" style="width:26px; height:26px;"><circle cx="11" cy="11" r="7"/><path d="m20 20-4-4"/></svg></button>
      <button onclick="toast('发布')"><svg viewBox="0 0 24 24" fill="none" stroke="#000" stroke-width="2" style="width:26px; height:26px;"><rect x="3.5" y="3.5" width="17" height="17" rx="5"/><path d="M12 8v8M8 12h8"/></svg></button>
      <button onclick="toast('Reels')"><svg viewBox="0 0 24 24" fill="none" stroke="#000" stroke-width="2" style="width:26px; height:26px;"><rect x="3.5" y="3.5" width="17" height="17" rx="4"/><path d="M3.5 8.5h17M9 3.5l2.5 5M14.5 3.5 17 8.5"/></svg></button>
      <button onclick="show('instagram')" style="width:28px; height:28px; border-radius:50%; background:#000; color:#fff; font-size:14px; font-weight:bold; display:grid; place-items:center;">${esc(prof.name[0] || 'U')}</button>
    </div>`
  };
};

/* ============================================================
   2. 软件首页（动态流）—— 显示所有人的帖子，按时间排序
   ============================================================ */


VIEWS.igHome = () => {
  const prof = getIGProfile();
  const sortedFeed = window.IG_FEED.slice().sort((a, b) => new Date(b.date) - new Date(a.date));

  return {
    cls: 'ig',
    html: `
    <div class="ig-h" style="justify-content:space-between; border-bottom: 0.5px solid #efefef; padding-bottom: 8px;">
      <b style="font-family:'Billabong', cursive, sans-serif; font-size:28px; flex:none;">Instagram</b>
      <div style="display:flex; gap:18px; align-items:center;">
        <button onclick="toast('通知')"><svg viewBox="0 0 24 24" style="width:24px;height:24px;stroke:#000;fill:none;stroke-width:1.8;"><path d="M12 20s-7.5-4.6-7.5-10A4.3 4.3 0 0 1 12 7.4 4.3 4.3 0 0 1 19.5 10c0 5.4-7.5 10-7.5 10Z"/></svg></button>
        <button onclick="toast('消息')"><svg viewBox="0 0 24 24" style="width:24px;height:24px;stroke:#000;fill:none;stroke-width:1.8;"><path d="M12 4C7 4 3 7.1 3 11c0 2.4 1.5 4.5 3.9 5.8L6 20.5l4-2.4c.6.1 1.3.1 2 .1 5 0 9-3.1 9-7.1S17 4 12 4Z"/></svg></button>
      </div>
    </div>
    
    <div class="scroll" style="padding-top:104px; padding-bottom:100px; background:#fafafa; width:100%; overflow-x:hidden;">
      
      <!-- 快拍区域（保护） -->
      <div style="display:flex !important; flex-direction:row !important; gap:14px; padding:12px 16px; overflow-x:auto; background:#fff; border-bottom:1px solid #efefef; scrollbar-width:none;">
        ${window.IG_HOME_DATA.stories.map((name, i)=>`
          <div style="display:flex !important; flex-direction:column !important; align-items:center; gap:6px; flex:none; width:64px;">
            <div style="width:64px; height:64px; border-radius:50%; background:${i===0?'#dbdbdb':'linear-gradient(45deg, #f09433, #dc2743, #bc1888)'}; padding:2.5px; box-sizing:border-box;">
              <div style="width:100%; height:100%; border-radius:50%; background:#fff; padding:2px; box-sizing:border-box;">
                <div style="width:100%; height:100%; border-radius:50%; background:#eee; display:grid; place-items:center; font-size:20px; font-weight:bold; color:#888;">
                  ${i===0 ? '<span style="font-size:30px;color:#555;">+</span>' : esc(name[0])}
                </div>
              </div>
            </div>
            <span style="font-size:12px; color:#000; white-space:nowrap;">${name}</span>
          </div>
        `).join('')}
      </div>

      <!-- 帖子列表（绝对强制纵排） -->
      ${sortedFeed.map(post => `
        <div style="background:#fff; margin-bottom:8px; border-top:1px solid #efefef; border-bottom:1px solid #efefef; display:flex !important; flex-direction:column !important; width:100%; box-sizing:border-box;">
          
          <!-- 1. 头部（强制横排） -->
          <div style="display:flex !important; flex-direction:row !important; align-items:center; padding:10px 14px; gap:10px; width:100%; box-sizing:border-box;">
            ${post.avatar 
              ? `<img src="${post.avatar}" style="width:32px; height:32px; border-radius:50%; object-fit:cover; flex:none;">` 
              : `<div style="width:32px; height:32px; border-radius:50%; background:#ddd; display:grid; place-items:center; font-weight:bold; color:#666; flex:none;">${esc(post.author[0])}</div>`
            }
            <div style="flex:1; font-size:14px; font-weight:600; color:#000; white-space:nowrap; overflow:hidden; text-overflow:ellipsis;">
              ${esc(post.author)} <span style="color:#888; font-weight:400;">• ${post.time}</span>
            </div>
            <div style="font-weight:bold; color:#000; cursor:pointer; flex:none;">···</div>
          </div>
          
          <!-- 2. 图片区域（强制块级占满） -->
          <div onclick="openIGDetailById(${post.id})" style="width:100%; height:360px; background:#f0f0f0; position:relative; cursor:pointer; overflow:hidden; display:block !important;">
            <img src="${post.imgs[0]}" style="width:100%; height:100%; object-fit:cover; display:block;">
          </div>

          <!-- 3. 操作栏（强制横排） -->
          <div style="display:flex !important; flex-direction:row !important; padding:12px 14px 6px; gap:16px; width:100%; box-sizing:border-box;">
            <button onclick="toast('已点赞')"><svg viewBox="0 0 24 24" style="width:24px; height:24px; fill:none; stroke:#000; stroke-width:1.8;"><path d="M12 20s-7.5-4.6-7.5-10A4.3 4.3 0 0 1 12 7.4 4.3 4.3 0 0 1 19.5 10c0 5.4-7.5 10-7.5 10Z"/></svg></button>
            <button onclick="openIGDetailById(${post.id})"><svg viewBox="0 0 24 24" style="width:24px; height:24px; fill:none; stroke:#000; stroke-width:1.8;"><path d="M12 3.5a8.5 8.5 0 1 0 4.3 15.8l4.2 1.2-1.2-4.2A8.5 8.5 0 0 0 12 3.5Z"/></svg></button>
            <button onclick="toast('分享')"><svg viewBox="0 0 24 24" style="width:24px; height:24px; fill:none; stroke:#000; stroke-width:1.8;"><path d="M21 3 10 14"/><path d="M21 3 14.5 21l-4.5-7-7-4.5Z"/></svg></button>
          </div>

          <!-- 4. 文案（强制块级） -->
          <div style="padding:0 14px 12px; font-size:14px; color:#000; width:100%; box-sizing:border-box; white-space:normal; display:block !important; line-height:1.4;">
            <b>${post.likes} 次赞</b><br>
            <span style="margin-top:4px; display:block;">
              <b>${esc(post.author)}</b> ${esc(post.caption)}
            </span>
          </div>
        </div>
      `).join('')}
    </div>

    <div class="tabbar" style="background:#fff; border-top:1px solid #efefef; justify-content:space-around; z-index:10;">
      <button class="on" style="color:#000;" onclick="show('igHome')">
        <svg viewBox="0 0 24 24" fill="currentColor" style="width:26px; height:26px;"><path d="M12 3 2 12h3v8h5v-5h4v5h5v-8h3Z"/></svg>
      </button>
      <button onclick="toast('搜索')">
        <svg viewBox="0 0 24 24" fill="none" stroke="#000" stroke-width="2" style="width:26px; height:26px;"><circle cx="11" cy="11" r="7"/><path d="m20 20-4-4"/></svg>
      </button>
      <button onclick="toast('发布')">
        <svg viewBox="0 0 24 24" fill="none" stroke="#000" stroke-width="2" style="width:26px; height:26px;"><rect x="3.5" y="3.5" width="17" height="17" rx="5"/><path d="M12 8v8M8 12h8"/></svg>
      </button>
      <button onclick="toast('Reels')">
        <svg viewBox="0 0 24 24" fill="none" stroke="#000" stroke-width="2" style="width:26px; height:26px;"><rect x="3.5" y="3.5" width="17" height="17" rx="4"/><path d="M3.5 8.5h17M9 3.5l2.5 5M14.5 3.5 17 8.5"/></svg>
      </button>
      <button onclick="show('instagram')" style="width:26px; height:26px; border-radius:50%; background:#dbdbdb; border:none; display:grid; place-items:center; padding:0;">
        <span style="color:#555; font-size:14px; font-weight:bold; line-height:1;">${prof.name[0] || 'U'}</span>
      </button>
    </div>
    `
  };
};




/* ============================================================
   3. 帖子详情页
   ============================================================ */
let currentIGIndex = 0;
function openIGDetailById(id) {
  const allPosts = [...window.IG_POSTS, ...window.IG_FEED];
  const targetPost = allPosts.find(p => p.id === id);
  if (!targetPost) return;
  
  window.IG_POSTS = allPosts; 
  currentIGIndex = allPosts.indexOf(targetPost);
  push('igDetail');
}

VIEWS.igDetail = () => {
  const p = window.IG_POSTS[currentIGIndex];
  
  const commentsHtml = (p.comments || []).map(c => `
    <div style="display:flex; gap:10px; padding: 8px 16px; align-items:flex-start;">
      <div style="width:32px; height:32px; border-radius:50%; background:#dbdbdb; display:grid; place-items:center; font-weight:bold; color:#555;">${esc(c.name[0])}</div>
      <div style="flex:1; font-size:14px;">
        <b>${esc(c.name)}</b> ${esc(c.text)}
        <div style="font-size:12px; color:#8e8e93; margin-top:4px;">${c.time}</div>
      </div>
    </div>
  `).join('');

  const images = p.imgs || [p.img];
  const isMulti = images.length > 1;
  
  const imagesHtml = images.map((src, i) => `
    <div class="ig-slide" style="width:100%; height:100%; flex:none; display:flex; align-items:center; justify-content:center; background:#000;">
      <img src="${src}" style="width:100%; height:100%; object-fit:contain;">
    </div>
  `).join('');

  const dotsHtml = isMulti ? `
    <div id="igDots" style="position:absolute; bottom:12px; left:50%; transform:translateX(-50%); display:flex; gap:8px; z-index:5;">
      ${images.map((_, i) => `<div onclick="switchIGImage(${i})" class="ig-dot" style="width:6px; height:6px; border-radius:50%; background:${i===0?'#fff':'rgba(255,255,255,0.4)'}; transition:background 0.2s; cursor:pointer;"></div>`).join('')}
    </div>
  ` : '';

  return {
    cls: 'ig',
    html: `
      <div class="ig-h" style="border-bottom:0.5px solid #efefef; background:#fff; z-index:10;">
        <div onclick="back()" style="cursor:pointer;"><svg viewBox="0 0 24 24" style="width:24px;height:24px;stroke:#000;fill:none;stroke-width:2;"><path d="M15 18l-6-6 6-6"/></svg></div>
        <div style="font-weight:600; font-size:16px;">帖子</div>
        <div style="width:24px;"></div>
      </div>
      
      <div class="scroll" style="padding-top: 54px; background:#fff;">
        <div style="display:flex; align-items:center; padding:10px 14px; gap:10px; margin-bottom: 8px;">
          ${p.avatar 
            ? `<img src="${p.avatar}" style="width:32px; height:32px; border-radius:50%; object-fit:cover; border:1px solid #efefef;">` 
            : `<div style="width:32px; height:32px; border-radius:50%; background:#ddd; display:grid; place-items:center; font-weight:bold; color:#666;">${esc(p.author[0])}</div>`
          }
          <div style="flex:1; font-size:14px; font-weight:600; color:#000;">
            ${esc(p.author)} <span style="color:#888; font-weight:400;">• ${p.time}</span>
          </div>
        </div>
        <div style="width:100%; height: 60vh; position:relative; overflow:hidden; background:#000;" id="igSliderWrap">
          <div id="igSlider" style="display:flex; width:100%; height:100%; transition: transform 0.3s cubic-bezier(0.2, 0.9, 0.25, 1);">
            ${imagesHtml}
          </div>
          ${dotsHtml}
        </div>
        <div style="padding:12px 16px 6px; display:flex; gap:16px;">
          <svg viewBox="0 0 24 24" style="width:24px;fill:none;stroke:#000;stroke-width:1.8;"><path d="M12 20s-7.5-4.6-7.5-10A4.3 4.3 0 0 1 12 7.4 4.3 4.3 0 0 1 19.5 10c0 5.4-7.5 10-7.5 10Z"/></svg>
          <svg viewBox="0 0 24 24" style="width:24px;fill:none;stroke:#000;stroke-width:1.8;"><path d="M12 3.5a8.5 8.5 0 1 0 4.3 15.8l4.2 1.2-1.2-4.2A8.5 8.5 0 0 0 12 3.5Z"/></svg>
          <svg viewBox="0 0 24 24" style="width:24px;fill:none;stroke:#000;stroke-width:1.8;"><path d="M21 3 10 14"/><path d="M21 3 14.5 21l-4.5-7-7-4.5Z"/></svg>
        </div>
        <div style="padding:0 16px 12px; font-size:14px;">
          <b>${p.likes} 次赞</b><br>
          <span style="margin-top:4px; display:block;"><b>${esc(p.author)}</b> ${esc(p.caption)}</span>
          <div style="color:#8e8e93; font-size:12px; margin-top:8px;">${p.time}</div>
        </div>
        <div style="border-top:0.5px solid #efefef; padding-top:8px; padding-bottom:100px;">
          ${commentsHtml || '<div style="text-align:center; color:#8e8e93; padding:20px; font-size:14px;">暂无评论</div>'}
        </div>
      </div>
      <div class="tabbar" style="background:#fff; border-top:1px solid #efefef; justify-content:space-around; z-index:10;">
        <button onclick="show('igHome')"><svg viewBox="0 0 24 24" fill="none" stroke="#000" stroke-width="2" style="width:26px; height:26px;"><path d="M12 3 2 12h3v8h5v-5h4v5h5v-8h3Z"/></svg></button>
        <button onclick="toast('搜索')"><svg viewBox="0 0 24 24" fill="none" stroke="#000" stroke-width="2" style="width:26px; height:26px;"><circle cx="11" cy="11" r="7"/><path d="m20 20-4-4"/></svg></button>
        <button onclick="toast('发布')"><svg viewBox="0 0 24 24" fill="none" stroke="#000" stroke-width="2" style="width:26px; height:26px;"><rect x="3.5" y="3.5" width="17" height="17" rx="5"/><path d="M12 8v8M8 12h8"/></svg></button>
        <button onclick="toast('Reels')"><svg viewBox="0 0 24 24" fill="none" stroke="#000" stroke-width="2" style="width:26px; height:26px;"><rect x="3.5" y="3.5" width="17" height="17" rx="4"/><path d="M3.5 8.5h17M9 3.5l2.5 5M14.5 3.5 17 8.5"/></svg></button>
        <button onclick="show('instagram')" style="width:26px; height:26px; border-radius:50%; background:#dbdbdb; color:#555; font-size:14px; font-weight:bold; display:grid; place-items:center; border:1px solid #ddd;">
          ${getIGProfile().name[0] || 'U'}
        </button>
      </div>
    `,
    init: (pg) => {
      if (!isMulti) return;
      const slider = pg.querySelector('#igSlider');
      const dots = pg.querySelectorAll('.ig-dot');
      const wrap = pg.querySelector('#igSliderWrap');
      let startX = 0, currentX = 0, isDragging = false, currentIndex = 0;
      window.igSliderState = { slider, wrap, dots, currentIndex: 0 };

      wrap.addEventListener('pointerdown', e => {
        isDragging = true; startX = e.clientX;
        slider.style.transition = 'none';
        wrap.setPointerCapture(e.pointerId);
      });
      wrap.addEventListener('pointermove', e => {
        if (!isDragging) return;
        currentX = e.clientX - startX;
        if (currentIndex === 0 && currentX > 0) currentX = currentX * 0.3;
        if (currentIndex === images.length - 1 && currentX < 0) currentX = currentX * 0.3;
        slider.style.transform = `translateX(${-currentIndex * wrap.clientWidth + currentX}px)`;
      });
      wrap.addEventListener('pointerup', e => {
        if (!isDragging) return;
        isDragging = false;
        slider.style.transition = 'transform 0.3s cubic-bezier(0.2, 0.9, 0.25, 1)';
        if (currentX < -wrap.clientWidth * 0.2 && currentIndex < images.length - 1) currentIndex++;
        else if (currentX > wrap.clientWidth * 0.2 && currentIndex > 0) currentIndex--;
        updateIGSlider(currentIndex);
      });
    }
  };
};

function updateIGSlider(index) {
  const state = window.igSliderState;
  if (!state) return;
  state.currentIndex = index;
  const { slider, wrap, dots } = state;
  slider.style.transition = 'transform 0.35s cubic-bezier(0.25, 1, 0.5, 1)';
  slider.style.transform = `translateX(-${index * 100}%)`;
  dots.forEach((dot, i) => { dot.style.background = i === index ? '#fff' : 'rgba(255,255,255,0.4)'; });
}

function switchIGImage(index) { updateIGSlider(index); }




/* Safari */
VIEWS.safari = () => ({
  cls: 'saf',
  html: `
  <div class="scroll" style="padding-top: 60px; background:#f2f2f7; height:100%;">
    <div style="padding: 0 16px 16px;">
      <div style="background:#e3e3e8; border-radius:10px; height:36px; display:flex; align-items:center; padding:0 10px; gap:6px;">
        <svg viewBox="0 0 24 24" width="16" fill="none" stroke="#8e8e93" stroke-width="2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
        <input type="text" placeholder="搜索或输入网站名称" style="border:none; background:none; outline:none; font-size:16px; width:100%;" onkeydown="if(event.key==='Enter'){ toast('搜索：'+this.value); this.value=''; }">
      </div>
    </div>

    <div style="padding: 0 16px 20px;">
      <div style="font-size:20px; font-weight:700; margin-bottom:12px;">收藏夹</div>
      <div style="display:grid; grid-template-columns:repeat(4,1fr); gap:16px; text-align:center;">
        ${['Apple', 'Google', 'Bilibili', '微博'].map(n => `
          <div onclick="toast('打开 ${n}')" style="cursor:pointer;">
            <div style="width:60px; height:60px; margin:0 auto; border-radius:14px; background:#fff; display:grid; place-items:center; font-size:24px; font-weight:bold; color:#007aff; box-shadow:0 1px 4px rgba(0,0,0,0.08);">${n[0]}</div>
            <div style="font-size:11px; margin-top:4px; color:#333;">${n}</div>
          </div>
        `).join('')}
      </div>
    </div>

    <div style="padding: 0 16px; margin-top: 10px;">
      <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:12px;">
        <div style="font-size:20px; font-weight:700;">最近搜索</div>
        <div style="color:#007aff; font-size:15px; cursor:pointer;" onclick="toast('已清除')">清除</div>
      </div>
      
      <div style="background:#fff; border-radius:11px; overflow:hidden;">
        ${window.SAFARI_HISTORY.map(h => `
          <div onclick="toast('搜索历史：${h.text}')" style="padding: 12px 16px; border-bottom: 0.5px solid #e5e5ea; display:flex; align-items:center; gap:12px; cursor:pointer;">
            <svg viewBox="0 0 24 24" width="16" fill="none" stroke="#8e8e93" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
            <div style="flex:1; font-size:16px; color:#000;">${h.text}</div>
            <div style="font-size:13px; color:#8e8e93;">${h.time}</div>
          </div>
        `).join('')}
      </div>
    </div>
  </div>`
});

/* 设置 */
VIEWS.settings = () => ({
  html:`<div class="nav solid" style="position:absolute;z-index:6;top:0;left:0;right:0;height:98px;padding:54px 8px 0;display:grid;grid-template-columns:1fr auto 1fr;align-items:center;background:rgba(249,249,249,.9);backdrop-filter:blur(20px)">
    <span></span><div class="nb-title" style="opacity:1">设置</div><span></span>
  </div>
  <div class="scroll" style="padding-top:98px">
    <h1 class="lt">设置</h1>
    <div class="set-g" style="margin-bottom:22px">
      <div class="set-row" style="min-height:76px">
        <span style="width:58px;height:58px;border-radius:50%;background:linear-gradient(#a8aeb8,#7f858f);color:#fff;font-size:24px;font-weight:600;display:grid;place-items:center">${esc(CONFIG.userName[0])}</span>
        <div style="flex:1"><b style="font-size:20px;font-weight:500">${esc(CONFIG.userName)}</b><div class="muted" style="font-size:13px">${t('acct')}</div></div>
        ${G.chevR}
      </div>
    </div>
    <div class="set-g" style="margin-bottom:22px">
      ${SETTINGS_ROWS.map(([c,ic,txt])=>`<div class="set-row">
        <span class="st-ic" style="background:${c}">${(G[ic]||G.gear).replace('<svg','<svg width="18" height="18"')}</span>
        <span style="flex:1">${txt}</span>${G.chevR}
      </div>`).join('')}
    </div>
  </div>`
});


/* 日历 */
let calYear = new Date().getFullYear();
let calMonth = new Date().getMonth();
let calSelectedDay = new Date().getDate();

VIEWS.calendar = () => {
  const firstDay = new Date(calYear, calMonth, 1).getDay();
  const daysInMonth = new Date(calYear, calMonth + 1, 0).getDate();
  const today = new Date();
  const isCurrentMonth = today.getFullYear() === calYear && today.getMonth() === calMonth;

  let gridHtml = '';
  for (let i = 0; i < firstDay; i++) {
    gridHtml += `<div></div>`;
  }

  for (let d = 1; d <= daysInMonth; d++) {
    const isToday = isCurrentMonth && d === today.getDate();
    const isSelected = d === calSelectedDay;
    const hasEvent = window.CALENDAR_EVENTS[d] && window.CALENDAR_EVENTS[d].length > 0;
    
    let circleBg = 'transparent';
    let textColor = isToday ? '#ff3b30' : '#000';
    if (isSelected) {
      circleBg = isToday ? '#ff3b30' : '#000';
      textColor = '#fff';
    }

    gridHtml += `<div onclick="calSelectedDay=${d}; show('calendar')" style="display:flex; flex-direction:column; align-items:center; padding: 8px 0; cursor:pointer;">
      <div style="width:34px; height:34px; border-radius:50%; background:${circleBg}; color:${textColor}; display:grid; place-items:center; font-size:17px; font-weight:400;">${d}</div>
      <div style="width:6px; height:6px; border-radius:50%; background:${hasEvent ? '#8e8e93' : 'transparent'}; margin-top:2px;"></div>
    </div>`;
  }

  const dayEvents = window.CALENDAR_EVENTS[calSelectedDay] || [];
  const monthNames = ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'];

  return {
    cls: 'calendar-app',
    html: `
    <div class="nav solid" style="position:absolute;z-index:6;top:0;left:0;right:0;height:98px;padding:54px 16px 0;display:flex;justify-content:space-between;align-items:center;background:rgba(249,249,249,0.95);backdrop-filter:blur(10px);border-bottom:0.5px solid #e5e5ea;">
      <div onclick="closeApp()" style="color:#ff3b30;font-size:17px;display:flex;align-items:center;gap:4px;cursor:pointer;">
        <svg viewBox="0 0 24 24" width="18" fill="none" stroke="currentColor" stroke-width="2"><path d="M15 18l-6-6 6-6"/></svg>
        返回
      </div>
      <div style="display:flex; gap:20px; align-items:center; color:#ff3b30; font-size:20px;">
        <div onclick="toast('列表视图')" style="cursor:pointer;"><svg viewBox="0 0 24 24" width="20" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 6h16M4 12h16M4 18h16"/></svg></div>
        <div onclick="toast('搜索')" style="cursor:pointer;"><svg viewBox="0 0 24 24" width="20" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg></div>
        <div onclick="toast('新建日程')" style="cursor:pointer;"><svg viewBox="0 0 24 24" width="20" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 5v14M5 12h14"/></svg></div>
      </div>
    </div>

    <div class="scroll" style="padding-top:98px; background:#fff;">
      <div style="padding: 16px 16px 0; color: #ff3b30; font-size: 17px; font-weight: 500; cursor:pointer;" onclick="toast('回到今天')">
        ${calYear}年
      </div>
      <div style="padding: 4px 16px 16px; font-size: 34px; font-weight: 700;">
        ${monthNames[calMonth]}
      </div>

      <div style="display:flex; justify-content:space-between; padding: 0 16px 10px; color:#ff3b30;">
        <button onclick="changeMonth(-1)" style="font-size: 16px; font-weight: 500; display:flex; align-items:center; gap:4px;">
          <svg viewBox="0 0 24 24" width="16" fill="none" stroke="currentColor" stroke-width="2"><path d="M15 18l-6-6 6-6"/></svg> 上月
        </button>
        <button onclick="changeMonth(1)" style="font-size: 16px; font-weight: 500; display:flex; align-items:center; gap:4px;">
          下月 <svg viewBox="0 0 24 24" width="16" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 18l6-6-6-6"/></svg>
        </button>
      </div>

      <div style="display:grid; grid-template-columns:repeat(7,1fr); text-align:center; font-size:12px; font-weight:500; color:#8e8e93; padding: 0 0 6px; border-bottom: 0.5px solid #e5e5ea;">
        <div>日</div><div>一</div><div>二</div><div>三</div><div>四</div><div>五</div><div>六</div>
      </div>

      <div style="display:grid; grid-template-columns:repeat(7,1fr); border-bottom: 0.5px solid #e5e5ea; padding-bottom:10px;">
        ${gridHtml}
      </div>

      <div style="padding: 20px 16px;">
        <div style="font-size: 22px; font-weight: 700; margin-bottom: 16px;">${calSelectedDay}日</div>
        ${dayEvents.length === 0 ? '<div style="color:#8e8e93; font-size:15px;">没有日程</div>' : ''}
        ${dayEvents.map(ev => `
          <div style="display:flex; gap: 12px; margin-bottom: 16px; align-items:center;">
            <div style="width: 4px; height: 36px; border-radius: 2px; background: #af52de;"></div>
            <div>
              <div style="font-size: 16px; font-weight: 500;">${esc(ev.title)}</div>
              <div style="font-size: 14px; color: #8e8e93;">${esc(ev.time)}</div>
            </div>
          </div>
        `).join('')}
      </div>
    </div>

    <div class="tabbar" style="background:#fff; border-top:1px solid #e5e5ea; justify-content:space-around; padding-bottom: 30px;">
      <button class="on" style="color:#ff3b30; font-size:16px; font-weight:600;" onclick="toast('今天')">今天</button>
      <button class="on" style="color:#ff3b30; font-size:16px; font-weight:600;" onclick="toast('日历')">日历</button>
      <button class="on" style="color:#ff3b30; font-size:16px; font-weight:600;" onclick="toast('收件箱')">收件箱</button>
    </div>`
  };
};

function changeMonth(offset) {
  calMonth += offset;
  if (calMonth < 0) { calMonth = 11; calYear--; }
  if (calMonth > 11) { calMonth = 0; calYear++; }
  calSelectedDay = 1;
  show('calendar');
}

/* 天气 */
let weatherCache = null; 

VIEWS.weather = () => {
  if (!weatherCache) {
    fetch('https://wttr.in/Seoul?format=j1')
      .then(res => res.json())
      .then(data => {
        weatherCache = data;
        if (view === 'weather') show('weather', 'none'); 
      }).catch(e => {
        console.error("天气获取失败", e);
        weatherCache = { error: true };
        if (view === 'weather') show('weather', 'none');
      });
      
    return { cls: 'weather-app', html: `<div style="height:100%;background:#8fa6b8;display:grid;place-items:center;color:#fff;">正在获取首尔天气...</div>` };
  }

  if (weatherCache.error) {
    return { cls: 'weather-app', html: `<div style="height:100%;background:#8fa6b8;display:grid;place-items:center;color:#fff;">网络连接失败，请检查网络或刷新重试。</div>` };
  }

  const current = weatherCache.current_condition[0];
  const daily = weatherCache.weather;
  const tempC = current.temp_C;
  
  return {
    cls: 'weather-app',
    html: `
    <div style="position:absolute; inset:0; background: linear-gradient(180deg, #8fa6b8 0%, #788a9c 40%, #586776 100%); color: #fff; display: flex; flex-direction: column;">
      <div class="scroll" style="padding-top: 64px; padding-bottom: 100px;">
        <div style="text-align:center; margin-bottom: 40px;">
          <div style="font-size: 34px; font-weight: 400; margin-bottom: 4px;">首尔</div>
          <div style="font-size: 96px; font-weight: 200; line-height: 1; margin-left: 20px;">${tempC}°</div>
          <div style="font-size: 20px; font-weight: 400; margin-top: 4px; display:flex; justify-content:center; align-items:flex-start; gap:8px;">
             <span style="font-size:14px; font-weight:500; display:flex; flex-direction:column; align-items:center;">最高<br>${daily[0].maxtempC}°</span>
             <span style="font-size:14px; font-weight:500; display:flex; flex-direction:column; align-items:center;">最低<br>${daily[0].mintempC}°</span>
          </div>
          <div style="font-size: 20px; font-weight: 400; margin-top: 8px;">${current.weatherDesc[0].value}</div>
        </div>

        <div style="margin: 0 16px 16px; background: rgba(255,255,255,0.15); backdrop-filter: blur(20px); border-radius: 16px; padding: 16px;">
          <div style="font-size: 15px; border-bottom: 0.5px solid rgba(255,255,255,0.2); padding-bottom: 12px; margin-bottom: 12px; color: #e0e0e0;">
            当前风速：${current.windspeedKmph} 公里/小时。体感温度：${current.FeelsLikeC}°。
          </div>
          
          <div style="display: flex; justify-content: space-between; text-align: center; overflow-x: auto;">
            ${daily[0].hourly.filter((_, i) => i % 3 === 0).slice(0, 6).map((hr, i) => `
                <div style="display: flex; flex-direction: column; align-items: center; gap: 8px; min-width: 50px;">
                  <div style="font-size: 14px; font-weight: 500;">${i===0 ? '现在' : hr.time.padStart(2, '0') + '时'}</div>
                  <svg viewBox="0 0 24 24" width="24" height="24" fill="#fff"><path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96z"/></svg>
                  <div style="font-size: 18px; font-weight: 500;">${hr.tempC}°</div>
                </div>
            `).join('')}
          </div>
        </div>

        <div style="margin: 0 16px; background: rgba(255,255,255,0.15); backdrop-filter: blur(20px); border-radius: 16px; padding: 16px;">
          <div style="display: flex; align-items: center; gap: 6px; font-size: 13px; color: #ccc; margin-bottom: 12px;">
            <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/></svg>
            3日天气预报
          </div>
          
          ${daily.map((d, i) => {
             const isToday = i === 0;
             const dayNames = ['周日', '周一', '周二', '周三', '周四', '周五', '周六'];
             const dayLabel = isToday ? '今天' : dayNames[new Date(d.date).getDay()];
             return `
            <div style="display: flex; align-items: center; padding: 12px 0; border-top: 0.5px solid rgba(255,255,255,0.15);">
              <div style="width: 60px; font-size: 18px; font-weight: 500;">${dayLabel}</div>
              <div style="width: 40px; text-align: center;">
                <svg viewBox="0 0 24 24" width="26" height="26" fill="#fff"><path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96z"/></svg>
              </div>
              <div style="width: 40px; text-align: right; color: #ccc; font-size: 18px; font-weight: 500;">${d.mintempC}°</div>
              <div style="flex: 1; height: 4px; background: rgba(0,0,0,0.2); border-radius: 2px; margin: 0 12px; position: relative;">
                 <div style="position: absolute; left: 20%; right: 20%; top:0; bottom:0; background: linear-gradient(90deg, #aed6f1, #f9e79f); border-radius: 2px;"></div>
              </div>
              <div style="width: 40px; text-align: right; font-size: 18px; font-weight: 500;">${d.maxtempC}°</div>
            </div>
          `;}).join('')}
        </div>
      </div>

      <div class="tabbar" style="background: rgba(0,0,0,0.2); backdrop-filter: blur(20px); border-top: none; justify-content: space-between; padding: 10px 24px 30px;">
        <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="#fff" stroke-width="2"><path d="M3 7l9-4 9 4-9 4Z"/><path d="m3 12 9 4 9-4M3 17l9 4 9-4"/></svg>
        <div style="display:flex; gap:6px; align-items:center;">
          <svg viewBox="0 0 24 24" width="16" height="16" fill="#fff"><path d="M21 3L3 10.53v.98l6.84 2.65L12.48 21h.98L21 3z"/></svg>
          <div style="width:6px; height:6px; border-radius:50%; background:rgba(255,255,255,0.4)"></div>
          <div style="width:6px; height:6px; border-radius:50%; background:rgba(255,255,255,0.4)"></div>
          <div style="width:6px; height:6px; border-radius:50%; background:#fff"></div>
        </div>
        <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="#fff" stroke-width="2"><line x1="8" y1="6" x2="21" y2="6"/><line x1="8" y1="12" x2="21" y2="12"/><line x1="8" y1="18" x2="21" y2="18"/><line x1="3" y1="6" x2="3.01" y2="6"/><line x1="3" y1="12" x2="3.01" y2="12"/><line x1="3" y1="18" x2="3.01" y2="18"/></svg>
      </div>
    </div>`
  };
};

function openViewer(i){
  const p = PHOTOS[i];
  const v = document.createElement('div'); 
  v.className = 'viewer';
  const content = p.src ? `<img src="${p.src}" style="width:100%;height:100%;object-fit:contain">` : `<div class="vi" style="background:${p.color}">${p.label || ''}</div>`;
  v.innerHTML = `${content}
    <div class="vt" style="position:absolute; top:0; left:0; right:0; padding:54px 16px 20px; z-index:999; display:flex; justify-content:space-between; align-items:center; background:linear-gradient(rgba(0,0,0,0.6), transparent); color:#fff;">
      <button onclick="this.closest('.viewer').remove(); setStatus(false);" style="color:#fff; padding:10px; cursor:pointer; display:flex; align-items:center;">
        <svg viewBox="0 0 12 20" fill="none" stroke="currentColor" stroke-width="2.6" style="width:13px;height:21px;margin-right:5px;"><path d="M10 2 2 10l8 8"/></svg> 返回
      </button>
      <span>${p.date || p.label || ''}</span>
      <span style="width: 60px;"></span>
    </div>`;
  OV.appendChild(v); 
  setStatus(true);
}


/* ============================================================
   Instagram 首页 (Home Feed)
   ============================================================ */
VIEWS.igHome = () => {
  return {
    cls:'ig',
    html:`<div class="ig-h" style="justify-content:space-between; border-bottom: 0.5px solid #efefef; padding-bottom: 8px;">
      <b style="font-family:'Billabong', cursive, sans-serif; font-size:28px; flex:none;">Instagram</b>
      <div style="display:flex; gap:18px; align-items:center;">
        <button onclick="toast('通知')"><svg viewBox="0 0 24 24" style="width:24px;height:24px;stroke:#000;fill:none;stroke-width:1.8;"><path d="M12 20s-7.5-4.6-7.5-10A4.3 4.3 0 0 1 12 7.4 4.3 4.3 0 0 1 19.5 10c0 5.4-7.5 10-7.5 10Z"/></svg></button>
        <button onclick="toast('消息')"><svg viewBox="0 0 24 24" style="width:24px;height:24px;stroke:#000;fill:none;stroke-width:1.8;"><path d="M12 4C7 4 3 7.1 3 11c0 2.4 1.5 4.5 3.9 5.8L6 20.5l4-2.4c.6.1 1.3.1 2 .1 5 0 9-3.1 9-7.1S17 4 12 4Z"/></svg></button>
      </div>
    </div>
    
    <div class="scroll" style="padding-top:104px; padding-bottom:100px; background:#fafafa;">
      <div style="display:flex; gap:14px; padding:12px 16px; overflow-x:auto; background:#fff; border-bottom:1px solid #efefef; scrollbar-width:none;">
        ${window.IG_HOME_DATA.stories.map((name, i)=>`
          <div style="display:flex; flex-direction:column; align-items:center; gap:6px; flex:none;">
            <div style="width:64px; height:64px; border-radius:50%; background:${i===0?'#dbdbdb':'linear-gradient(45deg, #f09433, #dc2743, #bc1888)'}; padding:2.5px;">
              <div style="width:100%; height:100%; border-radius:50%; background:#fff; padding:2px;">
                <div style="width:100%; height:100%; border-radius:50%; background:#eee; display:grid; place-items:center; font-size:20px; font-weight:bold; color:#888;">
                  ${i===0 ? '<span style="font-size:30px;color:#555;">+</span>' : esc(name[0])}
                </div>
              </div>
            </div>
            <span style="font-size:12px; color:#000; white-space:nowrap;">${name}</span>
          </div>
        `).join('')}
      </div>

          ${window.IG_FEED.slice().sort((a, b) => new Date(b.date) - new Date(a.date)).map((post, index) => `
        <div style="background:#fff; margin-bottom:8px; border-top:1px solid #efefef; border-bottom:1px solid #efefef;">
          
          <!-- 帖子头部 -->
          <div style="display:flex; align-items:center; padding:10px 14px; gap:10px;">
                        <!-- 头像 -->
            ${post.avatar 
              ? `<img src="${post.avatar}" style="width:32px; height:32px; border-radius:50%; object-fit:cover; border:1px solid #efefef;">` 
              : `<div style="width:32px; height:32px; border-radius:50%; background:#ddd; display:grid; place-items:center; font-weight:bold; color:#666;">${esc(post.author[0])}</div>`
            }
            <!-- 名字和时间 -->
            <div style="flex:1; font-size:14px; font-weight:600; color:#000;">
              ${esc(post.author)} <span style="color:#888; font-weight:400;">• ${post.time}</span>
            </div>
          
                 <!-- 图片区域 -->
          <div onclick="openIGDetail(${index})" style="width:100%; aspect-ratio:1; background:#e0e0e0; position:relative; cursor:pointer;">
            <img src="${post.imgs[0]}" style="width:100%; height:100%; object-fit:cover; display:block;">
            
            <!-- 🌟 如果图片大于1张，右上角显示多图堆叠图标 -->
            ${post.imgs.length > 1 ? `
              <div style="position:absolute; top:12px; right:12px;">
                <svg viewBox="0 0 24 24" style="width:22px; height:22px; fill:#fff; filter: drop-shadow(0 1px 2px rgba(0,0,0,0.5));">
                  <path d="M4 6h16v12H4z" fill="none" stroke="#fff" stroke-width="2"/>
                  <path d="M8 2h14v14" fill="none" stroke="#fff" stroke-width="2"/>
                </svg>
              </div>
            ` : ''}
          </div>

          <!-- 点赞和文案 -->
          <div style="padding:0 14px 12px; font-size:14px; color:#000; margin-top:10px;">
            <b>${post.likes} 次赞</b><br>
            <span style="margin-top:4px; display:block;">
              <b>${esc(post.author)}</b> ${esc(post.caption)}
            </span>
          </div>
        </div>
      `).join('')}
    </div>

    <div class="tabbar" style="background:#fff; border-top:1px solid #efefef; justify-content:space-around; z-index:10;">
      <button class="on" style="color:#000;" onclick="show('igHome')">
        <svg viewBox="0 0 24 24" fill="currentColor" style="width:26px; height:26px;"><path d="M12 3 2 12h3v8h5v-5h4v5h5v-8h3Z"/></svg>
      </button>
      <button onclick="toast('搜索')"><svg viewBox="0 0 24 24" fill="none" stroke="#000" stroke-width="2" style="width:26px; height:26px;"><circle cx="11" cy="11" r="7"/><path d="m20 20-4-4"/></svg></button>
      <button onclick="toast('发布')"><svg viewBox="0 0 24 24" fill="none" stroke="#000" stroke-width="2" style="width:26px; height:26px;"><rect x="3.5" y="3.5" width="17" height="17" rx="5"/><path d="M12 8v8M8 12h8"/></svg></button>
      <button onclick="toast('Reels')"><svg viewBox="0 0 24 24" fill="none" stroke="#000" stroke-width="2" style="width:26px; height:26px;"><rect x="3.5" y="3.5" width="17" height="17" rx="4"/><path d="M3.5 8.5h17M9 3.5l2.5 5M14.5 3.5 17 8.5"/></svg></button>
      <button onclick="show('instagram')" style="width:26px; height:26px; border-radius:50%; background:#dbdbdb; color:#555; font-size:14px; font-weight:bold; display:grid; place-items:center; border:1px solid #ddd;">${getIGProfile().name[0] || 'U'}</button>
    </div>`
  };
};

function openIGDetail(index) {
  currentIGIndex = index;
  push('igDetail');
}

VIEWS.igDetail = () => {
  const p = window.IG_POSTS[currentIGIndex];
  const prof = getIGProfile();
  
  const commentsHtml = (p.comments || []).map(c => `
    <div style="display:flex; gap:10px; padding: 8px 16px; align-items:flex-start;">
      <div style="width:32px; height:32px; border-radius:50%; background:#dbdbdb; display:grid; place-items:center; font-weight:bold; color:#555;">${esc(c.name[0])}</div>
      <div style="flex:1; font-size:14px;"><b>${esc(c.name)}</b> ${esc(c.text)}<div style="font-size:12px; color:#8e8e93; margin-top:4px;">${c.time}</div></div>
    </div>
  `).join('');

  const images = p.imgs || [p.img];
  const isMulti = images.length > 1;
  
  const imagesHtml = images.map((src, i) => `
    <div class="ig-slide" style="width:100%; height:100%; flex:none; display:flex; align-items:center; justify-content:center; background:#000;">
      <img src="${src}" style="width:100%; height:100%; object-fit:contain;">
    </div>
  `).join('');

  const dotsHtml = isMulti ? `
    <div id="igDots" style="position:absolute; bottom:12px; left:50%; transform:translateX(-50%); display:flex; gap:8px; z-index:5;">
      ${images.map((_, i) => `<div onclick="switchIGImage(${i})" class="ig-dot" style="width:6px; height:6px; border-radius:50%; background:${i===0?'#fff':'rgba(255,255,255,0.4)'}; transition:background 0.2s; cursor:pointer;"></div>`).join('')}
    </div>
  ` : '';

  return {
    cls: 'ig',
    html: `
      <div class="ig-h" style="border-bottom:0.5px solid #efefef; background:#fff; z-index:10;">
        <div onclick="back()" style="cursor:pointer;"><svg viewBox="0 0 24 24" style="width:24px;height:24px;stroke:#000;fill:none;stroke-width:2;"><path d="M15 18l-6-6 6-6"/></svg></div>
        <div style="font-weight:600; font-size:16px;">帖子</div>
        <div style="width:24px;"></div>
      </div>
      
      <div class="scroll" style="padding-top: 54px; background:#fff;">
        <div style="width:100%; aspect-ratio:1; position:relative; overflow:hidden; background:#000;" id="igSliderWrap">
          <div id="igSlider" style="display:flex; width:100%; height:100%; transition: transform 0.3s cubic-bezier(0.2, 0.9, 0.25, 1);">
            ${imagesHtml}
          </div>
          ${dotsHtml}
        </div>

        <div style="padding:12px 16px 6px; display:flex; gap:16px;">
          <svg viewBox="0 0 24 24" style="width:24px;fill:none;stroke:#000;stroke-width:1.8;"><path d="M12 20s-7.5-4.6-7.5-10A4.3 4.3 0 0 1 12 7.4 4.3 4.3 0 0 1 19.5 10c0 5.4-7.5 10-7.5 10Z"/></svg>
          <svg viewBox="0 0 24 24" style="width:24px;fill:none;stroke:#000;stroke-width:1.8;"><path d="M12 3.5a8.5 8.5 0 1 0 4.3 15.8l4.2 1.2-1.2-4.2A8.5 8.5 0 0 0 12 3.5Z"/></svg>
          <svg viewBox="0 0 24 24" style="width:24px;fill:none;stroke:#000;stroke-width:1.8;"><path d="M21 3 10 14"/><path d="M21 3 14.5 21l-4.5-7-7-4.5Z"/></svg>
        </div>

        <div style="padding:0 16px 12px; font-size:14px;">
          <b>${p.likes} 次赞</b><br>
          <span style="margin-top:4px; display:block;"><b>${esc(prof.handle)}</b> ${esc(p.caption)}</span>
          <div style="color:#8e8e93; font-size:12px; margin-top:8px;">${p.time}</div>
        </div>

        <div style="border-top:0.5px solid #efefef; padding-top:8px; padding-bottom:100px;">
          ${commentsHtml || '<div style="text-align:center; color:#8e8e93; padding:20px; font-size:14px;">暂无评论</div>'}
        </div>
      </div>

      <div class="tabbar" style="background:#fff; border-top:1px solid #efefef; justify-content:space-around; z-index:10;">
       <button onclick="show('instagram')" style="flex: none; width: 26px; height: 26px; border-radius: 50%; background: #dbdbdb; border: 1px solid #ddd; display: flex; align-items: center; justify-content: center; padding: 0; overflow: hidden;">
  <span style="color: #555; font-size: 13px; font-weight: bold; line-height: 1;">${getIGProfile().name[0] || 'U'}</span>
</button>
        <button onclick="toast('搜索')">
          <svg viewBox="0 0 24 24" fill="none" stroke="#000" stroke-width="2" style="width:26px; height:26px;"><circle cx="11" cy="11" r="7"/><path d="m20 20-4-4"/></svg>
        </button>
        <button onclick="toast('发布')">
          <svg viewBox="0 0 24 24" fill="none" stroke="#000" stroke-width="2" style="width:26px; height:26px;"><rect x="3.5" y="3.5" width="17" height="17" rx="5"/><path d="M12 8v8M8 12h8"/></svg>
        </button>
        <button onclick="toast('Reels')">
          <svg viewBox="0 0 24 24" fill="none" stroke="#000" stroke-width="2" style="width:26px; height:26px;"><rect x="3.5" y="3.5" width="17" height="17" rx="4"/><path d="M3.5 8.5h17M9 3.5l2.5 5M14.5 3.5 17 8.5"/></svg>
        </button>
        <button onclick="show('instagram')" style="flex: none; width: 26px; height: 26px; border-radius: 50%; background: #dbdbdb; border: 1px solid #ddd; display: flex; align-items: center; justify-content: center; padding: 0; overflow: hidden;">
  <span style="color: #555; font-size: 13px; font-weight: bold; line-height: 1;">${getIGProfile().name[0] || 'U'}</span>
</button>
      </div>
    `,
    init: (pg) => {
      if (!isMulti) return;
      const slider = pg.querySelector('#igSlider');
      const wrap = pg.querySelector('#igSliderWrap');
      const dots = pg.querySelectorAll('.ig-dot');
      let startX = 0, currentX = 0, isDragging = false, currentIndex = 0;

      window.igSliderState = { slider, wrap, dots, currentIndex: 0 };

      wrap.addEventListener('pointerdown', e => {
        isDragging = true; startX = e.clientX;
        slider.style.transition = 'none';
        wrap.setPointerCapture(e.pointerId);
      });
      wrap.addEventListener('pointermove', e => {
        if (!isDragging) return;
        currentX = e.clientX - startX;
        if (currentIndex === 0 && currentX > 0) currentX = currentX * 0.3;
        if (currentIndex === images.length - 1 && currentX < 0) currentX = currentX * 0.3;
        slider.style.transform = `translateX(${-currentIndex * wrap.clientWidth + currentX}px)`;
      });
      wrap.addEventListener('pointerup', e => {
        if (!isDragging) return;
        isDragging = false;
        slider.style.transition = 'transform 0.3s cubic-bezier(0.2, 0.9, 0.25, 1)';
        if (currentX < -wrap.clientWidth * 0.2 && currentIndex < images.length - 1) currentIndex++;
        else if (currentX > wrap.clientWidth * 0.2 && currentIndex > 0) currentIndex--;
        updateIGSlider(currentIndex);
      });
    }
  };
};

function updateIGSlider(index) {
  const state = window.igSliderState;
  if (!state) return;
  state.currentIndex = index;
  const { slider, wrap, dots } = state;
  slider.style.transition = 'transform 0.3s cubic-bezier(0.2, 0.9, 0.25, 1)';
  slider.style.transform = `translateX(-${index * wrap.clientWidth}px)`;
  dots.forEach((dot, i) => { dot.style.background = i === index ? '#fff' : 'rgba(255,255,255,0.4)'; });
}

function switchIGImage(index) {
  updateIGSlider(index);
}

// 🌟 首页点进详情页的专属逻辑
function openIGDetailFromFeed(index) {
  // 获取按时间排序后的帖子
  const sortedFeed = window.IG_FEED.slice().sort((a, b) => new Date(b.date) - new Date(a.date));
  const targetPost = sortedFeed[index];
  
  // 在全局 IG_POSTS 里找不到，就在 IG_FEED 里找
  window.IG_POSTS = window.IG_FEED; // 临时把当前浏览的数据设为全部，以便详情页能左右滑
  currentIGIndex = window.IG_FEED.findIndex(p => p.id === targetPost.id);
  
  push('igDetail');
}

// 🌟 首页点击帖子进详情（支持从首页退回到首页）
function openIGDetailById(id) {
  // 在 IG_FEED 里找到对应的帖子
  const targetPost = window.IG_FEED.find(p => p.id === id);
  if (!targetPost) return;
  
  // 临时把当前浏览的数据设为 IG_FEED，以便详情页能左右滑
  window.IG_POSTS = window.IG_FEED; 
  currentIGIndex = window.IG_FEED.indexOf(targetPost);
  
  // 跳转到详情页
  push('igDetail');
}


/* ============================================================
   Twitter (X) —— 全网唯一最终防崩溃完整版
   ============================================================ */
let twTab = 'home';
let currentTwUser = 'me';
let currentTweetId = null;

// 安全的日期解析，防止缺 time 报错
function safeDate(t) {
  if (!t) return 0;
  const d = new Date(t).getTime();
  return isNaN(d) ? 0 : d;
}

function getTwProfile() {
  return window.TW_DATA[currentTwUser] || window.TW_DATA.me;
}

/* 头像渲染（带图片兜底防破图） */
function twAvatarHtml(user, size) {
  const s = size || 40;
  const safeName = user && user.name ? user.name : '?';
  const initial = esc(safeName[0]);
  const bg = user === window.TW_DATA.vn ? '#8fa6b8' : '#cfd9de';

  // 如果有路径，就显示图片
  if (user && user.avatar) {
    return `<img src="${user.avatar}" style="width:${s}px;height:${s}px;object-fit:cover;border-radius:50%;display:block;" />`;
  }
  // 如果没路径，显示兜底字
  return `<div style="width:${s}px;height:${s}px;border-radius:50%;background:${bg};display:grid;place-items:center;font-weight:bold;color:#fff;font-size:${Math.round(s*0.4)}px;">${initial}</div>`;
}
/* 进入主页统一入口 */
function enterTwProfile(userKey) {
  if (userKey === 'me') {
    currentTwUser = 'me';
    twTab = 'profile';
    show('twitter');
    return;
  }
  askTwPassword(userKey);
}

/* ---------- 1. 推特主页（首页流 + 个人主页） ---------- */
VIEWS.twitter = () => {
  const myData = window.TW_DATA[currentTwUser] || window.TW_DATA.me;
  const vnData = window.TW_DATA.vn;

  let feedHtml = '';
  if (twTab === 'home') {
    const mimiData = window.TW_DATA.mimi || { tweets: [] };
    // 过滤掉私密，并按时间排序（带防崩溃）
    const feedVn = (vnData.tweets || []).filter(t => !t.private).map(t => ({ author: vnData, tweet: t }));
    const feedMimi = (mimiData.tweets || []).filter(t => !t.private).map(t => ({ author: mimiData, tweet: t }));
    const mixedFeed = [...feedVn, ...feedMimi].sort((a, b) => safeDate(b.tweet.time) - safeDate(a.tweet.time));
    feedHtml = mixedFeed.map(item => renderTwCard(item.author, item.tweet)).join('');
  } else if (twTab === 'profile') {
    // 个人主页显示全部（包含私密），带防崩溃
    const sortedMyTweets = (myData.tweets || []).slice().sort((a, b) => safeDate(b.time) - safeDate(a.time));
    feedHtml = sortedMyTweets.map(t => renderTwCard(myData, t, true)).join('');
  }

  return {
    cls: 'tw',
    html: `
      <!-- 顶部导航栏 -->
      <div class="tw-h">
        ${twTab === 'home' ? `
          <button onclick="enterTwProfile('vn')" style="width:34px;height:34px;border-radius:50%;overflow:hidden;padding:0;border:0;background:#cfd9de;flex:none;cursor:pointer;" aria-label="进入 vn 主页">
            ${twAvatarHtml(vnData, 34)}
          </button>
          <div style="flex:1;text-align:center;font-family:sans-serif;font-weight:900;font-size:22px;margin-right:30px;">X</div>
        ` : `
          <div onclick="twTab='home'; show('twitter')" style="cursor:pointer;">
            <svg viewBox="0 0 24 24"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
          </div>
          <div style="font-size:16px;">${esc(myData.name)}</div>
          <div style="font-size:15px;color:#1d9bf0;font-weight:600;">${(myData.tweets || []).length} 帖子</div>
        `}
      </div>

      <!-- 主体内容区域 -->
      <div class="scroll" style="padding-top:85px;padding-bottom:120px;">
        <!-- 个人主页的头部信息 -->
        ${twTab === 'profile' ? `
          <!-- 如果你有图片，可以保留 background 里的 url，如果没有，它就显示渐变色 -->
<div class="tw-banner" style="background: url('photos/banner.jpg') center/cover, linear-gradient(135deg, #74ebd5, #9face6);"></div>
          <div class="tw-profile-info">
            <div class="tw-avatar-wrap">
              <div class="tw-avatar">${twAvatarHtml(myData, 80)}</div>
              <button class="tw-edit-btn" onclick="push('twEdit')">编辑个人资料</button>
            </div>
            <div class="tw-name-row">
              <span class="tw-name">${esc(myData.name)}</span>
              <svg class="tw-verified" viewBox="0 0 24 24"><path d="M22.5 12.5c0-1.58-.875-2.95-2.148-3.6.154-.435.238-.905.238-1.4 0-2.21-1.71-3.998-3.918-3.998-.47 0-.92.084-1.336.25C14.818 2.415 13.51 1.5 12 1.5s-2.816.917-3.337 2.25c-.416-.165-.866-.25-1.336-.25-2.21 0-3.918 1.79-3.918 4 0 .495.084.965.238 1.4-1.273.65-2.148 2.02-2.148 3.6 0 1.46.733 2.74 1.84 3.48-.093.32-.148.66-.148 1.02 0 2.21 1.71 3.998 3.918 3.998.47 0 .92-.084 1.336-.25C8.182 21.585 9.49 22.5 11 22.5s2.816-.917 3.337-2.25c.416.165.866.25 1.336.25 2.21 0 3.918-1.79 3.918-4 0-.36-.055-.7-.148-1.02 1.107-.74 1.84-2.02 1.84-3.48zm-10.5 3.8l-3.2-3.2 1.4-1.4 1.8 1.8 4.6-4.6 1.4 1.4-6 6z"/></svg>
            </div>
            <div class="tw-handle">${esc(myData.handle)}</div>
            <div class="tw-join">2022年4月 加入</div>
            <div class="tw-stats"><span><b>4</b> 正在关注</span><span><b>1</b> 关注者</span></div>
            <div class="tw-actions">
              <button class="tw-edit-btn" style="flex:1;padding:8px 0;background:#0f1419;color:#fff;border:none;" onclick="toast('已分享')">分享个人资料</button>
              <button class="tw-edit-btn" style="flex:1;padding:8px 0;" onclick="push('twEdit')">编辑个人资料</button>
            </div>
            <div class="tw-tabs">
              <div class="active">帖子</div><div>回复</div><div>媒体</div><div>喜欢</div>
            </div>
          </div>
        ` : ''}
        
        <!-- 推文列表 -->
        ${feedHtml || '<div style="text-align:center;color:#536471;padding:40px;">暂无推文</div>'}
      </div>

      <div class="tw-fab">+</div>

      <!-- 底部导航栏（强制浮于最上层防遮挡） -->
      <div class="tabbar" style="background:#fff;border-top:1px solid #eff3f4;justify-content:space-around;z-index:9999;position:absolute;bottom:0;left:0;right:0;padding-bottom:30px;">
        <button onclick="twTab='home';show('twitter')" style="${twTab==='home'?'fill:#0f1419;':'fill:#536471;'}">
          <svg viewBox="0 0 24 24" style="width:26px;height:26px;"><path d="M12 1.696L.622 8.807l1.06 1.696L3 9.679V19.5A2.5 2.5 0 0 0 5.5 22h13a2.5 2.5 0 0 0 2.5-2.5V9.679l1.318.824 1.06-1.696L12 1.696zM12 16.5c-1.933 0-3.5-1.567-3.5-3.5s1.567-3.5 3.5-3.5 3.5 1.567 3.5 3.5-1.567 3.5-3.5 3.5z"/></svg>
        </button>
        <button style="fill:#536471;"><svg viewBox="0 0 24 24" style="width:26px;height:26px;"><path d="M10.25 3.75c-3.59 0-6.5 2.91-6.5 6.5s2.91 6.5 6.5 6.5c1.795 0 3.419-.726 4.596-1.904 1.178-1.177 1.904-2.801 1.904-4.596 0-3.59-2.91-6.5-6.5-6.5zm-8.5 6.5c0-4.694 3.806-8.5 8.5-8.5s8.5 3.806 8.5 8.5c0 1.986-.682 3.815-1.824 5.262l4.781 4.781-1.414 1.414-4.781-4.781c-1.447 1.142-3.276 1.824-5.262 1.824-4.694 0-8.5-3.806-8.5-8.5z"/></svg></button>
        <button style="fill:#536471;"><svg viewBox="0 0 24 24" style="width:26px;height:26px;"><path d="M18 3h2v14.5c0 1.933-1.567 3.5-3.5 3.5S13 19.433 13 17.5s1.567-3.5 3.5-3.5c.526 0 1.027.116 1.475.324V3zM4 11h10v2H4v-2zm0 5h10v2H4v-2zm0-10h10v2H4V6z"/></svg></button>
        
        <!-- 你自己的头像按钮 -->
        <button onclick="enterTwProfile('me')" style="position:relative; z-index:10000; display:flex; justify-content:center; align-items:center; width:30px; height:30px; border-radius:50%; overflow:hidden; border:none; background:transparent;">
          ${twAvatarHtml(window.TW_DATA.me, 26)}
        </button>
      </div>
    `
  };
};
/* ---------- 2. 单条推文卡片（点头像或名字进主页） ---------- */
function renderTwCard(user, tweet, isMine = false) {
  let allImgs = [];
  if (tweet.imgs && tweet.imgs.length > 0) allImgs = tweet.imgs;
  else if (tweet.img) allImgs = [tweet.img];

  let imgHtml = '';
  if (allImgs.length > 0) {
    const count = allImgs.length;
    const gridStyle = count === 1
      ? `display:block;width:100%;`
      : `display:grid;grid-template-columns:repeat(${count === 2 || count === 4 ? 2 : 3},1fr);gap:4px;aspect-ratio:16/9;`;
    const imgStyle = count === 1
      ? `width:100%;height:auto;max-height:400px;object-fit:cover;`
      : `width:100%;height:100%;object-fit:cover;`;
    imgHtml = `<div style="margin-top:10px;border-radius:16px;overflow:hidden;border:1px solid #eff3f4;${gridStyle}">
      ${allImgs.map(src => `<img src="${src}" style="${imgStyle}" onerror="this.style.display='none'">`).join('')}
    </div>`;
  }

  const commentList = tweet.comments || [];
  const commentsHtml = commentList.length > 0 ? `
    <div style="margin-top:8px;padding-top:8px;border-top:.5px solid #eff3f4;">
      ${commentList.map(c => `
        <div style="display:flex;gap:8px;padding:8px 0;align-items:flex-start;">
          <div style="width:28px;height:28px;border-radius:50%;background:#cfd9de;display:grid;place-items:center;font-weight:bold;color:#536471;font-size:12px;flex:none;">${esc(c.name[0])}</div>
          <div style="flex:1;min-width:0;font-size:13px;line-height:1.4;">
            <b style="color:#0f1419;">${esc(c.name)}</b>
            <span style="color:#536471;font-size:12px;">· ${c.time || '刚刚'}</span>
            <div style="margin-top:2px;color:#0f1419;">${esc(c.text)}</div>
          </div>
        </div>
      `).join('')}
    </div>` : '';

  // 只允许点 vn 或 自己 进入主页
  const canEnter = user === window.TW_DATA.vn || user === window.TW_DATA.me;
  const enter = canEnter ? `onclick="enterTwProfile('${user === window.TW_DATA.vn ? 'vn' : 'me'}')" style="cursor:pointer;"` : '';

  return `
    <div class="tw-post">
      <div class="tw-post-avatar" ${enter}>${twAvatarHtml(user, 40)}</div>
      <div class="tw-post-content">
        <div class="tw-post-header">
          <b ${enter}>${esc(user.name)}</b>
          <svg class="tw-verified" style="width:14px;height:14px;fill:#1d9bf0;" viewBox="0 0 24 24"><path d="M22.5 12.5c0-1.58-.875-2.95-2.148-3.6.154-.435.238-.905.238-1.4 0-2.21-1.71-3.998-3.918-3.998-.47 0-.92.084-1.336.25C14.818 2.415 13.51 1.5 12 1.5s-2.816.917-3.337 2.25c-.416-.165-.866-.25-1.336-.25-2.21 0-3.918 1.79-3.918 4 0 .495.084.965.238 1.4-1.273.65-2.148 2.02-2.148 3.6 0 1.46.733 2.74 1.84 3.48-.093.32-.148.66-.148 1.02 0 2.21 1.71 3.998 3.918 3.998.47 0 .92-.084 1.336-.25C8.182 21.585 9.49 22.5 11 22.5s2.816-.917 3.337-2.25c.416.165.866.25 1.336.25 2.21 0 3.918-1.79 3.918-4 0-.36-.055-.7-.148-1.02 1.107-.74 1.84-2.02 1.84-3.48zm-10.5 3.8l-3.2-3.2 1.4-1.4 1.8 1.8 4.6-4.6 1.4 1.4-6 6z"/></svg>
          <span>${esc(user.handle || '')} · ${tweet.time || '刚刚'}</span>
        </div>
        ${tweet.private ? '<span style="color:#536471; background:#eff3f4; font-size:11px; font-weight:600; padding:2px 6px; border-radius:6px; margin-left:2px;"> 私密</span>' : ''}
        <div class="tw-post-text">${esc(tweet.text || '')}</div>
        ${imgHtml}
        <div class="tw-post-icons">
          <svg viewBox="0 0 24 24"><path d="M1.751 10c0-4.42 3.584-8 8.005-8h4.366c4.49 0 8.129 3.64 8.129 8.13 0 2.96-1.607 5.68-4.196 7.11l-8.054 4.46v-3.69h-.067c-4.49.1-8.183-3.51-8.183-8.01zm8.005-6c-3.317 0-6.005 2.69-6.005 6 0 3.37 2.77 6.08 6.138 6.01l.351-.01h1.761v2.3l5.087-2.81c1.951-1.08 3.163-3.13 3.163-5.36 0-3.39-2.744-6.13-6.129-6.13H9.756z"/></svg>
          <svg viewBox="0 0 24 24"><path d="M4.5 3.88l4.432 4.14-1.364 1.46L5.5 7.55V16c0 1.1.896 2 2 2H13v2H7.5c-2.209 0-4-1.79-4-4V7.55L1.432 9.48.068 8.02 4.5 3.88zM16.5 6H11V4h5.5c2.209 0 4 1.79 4 4v8.45l2.068-1.93 1.364 1.46-4.432 4.14-4.432-4.14 1.364-1.46 2.068 1.93V8c0-1.1-.896-2-2-2z"/></svg>
          <svg viewBox="0 0 24 24"><path d="M16.697 5.5c-1.222-.06-2.679.51-3.89 2.16l-.805 1.09-.806-1.09C9.984 6.01 8.526 5.44 7.304 5.5c-1.243.07-2.349.78-2.91 1.91-.552 1.12-.633 2.78.479 4.82 1.074 1.97 3.257 4.27 7.129 6.61 3.87-2.34 6.052-4.64 7.126-6.61 1.111-2.04 1.03-3.7.477-4.82-.561-1.13-1.666-1.84-2.908-1.91zm4.187 7.69c-1.351 2.48-4.001 5.12-8.379 7.67l-.503.3-.504-.3c-4.379-2.55-7.029-5.19-8.382-7.67-1.36-2.5-1.41-4.86-.514-6.67.887-1.79 2.647-2.91 4.601-3.01 1.651-.09 3.368.56 4.798 2.01 1.429-1.45 3.146-2.1 4.796-2.01 1.954.1 3.714 1.22 4.601 3.01.896 1.81.846 4.17-.514 6.67z"/></svg>
          <svg viewBox="0 0 24 24"><path d="M12 2.59l5.7 5.7-1.41 1.42L13 6.41V16h-2V6.41l-3.3 3.3-1.41-1.42L12 2.59zM21 15l-.02 3.51c0 1.38-1.12 2.49-2.5 2.49H5.5C4.11 21 3 19.88 3 18.5V15h2v3.5c0 .28.22.5.5.5h12.98c.28 0 .5-.22.5-.5L19 15h2z"/></svg>
        </div>
        ${commentsHtml}
      </div>
    </div>`;
}

/* ---------- 3. 推文详情页 & 评论 ---------- */
VIEWS.twDetail = () => {
  const all = [
    ...(window.TW_DATA.me.tweets || []), 
    ...(window.TW_DATA.vn.tweets || []), 
    ...(window.TW_DATA.mimi.tweets || [])
  ];
  const tweet = all.find(t => t.id === currentTweetId);
  if (!tweet) return { html: '<div style="padding:60px;text-align:center;">找不到推文</div>' };
  
  const author = (window.TW_DATA.me.tweets||[]).includes(tweet) ? window.TW_DATA.me
    : (window.TW_DATA.vn.tweets||[]).includes(tweet) ? window.TW_DATA.vn
    : window.TW_DATA.mimi;

  const commentsHtml = (tweet.comments || []).map(c => `
    <div style="padding:12px 16px;border-bottom:1px solid #eff3f4;display:flex;gap:12px;">
      <div style="width:36px;height:36px;border-radius:50%;background:#cfd9de;display:grid;place-items:center;font-weight:bold;color:#536471;">${esc(c.name[0])}</div>
      <div style="flex:1;">
        <div style="font-size:15px;"><b>${esc(c.name)}</b> <span style="color:#536471;">· ${c.time || '刚刚'}</span></div>
        <div style="font-size:15px;margin-top:2px;">${esc(c.text)}</div>
      </div>
    </div>`).join('');

  return {
    cls: 'tw',
    html: `
      <div class="tw-h">
        <div onclick="back()" style="cursor:pointer;"><svg viewBox="0 0 24 24"><path d="M19 12H5M12 19l-7-7 7-7"/></svg></div>
        <div style="font-size:16px;">帖子</div>
        <div style="width:20px;"></div>
      </div>
      <div class="scroll" style="padding-top:54px;padding-bottom:80px;">
        ${renderTwCard(author, tweet, true)}
        ${commentsHtml || '<div style="text-align:center;color:#536471;padding:30px;">还没有评论，快来抢沙发吧！</div>'}
      </div>
      <div class="cin safe" style="position:absolute;bottom:0;left:0;right:0;background:#fff;border-top:1px solid #eff3f4;z-index:10;">
        <div class="fld ph" id="twCommentInput" contenteditable="true" style="flex:1;padding:8px 14px;border-radius:20px;background:#f3f3f4;outline:none;font-size:15px;" data-placeholder="发表你的回复..."></div>
        <button onclick="sendTwComment(${tweet.id})" style="background:#1d9bf0;color:#fff;border:none;padding:8px 16px;border-radius:20px;font-weight:600;cursor:pointer;">回复</button>
      </div>`
  };
};

function sendTwComment(tweetId) {
  const input = document.getElementById('twCommentInput');
  const text = input && input.innerText.trim();
  if (!text) return;
  const all = [
    ...(window.TW_DATA.me.tweets || []), 
    ...(window.TW_DATA.vn.tweets || []), 
    ...(window.TW_DATA.mimi.tweets || [])
  ];
  const tweet = all.find(t => t.id === tweetId);
  if (!tweet) return;
  if (!tweet.comments) tweet.comments = [];
  tweet.comments.push({ name: window.TW_DATA.me.name || '我', text, time: '刚刚' });
  show('twDetail', 'none');
}

function saveTwProfile() {
  const name = document.querySelector('#twName') ? document.querySelector('#twName').value : '';
  const handle = document.querySelector('#twHandle') ? document.querySelector('#twHandle').value : '';
  const bio = document.querySelector('#twBio') ? document.querySelector('#twBio').value : '';
  if (window.TW_DATA && window.TW_DATA.me) {
    window.TW_DATA.me.name = name || window.TW_DATA.me.name;
    window.TW_DATA.me.handle = handle || window.TW_DATA.me.handle;
    window.TW_DATA.me.bio = bio;
  }
  toast('已保存');
  back();
}

/* ---------- 4. vn 私密主页密码锁 ---------- */
let twPincode = '';
const TW_PASSWORD = '0617';
let pendingTwUser = 'vn';

function askTwPassword(user) {
  pendingTwUser = user || 'vn';
  twPincode = '';
  const p = document.getElementById('pinL');
  p.style.display = 'flex';
  p.style.background = 'rgba(0,0,0,.6)';
  p.style.pointerEvents = 'auto';
  p.innerHTML = `
    <div class="pt">输入密码以查看私密内容</div>
    <div class="pdots" id="twDots">${[0,1,2,3].map(()=>`<i></i>`).join('')}</div>
    <div class="pkeys">
      ${[1,2,3,4,5,6,7,8,9].map(n=>`<button class="pk" onclick="twPinPress('${n}',this)"><b>${n}</b><small>${['','ABC','DEF','GHI','JKL','MNO','PQRS','TUV','WXYZ'][n-1]}</small></button>`).join('')}
      <span></span>
      <button class="pk" onclick="twPinPress('0',this)"><b>0</b><small></small></button>
      <span></span>
    </div>
    <div class="pbot"><button></button><button onclick="closeTwPin()">取消</button></div>`;
  p.getAnimations().forEach(a=>a.cancel());
  p.animate([{opacity:0,transform:'translateY(40px)'},{opacity:1,transform:'none'}],{duration:420,easing:'cubic-bezier(.2,.9,.25,1)'});
}

function twPinPress(n, el) {
  if (twPincode.length >= 4) return;
  el.classList.add('dn');
  setTimeout(()=>el.classList.remove('dn'), 90);
  twPincode += n;
  const dots = document.getElementById('twDots');
  dots.innerHTML = [0,1,2,3].map(i=>`<i class="${i<twPincode.length?'on':''}"></i>`).join('');
  
  if (twPincode.length === 4) {
    if (twPincode === TW_PASSWORD) {
      setTimeout(() => {
        closeTwPin();
        currentTwUser = pendingTwUser;
        twTab = 'profile';
        show('twitter');
      }, 180);
    } else {
      setTimeout(() => {
        dots.classList.remove('shake');
        void dots.offsetWidth;
        dots.classList.add('shake');
        setTimeout(() => { twPincode=''; dots.innerHTML=[0,1,2,3].map(()=>`<i></i>`).join(''); }, 420);
      }, 120);
    }
  }
}

function closeTwPin() {
  const p = document.getElementById('pinL');
  p.getAnimations().forEach(a=>a.cancel());
  p.animate([{opacity:1},{opacity:0,transform:'translateY(30px)'}],{duration:300}).onfinish = () => {
    p.style.display = 'none';
    p.innerHTML = '';
  };
}






/* ============================================================
   超精细 iOS 备忘录（最终闭环版，放在 apps.js 最末尾）
   ============================================================ */
let currentNoteId = null;

function getNotes() {
  const saved = localStorage.getItem('my_notes_app');
  // 如果本地有，直接读取
  if (saved) {
    const parsed = JSON.parse(saved);
    if (parsed && parsed.length > 0) return parsed;
  }
  // 如果本地没有，读取 data.js 里的数据
  if (window.NOTES_DATA && window.NOTES_DATA.length > 0) {
    localStorage.setItem('my_notes_app', JSON.stringify(window.NOTES_DATA));
    return window.NOTES_DATA;
  }
  return [];
}

function saveNotes(notes) {
  localStorage.setItem('my_notes_app', JSON.stringify(notes));
}

// 列表页
VIEWS.notes = () => {
  const notes = getNotes();
  // 按年份和月份分组
  const groups = {};
  notes.forEach(n => {
    let year = '2025年';
    let month = '四月';
    if (n.time && n.time.includes('/')) {
      const parts = n.time.split('/');
      if (parts.length >= 2) {
        year = parts[0] + '年';
        month = parseInt(parts[1]) + '月';
      }
    }
    if (!groups[year]) groups[year] = {};
    if (!groups[year][month]) groups[year][month] = [];
    groups[year][month].push(n);
  });

  let listHtml = '';
  for (const year in groups) {
    listHtml += `<div style="font-size:24px; font-weight:700; padding:20px 16px 10px; color:#000;">${year}</div>`;
    for (const month in groups[year]) {
      listHtml += `<div style="font-size:18px; font-weight:600; padding:10px 16px; color:#000;">${month}</div>`;
      listHtml += `<div style="background:#fff; border-radius:12px; margin:0 16px; overflow:hidden;">`;
      groups[year][month].forEach((n, idx) => {
        // 增加 position:relative 和 z-index 防止被透明层挡住
        listHtml += `
          <div class="note-row" onclick="openNote(${n.id})" style="position:relative; z-index:10; padding:12px 16px; border-bottom:${idx === groups[year][month].length - 1 ? 'none' : '0.5px solid #e5e5ea'}; cursor:pointer;">
            <div style="font-size:16px; font-weight:600; color:#000;">${esc(n.title || '新备忘录')}</div>
            <div style="display:flex; gap:8px; margin-top:4px; font-size:14px; color:#8e8e93;">
              <span>${esc(n.time || '')}</span>
              <span style="white-space:nowrap; overflow:hidden; text-overflow:ellipsis;">${esc(n.content ? n.content.substring(0, 15) : '空备忘录...')}</span>
            </div>
          </div>`;
      });
      listHtml += `</div>`;
    }
  }

  return {
    cls: 'notes-app',
    html: `
      <!-- 顶部导航 -->
      <div style="padding: 54px 16px 10px; display:flex; justify-content:space-between; align-items:center; background:rgba(249,249,249,0.85); backdrop-filter:blur(10px); position:sticky; top:0; z-index:10;">
        <div style="color:#e0a700; font-size:16px; display:flex; align-items:center; gap:2px; cursor:pointer;" onclick="closeApp()">
          <svg viewBox="0 0 12 20" fill="none" stroke="currentColor" stroke-width="2.5" style="width:10px;height:18px;"><path d="M10 2 2 10l8 8"/></svg> 文件夹
        </div>
        <div style="font-size:17px; font-weight:600;">备忘录</div>
        <div onclick="createNote()" style="color:#e0a700; font-size:20px; font-weight:bold; cursor:pointer; padding: 0 10px;">···</div>
      </div>
      
      <!-- 列表主体 -->
      <div style="flex:1; overflow-y:auto; background:#f2f2f7; padding-bottom:100px;">
        ${notes.length === 0 ? '<div style="text-align:center; color:#8e8e93; margin-top:50px;">暂无备忘录</div>' : listHtml}
      </div>

      <!-- 底部工具栏 -->
      <div style="position:absolute; bottom:0; left:0; right:0; padding: 10px 24px 34px; background:rgba(249,249,249,0.9); backdrop-filter:blur(10px); border-top:0.5px solid #e5e5ea; display:flex; justify-content:space-between; align-items:center; z-index:20;">
        <div style="color:#e0a700; font-size:14px; font-weight:500;">iCloud 储存空间已满</div>
        <div onclick="createNote()" style="color:#e0a700; cursor:pointer; padding: 5px;">
          <svg viewBox="0 0 24 24" width="24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 20h9M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4Z"/></svg>
        </div>
      </div>
    `
  };
};

// 编辑页
VIEWS.noteEdit = () => {
  const notes = getNotes();
  const n = notes.find(x => x.id === currentNoteId);
  if (!n) return { html: '<div style="padding:100px;text-align:center;">找不到备忘录</div>' };
  
  return {
    cls: 'note-editor',
    html: `
      <!-- 顶部导航 -->
      <div style="padding: 54px 16px 10px; display:flex; justify-content:space-between; align-items:center; background:rgba(249,249,249,0.85); backdrop-filter:blur(10px); position:sticky; top:0; z-index:10;">
        <div onclick="saveCurrentNote()" style="color:#e0a700; font-size:16px; display:flex; align-items:center; gap:2px; cursor:pointer;">
          <svg viewBox="0 0 12 20" fill="none" stroke="currentColor" stroke-width="2.5" style="width:10px;height:18px;"><path d="M10 2 2 10l8 8"/></svg> 备忘录
        </div>
        <div style="display:flex; gap:20px; color:#e0a700; font-size:20px;">
          <div onclick="deleteCurrentNote()" style="cursor:pointer;">
            <svg viewBox="0 0 24 24" width="20" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 6h18M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg>
          </div>
          <svg viewBox="0 0 24 24" width="20" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="1"/><circle cx="19" cy="12" r="1"/><circle cx="5" cy="12" r="1"/></svg>
        </div>
      </div>

      <div class="note-ed" style="padding: 10px 16px; flex:1; display:flex; flex-direction:column;">
        <input id="noteTitle" placeholder="标题" value="${esc(n.title)}" style="font-size:24px; font-weight:700; border:none; outline:none; margin-bottom:16px; background:transparent;">
        <textarea id="noteContent" placeholder="开始输入..." style="flex:1; border:none; outline:none; font-size:16px; line-height:1.5; resize:none; background:transparent; font-family:inherit;">${esc(n.content)}</textarea>
      </div>

      <!-- 底部工具栏 -->
      <div style="padding: 10px 24px 34px; background:rgba(249,249,249,0.9); backdrop-filter:blur(10px); border-top:0.5px solid #e5e5ea; display:flex; justify-content:space-between; align-items:center; color:#e0a700;">
        <svg viewBox="0 0 24 24" width="24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 11l3 3L22 4M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/></svg>
        <svg viewBox="0 0 24 24" width="24" fill="none" stroke="currentColor" stroke-width="2"><path d="M15.172 7l-6.586 6.586a2 2 0 1 0 2.828 2.828l6.414-6.586a4 4 0 0 0-5.656-5.656l-6.415 6.585a6 6 0 1 0 8.486 8.486L20.5 13"/></svg>
        <svg viewBox="0 0 24 24" width="24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M8 14s1.5 2 4 2 4-2 4-2M9 9h.01M15 9h.01"/></svg>
        <svg viewBox="0 0 24 24" width="24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 14.66V20a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h5.34"/><path d="M18 2l4 4-10 10H8v-4L18 2Z"/></svg>
      </div>
    `
  };
};

function createNote() {
  const notes = getNotes();
  const now = new Date();
  const timeStr = now.getFullYear() + '/' + (now.getMonth()+1) + '/' + now.getDate();
  const newNote = { id: Date.now(), title: '', content: '', time: timeStr };
  notes.unshift(newNote);
  saveNotes(notes);
  currentNoteId = newNote.id;
  push('noteEdit');
}

function openNote(id) {
  currentNoteId = id;
  push('noteEdit');
}

function saveCurrentNote() {
  const notes = getNotes();
  const idx = notes.findIndex(x => x.id === currentNoteId);
  if (idx > -1) {
    const titleInput = document.getElementById('noteTitle').value;
    const contentInput = document.getElementById('noteContent').value;
    notes[idx].title = titleInput || '新备忘录';
    notes[idx].content = contentInput;
    const now = new Date();
    notes[idx].time = now.getFullYear() + '/' + (now.getMonth()+1) + '/' + now.getDate();
    saveNotes(notes);
  }
  show('notes'); 
}

function deleteCurrentNote() {
  let notes = getNotes();
  notes = notes.filter(x => x.id !== currentNoteId);
  saveNotes(notes);
  show('notes'); 
}