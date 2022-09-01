"use strict";
const l = console.log;

/**
 *  class Cylinder with getVolume method
 */
class Cylinder {
  /**
   *
   * @param {*} radius
   * @param {*} height
   */
  constructor(radius = 1, height = 1) {
    this.radius = radius;
    this.height = height;
    this.PI = 22 / 7;
  }

  /**
   *
   * @returns volume of the cylinder
   */
  getVolume() {
    return (this.PI * Math.pow(this.radius, 2) * this.height).toFixed(2);
  }
}

const obj = new Cylinder(3, 4);

l(obj.getVolume());

/**
 *  class Sphere with getVolume method
 */
class Sphere {
  /**
   *
   * @param {*} radius
   */
  constructor(radius = 1) {
    this.radius = radius;
    this.PI = 22 / 7;
    this.Multiplier_Constant = 4 / 3;
  }

  /**
   *
   * @returns volume of the sphere
   */
  getVolume() {
    return (
      this.Multiplier_Constant *
      this.PI *
      Math.pow(this.radius, 3)
    ).toFixed(2);
  }
}

const objTwo = new Sphere(4);

l(objTwo.getVolume());

/**
 *  class Cone- with getVolume method
 */
class Cone {
  /**
   *
   * @param {*} radius
   * @param {*} height
   *
   */
  constructor(radius = 1, height = 1) {
    this.radius = radius;
    this.height = height;
    this.PI = 22 / 7;
    this.Multiplier_Constant = 1 / 3;
  }

  /**
   *
   * @returns volume of the sphere
   */
  getVolume() {
    return (
      this.Multiplier_Constant *
      this.PI *
      Math.pow(this.radius, 2) *
      this.height
    ).toFixed(2);
  }
}

const objThree = new Cone(5, 7);

l(objThree.getVolume());
