// In this file you can specify the trial data for your experiment
//const picture_list =

const trial_info = {

    text_insertion_main: [ {
    context_picture: "images/dog_parade.png",
     picture: "images/great-dane.jpg",
     context: "You see a parade of animals.",
     text: "Another animal continues the parade.",
     sentence: "You say to your friend:",
     question1: "That's a big ",
     question2: ""
   },
   {
     context_picture: "images/dog_parade.png",
      picture: "images/great-dane.jpg",
      context: "You see a parade of animals.",
      text: "Another animal continues the parade.",
      sentence: "You say to your friend:",
      question1: "That",
      question2: "is big"
    },
    {
      context_picture: "images/bird-parade.png",
       picture: "images/swan.jpg",
       context: "You see a parade of birds.",
       text: "Another bird continues the parade.",
       sentence: "You say to your friend:",
       question1: "That",
       question2: "is big"
     },
     {
       context_picture: "images/monkey-parade.png",
        picture: "images/gorilla.jpg",
        context: "You see a parade of animals.",
        text: "Another animal continues the parade.",
        sentence: "You say to your friend:",
        question1: "That",
        question2: "is big"
      },
      {
        context_picture: "images/flower-parade.png",
         picture: "images/sunflower.png",
         context: "You see a parade of flowers.",
         text: "Another flower continues the parade.",
         sentence: "You say to your friend:",
         question1: "That",
         question2: "is big"
       },
       {
         context_picture: "images/fish-parade.png",
          picture: "images/swordfish.jpg",
          context: "You see a parade of fish.",
          text: "Another fish continues the parade.",
          sentence: "You say to your friend:",
          question1: "That",
          question2: "is big"
        },

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
