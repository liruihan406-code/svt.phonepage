'use strict';
/* ============================================================
   所有 App 的视图（VIEWS）+ 各 App 的交互逻辑
   依赖：data.js、i18n.js、app.js 里的工具函数
   ============================================================ */

/* ============================================================
   App 图标
   ============================================================ */
function kakaoIcon(){
  return `<div style="width:100%;height:100%;background:#fee500;display:grid;place-items:center">
    <svg viewBox="0 0 60 60" width="100%" height="100%"><path d="M30 14.5c-11.9 0-21.5 7.4-21.5 16.5 0 5.9 4 11.1 10 14l-2.2 7.8c-.2.7.6 1.3 1.2.8l9.2-6.1c1.1.1 2.2.2 3.3.2 11.9 0 21.5-7.4 21.5-16.6S41.9 14.5 30 14.5Z" fill="#3a1d1d"/><g fill="#fee500"><circle cx="21.5" cy="31" r="2.7"/><circle cx="30" cy="31" r="2.7"/><circle cx="38.5" cy="31" r="2.7"/></g></svg>
  </div>`;
}
function phoneIcon(){
  return `<div style="width:100%;height:100%;background:linear-gradient(135deg,#65f38f,#28c253);display:grid;place-items:center">
    <svg viewBox="0 0 24 24" width="60%" fill="#fff"><path d="M6.6 3.2c.6-.3 1.4-.1 1.8.5l1.9 3c.4.6.3 1.4-.2 1.9l-1.4 1.3a12.4 12.4 0 0 0 5.4 5.4l1.3-1.4c.5-.5 1.3-.6 1.9-.2l3 1.9c.6.4.8 1.2.5 1.8l-.9 1.9c-.5 1-1.6 1.6-2.7 1.4C10 19.6 4.4 14 3.3 6.8c-.2-1.1.4-2.2 1.4-2.7Z"/></svg>
  </div>`;
}
function messagesIcon(){
  return `<div style="width:100%;height:100%;background:linear-gradient(135deg,#65f38f,#28c253);display:grid;place-items:center">
    <svg viewBox="0 0 24 24" width="60%" fill="#fff"><path d="M12 3.5c-5.2 0-9.5 3.4-9.5 7.6 0 2.4 1.4 4.5 3.6 5.9L5.2 21l4.3-2.4c.8.2 1.6.3 2.5.3 5.2 0 9.5-3.4 9.5-7.6S17.2 3.5 12 3.5Z"/></svg>
  </div>`;
}
function photosIcon(){
  let petals='';
  for(let i=0;i<10;i++) petals+=`<ellipse cx="30" cy="18" rx="4.2" ry="10" fill="#fff" transform="rotate(${i*36} 30 30)"/>`;
  return `<div style="width:100%;height:100%;background:linear-gradient(135deg,#9bdcff,#d8f1ff);display:grid;place-items:center">
    <svg viewBox="0 0 60 60" width="100%" height="100%">${petals}<circle cx="30" cy="30" r="7" fill="#ffc83d"/></svg>
  </div>`;
}
function instagramIcon(){
  return `<div style="width:100%;height:100%;background:linear-gradient(45deg,#ffc35c,#ff3d6e 50%,#7c3bf0);display:grid;place-items:center">
    <svg viewBox="0 0 60 60" width="60%" fill="none" stroke="#fff" stroke-width="3.2"><rect x="14" y="14" width="32" height="32" rx="9"/><circle cx="30" cy="30" r="8"/><circle cx="40" cy="20" r="2" fill="#fff" stroke="none"/></svg>
  </div>`;
}
function safariIcon(){
  return `<div style="width:100%;height:100%;background:#fff;display:grid;place-items:center">
    <svg viewBox="0 0 60 60" width="100%" height="100%"><circle cx="30" cy="30" r="26" fill="#1e8ef0"/><circle cx="30" cy="30" r="23" fill="#3aa8ff"/>
    <path d="M30 30 44 16 34 34Z" fill="#ff3b30"/><path d="M30 30 16 44 26 26Z" fill="#fff"/></svg>
  </div>`;
}
function settingsIcon(){
  return `<div style="width:100%;height:100%;background:linear-gradient(135deg,#a7adb6,#6d727b);display:grid;place-items:center">
    <svg viewBox="0 0 60 60" width="70%" fill="none" stroke="#e9eaee" stroke-width="3">
      <circle cx="30" cy="30" r="16" stroke-dasharray="4.5 4.6" stroke-width="7"/>
      <circle cx="30" cy="30" r="12" fill="#878c95"/>
      <circle cx="30" cy="30" r="5" stroke-width="3"/>
    </svg>
  </div>`;
}
const APP_ICONS = {
  kakao: kakaoIcon, phone: phoneIcon, messages: messagesIcon,
  photos: photosIcon, instagram: instagramIcon, safari: safariIcon, settings: settingsIcon
};

