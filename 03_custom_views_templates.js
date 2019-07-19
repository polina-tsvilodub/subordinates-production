// In this file you can create your own custom view templates


// A view template is a function that returns a view,
// this functions gets some config (e.g. trial_data, name, etc.) information as input
// A view is an object, that has a name, CT (the counter of how many times this view occurred in the experiment),
// trials the maximum number of times this view is repeated
// and a render function, the render function gets CT and the babe-object as input
// and has to call babe.findNextView() eventually to proceed to the next view (or the next trial in this view),
// if it is an trial view it also makes sense to call babe.trial_data.push(trial_data) to save the trial information
const custom_textfield_main = function(config, startingTime) {
  const view = {
    name: config.name,
    CT: 0,
    trials: config.trials,
    render: function(CT, babe, startingTime) {
      $("main").html(`<div class='babe-view'>
      <h1 class='babe-view-title'>Parades</h1>
      <section class="babe-text-container">
        <p class="babe-view-question">${config.data[CT].context}</p>
      </section>
      <div class="picture" align="center">
        <img src="${config.data[CT].context_picture}" height="250" width="800">
      </div>
      <section class="babe-text-container">
        <p class="babe-view-question">${config.data[CT].text}</p>
      </section>
      <div class="picture" align="center">
        <img src="${config.data[CT].picture}">
      </div>
      <section class="babe-text-container">
        <p class="babe-view-question">${config.data[CT].sentence}</p>
      </section>
      <div class='babe-view-answer-container'>
      <p class='babe-view-text'>${config.data[CT].question1}
        <textarea name='textbox-input' rows=1 cols=15 class='textbox-input'/>
        ${config.data[CT].question2}
      </p>
      </div>
          <button id='next' class='babe-view-button babe-nodisplay'>next</button>
      </div>`);
      //  <div class='babe-view-answer-container'> </div>
// height="42" width="42"
      //config, CT, babe, answer_container_generator, startingTime


        let next;
        let textInput;
        const minChars = config.data[CT].min_chars === undefined ? 5 : config.data[CT].min_chars;

      //  $(".babe-view").append(answer_container_generator(config, CT));

        next = $("#next");
        textInput = $("textarea");

        // attaches an event listener to the textbox input
        textInput.on("keyup", function() {
            // if the text is longer than (in this case) 10 characters without the spaces
            // the 'next' button appears
            if (textInput.val().trim().length > minChars) {
                next.removeClass("babe-nodisplay");
            } else {
                next.addClass("babe-nodisplay");
            }
        });

        // the trial data gets added to the trial object
        next.on("click", function(startingTime) {
            const RT = Date.now() - startingTime; // measure RT before anything else
            let trial_data = {
                trial_name: 'main',
                trial_number: CT + 1,
                response: textInput.val().trim(),
                RT: RT
            };

            trial_data = babeUtils.view.save_config_trial_data(config.data[CT], trial_data);

            babe.trial_data.push(trial_data);
            babe.findNextView();
        });

      //  $('#textInput').on("click", handle_response);
        $('#next').on("click");
    },

};
return view;
};


const custom_textfield_warmup = function(config, startingTime) {
  const view = {
    name: config.name,
    CT: 0,
    trials: config.trials,
    render: function(CT, babe, startingTime) {
      $("main").html(`<div class='babe-view'>
      <h1 class='babe-view-title'>Warm-up trials</h1>
      <section class="babe-text-container">
        <p class="babe-view-question">${config.data[CT].text}</p>
      </section>
      <div class="picture" align="center">
        <img src="${config.data[CT].picture1}">
      </div>
      <div class='babe-view-answer-container'>
        <p class='babe-view-text'>${config.data[CT].question1}
          <textarea id='textbox-input1' rows=1 cols=15 class='textbox-input'/>
        </p>
      </div>
      <div class="picture" align="center">
        <img src="${config.data[CT].picture2}">
      </div>
      <div class='babe-view-answer-container'>
        <p class='babe-view-text'>${config.data[CT].question1}
          <textarea id='textbox-input2' rows=1 cols=15 class='textbox-input'/>
        </p>
      </div>
      <div class="picture" align="center">
        <img src="${config.data[CT].picture3}">
      </div>
      <div class='babe-view-answer-container'>
        <p class='babe-view-text'>${config.data[CT].question1}
          <textarea id='textbox-input3' rows=1 cols=15 class='textbox-input'/>
        </p>
      </div>
      <div class='babe-view-answer-container'>
        <p class='babe-view-text'>${config.data[CT].question2}
          <textarea id='textbox-input4' rows=1 cols=15 class='textbox-input'/>
        </p>
      </div>
          <button id='next' class='babe-view-button babe-nodisplay'>next</button>
    </div>  `);
      //  <div class='babe-view-answer-container'> </div>
// height="42" width="42"
      //config, CT, babe, answer_container_generator, startingTime


        let next;
        let textInput1;
        let textInput2;
        let textInput3;
        let textInput4;

        const minChars = config.data[CT].min_chars === undefined ? 2 : config.data[CT].min_chars;

      //  $(".babe-view").append(answer_container_generator(config, CT));

        next = $("#next");
        textInput1 = $("#textbox-input1")
        textInput2 = $("#textbox-input2")
        textInput3 = $("#textbox-input3")
        textInput4 = $("#textbox-input4")
        textInput1.on("keyup", function() {
            // if the text is longer than (in this case) 10 characters without the spaces
            // the 'next' button appears
            if (textInput1.val().trim().length > minChars)  {
              textInput2.on("keyup", function() {
                if (textInput2.val().trim().length > minChars) {
                  textInput3.on("keyup", function() {
                    if (textInput3.val().trim().length > minChars) {
                      textInput4.on("keyup", function() {
                        if (textInput4.val().trim().length > minChars) {
                          // check response
                        //  if(textInput1.val().trim() === config.data[CT].correct1) {
                          //  alert("You are right!")
                            next.removeClass("babe-nodisplay");
                          //}

                        //  next.removeClass("babe-nodisplay");
                        }
                      })
                    }
                  });
                };
              });

            } else {
                next.addClass("babe-nodisplay");
            }
        });

        // the trial data gets added to the trial object
        next.on("click", function(startingTime) {
          check_response = function(data, next) {
             $('next').on('click', function() {
               if (data.correct1 === $('#textbox-input1')) {
                  alert('Your answer is correct!');
               } else {
                 alert('Sorry, this is incorrect! Please correct your response!');
               }
          })}
            const RT = Date.now() - startingTime; // measure RT before anything else
            let trial_data = {
                trial_name: config.name,
                trial_number: CT + 1,
                response1: textInput1.val().trim(),
                response2: textInput2.val().trim(),
                response3: textInput3.val().trim(),
                response4: textInput4.val().trim(),
                RT: RT
            };

            trial_data = babeUtils.view.save_config_trial_data(config.data[CT], trial_data);

            babe.trial_data.push(trial_data);
            babe.findNextView();
        });

      //  $('#textInput').on("click", handle_response);
        $('#next').on("click");
    },

};
return view;
};
