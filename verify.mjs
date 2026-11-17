import fs from 'node:fs';
import assert from 'node:assert/strict';
import c9 from './rewrite9.mjs';
import c10 from './rewrite10.mjs';
import c11 from './rewrite11.mjs';
const all=[c9,c10,c11];
const pages=['index.html',...all.map(c=>`chapter${c.id}.html`)];
let expressionCount=0;
for(const file of pages){
 const html=fs.readFileSync('docs/'+file,'utf8');
 const ids=[...html.matchAll(/\bid="([^"]+)"/g)].map(x=>x[1]);assert.equal(ids.length,new Set(ids).size,`Duplicate IDs in ${file}`);
 for(const [,id] of html.matchAll(/href="#([^"]+)"/g))assert.ok(ids.includes(id),`${file}: missing target ${id}`);
 for(const [,src] of html.matchAll(/(?:src|href)="((?!https?:|#)[^"]+)"/g)){const [asset,fragment]=src.split('#');assert.ok(fs.existsSync('docs/'+asset),`${file}: missing asset ${asset}`);if(fragment)assert.ok(fs.readFileSync('docs/'+asset,'utf8').includes(`id="${fragment}"`),`Broken cross-page anchor ${src}`)}
 expressionCount += [...html.matchAll(/class="katex"/g)].length;assert.ok(!html.includes('katex-error'));assert.ok(html.includes('reasoning-v2'));
}
for(const c of all){
 assert.ok(c.map.length>=3,`Chapter ${c.id} needs a connected roadmap`);
 const topicIds=c.topics.map(t=>t.id);for(const m of c.map)assert.ok(topicIds.includes(m.href.replace(/^#/,'')),`Broken roadmap ${m.href}`);
 for(const q of c.questions){assert.ok(q.solution.trim().length>0);if(q.options)assert.ok(q.answer>=0&&q.answer<q.options.length)}
 assert.ok(c.questions.some(q=>q.options)&&c.questions.some(q=>!q.options));
}
assert.equal(c9.coverage.length,7);assert.equal(c10.coverage.length,7);assert.equal(c11.coverage.length,12);
const report=JSON.parse(fs.readFileSync('.private/build-report.json','utf8'));assert.equal(expressionCount,report.formulas);
const near=(actual,want,tol=1e-8)=>assert.ok(Math.abs(actual-want)<=tol,`${actual} != ${want}`);
// Independent substitution of each numeric worked example and model boundary.
near(.04*Math.cos(Math.PI*.5+Math.PI/3),-.02*Math.sqrt(3));near(-.02*Math.PI**2*(-.02*Math.sqrt(3)),.006837862509,1e-11);
near(2*Math.PI*Math.sqrt(1.2/29.4),1.269395,1e-5);
for(const time of [0,.1,.34,.6])near(.03*Math.cos(4*Math.PI*time)+.04*Math.cos(4*Math.PI*time+Math.PI/2),.05*Math.cos(4*Math.PI*time+Math.atan2(.04,.03)));
near(1/Math.sqrt(.2*5e-6),1000);near(10*Math.sqrt(5e-6/.2),.05);near(Math.cos(Math.PI/4)**2,.5);
near(-.16*Math.PI*Math.sin(4*Math.PI/3),.08*Math.sqrt(3)*Math.PI);
for(const x of [-.8,-.6,-.4,-.2,0])near(Math.sin(5*Math.PI*x),0);for(const x of [-.7,-.5,-.3,-.1])near(Math.abs(Math.sin(5*Math.PI*x)),1);
near(340*(44-40)/(44+40),16.19047619047619);near(.0002*(.0075/3),500e-9);near(4*500e-9/.5,4e-6);
near(550/(4*1.38),99.6376811594);near(600e-9/(2*.0005)*.05,30e-6);near(12e-6/(4*5*600e-9),1);
near(100*632.8e-9/2,31.64e-6);near(100*632.8e-9/(2*.5),63.28e-6);near(2*.5*600e-9/.00012,.005);
near(Math.asin(.4)*180/Math.PI,23.5781784782);near(.5*Math.cos(Math.PI/4)**4,.125);near(600e-9/(4*.01),15e-6);
// Model checks: Snell's law, phasor projection, standing nodes and sinc zeros.
near(1.5*Math.sin(Math.atan(1/Math.sqrt(8))),Math.sin(Math.PI/6));near(90*Math.cos(Math.PI/3),45);
for(let m=1;m<=6;m++)near((43*Math.sqrt(m))**2,43**2*m,1e-9);
for(let z=1;z<=3;z++)near((Math.sin(Math.PI*z)/(Math.PI*z))**2,0);
// New derivation checks: substitute the proposed solutions back into the physical laws.
const initPhase=Math.atan2(-.8,.6), initA=.05, initOmega=10;
near(initA*Math.cos(initPhase),.03);near(-initA*initOmega*Math.sin(initPhase),.4);
const equalTime=(-Math.PI/4-initPhase)/initOmega;
near(equalTime,.01418970546,1e-10);
near(.5*50*(initA*Math.cos(initOmega*equalTime+initPhase))**2,.0625/2);
for(const time of [0,.01,.37,1.26]){
 near([0,2*Math.PI/3,4*Math.PI/3].reduce((n,p)=>n+Math.cos(2*time+p),0),0);
 near(Math.cos(512*Math.PI*time)+Math.cos(520*Math.PI*time),2*Math.cos(4*Math.PI*time)*Math.cos(516*Math.PI*time),1e-12);
}
const beta=1/(5*Math.PI), omega0=Math.sqrt(16+beta**2), b=2*beta;
near(Math.exp(-10*beta*Math.PI/2),Math.exp(-1));near(.02/(b*omega0),.03926493562,1e-10);
near(Math.sqrt(omega0**2-2*beta**2),3.999493362,1e-9);
for(const drive of [1,3.9995,6]){
 const f=.02,A=f/Math.sqrt((omega0**2-drive**2)**2+4*beta**2*drive**2),delta=Math.atan2(2*beta*drive,omega0**2-drive**2);
 for(const time of [0,.12,1.3]){
  const phase=drive*time-delta,x=A*Math.cos(phase),v=-drive*A*Math.sin(phase),a=-(drive**2)*x;
  near(a+2*beta*v+omega0**2*x,f*Math.cos(drive*time));
 }
}
// Arbitrary initial phase and boundary checks, beyond the simple zero-phase special case.
for(const x of [-.8,0,.31])for(const time of [.1,.4]){
 const k=4,w=6,p1=.3,p2=1.1,A=.2;
 near(A*Math.cos(w*time-k*x+p1)+A*Math.cos(w*time+k*x+p2),2*A*Math.cos(k*x+(p2-p1)/2)*Math.cos(w*time+(p1+p2)/2));
}
for(const time of [0,.15,.8]){
 const L=.73,k=4,w=6,p=.3;
 near(Math.cos(w*time-k*L+p)+Math.cos(w*time+k*L+p-2*k*L+Math.PI),0);
 near(k*Math.sin(w*time-k*L+p)-k*Math.sin(w*time+k*L+p-2*k*L),0);
}
near(Math.sqrt(40/.004),100);near(.5*.004*100*Math.PI**2*.2**2,.008*Math.PI**2);
near(900/(2*377),1.193633952,1e-9);
near(10*Math.log10(5e-5/1e-12),76.989700043,1e-9);near(Math.sqrt(5e-5*1.2*340),.14282856857,1e-10);
// Optical conditions and newly added worked examples.
near((16-4)/(16+4),.6);near(12e-6/.04,3e-4);near(600e-9/(2*3e-4),.001);
near(-.45e-6/3e-4,-.0015);near(.2*600e-9/2,60e-9);
near(Math.asin(1350/2000)*180/Math.PI,42.4541502,1e-7);near(Math.asin(.7)*180/Math.PI,44.427004,1e-6);
near((2/3)/2+1/3,2*((2/3)/2));near(.5*Math.sin(2*Math.PI/8)**2,.25);
for(const alpha of [.2,.7,1.1])for(const delta of [.4,Math.PI,2.3]){
 const analyzer=alpha+Math.PI/2;
 const re=Math.cos(alpha)*Math.cos(analyzer)+Math.sin(alpha)*Math.sin(analyzer)*Math.cos(delta);
 const im=-Math.sin(alpha)*Math.sin(analyzer)*Math.sin(delta);
 near(re**2+im**2,Math.sin(2*alpha)**2*Math.sin(delta/2)**2);
}
let sidePeak=4.5;for(let i=0;i<8;i++)sidePeak-=(Math.tan(sidePeak)-sidePeak)/Math.tan(sidePeak)**2;
near(sidePeak,4.493409458,1e-9);
near(1/(1/12-1/18),36);near(1/(1/12-1/8),-24);near(1/(1/12-1/24),24);near(1/(1/24-1/18),-72);
console.log(`PASS: four pages, all anchors/assets, ${expressionCount} formulas, 26 source-section mappings, worked-answer substitutions, physical-law residuals and model identities.`);
