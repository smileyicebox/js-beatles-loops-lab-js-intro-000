// add solution here
function theBeatlesPlay(musicians, instruments) {
  var solutionArray = []
  for (let i = 0; i < musicians.length; i++) {
    solutionString = `${musicians[i]} plays ${instruments[i]}`
    solutionArray.push(solutionString)
  }
  return solutionArray
}