// In this file you can specify the trial data for your experiment
const utt_prenominal = {question1b: "That's a big ", question2b: "", question1s: "That's a small ", question2s: ""}
const utt_predicative = {question1b: "That ", question2b: " is big.", question1s: "That ", question2s: " is small."}
// const utt_prenominal_small = [{question1: "That's a small ", question2: "" }]
// const utt_predicative_bla = [ {question1: "That ", question2: " is small."}]
const utterance = _.sample([utt_prenominal, utt_predicative])
const size = function() {
   return _.sample([0,1])
 }

const mainTrials = { dogs: [{
   context_picture: "images/dog_parade.png",
    picture: "images/great-dane.jpg",
    context: "You see a parade of animals.",
    text: "Another animal continues the parade.",
    sentence: "You say to your friend:",
    question1: utterance.question1b,
    question2: utterance.question2b
  },
  {
   context_picture: "images/dog_parade_small.png",
    picture: "images/chihuahua.jpg",
    context: "You see a parade of animals.",
    text: "Another animal continues the parade.",
    sentence: "You say to your friend:",
    question1: utterance.question1s,
    question2: utterance.question2s
  }],
  birds: [{
    context_picture: "images/bird-parade.png",
     picture: "images/swan.jpg",
     context: "You see a parade of birds.",
     text: "Another bird continues the parade.",
     sentence: "You say to your friend:",
     question1: utterance.question1b,
     question2: utterance.question2b
   },
   {
     context_picture: "images/bird-parade-small.png",
      picture: "images/colibri.jpg",
      context: "You see a parade of birds.",
      text: "Another bird continues the parade.",
      sentence: "You say to your friend:",
      question1: utterance.question1s,
      question2: utterance.question2s
    }],
   monkeys: [{
     context_picture: "images/monkey-parade.png",
      picture: "images/gorilla.jpg",
      context: "You see a parade of animals.",
      text: "Another animal continues the parade.",
      sentence: "You say to your friend:",
      question1: utterance.question1b,
      question2: utterance.question2b
    },
    {
      context_picture: "images/monkey-parade-small.png",
       picture: "images/spidermonkey.jpg",
       context: "You see a parade of animals.",
       text: "Another animal continues the parade.",
       sentence: "You say to your friend:",
       question1: utterance.question1s,
       question2: utterance.question2s
     }],
    flowers: [{
      context_picture: "images/flower-parade.png",
       picture: "images/sunflower.png",
       context: "You see a parade of plants.",
       text: "Another plant continues the parade.",
       sentence: "You say to your friend:",
       question1: utterance.question1b,
       question2: utterance.question2b
     },
     {
       context_picture: "images/flower-parade-small.png",
        picture: "images/daisy.png",
        context: "You see a parade of plants.",
        text: "Another plant continues the parade.",
        sentence: "You say to your friend:",
        question1: utterance.question1s,
        question2: utterance.question2s
      }],
     fish: [{
       context_picture: "images/fish-parade.png",
        picture: "images/swordfish.jpg",
        context: "You see a parade of fish.",
        text: "Another fish continues the parade.",
        sentence: "You say to your friend:",
        question1: utterance.question1b,
        question2: utterance.question2b
      },
      {
        context_picture: "images/fish-parade.png",
         picture: "images/goldfish.png",
         context: "You see a parade of fish.",
         text: "Another fish continues the parade.",
         sentence: "You say to your friend:",
         question1: utterance.question1s,
         question2: utterance.question2s
       }],
    trees: [{
        context_picture: "images/tree-parade.png",
         picture: "images/sequoia.jpg",
         context: "You see a parade of plants.",
         text: "Another plant continues the parade.",
         sentence: "You say to your friend:",
         question1: utterance.question1b,
         question2: utterance.question2b
       },
       {
         context_picture: "images/tree-parade.png",
          picture: "images/bonsai.jpg",
          context: "You see a parade of plants.",
          text: "Another plant continues the parade.",
          sentence: "You say to your friend:",
          question1: utterance.question1s,
          question2: utterance.question2s
        }]};


const trial_info = {

     text_insertion_main: [
       mainTrials.dogs[size()],
       mainTrials.birds[size()],
       mainTrials.monkeys[size()],
       mainTrials.flowers[size()],
       mainTrials.fish[size()],
       mainTrials.trees[size()]
  ],
   text_insertion_warmup: [ {
     picture1: "images/poodle.jpg",
     picture2:"images/pug.jpg",
     picture3: "images/great-dane.jpg",
     correct1: "poodle",
     correct2: "pug",
     correct3: "great dane",
     text: "Please label the pictures below.",
     question1: "This is a ",
     question2: "These are all "
   }
 ]
};
