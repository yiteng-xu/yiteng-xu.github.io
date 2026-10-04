'use strict';
const gate=document.querySelector('#gate'),content=document.querySelector('#content'),status=document.querySelector('#status'),submit=document.querySelector('#submit');
const bytes=s=>Uint8Array.from(atob(s),c=>c.charCodeAt(0));const prefix='note-check-';
function lock(){document.title='手记';content.replaceChildren();content.hidden=true;gate.hidden=false;document.querySelector('#pass').value='';status.textContent='';for(let i=sessionStorage.length-1;i>=0;i--){const k=sessionStorage.key(i);if(k.startsWith(prefix))sessionStorage.removeItem(k)}window.scrollTo(0,0)}
document.querySelector('#unlock').addEventListener('submit',async e=>{
e.preventDefault();submit.disabled=true;status.textContent='正在打开…';
try{
if(!crypto.subtle)throw Error('secure');
const r=await fetch('./sealed.json',{cache:'no-store'});if(!r.ok)throw Error('network');const sealed=await r.json();
const material=await crypto.subtle.importKey('raw',new TextEncoder().encode(document.querySelector('#pass').value),'PBKDF2',false,['deriveKey']);
const key=await crypto.subtle.deriveKey({name:'PBKDF2',hash:'SHA-256',salt:bytes(sealed.salt),iterations:sealed.iterations},material,{name:'AES-GCM',length:256},false,['decrypt']);
const plain=await crypto.subtle.decrypt({name:'AES-GCM',iv:bytes(sealed.iv)},key,bytes(sealed.ciphertext));
const note=JSON.parse(new TextDecoder().decode(plain));content.innerHTML=note.html;content.hidden=false;gate.hidden=true;document.title=note.title;document.querySelector('#pass').value='';status.textContent='';bind();window.scrollTo(0,0);
}catch(err){status.textContent=err.message==='secure'?'请用 HTTPS 或本地预览打开此页。':err.message==='network'?'读取失败，请检查网络后重试。':'口令不正确，或手记未能读取。请重试。'}finally{submit.disabled=false}
});
function bind(){
document.querySelector('#lock').addEventListener('click',lock);
document.querySelector('#print').addEventListener('click',()=>window.print());
document.querySelectorAll('[data-copy]').forEach(b=>b.addEventListener('click',async()=>{const t=document.getElementById(b.dataset.copy);try{await navigator.clipboard.writeText(t.value);b.textContent='已复制';setTimeout(()=>b.textContent='复制给店家',2200)}catch(e){t.focus();t.select();b.textContent='已选中文案，请手动复制'}}));
const num=id=>Math.max(0,Number(document.getElementById(id).value)||0);
const calc=()=>{const t=document.querySelector('#train-time').value;if(!t)return;const [h,m]=t.split(':').map(Number);const mins=h*60+m-num('ride')-num('early')-num('buffer');const fmt=n=>{const v=((n%1440)+1440)%1440;return(n<0?'前一日 ':'当天 ')+String(Math.floor(v/60)).padStart(2,'0')+':'+String(Math.floor(v%60)).padStart(2,'0')};document.querySelector('#departure').textContent='最晚开始退房/叫车准备：'+fmt(mins)+'；车辆最晚出发约 '+fmt(mins+num('buffer'))+'（估算）。'};
['train-time','ride','early','buffer'].forEach(id=>document.getElementById(id).addEventListener('input',calc));calc();
const budget=()=>{const total=num('room')*3+num('meal')*6+num('taxi')*3+num('makeup')+num('photo')+num('ticket')*2+num('extra');document.querySelector('#total').textContent='两人预算预留 ¥'+total.toLocaleString('zh-CN')+'（不含往返铁路）'};
document.querySelectorAll('.budget').forEach(x=>x.addEventListener('input',budget));budget();
document.querySelectorAll('[data-check]').forEach(x=>{x.checked=sessionStorage.getItem(prefix+x.dataset.check)==='1';x.addEventListener('change',()=>sessionStorage.setItem(prefix+x.dataset.check,x.checked?'1':'0'))});
}
