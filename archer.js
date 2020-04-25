class Bow {
  constructor(bodyA,pointB){
      var options = {
          
          'bodyA':bodyA,
          'pointB':pointB,
          'stiffness':0.07,
          'length':20
          
      }
      this.pointB = pointB;
      this.bow =Matter.Constraint.create(options);
      World.add(world,this.bow);
  }
  display(){
   var pointA = this.bow.position;
     var pointB = this.pointB;
    
        line(pointA.x,pointA.y,pointB.x,pointB.y);
        line(pointA.x,pointA.y,pointB.x,pointB.y+50);
    
  }
}