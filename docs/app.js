const boxes=[...document.querySelectorAll('[data-progress]')];
let saved={};try{saved=JSON.parse(localStorage.getItem('physics-reasoning-v2')||'{}')}catch{}
function progress(){if(!boxes.length)return;const n=boxes.filter(x=>x.checked).length;document.querySelector('#progress-label').textContent=`${n} / ${boxes.length}`;document.querySelector('#progress').value=n;}
boxes.forEach(x=>{x.checked=!!saved[x.dataset.progress];x.addEventListener('change',()=>{saved[x.dataset.progress]=x.checked;try{localStorage.setItem('physics-reasoning-v2',JSON.stringify(saved))}catch{}progress()})});progress();
document.querySelectorAll('.check-answer').forEach(b=>b.addEventListener('click',()=>{const f=b.closest('fieldset'),input=f.querySelector('input:checked'),out=f.querySelector('.feedback');if(!input){out.textContent='请先选择一个选项。';out.className='feedback error';return}const correct=input.value===f.dataset.answer;out.textContent=correct?'回答正确。再核对选式理由和适用条件。':'还不对。可以重新作答，再展开解析核对思路。';out.className=`feedback ${correct?'correct':'error'}`;}));
const solutions=[...document.querySelectorAll('.solution')];const expand=document.querySelector('#expand-all');
expand?.addEventListener('click',()=>{const open=!solutions.every(d=>d.open);solutions.forEach(d=>d.open=open);expand.textContent=open?'收起全部解析':'展开全部解析'});
let printState=[];window.addEventListener('beforeprint',()=>{printState=solutions.map(d=>d.open);solutions.forEach(d=>d.open=true)});window.addEventListener('afterprint',()=>solutions.forEach((d,i)=>d.open=printState[i]??false));document.querySelector('#print')?.addEventListener('click',()=>window.print());
const search=document.querySelector('#search'),cards=[...document.querySelectorAll('.searchable')];
function filter(){const value=search?.value.trim().toLowerCase()||'';let count=0;cards.forEach(el=>{const matched=!value||el.dataset.search.toLowerCase().includes(value);el.hidden=!matched;if(matched)count++});if(search)document.querySelector('#search-status').textContent=value?`找到 ${count} 项`:'';}
search?.addEventListener('input',filter);
document.querySelectorAll('a[href^="#"]').forEach(a=>a.addEventListener('click',()=>{if(search?.value){search.value='';filter()}const mobile=a.closest('.mobile-outline');if(mobile)mobile.open=false}));
const outline=[...document.querySelectorAll('.sidebar-outline a')];
const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting)outline.forEach(a=>a.classList.toggle('reading',a.hash===`#${e.target.id}`))}),{rootMargin:'-5% 0px -75% 0px'});
document.querySelectorAll('.topic,#chapter-map,#practice,#coverage').forEach(s=>observer.observe(s));
if(!location.pathname.match(/chapter\d+\.html$/)){const old=location.hash.match(/^#(chapter|practice)-(9|10|11)$/);if(old)location.replace(`chapter${old[2]}.html${old[1]==='practice'?'#practice':''}`);}
