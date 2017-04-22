float[] xpos, ypos, xpos2, ypos2; // Starting position of shape  

float xspeed = 1.8;  // Speed of the shape
float yspeed = 1.2;  // Speed of the shape

float[] xdirection, ydirection, xdirection2, ydirection2; //Direction of the shape

//Text
String m, m2; 
String[] message = {"Miss *** that smile.", 
  "Hurry up and move here.", 
  "It was global disaporta.", 
  "What do you have going on this weekend?.", 
  "Same I'm going out tomorrow.", 
  "What are you up to Saturday night? I'm down to get drinks.", 
  "Where do you live?", "What do you do?", 
  "That's amazing! What kind of music do you guys play?", 
  "It's similar to Maroon 5, but a little more urban if that makes sense lol."}; 

String[] message2 = {"What kind of dog do you have?", 
  "So this will have to be a short bu furious romance ;)", 
  "I'm a writer.", 
  "So what are your plans for later?", 
  "Well I was hoping to meet a charming young photographer for a drink.", 
  "So what do we do now? (: x", 
  "Right so where do you know that you can take me for a drink?", 
  "Haha OK not too intimidating! Do you want to meet up for a drink?", 
  "Really close friend of mine in IV. I actually have his name tattooed on me haha.", 
  "Holy shit I totally remember that!", 
};

PFont f; 

float len, r, len2, r2; //Calculates the radius of the text ellipse

int value = 0;

void setup() {
  size(800, 800);
  //fullScreen();
  //frameRate(120);

  xpos = new float[message.length];
  ypos = new float[message.length];

  xpos2 = new float[message2.length];
  ypos2 = new float[message2.length];

  xdirection = new float[message.length];
  ydirection = new float[message.length];

  xdirection2 = new float[message2.length];
  ydirection2 = new float[message2.length];

  for (int i = 0; i < message.length; i++) {
    xpos[i] = random(width/2);
    ypos[i] = random(height/2);

    xdirection[i] = random(1);
    ydirection[i] = random(1);

    m = message[i];
  }

  for (int i = 0; i < message2.length; i++) {
    xpos2[i] = random(width/2);
    ypos2[i] = random(height/2);

    xdirection2[i] = random(1);
    ydirection2[i] = random(1);

    m2 = message2[i];
  }
}

void draw() {
  background(0);

  for (int i = 0; i < message.length; i++) {
    move(i);
    display(i);
    m = message[i];
  }

  for (int i = 0; i < message2.length; i++) {
    move2(i);
    display2(i);
    m2 = message2[i];
  }
}

void move(int i) {
  xpos[i] += (xspeed * xdirection[i]);
  ypos[i] += (yspeed * ydirection[i]);

  if (xpos[i] > width - r || xpos[i] < r) {
    xdirection[i] *= -1;
  }
  if (ypos[i] > height - r || ypos[i] < r) {
    ydirection[i] *= -1;
  }
}

void move2(int i) {
  xpos2[i] += (xspeed * xdirection2[i]);
  ypos2[i] += (yspeed * ydirection2[i]);

  if (xpos2[i] > width - r2 || xpos2[i] < 0) {
    xdirection2[i] *= -1;
  }
  if (ypos2[i] > height - r2 || ypos[i] < 0) {
    ydirection2[i] *= -1;
  }
}

void display(int i) {
  f = createFont("Times", 20, true);
  textFont(f);
  textAlign(CENTER);
  smooth();

  float w;
  float arclength = 0;

  float xp = xpos[i];
  float yp = ypos[i];

  for (int j = 0; j < m.length(); j++) {
    len = textWidth(m);
    r = (len + 5)/(2*PI); //equation for radius

    char currentChar = m.charAt(j); 
    w = textWidth(currentChar);
    arclength += w/2;
    float theta = PI + arclength / r; 

    pushMatrix();
    translate((r*cos(theta)) + xp, (r*sin(theta)) + yp); 
    rotate(theta+PI/2); 
    fill(255);
    text(currentChar, 0, 0); 
    popMatrix();

    arclength += w/2;
  }

  if (mouseX > xpos[i] && mouseX < xpos[i] + r && 
    mouseY > ypos[i] && mouseY < ypos[i] + r) {
    xdirection[i] *= -1;
    ydirection[i] *= -1;
  }
}

void display2(int i) {
  f = createFont("Times", 20, true);
  textFont(f);
  textAlign(CENTER);
  smooth();

  float w;
  float arclength = 0;

  float xp = xpos2[i];
  float yp = ypos2[i];

  for (int j = 0; j < m2.length(); j++) {
    len2 = textWidth(m2);
    r2 = (len2 + 5)/(2*PI); //equation for radius

    char currentChar = m2.charAt(j); 
    w = textWidth(currentChar);
    arclength += w/2;
    float theta = PI + arclength / r2; 

    pushMatrix();
    translate((r2*cos(theta)) + xp, (r2*sin(theta)) + yp); 
    rotate(theta+PI/2); 
    fill(255, 0, 0);
    text(currentChar, 0, 0); 
    popMatrix();

    arclength += w/2;
  } 

  //if (mouseX > xpos2[i] && mouseX < xpos2[i] + r || mouseY > ypos2[i] && mouseY < ypos2[i] + r) {
  //  xp = mouseX;
  //  yp = mouseY;
  //}
}