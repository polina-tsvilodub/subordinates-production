// In this file you can specify the trial data for your experiment
const utt_prenominal = {question1b: "That's a big ", question2b: "", question1s: "That's a small ", question2s: "", condition: "prenominal"}
const utt_predicative = {question1b: "That ", question2b: " is big.", question1s: "That ", question2s: " is small.", condition:"predicative"}
// const utt_prenominal_small = [{question1: "That's a small ", question2: "" }]
// const utt_predicative_bla = [ {question1: "That ", question2: " is small."}]

const utterance = _.sample([utt_prenominal, utt_predicative])


const mainTrials = { dogs1: [{
   context_picture: "images/dog-parade.png",
   item: "dogs",
    picture: "images/doberman.png",
    context: "You see a parade of animals.",
    text: "This one is also in the parade.",
    sentence: "You say to your friend:",
    question1: utterance.question1b,
    question2: utterance.question2b,
    condition: utterance.condition,
    size: "big"
  },
  {
   context_picture: "images/dog-parade.png",
   item: "dogs",
    picture: "images/chihuahua.png",
    context: "You see a parade of animals.",
    text: "This one is also in the parade.",
    sentence: "You say to your friend:",
    question1: utterance.question1s,
    question2: utterance.question2s,
    condition: utterance.condition,
    size: "small"
  }],
  dogs2: [{
    context_picture: "images/dog-parade2.png",
    item: "dogs",
     picture: "images/great-dane.png",
     context: "You see a parade of animals.",
     text: "This one is also in the parade.",
     sentence: "You say to your friend:",
     question1: utterance.question1b,
     question2: utterance.question2b,
     condition: utterance.condition,
     size: "big"
  }, {
    context_picture: "images/dog-parade2.png",
    item: "dogs",
     picture: "images/pug.png",
     context: "You see a parade of animals.",
     text: "This one is also in the parade.",
     sentence: "You say to your friend:",
     question1: utterance.question1s,
     question2: utterance.question2s,
     condition: utterance.condition,
     size: "small"
  }],
  birds1: [{
    context_picture: "images/bird-parade.png",
    item: "birds",
     picture: "images/goose.png",
     context: "You see a parade of animals.",
     text: "This one is also in the parade.",
     sentence: "You say to your friend:",
     question1: utterance.question1b,
     question2: utterance.question2b,
     condition: utterance.condition,
     size: "big"
   },
   {
     context_picture: "images/bird-parade.png",
     item: "birds",
      picture: "images/sparrow.png",
      context: "You see a parade of animals.",
      text: "This one is also in the parade.",
      sentence: "You say to your friend:",
      question1: utterance.question1s,
      question2: utterance.question2s,
      condition: utterance.condition,
      size: "small"
    }],
    birds2: [{context_picture: "images/bird-parade2.png",
    item: "birds",
     picture: "images/eagle.png",
     context: "You see a parade of animals.",
     text: "This one is also in the parade.",
     sentence: "You say to your friend:",
     question1: utterance.question1b,
     question2: utterance.question2b,
     condition: utterance.condition,
     size: "big"},
     {
       context_picture: "images/bird-parade2.png",
       item: "birds",
        picture: "images/hummingbird.png",
        context: "You see a parade of animals.",
        text: "This one is also in the parade.",
        sentence: "You say to your friend:",
        question1: utterance.question1s,
        question2: utterance.question2s,
        condition: utterance.condition,
        size: "small"
     }],
   birds3: [{context_picture: "images/bird-parade3.png",
   item: "birds",
    picture: "images/swan.png",
    context: "You see a parade of animals.",
    text: "This one is also in the parade.",
    sentence: "You say to your friend:",
    question1: utterance.question1b,
    question2: utterance.question2b,
    condition: utterance.condition,
    size: "big"},
    {
      context_picture: "images/bird-parade3.png",
      item: "birds",
       picture: "images/canary.png",
       context: "You see a parade of animals.",
       text: "This one is also in the parade.",
       sentence: "You say to your friend:",
       question1: utterance.question1s,
       question2: utterance.question2s,
       condition: utterance.condition,
       size: "small"
    }],
    flowers1: [{
      context_picture: "images/flower-parade.png",
      item: "flowers",
       picture: "images/peony.png",
       context: "You see a collection of plants.",
       text: "This one is also in the collection.",
       sentence: "You say to your friend:",
       question1: utterance.question1b,
       question2: utterance.question2b,
       condition: utterance.condition,
       size: "big"
     },
     {
       context_picture: "images/flower-parade.png",
       item: "flowers",
        picture: "images/daisy.png",
        context: "You see a collection of plants.",
        text: "This one is also in the collection.",
        sentence: "You say to your friend:",
        question1: utterance.question1s,
        question2: utterance.question2s,
        condition: utterance.condition,
        size: "small"
      }],
     flowers2: [{
       context_picture: "images/flower-parade2.png",
       item: "flowers",
        picture: "images/sunflower.png",
        context: "You see a collection of plants.",
        text: "This one is also in the collection.",
        sentence: "You say to your friend:",
        question1: utterance.question1b,
        question2: utterance.question2b,
        condition: utterance.condition,
        size: "big"
     }, {
       context_picture: "images/flower-parade2.png",
       item: "flowers",
        picture: "images/dandelion.png",
        context: "You see a collection of plants.",
        text: "This one is also in the collection.",
        sentence: "You say to your friend:",
        question1: utterance.question1s,
        question2: utterance.question2s,
        condition: utterance.condition,
        size: "small"
     }],
     fish1: [{
       context_picture: "images/fish-parade.png",
       item: "fish",
        picture: "images/swordfish.png",
        context: "You see a parade of animals.",
        text: "This one is also in the parade.",
        sentence: "You say to your friend:",
        question1: utterance.question1b,
        question2: utterance.question2b,
        condition: utterance.condition,
        size: "big"
      },
      {
        context_picture: "images/fish-parade.png",
        item: "fish",
         picture: "images/goldfish.png",
         context: "You see a parade of animals.",
         text: "This one is also in the parade.",
         sentence: "You say to your friend:",
         question1: utterance.question1s,
         question2: utterance.question2s,
         condition: utterance.condition,
         size: "small"
       }],
    fish2: [{
      context_picture: "images/fish-parade2.png",
      item: "fish",
       picture: "images/tuna.png",
       context: "You see a parade of animals.",
       text: "This one is also in the parade.",
       sentence: "You say to your friend:",
       question1: utterance.question1b,
       question2: utterance.question2b,
       condition: utterance.condition,
       size: "big"
    }, {
      context_picture: "images/fish-parade2.png",
      item: "fish",
       picture: "images/clownfish.png",
       context: "You see a parade of animals.",
       text: "This one is also in the parade.",
       sentence: "You say to your friend:",
       question1: utterance.question1s,
       question2: utterance.question2s,
       condition: utterance.condition,
       size: "small"
    }],
    trees: [{
        context_picture: "images/tree-parade.png",
        item: "trees",
         picture: "images/sequoia.png",
         context: "You see the following items in a landscape.",
         text: "This one is also in the landscape.",
         sentence: "You say to your friend:",
         question1: utterance.question1b,
         question2: utterance.question2b,
         condition: utterance.condition,
         size: "big"
       },
       {
         context_picture: "images/tree-parade.png",
         item: "trees",
          picture: "images/bonsai.png",
          context: "You see the following items in a landscape.",
          text: "This one is also in the landscape.",
          sentence: "You say to your friend:",
          question1: utterance.question1s,
          question2: utterance.question2s,
          condition: utterance.condition,
          size: "small"
        }]};
