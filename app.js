'use strict';
/* ============================================================
   主框架：锁屏、密码、主屏、页面切换、键盘、启动
   依赖：data.js、i18n.js、apps.js
   ============================================================ */

const $ = s => document.querySelector(s);
const SCREEN = $('#screen'), APP = $('#appL'), HOME = $('#homeL'), LOCK = $('#lockL'), PIN = $('#pinL'), OV = $('#ov');
let view = 'lock', pincode = '', SC = 1, lastRect = null;

const pad = n => String(n).padStart(2, '0');
const esc = v => String(v).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
const clock12 = () => { const d = new Date(); return ((d.getHours() % 12) || 12) + ':' + pad(d.getMinutes()); };
const relRect = el => { const s = SCREEN.getBoundingClientRect(), r = el.getBoundingClientRect(); return { x:(r.left-s.left)/SC, y:(r.top-s.top)/SC, w:r.width/SC, h:r.height/SC }; };
const vib = p => { try { navigator.vibrate && navigator.vibrate(p); } catch(e){} };
const nowTime = () => clock12();

/* ============================================================
   图标
   ============================================================ */
const g = (p,o='') => `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" ${o}>${p}</svg>`;
const G = {
  chevL:`<svg viewBox="0 0 12 20" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"><path d="M10 2 2 10l8 8"/></svg>`,
  chevR:`<svg class="chev" viewBox="0 0 8 13"><path d="m1.5 1.5 5 5-5 5" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
  search:g('<circle cx="11" cy="11" r="7"/><path d="m20 20-4-4"/>'),
  plus:g('<path d="M12 5v14M5 12h14"/>'),
  dots:g('<circle cx="12" cy="12" r="9.2"/><circle cx="8" cy="12" r=".8" fill="currentColor"/><circle cx="12" cy="12" r=".8" fill="currentColor"/><circle cx="16" cy="12" r=".8" fill="currentColor"/>'),
  dotsH:g('<circle cx="5" cy="12" r="1.2" fill="currentColor"/><circle cx="12" cy="12" r="1.2" fill="currentColor"/><circle cx="19" cy="12" r="1.2" fill="currentColor"/>'),
  menu:g('<path d="M4 7h16M4 12h16M4 17h16"/>'),
  gear:g('<circle cx="12" cy="12" r="3"/><path d="M12 2.8v2.6M12 18.6v2.6M2.8 12h2.6M18.6 12h2.6M5.5 5.5l1.8 1.8M16.7 16.7l1.8 1.8M5.5 18.5l1.8-1.8M16.7 7.3l1.8-1.8"/><circle cx="12" cy="12" r="6.4"/>'),
  person:g('<circle cx="12" cy="8" r="4"/><path d="M4 21c0-4.4 3.6-7 8-7s8 2.6 8 7"/>'),
  chat:g('<path d="M12 4C7 4 3 7.1 3 11c0 2.4 1.5 4.5 3.9 5.8L6 20.5l4-2.4c.6.1 1.3.1 2 .1 5 0 9-3.1 9-7.1S17 4 12 4Z"/>'),
  chatPlus:g('<path d="M12 4C7 4 3 7.1 3 11c0 2.4 1.5 4.5 3.9 5.8L6 20.5l4-2.4c.6.1 1.3.1 2 .1 5 0 9-3.1 9-7.1S17 4 12 4Z"/><path d="M12 8.5v5M9.5 11h5"/>'),
  bag:g('<path d="M5 8h14l-1 12H6Z"/><path d="M9 8V6.5a3 3 0 0 1 6 0V8"/>'),
  globe:g('<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c2.5 2.8 3.5 5.8 3.5 9s-1 6.2-3.5 9c-2.5-2.8-3.5-5.8-3.5-9s1-6.2 3.5-9Z"/>'),
  plusSq:g('<rect x="3.5" y="3.5" width="17" height="17" rx="5"/><path d="M12 8v8M8 12h8"/>'),
  smile:g('<circle cx="12" cy="12" r="9"/><path d="M8.5 14.5c1.8 2 5.2 2 7 0"/><circle cx="9" cy="10" r=".9" fill="currentColor"/><circle cx="15" cy="10" r=".9" fill="currentColor"/>'),
  arrowUp:g('<path d="M12 19V5M6 11l6-6 6 6"/>'),
  sun:'<svg viewBox="0 0 24 24" width="24"><circle cx="12" cy="12" r="5" fill="#ffd60a"/><g stroke="#ffd60a" stroke-width="2" stroke-linecap="round"><path d="M12 2.5v2M12 19.5v2M2.5 12h2M19.5 12h2M5.3 5.3l1.4 1.4M17.3 17.3l1.4 1.4M5.3 18.7l1.4-1.4M17.3 6.7l1.4-1.4"/></g></svg>',
  camera:g('<path d="M4 8h3.5L9 5.5h6L16.5 8H20v11H4Z"/><circle cx="12" cy="13" r="3.5"/>'),
  photo:g('<rect x="3.5" y="5" width="17" height="14" rx="2"/><circle cx="9" cy="10" r="1.6"/><path d="m4 17 5-4.5 4 3.5 3-2.5 4 3.5"/>'),
  file:g('<path d="M6 3.5h8l4 4v13H6Z"/><path d="M14 3.5v4h4"/>'),
  gift:g('<rect x="3.5" y="8" width="17" height="12" rx="2"/><path d="M3.5 12h17M12 8v12M8 8a2.5 2.5 0 0 1 0-5c2 0 4 5 4 5M16 8a2.5 2.5 0 0 0 0-5c-2 0-4 5-4 5"/>'),
  bell:g('<path d="M6 16V11a6 6 0 0 1 12 0v5l1.5 2h-15Z"/><path d="M10 20.5a2 2 0 0 0 4 0"/>'),
  theme:g('<circle cx="12" cy="12" r="9"/><path d="M12 3a9 9 0 0 1 0 18Z" fill="currentColor"/>'),
  lock:g('<rect x="5" y="10" width="14" height="10" rx="2"/><path d="M8 10V7a4 4 0 0 1 8 0v3"/>'),
  info:g('<circle cx="12" cy="12" r="9"/><path d="M12 11v5.5"/><circle cx="12" cy="7.8" r=".7" fill="currentColor"/>'),
  exit:g('<path d="M14 4h5v16h-5M10 8l-4 4 4 4M6 12h9"/>'),
  speaker:g('<path d="M3.5 9h4l5-4.5v15l-5-4.5h-4Z"/><path d="M16 8.5a5 5 0 0 1 0 7M18.5 6a8.5 8.5 0 0 1 0 12"/>'),
  moon:'<svg viewBox="0 0 24 24" width="24"><path d="M15.5 3.5A8.5 8.5 0 1 0 20.5 15 7 7 0 0 1 15.5 3.5Z" fill="#fff"/></svg>',
  mic:g('<rect x="9" y="3" width="6" height="11" rx="3"/><path d="M5.5 11a6.5 6.5 0 0 0 13 0M12 17.5V21"/>'),
  share:g('<path d="M12 3v12M8 7l4-4 4 4"/><path d="M6 11v9h12v-9"/>'),
  book:g('<path d="M4 5.5C6 4.5 9 4.5 12 6c3-1.5 6-1.5 8-.5V19c-2-1-5-1-8 .5-3-1.5-6-1.5-8-.5Z"/><path d="M12 6v13.5"/>')
};

/* ============================================================
   锁屏
   ============================================================ */
function renderLock(){
  $('#lkc').innerHTML = `<div class="lk-date">${fmtLockDate()}</div><div class="lk-time" id="lkt">${clock12()}</div>
  <div class="lk-notes">${LOCK_NOTES.map(n=>`<div class="ncard"><div class="ni">T</div><div class="nt"><div class="nh"><span>${esc(n.title)}</span><small>${n.time}</small></div><div class="nb">${esc(n.body)}</div></div></div>`).join('')}</div>
  <div class="lk-hint">${t('swipeUp')}</div>`;
}
function goPin(){
  view='pin'; pincode=''; $('#wall').classList.add('dim');
  const lkc=$('#lkc');
  lkc.style.pointerEvents='none';
  lkc.getAnimations().forEach(a=>a.cancel());
  lkc.animate([{opacity:1,transform:'none'},{opacity:0,transform:'translateY(-120px)'}],
    {duration:380,easing:'cubic-bezier(.3,.7,.2,1)',fill:'forwards'});
  PIN.style.display='flex'; renderPin();
  PIN.getAnimations().forEach(a=>a.cancel());
  PIN.animate([{opacity:0,transform:'translateY(40px)'},{opacity:1,transform:'none'}],
    {duration:420,easing:'cubic-bezier(.2,.9,.25,1)'});
}
const PL=['','ABC','DEF','GHI','JKL','MNO','PQRS','TUV','WXYZ'];
function renderPin(){
  PIN.innerHTML = `<div class="pt">${t('enterPass')}</div><div class="pdots" id="pdots">${[0,1,2,3].map(i=>`<i class="${i<pincode.length?'on':''}"></i>`).join('')}</div>
  <div class="pkeys">${[1,2,3,4,5,6,7,8,9].map(n=>`<button class="pk" onclick="pinPress('${n}',this)"><b>${n}</b><small>${PL[n-1]}</small></button>`).join('')}<span></span><button class="pk" onclick="pinPress('0',this)"><b>0</b><small></small></button><span></span></div>
  <div class="pbot"><button>${t('emergency')}</button><button id="pcancel" onclick="pinCancelOrDel()">${pincode?t('delete'):t('cancel')}</button></div>`;
}
function pinDots(){ $('#pdots').innerHTML=[0,1,2,3].map(i=>`<i class="${i<pincode.length?'on':''}"></i>`).join(''); $('#pcancel').textContent=pincode?t('delete'):t('cancel'); }
function pinPress(n,el){
  if(pincode.length>=4)return; el.classList.add('dn'); setTimeout(()=>el.classList.remove('dn'),90); vib(8); pincode+=n; pinDots();
  if(pincode.length===4){
    if(pincode===CONFIG.passcode){ setTimeout(unlock,140); }
    else { setTimeout(()=>{ const d=$('#pdots'); d.classList.remove('shake'); void d.offsetWidth; d.classList.add('shake'); vib([60,40,60]); setTimeout(()=>{pincode='';pinDots();},420); },120); }
  }
}
function pinCancelOrDel(){ if(pincode){ pincode=pincode.slice(0,-1); pinDots(); return; } pinCancel(); }
function pinCancel(){
  view='lock';
  PIN.getAnimations().forEach(a=>a.cancel());
  PIN.animate([{opacity:1},{opacity:0,transform:'translateY(30px)'}],{duration:300}).onfinish=()=>{ PIN.style.display='none'; };
  const lkc=$('#lkc');
  lkc.getAnimations().forEach(a=>a.cancel());
  lkc.style.pointerEvents='';
  lkc.animate([{opacity:0,transform:'translateY(-120px)'},{opacity:1,transform:'none'}],{duration:420,easing:'cubic-bezier(.2,.9,.25,1)'});
  $('#wall').classList.remove('dim');
}
function unlock(){
  view='home'; $('#wall').classList.remove('dim');
  const lkc=$('#lkc'); lkc.getAnimations().forEach(a=>a.cancel());
  PIN.getAnimations().forEach(a=>a.cancel());
  LOCK.animate([{opacity:1},{opacity:0}],{duration:300,fill:'forwards'}).onfinish=()=>{
    LOCK.style.visibility='hidden';
    PIN.style.display='none';
    lkc.style.pointerEvents='';
  };
  renderHome(); HOME.style.visibility='visible';
  HOME.animate([{transform:'scale(1.18)',opacity:0},{transform:'none',opacity:1}],{duration:560,easing:'cubic-bezier(.2,.9,.22,1)'});
  [...HOME.querySelectorAll('.app,.widget')].forEach((el,i)=>el.animate([{transform:'scale(.7)',opacity:0},{transform:'none',opacity:1}],{duration:520,delay:30+i*14,easing:'cubic-bezier(.2,1.1,.3,1)',fill:'backwards'}));
  setStatus(true);
}

/* ============================================================
   主屏
   ============================================================ */
function appBtn(id){
  const icon = (typeof APP_ICONS !== 'undefined' && APP_ICONS[id]) ? APP_ICONS[id]() : '<div style="width:100%;height:100%;background:#888"></div>';
  const name = (typeof APP_NAMES !== 'undefined' && APP_NAMES[id]) || id;
  return `<button class="app" onclick="openApp('${id}',this.firstElementChild)">
    <div class="icon"><div class="ic">${icon}</div></div>
    <span class="lbl">${name}</span>
  </button>`;
}
function renderHome(){
  const d=new Date();
  HOME.innerHTML = `<div class="hgrid">
    <button class="widget wcal"><div class="wd">${wdLong(d.getFullYear(),d.getMonth()+1,d.getDate())}</div><div class="wn">${d.getDate()}</div></button>
    <button class="widget wwx"><div class="c">${t('seoul')} ➚</div><div class="tp">18°</div><span style="position:absolute;top:14px;right:14px">${G.sun}</span><div class="ds">${t('mostlySunny')}<small>${t('hiLo')}</small></div></button>
    ${HOME_APPS.map(appBtn).join('')}
  </div>
  <div class="dock">${DOCK_APPS.map(appBtn).join('')}</div>`;
}

/* ============================================================
   页面切换
   ============================================================ */
const PARENT = { chatRoom:'kakao', friends:'kakao', more:'kakao', search:'kakao', dial:'phone', smsRoom:'messages', igEdit: 'instagram', igHome: 'instagram' };
function viewDark(){ if(['lock','pin','home'].includes(view))return true; const p=APP.lastElementChild; return !!(p&&p.dataset.dark); }
function wireScroll(pg){ const sc=pg.querySelector('.scroll'); if(sc)sc.addEventListener('scroll',()=>pg.classList.toggle('scrolled',sc.scrollTop>38),{passive:true}); }
function show(id,anim='swap'){
  const old=[...APP.children];
  view=id; const v=VIEWS[id](); const pg=document.createElement('div'); pg.className='pg '+(v.cls||''); pg.innerHTML=v.html;
  if(anim==='pop')APP.insertBefore(pg,APP.firstChild); else APP.appendChild(pg);
  setStatus(false); wireScroll(pg);
  const done=()=>old.forEach(o=>o.remove());
  if(anim==='push'){ pg.classList.add('pushed'); pg.animate([{transform:'translateX(100%)'},{transform:'none'}],{duration:460,easing:'cubic-bezier(.32,.72,0,1)'}); old.forEach(o=>o.animate([{transform:'none'},{transform:'translateX(-28%)'}],{duration:460})); setTimeout(done,460); }
  else if(anim==='pop'){ pg.animate([{transform:'translateX(-28%)'},{transform:'none'}],{duration:460}); old.forEach(o=>{ o.classList.add('pushed'); o.animate([{transform:'none'},{transform:'translateX(100%)'}],{duration:460,fill:'forwards'}); }); setTimeout(done,460); }
  else done();
  v.init&&v.init(pg); return pg;
}
function openApp(id,el){
  if(view!=='home')return;
  lastRect=el?relRect(el):null; APP.innerHTML=''; show(id,'none');
  APP.style.visibility='visible'; APP.getAnimations().forEach(a=>a.cancel());
  const s=lastRect||{x:166,y:396,w:60,h:60};
  APP.animate([{transform:`translate(${s.x+s.w/2-SCREEN.clientWidth/2}px,${s.y+s.h/2-SCREEN.clientHeight/2}px) scale(${s.w/SCREEN.clientWidth})`,opacity:.3},{transform:'none',opacity:1}],{duration:540,easing:'cubic-bezier(.2,.9,.22,1)'});
  HOME.animate([{transform:'none',opacity:1},{transform:'scale(1.1)',opacity:0}],{duration:400,easing:'ease-in'}).onfinish=()=>{ if(view!=='home')HOME.style.visibility='hidden'; };
}
function closeApp(){
  if(['home','lock','pin'].includes(view))return;
  view='home'; renderHome(); HOME.style.visibility='visible'; setStatus(true);
  APP.animate([{transform:'none',opacity:1},{transform:'scale(.8)',opacity:0}],{duration:460,easing:'cubic-bezier(.3,.75,.2,1)',fill:'forwards'}).onfinish=()=>{ APP.style.visibility='hidden'; APP.innerHTML=''; };
  HOME.animate([{transform:'scale(1.1)',opacity:0},{transform:'none',opacity:1}],{duration:460,easing:'cubic-bezier(.2,.9,.22,1)'});
}
function push(id){ show(id,'push'); }
function back(){ closeKbd(); if(PARENT[view])show(PARENT[view],'pop'); else closeApp(); }
function setStatus(dark){
  $('#sb').classList.toggle('light',!!dark);
  $('#hb').classList.toggle('light',!!dark);
  $('#sb').classList.toggle('crumb',!['lock','pin','home'].includes(view));
}

/* ============================================================
   页面内 iPhone 键盘
   ============================================================ */
let pendingText = '';
let kbdMode = 'abc';
let pinyinBuf = '';

const LETTER_ROWS = [
  ['q','w','e','r','t','y','u','i','o','p'],
  ['a','s','d','f','g','h','j','k','l'],
  ['z','x','c','v','b','n','m']
];
const SYM_ROWS = [
  ['1','2','3','4','5','6','7','8','9','0'],
  ['-','/',':',';','(',')','¥','&','@','"'],
  ['.',',','?','!',"'",'#','%','*','+','=']
];
const EMOJIS = ['😀','😂','🥰','😍','😊','😭','😡','👍','👏','🙏','❤️','🎉','🔥','✨','🌙','☀️','🍚','☕','🎵','📷','💬','✅','❌','⭐','🌈','🍰','🍜','🎂','💐','🐱','🐶','🌸','🍀','💤','🎁','📱','💡','🧡','💛','💚','💙','💜','🖤','🤍','🤎','😴','🤔','😎','🥳','😇'];

const PINYIN_MAP = {
  'ni':'你','hao':'好','wo':'我','men':'们','ta':'他','shi':'是','de':'的','le':'了','ma':'吗','ne':'呢',
  'zaijian':'再见','xiexie':'谢谢','duibuqi':'对不起','meiguanxi':'没关系','zao':'早','wanan':'晚安',
  'chifan':'吃饭','he':'喝','shui':'水','kafei':'咖啡','mao':'猫','gou':'狗','tianqi':'天气','jintian':'今天',
  'mingtian':'明天','zuotian':'昨天','xingqi':'星期','shijian':'时间','pengyou':'朋友','jia':'家','xuexiao':'学校',
  'gongzuo':'工作','xiuxi':'休息','shengri':'生日','kuaile':'快乐','xiangni':'想你','ai':'爱','xihuan':'喜欢',
  'zai':'在','jian':'见','hui':'回','qu':'去','lai':'来','chi':'吃','wan':'玩','kan':'看','ting':'听',
  'shuo':'说','xiao':'笑','ku':'哭','lei':'累','mang':'忙','kong':'空','you':'有','mei':'没','hen':'很',
  'tai':'太','zhen':'真','bu':'不','yao':'要','neng':'能','keyi':'可以','zenme':'怎么','shenme':'什么',
  'wei':'为','yin':'因','suoyi':'所以','danshi':'但是','haode':'好的','xing':'行','dui':'对','cuo':'错'
};
function pinyinCandidates(buf){
  const out = [];
  const b = buf.toLowerCase();
  if(PINYIN_MAP[b]) out.push(PINYIN_MAP[b]);
  Object.keys(PINYIN_MAP).forEach(k=>{
    if(k.startsWith(b) && PINYIN_MAP[k]!==out[0]) out.push(PINYIN_MAP[k]);
  });
  return out.slice(0, 8);
}

function setField(txt, cursor){
  const f=$('#fld'); if(!f)return;
  if(!txt && !cursor){ f.className='fld ph'; f.textContent=t('msgInput'); return; }
  f.className='fld';
  f.innerHTML = esc(txt) + (cursor?'<span class="cur"></span>':'');
}
function openKbd(){
  const k=$('#kbd'); if(!k)return;
  if(!k.classList.contains('open')){
    k.innerHTML = kbdHTML();
    k.classList.add('open');
    $('#cin').classList.remove('safe');
  }
  const b=$('#msgs'); if(b) setTimeout(()=>b.scrollTop=b.scrollHeight, 80);
}
function closeKbd(){
  const k=$('#kbd'); if(!k)return;
  k.classList.remove('open');
  $('#cin').classList.add('safe');
  hideCand();
}
function setKbdMode(m){
  kbdMode = m;
  const k=$('#kbd'); if(k && k.classList.contains('open')) k.innerHTML = kbdHTML();
}
function toggleEmoji(){ setKbdMode(kbdMode==='emoji'?'abc':'emoji'); openKbd(); }

function kbdHTML(){
  if(kbdMode==='emoji'){
    return `<div class="kin" onclick="event.stopPropagation()" style="gap:8px">
      <div style="display:grid;grid-template-columns:repeat(7,1fr);gap:6px;padding:6px 10px;flex:1;overflow-y:auto">
        ${EMOJIS.map(e=>`<button class="key" style="max-width:none;height:38px;font-size:24px" onclick="kbdChar('${e}')">${e}</button>`).join('')}
      </div>
      <div class="kr" style="padding:0 10px">
        <button class="key sp" style="max-width:none;flex:1;font-size:15px" onclick="setKbdMode('abc')">ABC</button>
        <button class="key sp" style="max-width:none;flex:1;font-size:15px" onclick="setKbdMode('123')">123</button>
        <button class="key ret" style="max-width:none;flex:1.6" onclick="kbdKey('ret')">换行</button>
      </div>
    </div>`;
  }
  const isNum = kbdMode==='123';
  const R = isNum ? SYM_ROWS : LETTER_ROWS;
  const letters = isNum ? R : R.map(r=>r.map(c=>kbdMode==='ABC'?c.toUpperCase():c));
  const delIcon = `<svg viewBox="0 0 26 20" width="26" fill="none" stroke="#000" stroke-width="1.7" stroke-linejoin="round" stroke-linecap="round"><path d="M8 3h15v14H8l-6-7Z"/><path d="m12 7 6 6M18 7l-6 6"/></svg>`;
  const shiftKey = isNum
    ? `<button class="key sp" style="font-size:14px" onclick="setKbdMode('abc')">ABC</button>`
    : `<button class="key sp" style="font-size:17px" onclick="kbdKey('shift')">${kbdMode==='ABC'?'⇪':'⇧'}</button>`;
  return `<div class="kin" onclick="event.stopPropagation()">
    <div class="kr">${letters[0].map(k=>`<button class="key" data-k="${k}" data-c="${k}" onclick="kbdChar('${k}',this)">${k}</button>`).join('')}</div>
    <div class="kr" style="padding:0 16px">${letters[1].map(k=>`<button class="key" data-k="${k}" data-c="${k}" onclick="kbdChar('${k}',this)">${k}</button>`).join('')}</div>
    <div class="kr">
      ${shiftKey}
      <span style="width:6px"></span>
      ${letters[2].map(k=>`<button class="key" data-k="${k}" data-c="${k}" onclick="kbdChar('${k}',this)">${k}</button>`).join('')}
      <span style="width:6px"></span>
      <button class="key sp" onclick="kbdKey('del')">${delIcon}</button>
    </div>
    <div class="kr">
      <button class="key sp" style="font-size:14px" onclick="setKbdMode('${isNum?'abc':'123'}')">${isNum?'ABC':'123'}</button>
      <button class="key sp" style="font-size:20px" onclick="setKbdMode('emoji')">🙂</button>
      <button class="key wide" onclick="kbdKey('space')">空格</button>
      <button class="key ret" onclick="kbdKey('ret')">换行</button>
    </div>
    <div class="kbot">
      <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c2.5 2.8 3.5 5.8 3.5 9s-1 6.2-3.5 9c-2.5-2.8-3.5-5.8-3.5-9s1-6.2 3.5-9Z"/></svg>
      <svg viewBox="0 0 24 24"><rect x="9" y="3" width="6" height="11" rx="3"/><path d="M5.5 11a6.5 6.5 0 0 0 13 0M12 17.5V21"/></svg>
    </div>
  </div>`;
}

function kbdChar(ch, el){
  if(el){ el.classList.add('dn'); setTimeout(()=>el.classList.remove('dn'),90); }
  vib(5);
  pendingText += ch;
  setField(pendingText, true);
  $('#snd').classList.add('on');
  if(kbdMode!=='123' && /^[a-zA-Z]+$/.test(pendingText.split(/\s/).pop())){
    pinyinBuf = pendingText.split(/\s/).pop().toLowerCase();
    showCand();
  } else hideCand();
}
function kbdKey(k){
  vib(5);
  if(k==='space'){ pendingText += ' '; hideCand(); }
  else if(k==='del'){ pendingText = pendingText.slice(0,-1); pinyinBuf = pinyinBuf.slice(0,-1); if(pinyinBuf) showCand(); else hideCand(); }
  else if(k==='shift'){ setKbdMode(kbdMode==='ABC'?'abc':'ABC'); return; }
  else if(k==='ret'){ pendingText += '\n'; }
  setField(pendingText, pendingText.length>0);
  $('#snd').classList.toggle('on', pendingText.length>0);
}
function showCand(){
  const c=$('#cand'); if(!c)return;
  const list = pinyinCandidates(pinyinBuf);
  if(!list.length){ hideCand(); return; }
  c.style.display='flex';
  c.innerHTML = list.map(w=>`<button onclick="pickCand('${esc(w)}')">${esc(w)}</button>`).join('')
    + `<button class="c-close" onclick="hideCand()">收起</button>`;
}
function hideCand(){ const c=$('#cand'); if(c){ c.style.display='none'; c.innerHTML=''; } pinyinBuf=''; }
function pickCand(word){
  const parts = pendingText.split(/\s/);
  parts[parts.length-1] = word;
  pendingText = parts.join(' ');
  hideCand();
  setField(pendingText, true);
  $('#snd').classList.add('on');
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
  setTimeout(()=>{
    hideTyping();
    const a = CHATS[chatId];
    a.push([reply, 'them', nowTime()]);
    refreshChat();
  }, 1000 + Math.random()*800);
}

/* ============================================================
   提示 / 时间 / 手势 / 启动
   ============================================================ */
function toast(msg){
  const el=document.createElement('div');
  el.textContent=msg;
  el.style.cssText='position:absolute;left:50%;bottom:120px;transform:translateX(-50%);background:rgba(0,0,0,.78);color:#fff;font-size:14px;padding:10px 18px;border-radius:20px;z-index:200;white-space:nowrap;animation:pop .25s cubic-bezier(.2,1.4,.4,1)';
  OV.appendChild(el);
  setTimeout(()=>{ el.style.transition='opacity .3s'; el.style.opacity='0'; setTimeout(()=>el.remove(),300); }, 1400);
}

function tick(){ const t0=clock12(); $('#sbt').textContent=t0; const lk=$('#lkt'); if(lk)lk.textContent=t0; }
setInterval(tick,500); tick();

$('#hb').addEventListener('click',()=>{
  if(view==='lock'){ goPin(); return; }
  if(view==='pin'){ return; }
  if(view==='home'){ HOME.animate([{transform:'none'},{transform:'scale(.97)'},{transform:'none'}],250); return; }
  closeApp();
});
$('#sbk').addEventListener('click',e=>{ e.stopPropagation(); if(['lock','pin','home'].includes(view))return; closeApp(); });
document.addEventListener('keydown',e=>{
  if(e.key==='Escape'){
    if(view==='pin'){ pinCancel(); return; }
    if(OV.querySelector('.sheet,.profile')){ closeSheet(); return; }
    if(['lock','home'].includes(view))return;
    back();
  }
});

function fit(){ const ph=$('#phone'); const mob=innerWidth<=540; ph.classList.toggle('mob',mob); SC=mob?1:ph.getBoundingClientRect().width/393; }
addEventListener('resize',fit); fit();
renderLock(); setStatus(true);

/* ============================================================
   实时消息弹窗通知
   ============================================================ */
function showNotification(title, body) {
  // 如果当前正在和这个人聊天，或者正在密码界面，不弹窗
  if (view === 'chatRoom' && chatId === title) return;
  if (view === 'pin') return;

  // 移除旧横幅
  document.querySelectorAll('.banner').forEach(b => b.remove());

  // 创建新横幅
  const b = document.createElement('div');
  b.className = 'banner';
  b.innerHTML = `
    <div class="ni">${esc(title[0])}</div>
    <div class="nt">
      <div class="nh"><span>${esc(title)}</span><small>现在</small></div>
      <div class="nb">${esc(body)}</div>
    </div>
  `;
  
  // 点击横幅直接跳进聊天室
  b.onclick = () => {
    b.classList.remove('show');
    setTimeout(() => b.remove(), 400);
    // 如果没解锁就解锁，如果在应用内就关掉应用，再打开聊天
    if (view === 'lock') {
      // 锁屏状态点击，直接解锁并进入聊天
      unlock();
      setTimeout(() => { openChat(title); }, 600);
    } else {
      if (view !== 'home') closeApp();
      setTimeout(() => { openChat(title); }, 400);
    }
  };

  OV.appendChild(b);

  // 触发滑入动画
  setTimeout(() => b.classList.add('show'), 50);

  // 5秒后自动收起
  let timeout = setTimeout(() => {
    if (b.parentNode) {
      b.classList.remove('show');
      setTimeout(() => b.remove(), 400);
    }
  }, 5000);
}

/* ============================================================
   自动模拟收到新消息
   ============================================================ */
const RANDOM_MSGS = [
  { from: '小红', text: '你在干嘛呢？' },
  { from: '妈妈', text: '记得吃饭了吗？' },
  { from: '小红', text: '晚上别迟到了哦！' },
  { from: '工作群', text: '文件我发群里了，看下。' }
];

setInterval(() => {
  // 如果你在锁屏或者密码界面，也可以弹（由 showNotification 控制）
  const msg = RANDOM_MSGS[Math.floor(Math.random() * RANDOM_MSGS.length)];
  
  // 把消息塞进数据里
  if (CHATS[msg.from]) {
    CHATS[msg.from].push([msg.text, 'them', clock12()]);
  }
  
  // 弹窗
  showNotification(msg.from, msg.text);
  
}, 18000); // 18000毫秒 = 18秒