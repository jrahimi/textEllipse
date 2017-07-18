//Example of Hammer.js swipe: http://alpha.editor.p5js.org/yining/sketches/HyoEADcgx (but this one uses document.body which means swiping is enabled anywhere on the screen)  
//Example of Hammer.js swipe: http://jsfiddle.net/6jxbv/119/ (only moves box)

//Hammer.js Refrence Page: http://hammerjs.github.io/api/ 

//Instance Container (document.body) - https://p5js.org/examples/instance-mode-instance-container.html

//Content
var message = ["Miss *** that smile.",
  "Hurry up and move here.",
  "It was global disaporta.",
  "What do you have going on this weekend?.",
  "Same I'm going out tomorrow.",
  "What are you up to Saturday night? I'm down to get drinks.",
  "Where do you live?", "What do you do?",
  "That's amazing! What kind of music do you guys play?",
  "It's similar to Maroon 5, but a little more urban if that makes sense lol."
];

var message2 = ["What kind of dog do you have?",
  "So this will have to be a short bu furious romance ;)",
  "I'm a writer.",
  "So what are your plans for later?",
  "Well I was hoping to meet a charming young photographer for a drink.",
  "So what do we do now? (: x",
  "Right so where do you know that you can take me for a drink?",
  "Haha OK not too intimidating! Do you want to meet up for a drink?",
  "Really close friend of mine in IV. I actually have his name tattooed on me haha.",
  "Holy shit I totally remember that!"
];

//Speech
var theVoice = new p5.Speech('Google UK English Male'); // new P5.Speech object
theVoice.onStart = startSpeaking; //Speech start
theVoice.onEnd = endSpeaking; //Speech end
var speaking = false;

var conversation1;
var conversation2;

function setup() {
  createCanvas(800, 800);

  textFont("Times");
  textSize(20);
  textAlign(CENTER);
  smooth();
  var conversation1Colour = color(255, 255, 255);
  var conversation2Colour = color(255, 0, 0);

  conversation1 = new Conversation(message, conversation1Colour);
  conversation2 = new Conversation(message2, conversation2Colour);
}

function draw() {
  background(0);

  conversation1.update();
  conversation2.update();

  conversation1.draw();
  conversation2.draw();

  tabletFunctions();
}

function keyPressed() {
  if (keyCode == SHIFT) {
    if (!speaking) { //only speak if we are not already speaking
      //choose which conversation we want to start with
      var randomNumber = random();
      //console.log("The random number is: "+randomNumber);
      if (randomNumber > 0.5) {
        //console.log("Conversation 1 is about to say something");
        saySomething(conversation1);
      } else {
        //console.log("Conversation 2 is about to say something");
        saySomething(conversation2);
      }
    }
  }
}

function tabletFunctions() { //http://www.webdevbreak.com/episodes/touch-gestures-hammerjs/demo
  var swipeOptions = { dragLockToAxis: true, dragBlockHorizontal: true };
  var mc = new Hammer(document.body, swipeOptions); //document.body enables swipe to be detected anywhere on the screen
  mc.set({ enable: true }); //http://hammerjs.github.io/api/
  mc.on("swipeleft swiperight tap press", function(ev) { //gestures
    console.log(ev.type + "gesture detected.");
  });
  
  if (mc.on = conversation1.x && conversation1.y) {
    console.log("touch");
  }
 }

function saySomething(aConversation) {
  var randomIndexToThingToSay = Math.floor(random(aConversation.messages.length)); //https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Math/floor
  var thingToSay = aConversation.messages[randomIndexToThingToSay];

  //randomize voice and speak word:
  //theVoice.setVoice(Math.floor(random(theVoice.voices.length)));
  //console.log("I'm going to say "+thingToSay);
  theVoice.speak(thingToSay);
}

function startSpeaking() {
  //console.log("I'm starting to speak");
  speaking = true;
}

function endSpeaking() {
  //console.log("I've finished speaking");
  speaking = false;
}

function Conversation(someMessages, aColour) { //https://github.com/processing/p5.js/wiki/JavaScript-basics#using-parameters for how to make classes and constructors
  this.messages = someMessages; //Recieves conversation1 or conversation2 in the setup when class is initialized 
  this.colour = aColour; //Recieves conversation1Colour or conversation2Colour in the setup when class is initialized 
  this.positions = new Array(this.messages.length); //Array to hold messages (ellipses) positions
  this.velocities = new Array(this.messages.length); //Array to hold the velocity of each messages (ellipse)


  for (var i = 0; i < this.messages.length; i++) { //Moves all messages (ellipses) in random directions & assigns random positions and velocities 
    this.positions[i] = createVector(random(width / 2), random(height / 2)); //https://p5js.org/reference/#/p5.Vector
    this.velocities[i] = createVector(random(1), random(1)); //https://p5js.org/reference/#/p5/random
  }

  this.update = function() { //adds the positions and the velocities together to get animation
    for (var i = 0; i < this.messages.length; i++) { //for all the messages
      this.positions[i].add(this.velocities[i]); //add the velocity to the position to move it correctly on this frame

      if (this.positions[i].x > width || this.positions[i].x < 0) {
        //if the x position is to the left of the screen or to the right, flip the velocity so that it bounces back into view
        this.velocities[i].x *= -1;
      }

      if (this.positions[i].y > height || this.positions[i].y < 0) {
        //if the x position is to the left of the screen or to the right, flip the velocity so that it bounces back into view
        this.velocities[i].y *= -1;
      }
    }
  }

  this.draw = function() {
    for (var i = 0; i < this.messages.length; i++) { //for all the messages
      var currentMessage = this.messages[i]; //get the current message
      //console.log("We are looking at this message: "+message);
      var positionOfMessage = this.positions[i]; //get the current position
      var widthOfMessage = textWidth(currentMessage); //get width (length) of each message
      var radiusOfMessage = (widthOfMessage + 5) / (2 * PI); //equation for radius, 5 is added for a bit of padding
      var arcLength = 0;

      for (var j = 0; j < currentMessage.length; j++) { //for each message individually (which ever message is currently in the loop)
        var currentCharacter = currentMessage.charAt(j);
        var characterWidth = textWidth(currentCharacter); //gets the width (length) of each character

        arcLength += characterWidth / 2; //move along the arc, half the width of the character at a time
        var theta = PI + arcLength / radiusOfMessage; //theta (angle of change) is equal to PI (offset) + arclength

        push();
        translate((radiusOfMessage * cos(theta)) + positionOfMessage.x, (radiusOfMessage * sin(theta)) + positionOfMessage.y);
        rotate(theta + PI / 2); //rotates each letter accordingly around ellipse to create a more fluid circle 
        fill(this.colour); //gives each ellipse the color assigned during setup and initialization of the class 
        text(currentCharacter, 0, 0);
        pop();

        arcLength += characterWidth / 2; //move along the arc, half the width of the character at a time
      }
    }
  }
}