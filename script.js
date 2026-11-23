/* ============ CONFIG – edit everything here ============ */
const CONFIG={
  bride:"Ananya",groom:"Aarav",   // sample names from your reference – replace
  groomParents:"Mr. Rajesh Sharma & Mrs. Sunita Sharma",brideParents:"Mr. Vikram Mehta & Mrs. Kavita Mehta",
  story:[{cap:"Reaching for you",e:"🤍",bg:["#e9e4ee","#c9bfd6"],img:""},{cap:"First hello",e:"☕",bg:["#f6e0cf","#e8b690"],img:""},{cap:"Written in the stars",e:"✨",bg:["#dfe6f5","#a9b8e0"],img:""},{cap:"Yes, forever",e:"💍",bg:["#fbe0e8","#f2a7bb"],img:""},{cap:"Our beginning",e:"🌸",bg:["#e8f0dc","#b9d19a"],img:""}],  // set img:"photo.jpg" for real photos
  reception:{title:"Grand Vtpl 2027",date:"8, 9 & 10 January 2027",time:"8:00 AM onwards · ",venue:"Valliba Sport, Bhesan Gam, Surat",dress:"WELCOME TO VTPL 2027"},
  weddingDate:"2027-01-08",weddingEndDate:"2027-01-10",weddingTime:"09:00",
  dateDays:"8 · 9 · 10",dayRange:"Friday – Sunday",timeLine:"Three days · One trophy",   // placeholder date/time (YYYY-MM-DD, 24h)
  weddingTimeLabel:"10:30 pm",
  venueName:"Valiba Cricket Ground",
  venueAddress:"Valliba Sport, Surat, Gujarat, India",
  mapsUrl:"https://www.google.com/maps/search/?api=1&query=Valliba+Sport+Surat",   // paste your Google Maps share link here; if empty, a search on the address is used
  musicUrl:"music/weeding1.mp3",
  events:[
    {name:"Ganesh Sthapana",icon:"🪔",when:"TUE · 9 FEB · 8:00 AM",venue:"Haveli Courtyard, Raj Vilas Palace",dress:"Traditional, saffron & cream",sw:["#f6a56b","#fbd3b0"],bg:["#f4975a","#fde0c8"]},
    {name:"Mata Puja",icon:"🙏",when:"TUE · 9 FEB · 6:00 PM",venue:"Haveli Courtyard, Raj Vilas Palace",dress:"Wear red or orange",sw:["#e8453c","#f7b267"],bg:["#e8453c","#f7b267"]},
    {name:"Haldi",icon:"🌼",when:"WED · 10 FEB · 3:00 PM",venue:"Garden Lawns, Raj Vilas Palace",dress:"Wear yellow",sw:["#f6c22b","#ffe27a"],bg:["#f7c948","#fdf0b8"]},
    {name:"Mehendi",icon:"🌿",when:"WED · 10 FEB · 6:00 PM",venue:"Terrace Garden, Raj Vilas Palace",dress:"Wear green",sw:["#9bb56a","#d4e0a8"],bg:["#a5c46a","#e6efc9"]},
    {name:"Sangeet",icon:"🥁",when:"THU · 11 FEB · 7:30 PM",venue:"Darbar Hall, Raj Vilas Palace",dress:"Indo-western, purple & pink",sw:["#c04fd8","#f06fb0"],bg:["#8a2fb5","#f4a0cf"]},
    {name:"Pheras",icon:"🔥",when:"FRI · 12 FEB · 10:30 PM",venue:"Mandap Lawn, Raj Vilas Palace",dress:"Traditional, red & gold",sw:["#8B1538","#D8AD65"],bg:["#b01f48","#f3c6a0"]}
  ],
  eventsOld:[
    {name:"Mehndi",icon:"🌿",when:"[Day] · [Date] · [Time]",venue:"[Venue / Hall]",dress:"[Dress code]",sw:["#9bb56a","#d4e0a8"],bg:["#b7d08a","#e9f0cf"]},
    {name:"Haldi",icon:"🌼",when:"[Day] · [Date] · [Time]",venue:"[Venue / Hall]",dress:"[Dress code]",sw:["#f6c22b","#fde68a"],bg:["#f7c948","#fdf0b8"]},
    {name:"Sangeet",icon:"🥁",when:"THU · 11 FEB · 7:30 PM",venue:"Darbar Hall, Raj Vilas Palace",dress:"Indo-western, purple & pink",sw:["#c04fd8","#f06fb0"],bg:["#8a2fb5","#f4a0cf"]},
    {name:"Wedding",icon:"🔥",when:"[Day] · [Date] · [Time]",venue:"[Venue / Hall]",dress:"[Dress code]",sw:["#8B1538","#D8AD65"],bg:["#b01f48","#f3c6a0"]}
  ]
};
/* ======================================================= */
const $=s=>document.querySelector(s),RM=matchMedia('(prefers-reduced-motion:reduce)').matches;
const D=new Date(CONFIG.weddingDate+"T"+CONFIG.weddingTime+":00");
const dow=D.toLocaleDateString('en-GB',{weekday:'long'}),mon=D.toLocaleDateString('en-GB',{month:'long'});
const long=`${dow}, ${D.getDate()} ${mon} ${D.getFullYear()}`;
$('#bk1').textContent="VTPL 2027";
$('#dow').textContent=CONFIG.dayRange;$('#dnum').textContent=CONFIG.dateDays;$('#dmon').textContent=mon;$('#dyr').textContent=D.getFullYear();
$('#dtime').textContent=CONFIG.timeLine;$('#dven').textContent=CONFIG.venueName;
$('#see').textContent=`See you on ${D.getDate()}–${new Date(CONFIG.weddingEndDate+"T00:00:00").getDate()} ${mon} ${D.getFullYear()}`;
$('#vn').textContent=$('#mv').textContent=CONFIG.venueName;$('#va').textContent=CONFIG.venueAddress;
document.title='VTPL 2027 – Vav Terapanth Premier League';
const toast=m=>{const t=$('#toast');t.textContent=m;t.classList.add('on');clearTimeout(toast.h);toast.h=setTimeout(()=>t.classList.remove('on'),2200)};

