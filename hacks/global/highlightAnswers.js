setInterval(() => {
  const { stateNode: { state, props } } = Object.values(document.querySelector('#app > div > div'))[1].children[0]._owner;
  [...document.querySelectorAll(`[class*="answerContainer"]`)].forEach((answer, i) => {
    if ((state.question || props.client.question).correctAnswers.includes((state.question || props.client.question).answers[i])) answer.style.backgroundColor = "rgb(0, 207, 119)";
    else answer.style.backgroundColor = "rgb(189, 15, 38)";
  });
});
