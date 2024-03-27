// Objects

const circle = {
  // Properties
  radius: 1,
  location: {
    x: 1,
    y: 2,
  },
  // Method
  draw: function () {
    console.log("Draw");
  },
};

//Accesing members
circle.draw();

// Factory function

function createCircle(radius) {
  return {
    radius,
    draw() {
      console.log("draw");
    },
  };
}
const circleOne = createCircle(1);
circleOne.draw();

// Constructor Function

function Circle(radius) {
  this.radius = radius;
  this.draw = function () {
    console.log("draw constructor");
  };
}

const circleTwo = new Circle(1);
circleTwo.draw();

// Enumerative

for (let key in Circle) {
  if (typeof circle[key] !== "function") {
    console.log(key, circle[key]);
  }
}
const keys = Object.keys(circle);
console.log(keys);

if ("radius" in circle) {
  console.log("Circle has a radius");
}

// obj vs primitives

let number = 10;

function increase(number) {
  number++;
}

increase(10);
console.log(number);

let obj = { value: 10 };

function increase(obj) {
  obj.value++;
}

increase(obj);
console.log(obj);

function Circle(radius) {
  this.radius = radius;
  let defaultLocation = { x: 0, y: 0 };
  let computeOptimumLocation = function (factor) {};
  this.draw = function () {
    computeOptimumLocation();
    console.log("draw");
  };
}

const secCircle = new Circle(10);
// secCircle.computeOptimumLocation(0.1);
secCircle.draw();

// Setters and Getters

function Circle(radius) {
  this.radius = radius;
  let defaultLocation = { x: 0, y: 0 };
  this.getDefaultLocation = function () {
    return defaultLocation;
  };

  this.draw = function () {
    console.log("draw");
  };
  Object.defineProperty(this, "defaultLocation", {
    get: function () {
      return defaultLocation;
    },
    set: function (value) {
      if (!value.x || !value.y) {
        throw new Error("Invalid Location");
      }

      defaultLocation = value;
    },
  });
}

const circle_Sec = new Circle(20);
circle.draw();
circle.defaultLocation = 1;

// Stopwatch

function Stopwatch() {
  let startTime,
    endTime,
    running,
    duration = 0;

  this.start = function () {
    if (running) {
      throw new Error("Stopwatch is already running");
    }
    running = true;
    startTime = new Date();
  };

  this.stop = function () {
    if (!running) {
      throw new Error("Stopwatch is not started");
    }
    running = false;
    endTime = new Date();
    const seconds = (endTime.getTime() - startTime.getTime()) / 1000;
    duration += seconds;
    return duration;
  };

  this.reset = function () {
    startTime = null;
    endTime = null;
    running = false;
    duration = 0;
  };

  Object.defineProperty(this, "duration", {
    get: function () {
      return duration;
    },
  });
}

const newwatch = new Stopwatch();
