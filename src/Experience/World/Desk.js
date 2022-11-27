import * as THREE from "three";
import Experience from "../Experience.js";

export default class Fox {
  constructor() {
    this.experience = new Experience();
    this.scene = this.experience.scene;
    this.resources = this.experience.resources;
    this.time = this.experience.time;
    this.debug = this.experience.debug;

    this.resource = this.resources.items.deskModel;

    this.setModel();
  }

  setModel() {
    this.model = this.resource.scene;
    this.model.scale.set(1, 1, 1);
    this.scene.add(this.model);

    this.model.texture = this.resources.items.deskTexture;
    this.model.texture.encoding = THREE.sRGBEncoding;
    this.model.texture.flipY = false;

    this.model.material = new THREE.MeshBasicMaterial({
      transparent: true,
      map: this.model.texture,
    });

    this.model.traverse((_child) => {
      if (_child instanceof THREE.Mesh) {
        _child.material = this.model.material;
      }
    });
  }

  update() {}
}
