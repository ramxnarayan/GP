var Engine = Matter.Engine;
var World = Matter.World;
var Bodies = Matter.Bodies;
var Body = Matter.Body;
var engine;
var table;
var wallA;
var wallB;
var wallC;
var wallD;
var canvasWidth, canvasHeight;
var tableWidth, tableHeight;
var pocketRadius;
var redBall = [];
var coloredBalls = [];
var cueBall;
var cueBallPlaced = false;
var cue;
var cueIsActive = false;
var distCueTipAndBall;
var Vector = Matter.Vector;
function setup() {
    canvasWidth = 1100;
    canvasHeight = 800;
    createCanvas(canvasWidth, canvasHeight)
    tableWidth = 900;
    tableHeight = tableWidth/2;
    pocketRadius = tableHeight/36;
    engine = Engine.create();
    engine.gravity.y = 0;
    engine.gravity.x = 0;
    let c = color(255, 0, 0);
    let yellow = color(255, 255, 0);
    let green = color(0, 255, 0);
    let brown = color(255, 150, 0);
    let blue = color(0, 0, 255);
    let pink = color(255, 0, 205);
    let black = color(0, 0, 0);
    let white = color(255, 255, 255);
    let r = tableHeight/36 * 0.75
    redBall[0] = new Ball(canvasWidth/2 + tableWidth/4, canvasHeight/2, c, 1, {restitution: 0.9, friction: 0.02, frictionAir: 0.01, density: 0.002});
    redBall[1] = new Ball(canvasWidth/2 + tableWidth/4 + 2*r, canvasHeight/2 + r, c, 1, {restitution: 0.9, friction: 0.02, frictionAir: 0.01, density: 0.002});
    redBall[2] = new Ball(canvasWidth/2 + tableWidth/4 + 2*r, canvasHeight/2 - r, c, 1, {restitution: 0.9, friction: 0.02, frictionAir: 0.01, density: 0.002});
    redBall[3] = new Ball(canvasWidth/2 + tableWidth/4 + 4*r, canvasHeight/2 + 2*r, c, 1, {restitution: 0.9, friction: 0.02, frictionAir: 0.01, density: 0.002});
    redBall[4] = new Ball(canvasWidth/2 + tableWidth/4 + 4*r, canvasHeight/2, c, 1, {restitution: 0.9, friction: 0.02, frictionAir: 0.01, density: 0.002});
    redBall[5] = new Ball(canvasWidth/2 + tableWidth/4 + 4*r, canvasHeight/2 - 2*r, c, 1, {restitution: 0.9, friction: 0.02, frictionAir: 0.01, density: 0.002});
    redBall[6] = new Ball(canvasWidth/2 + tableWidth/4 + 6*r, canvasHeight/2 + r, c, 1, {restitution: 0.9, friction: 0.02, frictionAir: 0.01, density: 0.002});
    redBall[7] = new Ball(canvasWidth/2 + tableWidth/4 + 6*r, canvasHeight/2 + 3*r, c, 1, {restitution: 0.9, friction: 0.02, frictionAir: 0.01, density: 0.002});
    redBall[8] = new Ball(canvasWidth/2 + tableWidth/4 + 6*r, canvasHeight/2 - 3*r, c, 1, {restitution: 0.9, friction: 0.02, frictionAir: 0.01, density: 0.002});
    redBall[9] = new Ball(canvasWidth/2 + tableWidth/4 + 6*r, canvasHeight/2 - r, c, 1, {restitution: 0.9, friction: 0.02, frictionAir: 0.01, density: 0.002});
    redBall[10] = new Ball(canvasWidth/2 + tableWidth/4 + 8*r, canvasHeight/2 + 4*r, c, 1, {restitution: 0.9, friction: 0.02, frictionAir: 0.01, density: 0.002});
    redBall[11] = new Ball(canvasWidth/2 + tableWidth/4 + 8*r, canvasHeight/2 + 2*r, c, 1, {restitution: 0.9, friction: 0.02, frictionAir: 0.01, density: 0.002});
    redBall[12] = new Ball(canvasWidth/2 + tableWidth/4 + 8*r, canvasHeight/2, c, 1, {restitution: 0.9, friction: 0.02, frictionAir: 0.01, density: 0.002});
    redBall[13] = new Ball(canvasWidth/2 + tableWidth/4 + 8*r, canvasHeight/2 - 2*r, c, 1, {restitution: 0.9, friction: 0.02, frictionAir: 0.01, density: 0.002});
    redBall[14] = new Ball(canvasWidth/2 + tableWidth/4 + 8*r, canvasHeight/2 - 4*r, c, 1, {restitution: 0.9, friction: 0.02, frictionAir: 0.01, density: 0.002});

// yellow (2 points), green (3), brown (4), blue (5), pink (6), black (7).
    x = canvasWidth/2-tableWidth/3.5
    y = canvasHeight/2-tableHeight/2+14
    coloredBalls[0] = new Ball(x, y + tableWidth/4.25 + 75, yellow, 2, {restitution: 0.9, friction: 0.02, frictionAir: 0.01, density: 0.002});
    coloredBalls[1] = new Ball(x, y + tableWidth/4.25, green, 3, {restitution: 0.9, friction: 0.02, frictionAir: 0.01, density: 0.002});
    coloredBalls[2] = new Ball(x, y + tableWidth/4.25 - 75, brown, 4, {restitution: 0.9, friction: 0.02, frictionAir: 0.01, density: 0.002});
    coloredBalls[3] = new Ball(canvasWidth/2, canvasHeight/2, blue, 5, {restitution: 0.9, friction: 0.02, frictionAir: 0.01, density: 0.002});
    coloredBalls[4] = new Ball(canvasWidth/2 + tableWidth/4-20, canvasHeight/2, pink, 6, {restitution: 0.9, friction: 0.02, frictionAir: 0.01, density: 0.002});
    coloredBalls[5] = new Ball(canvasWidth/2 + 3*tableWidth/8+40, canvasHeight/2, black, 7, {restitution: 0.9, friction: 0.02, frictionAir: 0.01, density: 0.002});
    cueBall = new Ball(x-30, y + tableWidth/4.25, white, 0, {restitution: 0.9, friction: 0.02, frictionAir: 0.01, density: 0.002})
    //World.add(engine.world, [redBall, coloredBalls, cueBall]);
    setupTable();
    setupWalls();
    setupSquares();
    setupPockets();
    setupCushions();
    cue = new CueStick(x,y);
}

