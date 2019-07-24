// In this file you can create your own custom view templates


// A view template is a function that returns a view,
// this functions gets some config (e.g. trial_data, name, etc.) information as input
// A view is an object, that has a name, CT (the counter of how many times this view occurred in the experiment),
// trials the maximum number of times this view is repeated
// and a render function, the render function gets CT and the babe-object as input
// and has to call babe.findNextView() eventually to proceed to the next view (or the next trial in this view),
// if it is an trial view it also makes sense to call babe.trial_data.push(trial_data) to save the trial information
const check_response = function(CT, textInput, correct, config) {
  if (correct.includes(textInput.val().trim().toLowerCase())) {
    return false;
  } else{
    return true;
  }

}

const custom_response_check = function(correct1, correct2, correct3) {
  var para1 = document.createElement("h4");
  var node1 = document.createTextNode("The correct answer is: " + correct1);
  para1.appendChild(node1);
  var element1 = document.getElementById("1");
  element1.appendChild(para1);

  var para2 = document.createElement("h4");
  var node2 = document.createTextNode("The correct answer is: " + correct2);
  para2.appendChild(node2);
  var element2 = document.getElementById("2");
  element2.appendChild(para2);

  var para3 = document.createElement("h4");
  var node3 = document.createTextNode("The correct answer is: " + correct3);
  para3.appendChild(node3);
  var element3 = document.getElementById("3");
  element3.appendChild(para3);

  var para4 = document.createElement("h4");
  var node4 = document.createTextNode("Please enter the correct labels to proceed.");
  para4.appendChild(node4);
  var element4 = document.getElementById("4");
  element4.appendChild(para4);



  return (element1.appendChild(para1),element2.appendChild(para2), element3.appendChild(para3),element3.appendChild(para3), element4.appendChild(para4))

};

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

        let next;
        let textInput;
        const minChars = config.data[CT].min_chars === undefined ? 2 : config.data[CT].min_chars;

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
      <div  class='babe-view-answer-container'>
        <p id='1' class='babe-view-text'>${config.data[CT].question1}
          <textarea id='textbox-input1' rows=1 cols=15 class='textbox-input'/>
        </p>
      </div>
      <div  class="picture" align="center">
        <img src="${config.data[CT].picture2}">
      </div>
      <div class='babe-view-answer-container'>
        <p id='2' class='babe-view-text'>${config.data[CT].question1}
          <textarea id='textbox-input2' rows=1 cols=15 class='textbox-input'/>
        </p>
      </div>
      <div  class='babe-view-answer-container'>
        <p id='3' class='babe-view-text'>${config.data[CT].question2}
          <textarea id='textbox-input3' rows=1 cols=15 class='textbox-input'/>
        <p id='4'></p>
        </p>
      </div>
          <button id='next' class='babe-view-button babe-nodisplay'>next</button>
    </div>  `);

        let next;
        let textInput1;
        let textInput2;
        let textInput3;


        const minChars = config.data[CT].min_chars === undefined ? 2 : config.data[CT].min_chars;

        next = $("#next");
        textInput1 = $("#textbox-input1")
        textInput2 = $("#textbox-input2")
        textInput3 = $("#textbox-input3")

      const input = function(textInput1, textInput2, textInput3) {
        if (textInput1.val().trim().length > minChars) {
          if (textInput2.val().trim().length > minChars) {
            if (textInput3.val().trim().length > minChars) {
              return true;
            }
          }
        } else {
          return false;
        }
      }
        textInput1.on("keyup", function() {
            // if the text is longer than (in this case) 10 characters without the spaces
            // the 'next' button appears
            if (textInput1.val().trim().length > minChars)  {
              textInput2.on("keyup", function() {
                if (textInput2.val().trim().length > minChars) {
                  textInput3.on("keyup", function() {
                    if (textInput3.val().trim().length > minChars) {
                        next.removeClass("babe-nodisplay");
                    }
                  });
                } else if (textInput3.val().trim().length > minChars) {
                    textInput2.on("keyup", function() {
                      if (textInput2.val().trim().length > minChars) {
                        next.removeClass("babe-nodisplay");
                       }
                    })
                };
              });
            } else if (textInput2.val().trim().length > minChars) {
              textInput1.on("keyup", function() {
                if (textInput1.val().trim().length > minChars) {
                  textInput3.on("keyup", function() {
                    if (textInput3.val().trim().length > minChars) {
                        next.removeClass("babe-nodisplay");
                    }
                  });
                } else if (textInput3.val().trim().length > minChars) {
                    textInput1.on("keyup", function() {
                      if (textInput1.val().trim().length > minChars) {
                        next.removeClass("babe-nodisplay");
                       }
                    })
                };
              });
            } else if (textInput3.val().trim().length > minChars) {
              textInput1.on("keyup", function() {
                if (textInput1.val().trim().length > minChars) {
                  textInput2.on("keyup", function() {
                    if (textInput2.val().trim().length > minChars) {

                          // check response
                            //alert("You are right!")
                        next.removeClass("babe-nodisplay");


                        //  next.removeClass("babe-nodisplay");

                    }
                  });
                } else if (textInput2.val().trim().length > minChars) {
                    textInput1.on("keyup", function() {
                      if (textInput1.val().trim().length > minChars) {
                        next.removeClass("babe-nodisplay");
                       }
                    })
                };
              });

            } else {
                next.addClass("babe-nodisplay");
            }
        });

        // the trial data gets added to the trial object
        next.on("click", function(startingTime) {

            if (check_response(CT, textInput1, config.data[CT].correct1, config)) {
              if (check_response(CT, textInput2,config.data[CT].correct2, config)) {
                if (check_response(CT, textInput3, config.data[CT].correct3, config)) {
                  custom_response_check(config.data[CT].correct1, config.data[CT].correct2, config.data[CT].correct3);
                }  else {
                  custom_response_check(config.data[CT].correct1, config.data[CT].correct2, config.data[CT].correct3);
                }
              } else {
                custom_response_check(config.data[CT].correct1, config.data[CT].correct2, config.data[CT].correct3);
              }
            } else if (check_response(CT, textInput2, config.data[CT].correct2, config)) {
              if (check_response(CT, textInput3, config.data[CT].correct3, config)) {
                custom_response_check(config.data[CT].correct1, config.data[CT].correct2, config.data[CT].correct3);
              } else {
                custom_response_check(config.data[CT].correct1, config.data[CT].correct2, config.data[CT].correct3);
              }
            } else if (check_response(CT, textInput3, config.data[CT].correct3, config)) {
              custom_response_check(config.data[CT].correct1, config.data[CT].correct2, config.data[CT].correct3);
            } else {
              const RT = Date.now() - startingTime; // measure RT before anything else
              let trial_data = {
                  trial_name: config.name,
                  trial_number: CT + 1,
                  response1: textInput1.val().trim(),
                  response2: textInput2.val().trim(),
                  response3: textInput3.val().trim(),
                  RT: RT
              };

              trial_data = babeUtils.view.save_config_trial_data(config.data[CT], trial_data);

              babe.trial_data.push(trial_data);
              babe.findNextView();
             }

        });

        $('#next').on("click");
    },

};
return view;
};

const custom_post_test_view = function(config) {
  const _survey = {
      name: config.name,
      title: config.title,
      text: config.text,
      render: function(CT, babe) {
          let startingTime;
          const viewTemplate = `
          <div class="babe-post-test-view">
              <h1 class="babe-view-title">${this.title}</h1>
              <section class="text-container">
                  <h4 style = "text-align:center;">${this.text}</p>
              </section>
              <form style = "margin-top:-50px">
              <p class = "babe-view-text" >
              <label for="understand">Did you read the instructions and do you think you completed the experiment correctly?</label>
              <select id="understand" name="understand">
                  <option></option>
                  <option value="yes" >Yes</option>
                  <option value="no">No</option>
                  <option value="confused">I was confused</option>
              </select>
          </p>
          <p class = "babe-view-text" >
              <label for="age">Age:</label>
              <input type="number" name="age" min="18" max="110" id="age" />
          </p>
          <p class = "babe-view-text" >
              <label for="sex">Sex:</label>
              <select id="sex" name="sex">
                  <option></option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
              </select>
          </p>
          <p class = "babe-view-text" >
              <label for="education">Level of Education:</label>
              <select id="education" name="education">
                  <option></option>
                  <option value="some_high_school">Some High School</option>
                  <option value="graduated_high_school">Graduated High School</option>
                  <option value="some_college">Some College</option>
                  <option value="graduated_college">Graduated College</option>
                  <option value="higher_degree">Higher Degree</option>
              </select>
          </p>
          <p class = "babe-view-text" >
              <label for="languages" name="languages">Native Languages: <br /><span>(i.e. the language(s) spoken at home when you were a child)</</span></label>
              <input type="text" id="languages"/>
          </p>
          <p class = "babe-view-text" >
              <label for="enjoyment">Did you enjoy the experiment?</label>
              <select id="enjoyment" name="enjoyment">
                  <option></option>
                  <option value="0">Worse than the Average Experiment</option>
                  <option value="1" >An Average Experiment</option>
                  <option value="2">Better than average Experiment</option>
              </select>
          </p>
          <p class = "babe-view-text" >
              <label for="fairprice">What do you think is a fair price for the work you did?</label>
              <input type="number" name="fairprice" min="0" max="100" id="fairprice" step="0.01"/>
          </p>
          <p class = "babe-view-text" >
              <label for="problems">Were there any problems or glitches in the experiment?</label>
              <textarea id="problems" rows="2" cols="50"></textarea>
          </p>
          <p class = "babe-view-text"  class="comment-sect">
              <label for="comments">Further comments</label>
              <textarea name="comments" id="comments"
              rows="6" cols="40"></textarea>
          </p>
              <button class = "babe-view-button" id="next">Finish</button>
              </form>
              </div>
          `;
          $("#main").html(viewTemplate);
          let next = $("#next");
          next.on("click", function() {
            babe.global_data.understand = $("#understand").val();
            babe.global_data.age = $("#age").val();
            babe.global_data.sex = $("#sex").val();
            babe.global_data.education = $("#education").val();
            babe.global_data.languages = $("#languages").val();
            babe.global_data.enjoyment = $("#enjoyment").val();
            babe.global_data.problems = $("#problems").val().trim();
            babe.global_data.fairprice = $("#fairprice").val();
            babe.global_data.comments = $("#comments").val().trim();
            babe.findNextView();
          });
          startingTime = Date.now();
      },
      CT: 0,
      trials: config.trials
  };
  return _survey;
};

const custom_intro_view = function(config) {
  const view = {
      name: config.name,
      title: config.title,
    //  text: config.text,
      render: function(CT, babe) {
          let startingTime;
          const viewTemplate = `
          <div class='babe-view'>
          <h1 class='babe-view-title'>Welcome!</h1>
          <div class="picture" align="center">
            <img src="${config.picture1}">
          </div>
          <section class="babe-text-container">
            <p class="babe-view-text">By continuing, you are participating in a study being performed by cognitive scientists in the MIT Computational Psycholinguistics Lab. If you have questions about this research, please contact Polina Tsvilodub, at <a href="mailto:polinats@mit.edu">polinats@mit.edu</a>, or MH Tessler, at tessler@mit.edu. You must be at least 18 years old to participate. Your participation in this research is voluntary. You may decline to answer any or all of the following questions. You may decline further participation, at any time, without adverse consequences. Your anonymity is assured; the researchers who have requested your participation will not receive any personal information about you.
             </p>
          </section>
          <button class = "babe-view-button" id="next">Go To Trials</button>
          </div>
          `;
          $("#main").html(viewTemplate);
          let next = $("#next");
          next.on("click", function() {
            babe.findNextView();
          });
          startingTime = Date.now();
      },
      CT: 0,
      trials: config.trials
  };
  return view;
};