/* petals */
if(!RM){const P=$('#petals');for(let i=0;i<14;i++){const e=document.createElement('div');e.className='p';e.style.cssText=`left:${Math.random()*100}%;--dx:${Math.random()*120-60}px;animation-duration:${9+Math.random()*9}s;animation-delay:${-Math.random()*14}s;transform:scale(${.6+Math.random()*.8})`;P.appendChild(e)}}

/* theme */
const th=$('#th'),SUN='<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/></svg>',MOON='<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M21 12.8A9 9 0 1111.2 3a7 7 0 009.8 9.8z"/></svg>';
function setTheme(t){document.documentElement.dataset.theme=t;th.innerHTML=t==='dark'?SUN:MOON;th.setAttribute('aria-label',t==='dark'?'Switch to soft pink theme':'Switch to evening theme')}
setTheme('light');th.onclick=()=>setTheme(document.documentElement.dataset.theme==='dark'?'light':'dark');

/* book */
const scene=$('#scene');let opened=false;
function zoomPage(){const p=scene.querySelector('.inner').getBoundingClientRect(),s0=scene.getBoundingClientRect();
  const cx=p.left+p.width/2,cy=p.top+p.height/2,k=Math.max(innerWidth/p.width,innerHeight/p.height)*1.04;
  scene.style.transformOrigin=`${cx-s0.left}px ${cy-s0.top}px`;
  scene.style.transform=`translate(${innerWidth/2-cx}px,${innerHeight/2-cy}px) scale(${k})`}
function openBook(){if(opened)return;opened=true;$('#intro').classList.add('opening');document.documentElement.style.overflow='hidden';scene.classList.add('pre');
  setTimeout(()=>scene.classList.add('open'),RM?0:300);
  setTimeout(()=>{scene.style.transition='transform 1.8s cubic-bezier(.65,0,.25,1)';zoomPage()},RM?50:2200);
  setTimeout(()=>{$('#intro').classList.add('gone');document.body.classList.add('go')},RM?100:3800);
  setTimeout(()=>{document.body.style.overflow='';document.documentElement.style.overflow='';scrollTo(0,0)},RM?150:4600)}