function draw() {
    background(255);
    Engine.update(engine);
    drawTable();
    drawWalls();
    drawSquares();
    drawPockets();
    drawDAndLine();
    noStroke();
    drawCushions();
    for(i = 0; i < 15; i++) {
        redBall[i].draw();
    }
    for(i = 0; i < 6; i++) {
        coloredBalls[i].draw();
    }
    if (cueBallPlaced == true) {
        cueBall.draw();
        text("Press C to pick up the cue stick", 10, 20);
    }
    else {
        // text("Place the cue ball within the D area", 10, 20);
    }

    
    if(keyIsDown(49)) {
        cueIsActive = true;
    }

    if (cueIsActive == true) {
        cue.setAtLocation (mouseX, mouseY);
        cue.draw();
        cuePos = cue.body.position;
        cueBallPos = cueBall.body.position;
        Matter.Body.setVelocity(cueBall.body, {x:25, y:0});

        // // Calculate the vector between the two balls
        // const collisionVector = Matter.Vector.sub(cueBallPos, cuePos);
        // // Calculate the distance between the centers
        // const distance = Matter.Vector.magnitude(collisionVector);

        // // Check if they are colliding (distance <= sum of radii)
        // const combinedRadii = cue.r + cueBall.r;
        // console.log("distance: ", distance);
        // console.log("combined radius", combinedRadii);
        // //if (distance <= combinedRadii) {
        //     // Normalize the collision vector to get the direction
        //     const forceDirection = Matter.Vector.normalise(collisionVector);
  
        //     forceMagnitude = 0.05;
        //     // Scale the direction vector to the desired force magnitude
        //     const force = Matter.Vector.mult(forceDirection, forceMagnitude);
        //     //alert("a");
        //     // Apply the force to the second ball
        //     // Matter.Body.applyForce(cueBall.body, cueBall.body.position, force);
        //     Matter.Body.setVelocity(cueBall.body, {x:25, y:0});
        // //}

    }


}

function mousePressed() {
    if ((cueIsActive == false) && (checkIfCueBallWithinD(mouseX, mouseY) == true)) {
        cueBall.setAtLocation(mouseX, mouseY)
        cueBallPlaced = true;
    }



}

function checkIfCueBallWithinD(x, y) {
    if ((dist(x, y, canvasWidth/2-tableWidth/3.5, canvasHeight/2-tableHeight/2+14 + tableWidth/4.25) <= 75) && x <= canvasWidth/2-tableWidth/3.5) {
        return(true);
    

    }


}

function drawVertices(vertices) {
    beginShape();
    for (var i = 0; i < vertices.length; i++) {
        vertex(vertices[i].x, vertices[i].y)
    }
    endShape(CLOSE);
}




function setupTable() {
    noStroke();
    table = Bodies.rectangle(canvasWidth/2, canvasHeight/2, tableWidth, tableHeight, {isStatic: true, angle: 0});
    World.add(engine.world, [table]);
}

