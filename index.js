let jokes = [
  {
    q: "What did the hat say to the hat rack?",
    r: "You stay here, I'll go on a head.",
  },
  {
    q: "How did Darth Vader know what Luke Skywalker was getting for Christmas?",
    r: "He felt his presence.",
  },
  {
    q: "What do you do when you see a space man?",
    r: "You park your car, man!",
  },
];

function getJoke() {
  let random = Math.floor(Math.random() * jokes.length);
  return jokes[random];
}