const warmupTrials = {dogs1: {
  item: "dogs",
  picture1: "warmup/chihuahua.jpg",
  picture2: "warmup/doberman.png",
  correct1: ["chihuahua"],
  correct2: ["doberman"],
  correct3: ["dogs"],
  text: "Please label the pictures below.",
  question1: "This is a ",
  question3: "This is a ",
  question2: "These are both"

},
dogs2: {
  item: "dogs",
  picture1: "warmup/pug.jpg",
  picture2: "warmup/great-dane.jpg",
  correct1: ["pug"],
  correct2: ["great dane"],
  correct3: ["dogs"],
  text: "Please label the pictures below.",
  question1: "This is a ",
  question3: "This is a ",
  question2: "These are both"
},

birds1: {
  item: "birds",
  picture1: "warmup/goose.png",
  picture2: "warmup/sparrow.jpg",
  correct1: ["goose"],
  correct2: ["sparrow"],
  correct3: ["birds"],
  text: "Please label the pictures below.",
  question1: "This is a ",
  question3: "This is a ",
  question2: "These are both"
},
birds2: {
  item: "birds",
  picture1: "warmup/colibri.jpg",
  picture2: "warmup/eagle.jpg",
  correct1: ["hummingbird"],
  correct2: ["eagle"],
  correct3: ["birds"],
  text: "Please label the pictures below.",
  question1: "This is a ",
  question3: "This is an ",
  question2: "These are both"
},
birds3: {
  item: "birds",
  picture1: "warmup/swan.jpg",
  picture2: "warmup/canary.jpg",
  correct1: ["swan"],
  correct2: ["canary"],
  correct3: ["birds"],
  text: "Please label the pictures below.",
  question1: "This is a ",
  question3: "This is a ",
  question2: "These are both"
},

flowers1: {
  item: "flowers",
  picture1: "warmup/daisy.png",
  picture2: "warmup/peony.png",
  correct1: ["daisy"],
  correct2: ["peony"],
  correct3: ["flowers"],
  text: "Please label the pictures below.",
  question1: "This is a ",
  question3: "This is a ",
  question2: "These are both"
},
flowers2: {
  item: "flowers",
  picture1: "warmup/dandelion.jpg",
  picture2: "warmup/sunflower.png",
  correct1: ["dandelion"],
  correct2: ["sunflower"],
  correct3: ["flowers"],
  text: "Please label the pictures below.",
  question1: "This is a ",
  question3: "This is a ",
  question2: "These are both"
},
fish1: {
  item: "fish",
  picture1: "warmup/swordfish.jpg",
  picture2: "warmup/goldfish.png",
  correct1: ["swordfish"],
  correct2: ["goldfish"],
  correct3: ["fish"],
  text: "Please label the pictures below.",
  question1: "This is a ",
  question3: "This is a ",
  question2: "These are both"
},
fish2: {
  item: "fish",
  picture1: "warmup/tuna.jpg",
  picture2: "warmup/clownfish.jpg",
  correct1: ["tuna"],
  correct2: ["clownfish"],
  correct3: ["fish"],
  text: "Please label the pictures below.",
  question1: "This is a ",
  question3: "This is a ",
  question2: "These are both"
},

trees: {
  item: "trees",
  picture1: "warmup/sequoia.jpg",
  picture2: "warmup/bonsai.jpg",
  correct1: ["redwood", "sequoia"],
  correct2: ["bonsai"],
  correct3: ["trees"],
  text: "Please label the pictures below.",
  question1: "This is a ",
  question3: "This is a ",
  question2: "These are both"
}
}

