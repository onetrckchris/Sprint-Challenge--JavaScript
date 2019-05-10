// 1. Copy and paste your prototype in here and refactor into class syntax.

class CuboidMaker {
    constructor(cuboidAttrs) {
        this.length = cuboidAttrs.length;
        this.width = cuboidAttrs.width;
        this.height = cuboidAttrs.height;
    }

    volume() {
        return (this.length * this.width * this.height);
    }

    surfaceArea() {
        return 2 * (this.length * this.width + this.length * this.height + this.width * this.height);
        //                      4                          4                          4
    }
}

class CubeMaker extends CuboidMaker {
    constructor(cubeAttrs) {
        super(cubeAttrs);

        this.length = cubeAttrs.length;
        this.width = cubeAttrs.length; // A cube's sides will always be equal.
        this.height = cubeAttrs.length; // A cube's sides will always be equal.
    }

    // Volume formula for cuboids and cube are essentially the same.

    cubeSurfaceArea() {
        return 6 * Math.pow(this.length, 2);
    }
}

const cuboid = new CuboidMaker({length: 4, width: 5, height: 5});
const cube = new CubeMaker({length: 7});

// Test your volume and surfaceArea methods by uncommenting the logs below:

console.log(cuboid.volume()); // 100
console.log(cuboid.surfaceArea()); // 130

console.log(cube.volume()); // 343
console.log(cube.cubeSurfaceArea()); // 294

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.