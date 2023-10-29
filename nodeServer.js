// GET and POST requests with the Axios library

const axios = require('axios')

axios
  .get('https://example.com/todos')
  .then((res) => {
    console.log(`statusCode: &{res.status}`)
    console.log(res)
  })
  .catch((error) => {
    console.log(error)
  })

axios
  .post('https://whatever.com/todos', {
    todo: 'But the Milk',
  })
  .then((res) => {
    console.log(`statusCode ${res.status}`)
    console.log(res)
  })
  .catch((error) => {
    console.error(error)
  })
