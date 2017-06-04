var xpos, ypos, xpos2, ypos2 = []; // Starting position of shape  

var xspeed = 1.8;  // Speed of the shape
var yspeed = 1.2;  // Speed of the shape

var xdirection, ydirection, xdirection2, ydirection2; //Direction of the shape

//Text
var m, m2 = []; 
var message = ["Miss *** that smile.", 
  "Hurry up and move here.", 
  "It was global disaporta.", 
  "What do you have going on this weekend?.", 
  "Same I'm going out tomorrow.", 
  "What are you up to Saturday night? I'm down to get drinks.", 
  "Where do you live?", "What do you do?", 
  "That's amazing! What kind of music do you guys play?", 
  "It's similar to Maroon 5, but a little more urban if that makes sense lol."]; 

var message2 = ["What kind of dog do you have?", 
  "So this will have to be a short bu furious romance ;)", 
  "I'm a writer.", 
  "So what are your plans for later?", 
  "Well I was hoping to meet a charming young photographer for a drink.", 
  "So what do we do now? (: x", 
  "Right so where do you know that you can take me for a drink?", 
  "Haha OK not too intimidating! Do you want to meet up for a drink?", 
  "Really close friend of mine in IV. I actually have his name tattooed on me haha.", 
  "Holy shit I totally remember that!"];

//new p5.Font ([f]); 

var len, r, len2, r2; //Calculates the radius of the text ellipse

var value = 0;

var myVoice = new p5.Speech(); // new P5.Speech object
var iptr = 0; // a counter for the words

function setup() {
  createCanvas(800, 800);
  myVoice.speak('hi there');
  //fullScreen();
  //frameRate(120);

  xpos = new Array(message.length);
  ypos = new Array(message.length);

  xpos2 = new Array(message2.length);
  ypos2 = new Array(message2.length);

  xdirection = new Array(message.length);
  ydirection = new Array(message.length);

  xdirection2 = new Array(message2.length);
  ydirection2 = new Array(message2.length);

  for (var i = 0; i < message.length; i++) {
    xpos[i] = random(width/2);
    ypos[i] = random(height/2);

    xdirection[i] = random(1);
    ydirection[i] = random(1);

    m = message[i];
  }

  for (var j = 0; j < message2.length; j++) {
    xpos2[j] = random(width/2);
    ypos2[j] = random(height/2);

    xdirection2[j] = random(1);
    ydirection2[j] = random(1);

    m2 = message2[j];
  }
}

function draw() {
  background(0);

  for (var i = 0; i < message.length; i++) {
    move(i);
    display(i);
    m = message[i];
  }

  for (var j = 0; j < message2.length; j++) {
    move2(j);
    display2(j);
    m2 = message2[j];
  }
}

function move(i) {
  xpos[i] += (xspeed * xdirection[i]);
  ypos[i] += (yspeed * ydirection[i]);

  if (xpos[i] > width - r || xpos[i] < r) {
    xdirection[i] *= -1;
  }
  if (ypos[i] > height - r || ypos[i] < r) {
    ydirection[i] *= -1;
  }
}

function move2(i) {
  xpos2[i] += (xspeed * xdirection2[i]);
  ypos2[i] += (yspeed * ydirection2[i]);

  if (xpos2[i] > width - r2 || xpos2[i] < 0) {
    xdirection2[i] *= -1;
  }
  if (ypos2[i] > height - r2 || ypos2[i] < 0) {
    ydirection2[i] *= -1;
  }
}

function display(i) {
  //f = textFont("Times", 20, true);
  //textFont(f);
  textFont("Times");
  textSize(20);
  textAlign(CENTER);
  smooth();

  var w;
  var arclength = 0;

  var xp = xpos[i];
  var yp = ypos[i];

  for (var j = 0; j < m.length; j++) {
    //text += possible.charAt(Math.floor(Math.random() * possible.length));
    len = textWidth(m);
    r = (len + 5)/(2*PI); //equation for radius

    var currentChar = m.charAt(j); 
    w = textWidth(currentChar);
    arclength += w/2;
    var theta = PI + arclength / r; 

    push();
    translate((r*cos(theta)) + xp, (r*sin(theta)) + yp); 
    rotate(theta+PI/2); 
    fill(255);
    text(currentChar, 0, 0); 
    pop();

    arclength += w/2;
  }

  if (mouseX > xpos[i] && mouseX < xpos[i] + r && 
    mouseY > ypos[i] && mouseY < ypos[i] + r) {
    xdirection[i] *= -1;
    ydirection[i] *= -1;
  }
}

function display2(i) {
  //f = textFont("Times", 20, true);
  //textFont(f);
  textFont("Times");
  textSize(20);
  textAlign(CENTER);
  smooth();

  var w;
  var arclength = 0;

  var xp = xpos2[i];
  var yp = ypos2[i];

  for (var j = 0; j < m2.length; j++) {
    len2 = textWidth(m2);
    r2 = (len2 + 5)/(2*PI); //equation for radius

    var currentChar = m2.charAt(j); 
    w = textWidth(currentChar);
    arclength += w/2;
    var theta = PI + arclength / r2; 

    push();
    translate((r2*cos(theta)) + xp, (r2*sin(theta)) + yp); 
    rotate(theta+PI/2); 
    fill(255, 0, 0);
    text(currentChar, 0, 0); 
    pop();

    arclength += w/2;
  } 
  
//   	function mousePressed()
// 	{
// 		// if in bounds:
// 		//if(mousePressed) {
// 	if(mouseX<width && mouseY<height) {
// 			// randomize voice and speak word:
// 			myVoice.setVoice(Math.floor(random(myVoice.voices.length)));
// 			myVoice.speak(message[iptr]);
// 			iptr = (iptr+1) % message.length; // increment
// 		}
// 	}

  //if (mouseX > xpos2[i] && mouseX < xpos2[i] + r || mouseY > ypos2[i] && mouseY < ypos2[i] + r) {
  //  xp = mouseX;
  //  yp = mouseY;
  //}
}