document.body.style.overflow='hidden';
scene.onclick=openBook;scene.onkeydown=e=>{if(e.key==='Enter'||e.key===' ')openBook()};

/* scroll unroll */
const paper=$('#paper'),bw=$('#bottomWrap'),MAXH=420;let prog=0,drag=false,sy=0,sp=0,moved=0,done=false,raf;
function setP(p){prog=Math.max(0,Math.min(1,p));paper.style.height=(prog*MAXH)+'px';bw.setAttribute('aria-valuenow',Math.round(prog*100));
  document.querySelectorAll('#paper .reveal').forEach(e=>e.classList.toggle('on',prog>=parseFloat(e.dataset.t)));
  $('#hint').style.opacity=prog>.05?0:1;}
function settle(t){if(t===1&&!done){done=true;setTimeout(()=>{if(prog>.99)celebrate()},500)}else if(t===0)done=false}
function springTo(t){cancelAnimationFrame(raf);let v=0;const step=()=>{const f=(t-prog)*.12;v=(v+f)*.78;setP(prog+v);if(Math.abs(t-prog)>.002||Math.abs(v)>.002)raf=requestAnimationFrame(step);else{setP(t);settle(t)}};if(RM){setP(t);settle(t)}else step()}
/* celebration: starts only after the scroll has fully settled open; gold confetti, pink petals and sparkles fall from the top for ~3s */
function celebrate(){if(RM)return;const L=document.createElement('div');L.style.cssText='position:fixed;inset:0;pointer-events:none;z-index:90;overflow:hidden';document.body.appendChild(L);const R=Math.random,H=innerHeight;
  for(let i=0;i<130;i++){const e=document.createElement('div'),t=R();let s;
    if(t<.4){const w=5+R()*5;e.style.cssText=`width:${w}px;height:${w*1.8}px;background:linear-gradient(135deg,#f6dc9a,#D8AD65 60%,#b88a3c);border-radius:1px`}
    else if(t<.75){const w=9+R()*9;e.style.cssText=`width:${w}px;height:${w*1.25}px;background:radial-gradient(circle at 30% 30%,#fff3f6,#f48fb1);border-radius:70% 0 70% 0`}
    else{s=8+R()*9;e.innerHTML=`<svg viewBox="-10 -10 20 20" width="${s}" height="${s}"><path d="M0-9C1-3 3-1 9 0C3 1 1 3 0 9C-1 3-3 1-9 0C-3-1-1-3 0-9Z" fill="${R()<.6?'#e9bd6a':'#f06292'}"/></svg>`}
    e.style.position='absolute';e.style.left=R()*100+'%';e.style.top='-30px';e.style.willChange='transform,opacity';L.appendChild(e);
    const sw=(R()-.5)*120,dur=2000+R()*1000;
    e.animate([{transform:'translate(0,0) rotate(0deg)',opacity:1},{transform:`translate(${sw}px,${H*.5}px) rotate(${(R()-.5)*540}deg)`,opacity:1,offset:.55},{transform:`translate(${-sw*.4}px,${H+40}px) rotate(${(R()-.5)*900}deg)`,opacity:.85}],{duration:dur,delay:R()*700,easing:'cubic-bezier(.3,.1,.6,1)',fill:'both'})}
  setTimeout(()=>L.remove(),4200)}
