// add solution here
function theBeatlesPlay(musicians, instruments) {
  var solutionArray = []
  for (let i = 0; i < musicians.length; i++) {
    var solutionString = `${musicians[i]} plays ${instruments[i]}`
    solutionArray.push(solutionString)
  }
  return solutionArray
}

function johnLennonFacts(johnLennonFacts) {
  var i = 0
  var solutionFacts = []
  while (i < johnLennonFacts.length) {
    solutionFacts.push(`${johnLennonFacts}!!!`)
  }
  return solutionFacts
}