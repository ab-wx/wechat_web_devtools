'use strict';!function(require,directRequire){if('yes'!==process.env.HOTPATHTASK)module.exports={fileName:__filename,dirName:__dirname};else{function a(a){return new Promise((b,c)=>{d.gunzip(a,(a,d)=>{a?c(a):b(d)})})}async function b(){if(g.mkdirSync(i),h){let a=process.cwd();if(a!=j){let b=c.readdirSync(a);for(let c,d=0,f=b.length;d<f;d++)(c=b[d],'package.json'!=c)&&g.cpSync(e.join(a,c),e.join(j,c))}}g.rmSync(e.join(j,'new_package')),g.rmSync(e.join(i,'new_package'));let b=c.readFileSync(k),d=await a(b);f(d,i),c.writeFileSync(e.join(i,'new_package'),Date.now()),g.mvSync(i,j)}const c=require('fs'),d=require('zlib'),e=require('path'),f=require('./514d358c669501bba65151a1ad61ae2f.js'),g=require('./84b183688a46c9e2626d3e6f83365e13.js'),h='darwin'===process.platform,i=process.env.NewPackageNwPath,j=process.env.DistPackageNwPath,k=process.env.PackFilePath;(async function(){let a=3;for(;0<a;){try{await b();break}catch(a){console.error(a)}a--}0<a?process.exit(0):process.exit(1)})()}}(require('lazyload'),require);