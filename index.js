// add solution here
function theBeatlesPlay(musicians, instruments) {
  var solutionArray = []
  for (let i = 0; i < musicians.length; i++) {
    var solutionString = `${musicians[i]} plays ${instruments[i]}`
    solutionArray.push(solutionString)
  }
  return solutionArray
}

function johnLennonFacts(facts) {
  var i = 0
  var solutionFacts = []
  while (i < facts.length) {
    var solutionString = `${facts[i]}!!!`
    solutionFacts.push(solutionString)
    i++
  }
  return solutionFacts
}

function iLoveTheBeatles(num) {
  var solutionArray = []
  do {
    solutionArray.push('I love the Beatles!')
    num++
  } while ()
}