/* ============================================================
   KakaoTalk
   ============================================================ */
let chatId = '小红';
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

VIEWS.chatRoom = () => ({
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
  <div class="cand" id="cand" style="display:none"></div>
  <div class="cin safe" id="cin">
    <button onclick="openAttach()">${G.plusSq}</button>
    <div class="fld ph" id="fld" onclick="openKbd()">${t('msgInput')}</div>
    <button onclick="toggleEmoji()">${G.smile}</button>
    <button class="snd" id="snd" onclick="sendMsg()">${G.arrowUp}</button>
  </div>
  <div class="kbd" id="kbd"></div>`,
  init:()=>{ const b=$('#msgs'); if(b)b.scrollTop=b.scrollHeight; }
});

function renderMessages(name){
  const arr = CHATS[name] || [];
  if(!arr.length) return `<div style="text-align:center;color:#6b7b8a;font-size:13px;margin-top:30px">还没有消息，打个招呼吧</div>`;
  return arr.map(([txt,w,tm],i)=>{
    const first = i===0 || arr[i-1][1]!==w;
    return `<div class="ln ${w==='me'?'me':'th'} ${first?'first':''}">
      ${w!=='me'&&first?`<div class="sav">${esc(name[0])}</div>`:''}
      <div class="col">
        ${w!=='me'&&first?`<div class="who">${esc(name)}</div>`:''}
        <div class="wrap">
          ${w==='me'?`<div class="tm">${tm}</div>`:''}
          <div class="bb">${esc(txt)}</div>
          ${w!=='me'?`<div class="tm">${tm}</div>`:''}
        </div>
      </div>
    </div>`;
  }).join('');
}
function refreshChat(){
  const b=$('#msgs'); if(!b)return;
  b.innerHTML = renderMessages(chatId);
  b.scrollTop = b.scrollHeight;
}
function showTyping(){
  const b=$('#msgs'); if(!b||$('#typ'))return;
  b.insertAdjacentHTML('beforeend', `<div class="ln th first" id="typ"><div class="sav">${esc(chatId[0])}</div><div class="col"><div class="who">${esc(chatId)}</div><div class="wrap"><div class="bb typing"><i></i><i></i><i></i></div></div></div></div>`);
  b.scrollTop = b.scrollHeight;
}
function hideTyping(){ const x=$('#typ'); if(x)x.remove(); }

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
  pendingText=''; pinyinBuf='';
  setField('', false);
  $('#snd').classList.remove('on');
  hideCand();
  refreshChat();
  closeKbd();
  
  const replies = AUTO_REPLY[chatId] || ['嗯嗯'];
  const reply = replies[Math.floor(Math.random()*replies.length)];
  showTyping();
  
  // 记录一下发消息时在哪个聊天室
  const currentChat = chatId; 
  
  setTimeout(()=>{
    hideTyping();
    const a = CHATS[chatId];
    a.push([reply, 'them', nowTime()]);
    
    // 如果此时还在这个聊天室，就更新界面
    if (view === 'chatRoom' && chatId === currentChat) {
      refreshChat();
    } else {
      // 如果退出去了，就弹窗！
      showNotification(currentChat, reply);
    }
  }, 1000 + Math.random()*800);
}
/* ============================================================
   电话
   ============================================================ */
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
function dialPress(n){ dialValue += n; const d=$('#dialNum'); if(d)d.textContent=dialValue; vib(5); }
function dialDel(){ dialValue = dialValue.slice(0,-1); const d=$('#dialNum'); if(d)d.textContent=dialValue; }

/* ============================================================
   信息
   ============================================================ */
let smsId = '小红';
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

/* ============================================================
   照片
   ============================================================ */
VIEWS.photos = () => {
  // 按日期分组照片
  const groups = {};
  PHOTOS.forEach(p => {
    const d = p.date || '未知时间';
    if (!groups[d]) groups[d] = [];
    groups[d].push(p);
  });

  let html = `<div class="nav solid" style="position:absolute;z-index:6;top:0;left:0;right:0;height:98px;padding:54px 8px 0;display:grid;grid-template-columns:1fr auto 1fr;align-items:center;background:rgba(249,249,249,.9);backdrop-filter:blur(20px)">
    <span></span><div class="nb-title" style="opacity:1">${t('library')}</div><span style="justify-self:end;color:var(--blue);font-size:17px;padding-right:8px">${t('select')}</span>
  </div>
  <div class="scroll" style="padding-top:98px">
    <h1 class="lt">${t('library')}</h1>
    <div class="muted" style="margin:-6px 16px 10px;font-size:15px">${t('nPhotos',PHOTOS.length)}</div>`;

  // 遍历每一天，生成标题和照片网格
  Object.keys(groups).forEach(dateStr => {
    html += `<div style="font-size:22px; font-weight:700; padding:20px 16px 10px; color:#000;">${dateStr}</div>`;
    html += `<div class="ph-grid">`;
    
    groups[dateStr].forEach(p => {
      const i = PHOTOS.indexOf(p);
      html += `<button onclick="openViewer(${i})">
        ${p.src 
          ? `<img src="${p.src}" style="width:100%;height:100%;object-fit:cover">` 
          : `<span class="ph" style="background:${p.color}">${p.label}</span>`}
      </button>`;
    });
    
    html += `</div>`;
  });

  html += `</div>`;
  return { html };
};
function openViewer(i){
  const p = PHOTOS[i];
  const v = document.createElement('div'); 
  v.className = 'viewer';
  
  const content = p.src 
    ? `<img src="${p.src}" style="width:100%;height:100%;object-fit:contain">`
    : `<div class="vi" style="background:${p.color}">${p.label}</div>`;
    
  // 把按钮的外层加了 z-index:999，并且给按钮加了 padding 扩大点击范围
  v.innerHTML = `
    ${content}
    <div class="vt" style="position:absolute; top:0; left:0; right:0; padding:54px 16px 20px; z-index:999; display:flex; justify-content:space-between; align-items:center; background:linear-gradient(rgba(0,0,0,0.6), transparent); color:#fff;">
      <button onclick="this.closest('.viewer').remove(); setStatus(false);" style="color:#fff; padding:10px; cursor:pointer; display:flex; align-items:center;">
        <svg viewBox="0 0 12 20" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round" style="width:13px;height:21px;margin-right:5px;"><path d="M10 2 2 10l8 8"/></svg>
        返回
      </button>
      <span style="font-size:13px; text-align:center; line-height:1.3;">
           ${p.date || ''}<br>
           <span style="opacity:0.7; font-size:11px;">${p.label}</span>
      </span>
    </div>
  `;
  
  OV.appendChild(v); 
  setStatus(true);
  v.animate([{opacity:0},{opacity:1}],{duration:280});
}
/* ============================================================
   Instagram
   ============================================================ */
/* 读取本地保存的 IG 数据，如果没有就用默认的 */
function getIGProfile() {
  const saved = localStorage.getItem('my_ig_profile');
  if (saved) return JSON.parse(saved);
  return window.IG_PROFILE || { name: '小明', handle: 'xiaoming_', bio: '记录生活 ✨', posts: 6, followers: 128, following: 96 };
}

VIEWS.instagram = () => {
  const prof = getIGProfile();
  return {
    cls:'ig',
    html:`<div class="ig-h">
      <b onclick="show('igHome')" style="cursor:pointer;">${esc(prof.handle || prof.name)} <span style="font-size:14px;font-weight:400;color:#555;">▾</span></b>
      ${G.plusSq.replace('<svg','<svg style="width:26px;height:26px;stroke:#000;stroke-width:1.8"')}
      ${G.menu.replace('<svg','<svg style="width:26px;height:26px;stroke:#000;stroke-width:1.8"')}
    </div>
    <div class="scroll" style="padding-top:104px; padding-bottom:100px;">
      
      <div class="igp">
        <div class="pp" style="background:linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%); padding:3px;">
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
        <button onclick="push('igEdit')" style="background:#efefef;">编辑主页</button>
        <button style="background:#efefef;">分享主页</button>
        <button style="background:#efefef; flex:0 0 40px;">👤</button>
      </div>

      <div style="display:flex; gap:16px; padding:8px 16px 16px; overflow-x:auto;">
        ${[1,2,3,4].map(i=>`
          <div style="display:flex; flex-direction:column; align-items:center; gap:6px;">
            <div style="width:64px; height:64px; border-radius:50%; border:1px solid #dbdbdb; padding:3px;">
              <div style="width:100%; height:100%; border-radius:50%; background:#f0f0f0; display:grid; place-items:center; font-size:20px; color:#aaa;">+</div>
            </div>
            <span style="font-size:12px; color:#000;">精选 ${i}</span>
          </div>
        `).join('')}
      </div>

      <div class="igtabs">
        <span class="on" style="border-bottom:1px solid #000; color:#000;">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M9 3v18M15 3v18M3 9h18M3 15h18"/></svg>
        </span>
        <span>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="3" y="3" width="18" height="18" rx="4"/><path d="m10 9 5 3-5 3Z" fill="currentColor"/></svg>
        </span>
        <span>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="12" cy="12" r="4"/><circle cx="17" cy="7" r="1" fill="currentColor"/></svg>
        </span>
      </div>

      <div class="iggrid">
        ${IG_POSTS.map((p, i)=>`
          <button style="background:${p.color}; position:relative;" onclick="toast('${p.label}')">
            ${p.label}
            ${i === 0 ? `<svg style="position:absolute; top:6px; right:6px; width:18px; fill:#fff;" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>` : ''}
          </button>
        `).join('')}
      </div>
    </div>
    
    <!-- 底部导航栏 -->
    <div class="tabbar" style="background:#fff; border-top:1px solid #efefef; justify-content:space-around; z-index:10;">
      <button onclick="show('igHome')">
        <svg viewBox="0 0 24 24" fill="none" stroke="#000" stroke-width="2" style="width:26px; height:26px;"><path d="M12 3 2 12h3v8h5v-5h4v5h5v-8h3Z"/></svg>
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
      <button onclick="show('instagram')" style="width:28px; height:28px; border-radius:50%; background:#000; color:#fff; font-size:14px; font-weight:bold; display:grid; place-items:center; border:2px solid #000;">
        ${esc(prof.name[0] || 'U')}
      </button>
    </div>`
  };
};

/* Instagram 编辑资料页 */
VIEWS.igEdit = () => {
  const prof = getIGProfile();
  return {
    cls: 'ig',
    html: `<div class="nav solid" style="position:absolute;z-index:6;top:0;left:0;right:0;height:98px;padding:54px 8px 0;display:grid;grid-template-columns:1fr auto 1fr;align-items:center;background:#fff;border-bottom:0.5px solid #efefef;">
      <button class="nb-back" onclick="back()" style="color:#000; font-weight:600; border:none; background:none;">取消</button>
      <div class="nb-title" style="opacity:1; font-weight:600;">编辑主页</div>
      <span></span>
    </div>
    <div class="scroll" style="padding-top:98px; background:#fff;">
      <div class="ig-edit-form">
        <div style="text-align:center; margin-bottom:20px;">
          <div class="pp" style="width:86px; height:86px; margin:0 auto; border-radius:50%; background:linear-gradient(45deg, #f09433, #dc2743, #bc1888); padding:3px;">
             <div style="width:100%;height:100%;border-radius:50%;background:#fff;display:grid;place-items:center;">
                <div style="width:100%;height:100%;border-radius:50%;background:#dbdbdb;display:grid;place-items:center;font-size:30px;font-weight:600;color:#555;" id="previewName">
                  ${esc(prof.name[0] || 'U')}
                </div>
             </div>
          </div>
          <div style="color:#0095f6; font-size:14px; margin-top:8px; font-weight:600;">更改头像</div>
        </div>

        <label>名字</label>
        <input type="text" id="igName" value="${esc(prof.name)}" oninput="document.getElementById('previewName').textContent = this.value[0] || 'U'">
        
        <label>账号</label>
        <input type="text" id="igHandle" value="${esc(prof.handle || '')}">
        
        <label>简介</label>
        <textarea id="igBio">${esc(prof.bio)}</textarea>

        <button class="save-btn" onclick="saveIGProfile()">保存</button>
      </div>
    </div>`
  };
};

/* 保存资料 */
function saveIGProfile() {
  const old = getIGProfile();
  const newProf = {
    name: document.getElementById('igName').value || '未命名',
    handle: document.getElementById('igHandle').value || 'user',
    bio: document.getElementById('igBio').value,
    posts: old.posts,
    followers: old.followers,
    following: old.following
  };
  localStorage.setItem('my_ig_profile', JSON.stringify(newProf));
  toast('已保存');
  back(); // 返回上一页（主页），主页会自动刷新读取新数据
}

/* Instagram 刷帖首页 (Home Feed) */
VIEWS.igHome = () => {
  return {
    cls:'ig',
    html:`<div class="ig-h" style="justify-content:space-between;">
      <b style="font-family:'Billabong', cursive, sans-serif; font-size:28px; flex:none;">Instagram</b>
      <div style="display:flex; gap:18px; align-items:center;">
        <button onclick="toast('通知')">${G.bell.replace('<svg','<svg style="width:24px;height:24px;stroke:#000;stroke-width:1.8"')}</button>
        <button onclick="push('messages')">${G.chat.replace('<svg','<svg style="width:24px;height:24px;stroke:#000;stroke-width:1.8"')}</button>
      </div>
    </div>
    
    <div class="scroll" style="padding-top:104px; padding-bottom:100px; background:#fafafa;">
      <!-- 顶部快拍列表 (Stories) -->
      <div style="display:flex; gap:14px; padding:12px 16px; overflow-x:auto; background:#fff; border-bottom:1px solid #efefef;">
        ${[1,2,3,4,5].map(i=>`
          <div style="display:flex; flex-direction:column; align-items:center; gap:6px; flex:none;">
            <div style="width:64px; height:64px; border-radius:50%; background:linear-gradient(45deg, #f09433, #dc2743, #bc1888); padding:2.5px;">
              <div style="width:100%; height:100%; border-radius:50%; background:#fff; padding:2px;">
                <div style="width:100%; height:100%; border-radius:50%; background:#eee; display:grid; place-items:center; font-size:20px; font-weight:bold; color:#888;">
                  ${String.fromCharCode(64 + i)}
                </div>
              </div>
            </div>
            <span style="font-size:12px; color:#000;">user_${i}</span>
          </div>
        `).join('')}
      </div>

      <!-- 帖子列表 -->
      ${[1, 2].map(postId => `
        <div style="background:#fff; margin-bottom:8px; border-top:1px solid #efefef; border-bottom:1px solid #efefef;">
          <!-- 帖子头部 -->
          <div style="display:flex; align-items:center; padding:10px 14px; gap:10px;">
            <div style="width:32px; height:32px; border-radius:50%; background:#ddd; display:grid; place-items:center; font-weight:bold; color:#666;">F</div>
            <div style="flex:1; font-size:14px; font-weight:600; color:#000;">friend_${postId} <span style="color:#888; font-weight:400;">• 2小时前</span></div>
            <div style="font-weight:bold; color:#000;">···</div>
          </div>
          
          <!-- 大图区域 -->
          <div style="width:100%; aspect-ratio:1; background:#e0e0e0; display:grid; place-items:center; color:#888; font-size:14px;">
            ( 图片占位 ${postId} )
          </div>

          <!-- 点赞评论按钮 -->
          <div style="display:flex; padding:12px 14px 6px; gap:16px;">
            <svg style="width:24px; height:24px; fill:none; stroke:#000; stroke-width:1.8; cursor:pointer;" viewBox="0 0 24 24"><path d="M12 20s-7.5-4.6-7.5-10A4.3 4.3 0 0 1 12 7.4 4.3 4.3 0 0 1 19.5 10c0 5.4-7.5 10-7.5 10Z"/></svg>
            <svg style="width:24px; height:24px; fill:none; stroke:#000; stroke-width:1.8; cursor:pointer;" viewBox="0 0 24 24"><path d="M12 3.5a8.5 8.5 0 1 0 4.3 15.8l4.2 1.2-1.2-4.2A8.5 8.5 0 0 0 12 3.5Z"/></svg>
            <svg style="width:24px; height:24px; fill:none; stroke:#000; stroke-width:1.8; cursor:pointer;" viewBox="0 0 24 24"><path d="M21 3 10 14"/><path d="M21 3 14.5 21l-4.5-7-7-4.5Z"/></svg>
          </div>

          <!-- 赞和文字 -->
          <div style="padding:0 14px 12px; font-size:14px; color:#000;">
            <b>1,284 次赞</b><br>
            <span style="font-weight:600;">friend_${postId}</span> 今天天气真不错，出来散散步！ 🌤️
          </div>
        </div>
      `).join('')}
    </div>

    <!-- Instagram 底部导航栏 -->
    <div class="tabbar" style="background:#fff; border-top:1px solid #efefef; justify-content:space-around;">
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
      <button onclick="show('instagram')" style="width:26px; height:26px; border-radius:50%; background:#dbdbdb; color:#555; font-size:14px; font-weight:bold; display:grid; place-items:center; border:1px solid #ddd;">
        ${getIGProfile().name[0] || 'U'}
      </button>
    </div>`
  };
};

/* ============================================================
   Safari
   ============================================================ */
VIEWS.safari = () => ({
  cls:'saf',
  html:`<div class="scroll">
    <h1 class="lt" style="margin-top:8px">Safari</h1>
    <div class="sh" style="font-size:22px;margin:18px 16px 8px">${t('favorites')}</div>
    <div class="favs">
      ${SAFARI_FAVS.map(f=>`<div class="fav"><i style="color:${f[2]}">${f[0]}</i>${esc(f[1])}</div>`).join('')}
    </div>
    <div class="sh" style="font-size:22px;margin:28px 16px 8px">隐私报告</div>
    <div style="margin:0 16px;background:#fff;border-radius:11px;padding:14px 16px;display:flex;gap:12px;align-items:center;font-size:15px">
      <span style="font-size:26px">🛡️</span><span>过去 7 天，Safari 阻止了 <b>14 个</b>跟踪器。</span>
    </div>
    <div class="sh" style="font-size:22px;margin:28px 16px 8px">阅读列表</div>
    <div style="margin:0 16px;background:#fff;border-radius:11px;padding:14px 16px;color:var(--grey);font-size:15px">阅读列表为空</div>
  </div>
  <div class="saf-bar">
    <div class="ad" onclick="toast('搜索或输入网址')"><b>AA</b><span style="flex:1;text-align:center">${t('searchWeb')}</span>${G.mic||''}</div>
    <div class="tb">${G.chevL}${G.chevR}${G.share}${G.book||G.file}${G.plusSq}</div>
  </div>`
});

/* ============================================================
   设置
   ============================================================ */
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