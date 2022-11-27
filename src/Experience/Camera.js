import * as THREE from "three";
import Experience from "./Experience.js";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";

export default class Camera {
  constructor(_options) {
    // Options
    this.experience = new Experience();
    this.config = this.experience.config;
    this.time = this.experience.time;
    this.sizes = this.experience.sizes;
    this.canvas = this.experience.canvas;
    this.scene = this.experience.scene;

    // Set up
    this.mode = "default"; // default \ debug

    this.setInstance();
    this.setModes();
  }

  setInstance() {
    // Set up
    this.instance = new THREE.PerspectiveCamera(
      20,
      this.sizes.width / this.sizes.height,
      0.1,
      150
    );
    this.instance.rotation.reorder("YXZ");

    this.scene.add(this.instance);
  }

  setModes() {
    this.modes = {};

    // Default
    this.modes.default = {};
    this.modes.default.instance = this.instance.clone();
    this.modes.default.instance.rotation.reorder("YXZ");
  }

  resize() {
    this.instance.aspect = this.sizes.width / this.sizes.height;
    this.instance.updateProjectionMatrix();

    this.modes.default.instance.aspect = this.sizes.width / this.sizes.height;
    this.modes.default.instance.updateProjectionMatrix();
  }

  update() {
    // Apply coordinates
    this.instance.position.copy(this.modes[this.mode].instance.position);
    this.instance.quaternion.copy(this.modes[this.mode].instance.quaternion);
    this.instance.updateMatrixWorld(); // To be used in projection
  }
}