function setupWalls() {
    noStroke();
    x = canvasWidth/2
    y = canvasHeight/2 - tableHeight/2 - 5
    wallA = Bodies.rectangle(x, y, tableWidth + 10, 15, {isStatic: true}); //Top    
    y = canvasHeight/2 + tableHeight/2 + 5   
    wallB = Bodies.rectangle(x, y, tableWidth + 10, 15, {isStatic: true, angle: 0}); //Bottom
    x = canvasWidth/2 - tableWidth/2 - 5;
    y = canvasHeight/2;
    wallC = Bodies.rectangle(x, y, 15, tableHeight, {isStatic: true, angle: 0}); //Left
    x = canvasWidth/2 + tableWidth/2 + 5
    wallD = Bodies.rectangle(x, y, 15, tableHeight, {isStatic: true, angle: 0}); //Right
    World.add(engine.world, [wallA, wallB, wallC, wallD]);

}

function setupPockets() {
    noStroke();
    x = canvasWidth/2 - tableWidth/2 + 7.5;
    y = canvasHeight/2 - tableHeight/2 + 7.5;
    pocket1 = Bodies.circle(x, y, pocketRadius, {isStatic: true})
    x = canvasWidth/2
    y = canvasHeight/2 - tableHeight/2
    pocket2 = Bodies.circle(x, y, pocketRadius, {isStatic: true})
    x = canvasWidth/2 + tableWidth/2 -7.5;
    y = canvasHeight/2 - tableHeight/2 + 7.5;
    pocket3 = Bodies.circle(x, y, pocketRadius, {isStatic: true})
    x = canvasWidth/2 - tableWidth/2 + 7.5;
    y = canvasHeight/2 + tableHeight/2 - 7.5;
    pocket4 = Bodies.circle(x, y, pocketRadius, {isStatic: true})
    x = canvasWidth/2
    y = canvasHeight/2 + tableHeight/2
    pocket5 = Bodies.circle(x, y, pocketRadius, {isStatic: true})
    x = canvasWidth/2 + tableWidth/2 - 7.5
    y = canvasHeight/2 + tableHeight/2 - 7.5;
    pocket6 = Bodies.circle(x, y, pocketRadius, {isStatic: true})
    World.add(engine.world, [pocket1, pocket2, pocket3, pocket4, pocket5, pocket6]);
}

function setupSquares() {
    noStroke();
    x = canvasWidth/2 - tableWidth/2 + 1.5
    y = canvasHeight/2 - tableHeight/2 + 7.5
    square1 = Bodies.rectangle(x , y-6, 28, 28, {isStatic: true, chamfer: {radius: [10,0,0,0]}});
    x = canvasWidth/2
    square2 = Bodies.rectangle(x, y-12, 30, 16, {isStatic: true})
    x = canvasWidth/2 + tableWidth/2 - 7.5
    square3 = Bodies.rectangle(x+6, y-6, 28, 28, {isStatic: true, chamfer: {radius: [0,10,0,0]}})
    x = canvasWidth/2 - tableWidth/2 + 7.5
    y = canvasHeight/2 + tableHeight/2 -7.5
    square4 = Bodies.rectangle(x-6, y+6, 28, 28, {isStatic: true, chamfer: {radius: [0,0,0,10]}})
    x = canvasWidth/2
    square5 = Bodies.rectangle(x, y+12, 30, 16, {isStatic: true})
    x = canvasWidth/2 + tableWidth/2 -7.5
    square6 = Bodies.rectangle(x+6, y+6, 28, 28, {isStatic: true, chamfer: {radius: [0,0,10,0]}})
    World.add(engine.world, [square1, square2, square3, square4, square5, square6]);
}

function setupCushions() {
    noStroke();
    x = canvasWidth/2 - tableWidth/4
    y = canvasHeight/2 - tableHeight/2 + 7.5
    // fill(0);
    cushion1 = Bodies.trapezoid(x+4, y, (tableWidth/2)-46, 12, -0.04, {isStatic: true})
    x = canvasWidth/2 + tableWidth/4
    cushion2 = Bodies.trapezoid(x-4, y, (tableWidth/2)-46, 12, -0.04, {isStatic: true})
    x = canvasWidth/2 + tableWidth/2
    y = canvasHeight/2
    cushion3 = Bodies.trapezoid(x-7, y, (tableHeight)-59, 12, -0.055, {isStatic: true, angle: Math.PI/2})
    x = canvasWidth/2 - tableWidth/4
    y = canvasHeight/2 + tableHeight/2 - 7.5
    cushion4 = Bodies.trapezoid(x+4, y, (tableWidth/2)-30, 12, 0.04, {isStatic: true})
    x = canvasWidth/2 + tableWidth/4
    cushion5 = Bodies.trapezoid(x-4, y, (tableWidth/2)-30, 12, 0.04, {isStatic: true})
    x = canvasWidth/2 - tableWidth/2
    y = canvasHeight/2
    cushion6 = Bodies.trapezoid(x+7, y, (tableHeight)-37, 12, 0.055, {isStatic: true, angle: Math.PI/2})
    World.add(engine.world, [cushion1, cushion2, cushion3, cushion4, cushion5, cushion6]);
}

