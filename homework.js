import randomstring from "randomstring"
import fs from 'fs'
import { promises } from "fs"



let myname = randomstring.generate({
    length: 8,
    charset: 'alphabetic'
  });

let mySurname = randomstring.generate({
    length: 12,
    charset: 'alphabetic'
  });

let myrate = Math.floor(Math.random()*100 +1)

let mystudent = {
    "name" : myname,
    "surname" : mySurname,
    "rate" : myrate
}


let student2 =  JSON.stringify(mystudent)

const writeFile = (path, data, opts = 'utf8') =>
  new Promise((resolve, reject) => {
    fs.writeFile("student2.txt", student2, opts, (err) => {
      if (err) reject(err)
      else resolve()
    })
  })


writeFile()


const readFile = (path, opts = 'utf8') =>
  new Promise((resolve, reject) => {
    fs.readFile("student2.txt", opts, (err, data) => {
      if (err) reject(err)
      else resolve(data)
      const student3 = JSON.parse(student2.toString())
      student3['Country'] = 'USA'
      let jsonData = JSON.stringify(student3)
      fs.appendFile("student2.txt", "\n" + jsonData,opts = 'utf8', function(err){if (err){
          throw err
      } else {
          console.log('Done');
      }})
    })
  })

  readFile()