function celebrateOld(){if(RM)return;const L=document.createElement('div');L.style.cssText='position:fixed;inset:0;pointer-events:none;z-index:90;overflow:hidden';document.body.appendChild(L);
  const fl=(f,s)=>`<svg viewBox="-12 -12 24 24" width="${s}" height="${s}"><g fill="${f?'#ff6fa0':'none'}" stroke="#f06292" stroke-width="${f?0:1.2}">${[0,72,144,216,288].map(a=>`<circle cx="0" cy="-6.5" r="5" transform="rotate(${a})"/>`).join('')}</g><circle r="2.4" fill="${f?'#ffe08a':'#f06292'}"/></svg>`;
  const sp=(c,s)=>`<svg viewBox="-10 -10 20 20" width="${s}" height="${s}"><path d="M0-9C1-3 3-1 9 0C3 1 1 3 0 9C-1 3-3 1-9 0C-3-1-1-3 0-9Z" fill="${c}"/></svg>`;
  const R=Math.random;
  for(let i=0;i<110;i++){const e=document.createElement('div'),t=R(),s=t<.4?8+R()*16:t<.65?10+R()*14:6+R()*9;
    e.innerHTML=t<.4?fl(true,s):t<.65?fl(false,s):sp(R()<.6?'#e9bd6a':'#f06292',s);
    const side=R()<.4,x=side?(R()<.5?R()*28:72+R()*28):R()*100;
    e.style.cssText=`position:absolute;left:${x}%;top:${R()*72}%;opacity:0;will-change:transform,opacity`;L.appendChild(e);
    e.animate([{opacity:0,transform:'translate(0,0) rotate(0deg) scale(.3)'},{opacity:1,offset:.18},{opacity:.9,offset:.7},{opacity:0,transform:`translate(${(R()-.5)*90}px,${70+R()*150}px) rotate(${(R()-.5)*300}deg) scale(1)`}],{duration:3200+R()*2800,delay:R()*3200,easing:'ease-out',fill:'both'})}
  setTimeout(()=>L.remove(),9500)}
bw.addEventListener('pointerdown',e=>{drag=true;moved=0;sy=e.clientY;sp=prog;cancelAnimationFrame(raf);bw.setPointerCapture(e.pointerId)});
bw.addEventListener('pointermove',e=>{if(!drag)return;const dy=e.clientY-sy;moved=Math.max(moved,Math.abs(dy));setP(sp+dy/MAXH)});
const end=()=>{if(!drag)return;drag=false;if(moved<6)springTo(prog>.5?0:1);else springTo(prog>.45?1:0);if(prog<.5)done=false};
bw.addEventListener('pointerup',end);bw.addEventListener('pointercancel',end);
bw.addEventListener('keydown',e=>{if(e.key==='ArrowDown'||e.key==='Enter'||e.key===' '){e.preventDefault();springTo(Math.min(1,prog+.34))}if(e.key==='ArrowUp')springTo(Math.max(0,prog-.34))});
setP(0);

/* countdown */
const pad=n=>String(n).padStart(2,'0');
function tick(){let s=Math.max(0,Math.floor((D-Date.now())/1000));const d=Math.floor(s/86400),h=Math.floor(s%86400/3600),m=Math.floor(s%3600/60),x=s%60;
  $('#cd').innerHTML=[[d,'days'],[pad(h),'hrs'],[pad(m),'min'],[pad(x),'sec']].map(a=>`<span><b>${a[0]}</b><small>${a[1].toUpperCase()}</small></span>`).join('<span style="opacity:.4">·</span>')}
tick();setInterval(tick,1000);

/* calendar: Google Calendar link with real date/time/venue */
$('#cal').onclick=()=>{const f=d=>d.toISOString().replace(/[-:]|\.\d{3}/g,'');const end=new Date(CONFIG.weddingEndDate+"T18:00:00");
  const u='https://calendar.google.com/calendar/render?action=TEMPLATE&text='+encodeURIComponent('VTPL 2027 – Vav Terapanth Premier League')+'&dates='+f(D)+'/'+f(end)+'&location='+encodeURIComponent(CONFIG.venueName+', '+CONFIG.venueAddress)+'&details='+encodeURIComponent('Cricket tournament');
  window.open(u,'_blank','noopener')};

/* location */
const openMaps = () => {
  const destination = "Valliba Sport, Surat, Gujarat, India";

  const url =
    "https://www.google.com/maps/dir/?api=1" +
    "&destination=21.2199113,72.7672865" +
    "&travelmode=driving";

  window.open(url, "_blank", "noopener");
};

$('#dir').onclick = openMaps;
$('#dir').onclick=openMaps;
$('#cp').onclick=async()=>{try{await navigator.clipboard.writeText(CONFIG.venueAddress)}catch(e){const t=document.createElement('textarea');t.value=CONFIG.venueAddress;document.body.appendChild(t);t.select();try{document.execCommand('copy')}catch(_){}t.remove()}
  $('#cp').textContent='✓ Copied';toast('Address copied');setTimeout(()=>$('#cp').textContent='Copy address',2000)};

