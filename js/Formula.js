function Formula()
{
this.blockformulas = [
   [
   [[0,0],[0,1],[0,2],[1,1]],
   [[0,1],[1,0],[1,1],[2,1]],
   [[0,1],[1,0],[1,1],[1,2]],
   [[1,0],[2,0],[3,0],[2,1]]
   ],  // T shape ok
   [
   [[0,1],[1,1],[2,1],[3,1]],
   [[1,0],[1,1],[1,2],[1,3]],
   [[0,2],[1,2],[2,2],[3,2]],
   [[2,0],[2,1],[2,2],[2,3]]
   ],  //l shape ok
   [
   [[0,1],[0,2],[1,0],[1,1]],
   [[0,1],[1,1],[1,2],[2,2]],
   [[1,1],[1,2],[2,0],[2,1]],
   [[0,0],[1,0],[1,1],[2,1]]
   ],// S shape ok
   [
   [[0,1],[1,1],[2,1],[3,1]],
   [[1,0],[1,1],[1,2],[1,3]],
   [[0,2],[1,2],[2,2],[3,2]],
   [[2,0],[2,1],[2,2],[2,3]]
   ], //L shape  ok
   [
   [[0,0],[0,1],[1,0],[1,1]],
   [[0,0],[0,1],[1,0],[1,1]],
   [[0,0],[0,1],[1,0],[1,1]],
   [[0,0],[0,1],[1,0],[1,1]],
   ], //O shape ok
   [
   [[0,1],[1,1],[2,0],[2,1]],
   [[1,0],[2,0],[2,1 ],[2,2]],
   [[0,1],[1,1],[2,1],[0,2]],
   [[1,0],[1,1],[1,2],[2,2]],
   ],  //J shape ok
   [
   [[0,0],[0,1],[1,1],[1,2]],
   [[0,2],[1,1],[1,2],[2,1]],
   [[1,0],[1,1],[2,1],[2,2]],
   [[0,1],[1,0],[1,1],[2,1]]
   ] //Z shape ok
   ];
  this.blockimages = [
  
   "images/red.png",
   "images/green.png",
   "images/blue.png",
   "images/black.png",
   "images/brinjal.png",
  ];
//  generates the image tag number from col and row
  this.imagenumber=function(atcol, atrow) {
   var imagenum = atrow*(hwidth) + atcol;
   return imagenum;
  }
  this.imagenumberdiff=function(atcol, atrow) {
   var imagenum = atrow*(4) + atcol;
   return imagenum;
  }
  

}