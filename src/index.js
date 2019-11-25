let str = require('./a.js')
// console.log(str)
require('./index.css')
console.log('hello world')

let fn = () => {
    console.log('es6')
}
fn()

const show = (content) => {
    window.document.getElementById('app').innerHTML = 'Hello,' + content;
  }

show("asdasdad")

function * gen(){
    yield 1;
}
console.log(gen().next())