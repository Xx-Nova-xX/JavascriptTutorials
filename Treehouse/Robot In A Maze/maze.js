"use strict";

function Maze(width, height) {
    this.width = width;
    this.height = height;
    
    this.startX            = null;
    this.startY            = null;
    this.startOrientation  = null;
    this.endX              = null;
    this.endY              = null;
    
    this.spaces = []; 
    
    var x, y;
    for(x=1; x <= width; x += 1) { //for loop goes through each column and create an array element for it
        this.space[x] = []; //array element will be an empty array = an array with 7 elements each with an empty arry inside of that
        for (y=1; y<= height; y+= 1) { //for each column we will also loop through every y coordinate and add an element to the array
        this.space[x][y] = new MazeSpace();   //this for loop will add one element to the array for each space in the colume
    }
    
}

Maze.prototype.setStart = function(x, y, orientation) {
    this.startX = x;
    this.startY = y;
    this.startOrientation = orientation;
}

Maze.prottype.setEnd = function (x, y) {
    this.endX = x;
    this.endY = y;
}

Maze.prototype.setWall = function (x, y, direction) {
    this.spaces[x][y].setwall(direction);
} 