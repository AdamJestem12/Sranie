class Rectangle {
    constructor(width, height) {
    this.width = width;
    this.height = height;
   }

   calcField(){
     return this.width * this.height;
   }
}

var rect = new Rectangle(20, 30);
console.log(rect.calcField());