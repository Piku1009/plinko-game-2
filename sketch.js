var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 var divisions = [];
var particles = [];
var plinkos = [];
var gameState = "play";
var particle;
var count = 0;
var divisionHeight=300;
var score =0;
function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);


   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }


    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }

    

    
}
 


function draw() {
  background("black");
  textSize(20)
  text("Score : "+score,20,30);
  text("500",345,600);
  text("500",425,600);
  text("400",505,600);
  text("400",265,600);
  text("300",185,600);
  text("300",585,600);
  text("200",105,600);
  text("200",665,600);
  text("100",25,600);
  text("100",745,600);
  
  Engine.update(engine);
 
  
   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }
   

  
   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();
   }
   if(gameState==="play"){
  if(particle!=null){
    particle.display();
    if(particle.body.position.y>760){
      if(particle.body.position.x<85){
        score = score+100;
        particle=null;
        count = count+1;
      }
    }
  }
  if(particle!=null){
    particle.display();
    if(particle.body.position.y>760){
      if(particle.body.position.x>86&&particle.body.position.x<165
        ||particle.body.position.x>650&&particle.body.position.x<725){
        score = score+200;
        particle=null;
        count = count+1;
      }
    }
  }
  if(particle!=null){
    particle.display();
    if(particle.body.position.y>760){
      if(particle.body.position.x>166&&particle.body.position.x<245
        ||particle.body.position.x>566&&particle.body.position.x<649){
        score = score+300;
        particle=null;
        count = count+1;
      }
    }
  }
  if(particle!=null){
    particle.display();
    if(particle.body.position.y>760){
      if(particle.body.position.x>246&&particle.body.position.x<325
        ||particle.body.position.x>486&&particle.body.position.x<565){
        score = score+400;
        particle=null;
        count = count+1;
      }
    }
  }
  if(particle!=null){
    particle.display();
    if(particle.body.position.y>760){
      if(particle.body.position.x>326&&particle.body.position.x<485){
        score = score+500;
        particle=null;
        count = count+1;
      }
    }
  }
}
  if(count>=5){
    gameState = "end";
  };
  if(gameState==="end"){
    textSize(50);
    text("Game Over",300,350);
  }
}

function mousePressed(){
  if(gameState!=="end"){
    particle = new Particle(mouseX,10,10);
  }
}