import fs from 'node:fs';
import assert from 'node:assert/strict';
import {chapters} from './content.mjs';
import c10 from './chapter10.mjs';
import c11 from './chapter11.mjs';
const all=[...chapters,c10,c11],html=fs.readFileSync('docs/index.html','utf8');
const ids=[...html.matchAll(/\bid="([^"]+)"/g)].map(x=>x[1]);assert.equal(ids.length,new Set(ids).size,'Duplicate IDs');
for(const [,id] of html.matchAll(/href="#([^"]+)"/g))assert.ok(ids.includes(id),`Missing target ${id}`);
for(const [,src] of html.matchAll(/(?:src|href)="((?!https?:|#)[^"]+)"/g))assert.ok(fs.existsSync('docs/'+src),`Missing asset ${src}`);
assert.equal(all.reduce((n,c)=>n+c.questions.length,0),26);assert.equal(all.flatMap(c=>c.questions).filter(q=>q.options).length,12);
assert.equal([...html.matchAll(/class="katex"/g)].length,477);assert.ok(!html.includes('katex-error'));
for(const c of all)for(const q of c.questions){assert.ok(q.solution.trim().length>0);if(q.options)assert.ok(q.answer>=0&&q.answer<q.options.length)}
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
console.log('PASS: anchors, local assets, 477 formulas, 26 exercises, numerical answers, and model identities.');
