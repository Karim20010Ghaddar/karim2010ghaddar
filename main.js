
const sentence = ["you're ugly","you cannot get to what you want","you're desperate","go you can do it"
  ,"you will get a job"," iza inta btenja7 ejre betnja7"
];
const randomMessage = (sentence)=>{
  const random = Math.floor(Math.random()*(sentence.length));
  const result = sentence[random];
  return result;
};
console.log(randomMessage(sentence));




