const fs = require('fs')

const tokenize = str => {
  let tokens = []
  const delimiters = ' .*/()'.split(' ')
  for (
    let current = 0, currentString = str[0];
    current < str.length;
    current++, currentString = str[current]
  ) {
    process.stdout.write(currentString)
  }

}

const picturefy = str => {
  const t = tokenize(str)
}

const main = () => {
  const files = process.argv.slice(2)
  for (let file of files) {
    console.log(`picturefying ${file}`)
    picturefy(fs.readFileSync(file, 'utf8'))
  }
}

main()