/* hero + reception text */

const R=CONFIG.reception;$('#rt').textContent=R.title;$('#rd').textContent=R.date;$('#rtm').textContent=R.time;$('#rv').textContent=R.venue;$('#rdc').textContent=R.dress;
/* generic carousel: swipe/drag + arrows + auto every 3s */
function makeCar(vp,tr,dotsEl,ms){const cs=[...tr.children];let i=0,dx=0,dn=false,sx=0,last=0;dotsEl.innerHTML=cs.map(()=>'<i></i>').join('');
  const lay=a=>{const w=cs[0].offsetWidth,pad=(vp.clientWidth-w)/2;tr.style.paddingLeft=tr.style.paddingRight=pad+'px';tr.style.transition=a?'transform .55s cubic-bezier(.2,1.2,.4,1)':'none';tr.style.transform=`translateX(${-i*(w+14)+dx}px)`;cs.forEach((c,k)=>c.classList.toggle('dim',k!==i));[...dotsEl.children].forEach((d,k)=>d.className=k===i?'a':'')};
  const go=k=>{i=Math.max(0,Math.min(cs.length-1,k));dx=0;lay(true)};
  vp.addEventListener('pointerdown',e=>{dn=true;sx=e.clientX;dx=0;last=Date.now()});
  addEventListener('pointermove',e=>{if(!dn)return;dx=e.clientX-sx;last=Date.now();lay(false)});
  addEventListener('pointerup',()=>{if(!dn)return;dn=false;last=Date.now();const w=cs[0].offsetWidth/4;go(dx<-w?i+1:dx>w?i-1:i)});
  addEventListener('resize',()=>lay(false));lay(false);
  setInterval(()=>{if(!dn&&!document.hidden&&Date.now()-last>4000){i=(i+1)%cs.length;dx=0;lay(true)}},ms);}
