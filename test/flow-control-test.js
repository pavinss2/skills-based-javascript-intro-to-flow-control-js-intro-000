const expect = require('expect')
const fs = require('fs')
const jsdom = require('jsdom')
const path = require('path')

describe('flow-control', () => {

  before(done => {
    const src = path.resolve(__dirname, '..', 'flow-control.js')

    jsdom.env('<div></div>', [src], (err, window) => {
      if (err) {
        return done(err)
      }

      Object.keys(window).forEach(key => {
        global[key] = window[key]
      })

      return done()
    })
  })

function basicTeenager(age) {
if (age >= 13 && age <= 19){
return "You are a teenager!"
}
}

function teenager(age) {
if (age >= 13 && age <= 19){
return "You are a teenager!"
}
else {
return "You are not a teenager"

}

}

function ageChecker(age) {
if (age <= 12){
return "You are a kid"
}
else if (age >= 13 && age <= 19) {
return "You are a teenager!"
}
else{
return "You are a grownup"}
}

function ternaryTeenager(age)
{
(age >= 1 && age <= 19) ? return "You are a teenager": return "You are not a teenager"

}

function switchAge(age) {
switch(age){
case (age >= 13 && age <=19):
console.log("You are a teenager");
break;
default:
console.log("You have an age");
}
}
