import Experience from "../Experience.js";
import Desk from "./Desk.js";

export default class World {
  constructor() {
    this.experience = new Experience();
    this.scene = this.experience.scene;
    this.resources = this.experience.resources;

    this.resources.on("ready", () => {
      this.desk = new Desk();
    });
  }

  update() {}
  resize() {}
  destroy() {}
}