const tr2=$('#tr2');
document.querySelectorAll('#storyItems .story-item').forEach(s=>{
  const c=document.createElement('div');c.className='sc';
  const photo=s.dataset.image.trim();
  c.style.backgroundImage=photo?`url("${photo.replaceAll('"','%22')}")`:`linear-gradient(160deg,${s.dataset.color1||'#e9e4ee'},${s.dataset.color2||'#c9bfd6'})`;
  if(!photo){const emoji=document.createElement('span');emoji.textContent=s.dataset.emoji||'✨';c.appendChild(emoji)}
  const cap=document.createElement('div');cap.className='cap';cap.textContent=s.dataset.caption||'Our Story';c.appendChild(cap);tr2.appendChild(c);
});
makeCar($('#vp2'),tr2,$('#dots2'),3000);
/* Premium 3D sponsor shuffle: four editable HTML cards, touch swipe, arrows, auto */
(function () {
  const viewport = document.querySelector('#sponsorViewport');
  const track = document.querySelector('#sponsorTrack');
  const dots = document.querySelector('#sponsorDots');

  if (!viewport || !track || !dots) return;

  const cards = [...track.children];
  if (!cards.length) return;

  let current = 0;
  let startX = 0;
  let startY = 0;
  let dragging = false;
  let lastAction = Date.now();

  viewport.style.touchAction = 'pan-y';

  dots.innerHTML = cards.map(() => '<i></i>').join('');

  function render() {
    const w = viewport.clientWidth;
    const offset = Math.min(w * 0.315, 235);

    cards.forEach((card, i) => {
      let distance = (i - current + cards.length) % cards.length;

      if (distance > Math.floor(cards.length / 2)) {
        distance -= cards.length;
      }

      if (cards.length % 2 === 0 &&
          distance === cards.length / 2) {
        distance = -distance;
      }

      const abs = Math.abs(distance);
      const x = distance === 0 ? 0 :
        Math.sign(distance) * offset *
        (abs === 1 ? 1 : 1.42);

      const scale = abs === 0 ? 1 : abs === 1 ? 0.78 : 0.62;

      card.style.transform =
        `translateX(calc(-50% + ${x}px)) scale(${scale}) rotateY(${distance === 0 ? 0 : distance < 0 ? 13 : -13}deg)`;

      card.style.zIndex = String(10 - abs);
      card.style.opacity = abs > 1 ? '.24' : abs === 1 ? '.72' : '1';
      card.classList.toggle('is-active', abs === 0);
      card.classList.toggle('dim', abs !== 0);
      card.setAttribute('aria-hidden', abs === 0 ? 'false' : 'true');
    });

    [...dots.children].forEach((dot, i) => {
      dot.className = i === current ? 'a' : '';
    });
  }

  function go(index) {
    current = (index + cards.length) % cards.length;
    lastAction = Date.now();
    render();
  }

  document.querySelector('#sponsorPrev')
    ?.addEventListener('click', () => go(current - 1));

  document.querySelector('#sponsorNext')
    ?.addEventListener('click', () => go(current + 1));

  cards.forEach((card, i) => {
    card.addEventListener('click', () => {
      if (!dragging && i !== current) go(i);
    });
  });

  viewport.addEventListener('pointerdown', e => {
    if (e.pointerType === 'mouse' && e.button !== 0) return;

    dragging = true;
    startX = e.clientX;
    startY = e.clientY;
    lastAction = Date.now();
  });

  viewport.addEventListener('pointerup', e => {
    if (!dragging) return;

    dragging = false;

    const dx = e.clientX - startX;
    const dy = e.clientY - startY;

    if (Math.abs(dx) > 35 &&
        Math.abs(dx) > Math.abs(dy)) {
      go(current + (dx < 0 ? 1 : -1));
    }
  });

  viewport.addEventListener('pointercancel', () => {
    dragging = false;
  });

  window.addEventListener('resize', render);

  render();

  setInterval(() => {
    if (!dragging &&
        !document.hidden &&
        Date.now() - lastAction >= 3500) {
      go(current + 1);
    }
  }, 1500);
})();
/* music: real file if available, soft synthesized pad as fallback */
const mu=$('#mu'),au=new Audio(CONFIG.musicUrl);au.loop=true;au.preload='none';let playing=false,ctx,pad_;
function synth(){ctx=ctx||new (window.AudioContext||window.webkitAudioContext)();const g=ctx.createGain();g.gain.value=0;g.connect(ctx.destination);
  [261.63,329.63,392,523.25].forEach((f,i)=>{const o=ctx.createOscillator();o.type='sine';o.frequency.value=f;const l=ctx.createGain();l.gain.value=.05;o.connect(l);l.connect(g);o.start()});
  g.gain.linearRampToValueAtTime(.6,ctx.currentTime+2);pad_=g}
function setUI(p){playing=p;mu.classList.toggle('playing',p);mu.setAttribute('aria-pressed',p);mu.setAttribute('aria-label',p?'Pause music':'Play music')}
mu.onclick=async()=>{
  if(playing){au.pause();if(pad_)pad_.gain.value=0;setUI(false);return}
  try{await au.play();setUI(true)}catch(e){try{if(!pad_)synth();else{ctx.resume();pad_.gain.value=.6}setUI(true);toast('Add /music/wedding.mp3 for your own song')}catch(_){toast('Music unavailable')}}};

/* VTPL 2027 - Map Curtain Reveal */
(function () {
  const curtain = document.querySelector('#mapCurtain');
  const openLayer = document.querySelector('#mapOpenLayer');

  if (!curtain || !openLayer) return;

  const mapsURL =
    'https://www.google.com/maps/search/?api=1&query=' +
    encodeURIComponent('Valliba Sport, Surat, Gujarat, India');

  let revealed = false;
  let lastTap = 0;

  curtain.addEventListener('click', () => {
    if (revealed) return;

    revealed = true;
    curtain.classList.add('open');

    setTimeout(() => {
      openLayer.classList.add('ready');
    }, 1300);
  });

  openLayer.addEventListener('click', () => {
    const now = Date.now();

    if (now - lastTap < 450) {
      window.open(mapsURL, '_blank', 'noopener');
      lastTap = 0;
    } else {
      lastTap = now;
    }
  });

  openLayer.addEventListener('dblclick', () => {
    window.open(mapsURL, '_blank', 'noopener');
  });
})();
