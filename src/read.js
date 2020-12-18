const Vuedoc = require('@vuedoc/md')
const json2md = require("json2md")

const options = {
  output: './docs/',
  level: 4,
  filenames: [
    'src/components/Card/Card.vue',
    'src/views/Home/Home.vue'
  ],
}


Vuedoc.md(options)
  .then((document) => document.forEach(element => {
    console.log(json2md(element))
  }))
  .catch((err) => console.error(err))