function drawDAndLine() {
    stroke(255)
    strokeWeight(2);
    x = canvasWidth/2-tableWidth/3.5
    y = canvasHeight/2-tableHeight/2+14
    line(x, y, x, y+tableHeight-28);
    noFill();
    arc(x, y + tableWidth/4.25, 150, 150, HALF_PI, -HALF_PI);
}

function drawSquares() {
    fill(250, 250, 0)
    drawVertices(square1.vertices);
    drawVertices(square2.vertices);
    drawVertices(square3.vertices);
    drawVertices(square4.vertices);
    drawVertices(square5.vertices);
    drawVertices(square6.vertices);
}

function drawPockets() {
    fill(0)
    drawVertices(pocket1.vertices);
    drawVertices(pocket2.vertices);
    drawVertices(pocket3.vertices);
    drawVertices(pocket4.vertices);
    drawVertices(pocket5.vertices);
    drawVertices(pocket6.vertices);
}

function drawTable() {
    fill(50, 150, 50);
    drawVertices(table.vertices);

}

function drawWalls() {
    fill(100, 50, 0);
    drawVertices(wallA.vertices);
    drawVertices(wallB.vertices);
    drawVertices(wallC.vertices);
    drawVertices(wallD.vertices);
}

function drawCushions() {
    fill(50, 100, 50)
    drawVertices(cushion1.vertices);
    drawVertices(cushion2.vertices);
    drawVertices(cushion3.vertices);
    drawVertices(cushion4.vertices);
    drawVertices(cushion5.vertices);
    drawVertices(cushion6.vertices);
}

class Ball {
    constructor(x, y, color, points) {
        this.x = x;
        this.y = y;
        this.r = tableHeight/36 * 0.75
        this.color = color;
        this.points = points;
        this.body = Bodies.circle(this.x, this.y, this.r, {
            restitution: 0.9,  // Bounciness
            friction: 0.02,    // Resistance to motion
            frictionAir: 0.01, // Air resistance
            density: 0.002,    // Mass of the ball
          })
        World.add(engine.world, [this.body]);
    }
    draw() {

        fill(this.color);
        drawVertices(this.body.vertices);
    }
    setAtLocation(x, y) {
        this.x = x;
        this.y = y;
        this.body = Bodies.circle(this.x, this.y, this.r)

    }
    
}

class CueStick {
    constructor (x, y)
    {
        this.x = x;
        this.y = y;
        this.r = 4;
        this.color = color(255, 255, 0);
        this.body = Bodies.circle(this.x, this.y, this.r);
        World.add(engine.world, [this.body],   {
            restitution: 0.9,  // Bounciness
            friction: 0.02,    // Resistance to motion
            frictionAir: 0.01, // Air resistance
            mass: 7.5,    // Mass of the ball
          });
    }

    draw() {
        fill(this.color);
        drawVertices(this.body.vertices);
    }

    setAtLocation(x, y) {
        this.x = x;
        this.y = y;
        Body.setPosition(this.body, { x: x, y: y });
    }

}



// if (cueIsActive == true) {
//     cue.setAtLocation (mouseX, mouseY);
//     cue.draw();
//     cuePos = cue.body.position;
//     cueBallPos = cueBall.body.position;

//     // Calculate the vector between the two balls
//     const collisionVector = Matter.Vector.sub(cueBallPos, cuePos);
//     // Calculate the distance between the centers
//     const distance = Matter.Vector.magnitude(collisionVector);

//     // Check if they are colliding (distance <= sum of radii)
//     const combinedRadii = cue.r + cueBall.r;
//     console.log("distance: ", distance);
//     console.log("combined radius", combinedRadii);
//     //if (distance <= combinedRadii) {
//         // Normalize the collision vector to get the direction
//         const forceDirection = Matter.Vector.normalise(collisionVector);

//         forceMagnitude = 0.05;
//         // Scale the direction vector to the desired force magnitude
//         const force = Matter.Vector.mult(forceDirection, forceMagnitude);
//         //alert("a");
//         // Apply the force to the second ball
//         // Matter.Body.applyForce(cueBall.body, cueBall.body.position, force);
//         Matter.Body.setVelocity(cueBall.body, {x:25, y:0});
//     //}

// }