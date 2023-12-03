import codes from './input1.js';
let answer = codes
.replaceAll('oneight','18') // only used in part 2
.replaceAll('twone','21') // only used in part 2
.replaceAll('twone','21') // only used in part 2
.replaceAll('threeight','38') // only used in part 2
.replaceAll('fiveight','58') // only used in part 2
.replaceAll('fiveight','58') // only used in part 2
.replaceAll('sevenine','79') // only used in part 2
.replaceAll('eightwo','82') // only used in part 2
.replaceAll('eighthree','83') // only used in part 2
.replaceAll('nineight','98') // only used in part 2
.replaceAll('one','1')
.replaceAll('two','2')
.replaceAll('three','3')
.replaceAll('four','4')
.replaceAll('five','5')
.replaceAll('six','6')
.replaceAll('seven','7')
.replaceAll('eight','8')
.replaceAll('nine','9')
.split('\n')
.map(x=>x.replace(/\D/g,''))
.map(x=>(x.charAt(0)+x.substring((x.length)-1)))
.map(x=>parseInt(x))
.reduce((a,v)=>(a+v),0);
console.log(answer);