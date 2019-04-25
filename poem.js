// Ref https://codereview.stackexchange.com/questions/156874/node-js-automatic-poem-generator

const pick = array => array[Math.floor(Math.random() * array.length)]
const subjects = `I,You,Daniel,Vivian,Bo,Yuki,Jing,Cotton,Vianna,Vivonda,The Stranger,The Liar,Harry Potter,Dumbledore`
  .replace(/\n/g, '')
  .split(',')
const articles = `>subjects< knew that the,>subjects< could tell that,>subjects< never expected that,All of the`
  .replace(/\n/g, '')
  .split(',')
const linkingVerbs = `was,had been,will be,could be,might be,should have been,would have been,could have been,belonged to,never bothered with`
  .replace(/\n/g, '')
  .split(',')
const adjectives = `abstract,mysterious,permanent,unfortunate,intricate,confusing,true,false,fake,a lie,a stranger,a friend,serene,confusing,an enemy,terrible,enchanting,mine,yours,his,hers,theirs,ours,fortunate,understood,mine,interesting,mutual,artistic,musical`
  .replace(/\n/g, '')
  .split(',')
const nouns = `gate,enthusiasm,hair,theory,truth,security,introduction,requirement,activity,examination,dirt,marketing,town,meal,investment,classroom,sample,poetry,priority,distribution,celebration,refrigerator,employer,basis,health,food,decision,reputation,fortune,manager,poet,woman,secretary,history,potato,reflection,percentage,bath,management,response,temperature,owner,farmer,village,assistant,winner,interaction,product,night,opportunity,cabinet,inspector,protection,area,accident,union,employee,database,entry,knowledge,wealth,error,appearance,platform,competition,football,aspect,speech,device,drawer,movie,preference,inflation,personality,connection,hotel,grandmother,studio,attention,payment,cell,driver,scene,variety,appointment,relationship,penalty,category,lab,actor,community,breath,customer,uncle,revolution,disaster,media,lake,failure,safety,freedom,hearing,charity,boyfriend,effort,computer,member,conclusion,coffee,magazine,perception,beer,ability,power,session,literature,marriage,camera,sir,nation,bird,outcome,difficulty,definition,library,city`
  .replace(/\n/g, '')
  .split(',')

const grammarGenerator = {
  subjects,
  articles,
  linkingVerbs,
  adjectives,
  nouns,
  parse: (str) => {
    let output = str
    const match = />(\w+)</
    while (match.test(output)) {
      const [_, val] = match.exec(output)
      output = output.replace(match, grammarGenerator.parse(pick(grammarGenerator[val])))
    }
    return output
  }
}

const generatePoem = () => {
  let str = ''
  for (let i = 0; i < 14; i++) {
    str += grammarGenerator.parse('>articles< >nouns< >linkingVerbs< >adjectives<') + '\n'
    if (i % 5 === 0) str += '\n'
  }
  return str + `\n By Daniel Berezin and Vivian Nghiem, ${(new Date()).getFullYear()}`
}

alert(generatePoem())