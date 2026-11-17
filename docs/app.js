const boxes=[...document.querySelectorAll('[data-progress]')];
let saved={};try{saved=JSON.parse(localStorage.getItem('physics-review-v1')||'{}')}catch{}
function progress(){const n=boxes.filter(x=>x.checked).length;document.querySelector('#progress-label').textContent=`${n} / ${boxes.length}`;const p=document.querySelector('#progress');p.max=boxes.length;p.value=n;}
boxes.forEach(x=>{x.checked=!!saved[x.dataset.progress];x.addEventListener('change',()=>{saved[x.dataset.progress]=x.checked;try{localStorage.setItem('physics-review-v1',JSON.stringify(saved))}catch{}progress()})});progress();
document.querySelectorAll('.check-answer').forEach(b=>b.addEventListener('click',()=>{const f=b.closest('fieldset'),input=f.querySelector('input:checked'),out=f.querySelector('.feedback');if(!input){out.textContent='请先选择一个选项。';out.className='feedback error';return}const correct=input.value===f.dataset.answer;out.textContent=correct?'回答正确。展开解析核对思路。':'还不对。可重新作答，或展开解析查看原因。';out.className=`feedback ${correct?'correct':'error'}`;}));
document.querySelectorAll('.option input').forEach(i=>i.addEventListener('change',()=>i.closest('fieldset').querySelectorAll('.option').forEach(l=>l.classList.toggle('selected',l.querySelector('input').checked))));
const solutions=[...document.querySelectorAll('.solution')];const expand=document.querySelector('#expand-all');
expand.addEventListener('click',()=>{const open=!solutions.every(d=>d.open);solutions.forEach(d=>d.open=open);expand.textContent=open?'收起全部解析':'展开全部解析'});
let printState=[];window.addEventListener('beforeprint',()=>{printState=solutions.map(d=>d.open);solutions.forEach(d=>d.open=true)});window.addEventListener('afterprint',()=>{solutions.forEach((d,i)=>d.open=printState[i]??false)});document.querySelector('#print').addEventListener('click',()=>window.print());
const search=document.querySelector('#search');const cards=[...document.querySelectorAll('.searchable')];
function filter(){const value=search.value.trim().toLowerCase();let count=0;cards.forEach(el=>{const matched=!value||el.dataset.search.toLowerCase().includes(value);el.hidden=!matched;if(matched)count++});document.querySelector('#search-status').textContent=value?`找到 ${count} 项`:'';}
search.addEventListener('input',filter);
document.querySelectorAll('a[href^="#"]').forEach(a=>a.addEventListener('click',()=>{if(search.value){search.value='';filter()}}));
const links=[...document.querySelectorAll('.nav-link')];const observer=new IntersectionObserver(entries=>{entries.forEach(e=>{if(e.isIntersecting){links.forEach(a=>a.classList.toggle('active',a.hash===`#${e.target.id}`))}})},{rootMargin:'-5% 0px -75% 0px'});document.querySelectorAll('#top,#formula-sheet,.chapter,#sources').forEach(s=>observer.observe(s));
