const fs = require('fs')

// rename a file
/* fs.rename('before.json', 'after.json', (err) => {
  if (err) {
    return console.log(err)
  }
})
 */

// Add to a file
/* const content = 'Some Content'

fs.writeFile('test.txt', content, (err) => {
  if (err) {
    console.log(err)
  }
}) */

// Read a file

fs.readFile('test.txt', 'utf-8', (err, data) => {
  if (err) {
    console.error(err)
    return
  }
  console.log(data)
})
