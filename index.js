// Code your solutions in this file
const writeCards = (arr,event) => {
  const messages = []
  for(let i = 0; i < arr.length;i++) {
    const greetingMessage = `Thank you, ${arr[i]}, for the wonderful ${event} gift!`
    messages.push(greetingMessage)
  }
return messages
}

console.log( writeCards(["Charlie", "Samip", "Ali"], "birthday"));

function countDown(){
  let numCountDown=11;
  while(numCountDown--){
    console.log(numCountDown)
  }
}
