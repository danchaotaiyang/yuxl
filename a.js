'use strict';

console.log('2015年9月25日'.match(/\d+/g).map(item=>item.padStart(2, '0')).join('-'));

let a = `asdf
asdfasdf
`