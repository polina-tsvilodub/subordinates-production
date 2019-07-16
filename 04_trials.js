// In this file you can specify the trial data for your experiment
//const picture_list = 

const trial_info = {
    forced_choice: [
        {
            question: "What's on the bread?",
            picture: "images/question_mark_02.png",
            option1: 'jam',
            option2: 'ham',
            correct: 'jam'
        },
        {
            question: "What's the weather like?",
            picture: "images/weather.jpg",
            option1: "shiny",
            option2: "rainbow",
            correct: "shiny"
        }
    ],

    text_insertion_main: [ {
     picture: "images/question_mark_02.png",
     text: "Please describe the picture below.",
     question1: "That's a big ",
     question2: ""
   },
   {
      picture: "images/question_mark_02.png",
      text: "Please describe the picture below.",
      question1: "That",
      question2: "is big"
    }],

   text_insertion_warmup: [ {
     picture: "images/question_mark_02.png",
     text: "Please describe the situation you see on the picture as if you had walked by.",
     question1: "The ",
     question2: "is chasing the "
   }]
};