const size = _.shuffle([0,0,0,0,0,1,1,1,1,1])

const trials = _.shuffle([ {x: warmupTrials.dogs1, y:mainTrials.dogs1[size[0]]}, {x: warmupTrials.dogs2, y:mainTrials.dogs2[size[1]]},
  {x:warmupTrials.birds1, y:mainTrials.birds1[size[2]]}, {x:warmupTrials.birds2, y:mainTrials.birds2[size[3]]}, {x:warmupTrials.birds3, y:mainTrials.birds3[size[4]]},
  {x:warmupTrials.flowers1, y:mainTrials.flowers1[size[5]]},   {x:warmupTrials.flowers2, y:mainTrials.flowers2[size[6]]},
  {x:warmupTrials.fish1,y:mainTrials.fish1[size[7]]}, {x:warmupTrials.fish2,y:mainTrials.fish2[size[8]]},
  {x:warmupTrials.trees, y: mainTrials.trees[size[9]]}])

const trial_info = {

     text_insertion_main1: [

       trials[0].y,
       trials[1].y,
       trials[2].y,
       trials[3].y

  ],
  text_insertion_main2 :[
    trials[4].y,
    trials[5].y,
    trials[6].y
  ],
  text_insertion_main3 : [
    trials[7].y,
    trials[8].y,
    trials[9].y
  ],
   text_insertion_warmup1: [
     trials[0].x,
     trials[1].x,
     trials[2].x,
     trials[3].x

  ],
  text_insertion_warmup2: [
    trials[4].x,
    trials[5].x,
    trials[6].x
  ],
  text_insertion_warmup3: [
    trials[7].x,
    trials[8].x,
    trials[9].x
  ]
};
