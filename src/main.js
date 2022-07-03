import './index.html';
import './index.scss';
import notOkImg from './img/notOk.svg';
import okImg from './img/Ok.svg';
import { mult, sum } from './modules/calc';


const imgWrap = document.querySelector('.img');
const okPic = new Image();
okPic.src = okImg;
okPic.width = 300;
imgWrap.append(okPic);



const notOkPic = new Image();
notOkPic.src = notOkImg;


console.log(mult(2, 4));
console.log(sum(3, 4));