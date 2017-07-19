/*
Hammer.js: http://hammerjs.github.io

GitHub:
hammer.js/Hammer.js: https://github.com/hammerjs/hammer.js/tree/master/tests/manual
hammerjs/jquery.hammer.js: https://github.com/hammerjs/jquery.hammer.js
thebird/Swipe: https://github.com/thebird/Swipe
colinbdclark/osc.js: https://github.com/colinbdclark/osc.js/
genekogan/p5js-osc: https://github.com/genekogan/p5js-osc

Examples: 
  Has a bunnch of Examples: http://codeforartists.com
  
  Hammer.js Examples: 
    Example of Hammer.js swipe: http://alpha.editor.p5js.org/yining/sketches/HyoEADcgx (but this one uses document.body which means swiping is enabled anywhere on the screen)  
    Example of Hammer.js swipe: http://jsfiddle.net/6jxbv/119/ (only moves box)
    Example of Hammer.js gestures: https://codepen.io/runspired/full/ZQBGWd
    Example of Hammer.js swipe velocity: http://alpha.editor.p5js.org/projects/rkOj4bueg
    Example of Hammer.js swipe image: http://alpha.editor.p5js.org/yining/sketches/H1qyGcYex
    Example of Hammer.js gesture detection: http://alpha.editor.p5js.org/projects/HyEDRsPel,
      https://codepen.io/jtangelder/pen/lgELw
    Example of Hammer.js swipe single box: http://jsfiddle.net/6jxbv/119/
    Example of Hammer.js swipe one in a line: http://www.webdevbreak.com/episodes/touch-gestures-hammerjs/demo,
      http://www.webdevbreak.com/episodes/touch-gestures-hammerjs,
      http://www.webdevbreak.com/episodes/touch-gestures-hammerjs-2
    Example of Hammer.js swipe and drag: http://jsfiddle.net/gilbertolenzi/uZjCB/208/
  
  p5.js Examples: 
    Example of p5.js ("Soft Body") node: https://p5js.org/examples/simulate-soft-body.html
    Example of writing text on canvas: http://jsfiddle.net/amaan/WxmQR/1/
    Example of createImage(): https://p5js.org/examples/image-create-image.html
    Example of createGraphics(): https://p5js.org/examples/structure-create-graphics.html
    Example of drawTarget(): https://p5js.org/examples/structure-functions.html
    Example of p5.js Objects: https://p5js.org/examples/objects-objects.html
    Example of p5.js Interactivity: https://p5js.org/examples/hello-p5-interactivity-1.html
    p5.js List of Examples: https://p5js.org/examples/

Reference Pages: 
  Processing Strings and Drawing Text: https://processing.org/tutorials/text/
  Daniel Shiffman "Programming from A to Z": http://shiffman.net/a2z/intro/
  OSC Simple Guide: https://www.jroehm.com/2015/10/a-simple-guide-to-use-osc-in-the-browser/
  
  p5.js Reference Pages: 
    p5.js Refrence Page: https://p5js.org/reference/
    p5.js Overview: https://github.com/processing/p5.js/wiki/p5.js-overview
    Beyond the Canvas (pointers, createCanvas, createElement, etc.): https://github.com/processing/p5.js/wiki/Beyond-the-canvas
    Convert Text to Images with JavaScript: https://www.shift8web.ca/blog/convert-text-image-javascript-html5/,
      https://ctrlq.org/code/20056-convert-text-to-images-with-javascript
  
  Hammer.js Refrence Pages: http://hammerjs.github.io/api/, 
    https://github.com/hammerjs/hammer.js/issues/241, 
    http://hammerjs.github.io/tips/,
    https://github.com/hammerjs/hammer.js/wiki/Getting-Started,
    https://github.com/hammerjs/hammer.js/tree/master/
    https://github.com/hammerjs/hammer.js/wiki/Tips-&-Tricks#horizontal-swipe-and-drag
  
  DOM Refrence Pages:
    Intro to DOM manipulation and events: https://github.com/processing/p5.js/wiki/Intro-to-DOM-manipulation-and-events
    p5.dom: https://p5js.org/reference/#/libraries/p5.dom


Specific Reference Pages: 
  JSON Specific Refrence Pages: 
    JSON: https://www.w3schools.com/js/js_json_html.asp
    
  DOM Specific Refrence Pages: 
    DOM Style Left: https://www.w3schools.com/jsref/prop_style_left.asp
  
  Node Specific Refrence Pages: 
    Node.js: https://www.w3schools.com/nodejs/nodejs_intro.asp
  
  CSS Specific Refrence Pages: 
    CSS Text: https://www.w3schools.com/css/css_text.asp
    Pointer Events: https://developer.mozilla.org/en-US/docs/Web/CSS/pointer-events
    user-select: https://developer.mozilla.org/en-US/docs/Web/CSS/user-select
    
  HTML Specific Refrence Pages: 
    HTML5 Canvas: https://www.w3schools.com/html/html5_canvas.asp
    HTML <ul>: https://www.w3schools.com/tags/tag_ul.asp
    HTMLElements: https://www.w3schools.com/html/html_elements.asp,
      https://developer.mozilla.org/en/docs/Web/API/HTMLElement
    HTML <div> Tag: https://www.w3schools.com/tags/tag_div.asp
    HTML Event Attributes: https://www.w3schools.com/tags/ref_eventattributes.asp
    HTML Global Attributes: https://www.w3schools.com/tags/ref_standardattributes.asp
    HTML Class Attribute: https://www.w3schools.com/html/html_classes.asp
    HTML id Attribute: https://www.w3schools.com/tags/att_global_id.asp
    HTML DOM Style Object: https://www.w3schools.com/jsref/dom_obj_style.asp
    Style clip Property: https://www.w3schools.com/jsref/prop_style_clip.asp
    Style animationFillMode Property: https://www.w3schools.com/jsref/prop_style_animationfillmode.asp
    Style animation Property: https://www.w3schools.com/jsref/prop_style_animation.asp
    Style position Property: https://www.w3schools.com/jsref/prop_style_position.asp
    document.getElementById(): https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementById
    document.querySelectorAll(): https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelectorAll
    document.getElementsByClassName(): https://developer.mozilla.org/en/docs/Web/API/Document/getElementsByClassName
    KeyboardEvent keyCode Property: https://www.w3schools.com/jsref/event_key_keycode.asp
    
  p5.js Specific Refrence Pages: 
    touchStarted(): https://p5js.org/reference/#/p5/touchStarted
    select(): https://p5js.org/reference/#/p5/select
    push(): https://p5js.org/reference/#/p5/push
    p5.Element: https://p5js.org/reference/#/p5.Element
    selectAll(): https://p5js.org/reference/#/p5/selectAll
    Instance Container (document.body): https://p5js.org/examples/instance-mode-instance-container.html
    createGraphics(): https://p5js.org/reference/#/p5/createGraphics
    createDiv(): https://p5js.org/reference/#/p5/createDiv
    createImage(): https://www.w3schools.com/jsref/prop_style_position.asp
    Positioning your canvas: https://github.com/processing/p5.js/wiki/Positioning-your-canvas
    .offSet(): http://api.jquery.com/offset/
    JavaScript HTML DOM Elements: https://www.w3schools.com/js/js_htmldom_elements.asp
    event.target: https://api.jquery.com/event.target/
    
  Hammer.js Specific Refrence Pages: 
    Hammer Positions: https://github.com/hammerjs/hammer.js/issues/577
    Hammer.Manager: https://hammerjs.github.io/jsdoc/Manager.html
    Hammer.Swipe(options): http://hammerjs.github.io/recognizer-swipe/
    Touch-Action: https://developer.mozilla.org/en-US/docs/Web/CSS/touch-action, 
      http://hammerjs.github.io/touch-action/
    
Forums: 
  Hammer.js Forums: 
    How to use Hammer to swipe: https://stackoverflow.com/questions/16873981/how-to-use-hammer-to-swipe
    Hammer.js get DOM object where event was attached: https://stackoverflow.com/questions/29984702/hammer-js-get-dom-object-where-event-was-attached
    How to return X and Y coordinates when using jquery.hammer.js: https://stackoverflow.com/questions/17391478/how-to-return-x-and-y-coordinates-when-using-jquery-hammer-js
    e.center.x & y same as element .left/.top in Hammer.js 2.0?: https://stackoverflow.com/questions/17391478/how-to-return-x-and-y-coordinates-when-using-jquery-hammer-js
    Is there a deltaX/deltaY of last event fire?: https://github.com/hammerjs/hammer.js/issues/414

  HTML/CSS Forums: 
    Calling CSS in JavaScript: https://www.sitepoint.com/community/t/calling-css-in-javascript/7199
    How to create a <style> tag with JavaScript: https://stackoverflow.com/questions/524696/how-to-create-a-style-tag-with-javascript
    Is there anyway that I can give a div a function in p5.js: https://github.com/processing/p5.js/wiki/Positioning-your-canvas
    
  p5.js Forums: 
    What's the best way to generate image from text using JavaScript and HTML5 APIs?: https://hashnode.com/post/whats-the-best-way-to-generate-image-from-text-using-javascript-and-html5-apis-cik6k8rbj01izxy53619llzzp
    How can I generate an image based on text and CSS?: https://stackoverflow.com/questions/17618574/how-can-i-generate-an-image-based-on-text-and-css
    Equivalent of pTouchX/Y for objects in 'touches[]': https://github.com/processing/p5.js/issues/1478
    Array of Images p5.js: https://stackoverflow.com/questions/40652443/array-of-images-p5-js
*/

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