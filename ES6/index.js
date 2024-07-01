//ES6 Module = An external file that contains reusable code
//              that can be imported into other Javascript files.
//              Write resusable code for many different apps.
//              Can contain variables, classes, function ... and more
//              Introduced as part of ECMAScript 2015 update


//NHỚ THÊM MODULE TRONG SRC INDEX.HTML

import {PI,getCircumference,getArea,getVolume} from './mathUtil.js'

console.log(PI);
const circumference= getCircumference(10);
console.log(`${circumference.toFixed(2)} cm`);
const area=getArea(10);
console.log(`${area.toFixed(2)} cm`);
const volume=getVolume(10);
console.log(`${volume.toFixed(2)} cm`);
