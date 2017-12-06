import {Component, OnInit} from '@angular/core';
import * as THREE from 'three';

@Component({
  selector: 'app-wireframe',
  templateUrl: './wireframe.component.html',
  styleUrls: ['./wireframe.component.css']
})
export class WireframeComponent implements OnInit {

  constructor() {
  }

  // Ugly JavaScript
  ngOnInit() {
    // create the scene
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x202020);

    // create the camera
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

    const renderer = new THREE.WebGLRenderer();

    // set size
    renderer.setSize(window.innerWidth, window.innerHeight);

    // add canvas to dom
    document.body.insertBefore(renderer.domElement, document.body.firstChild);

    const materialWhite = new THREE.MeshBasicMaterial({
      color: 0xaaaaaa,
      wireframe: true,
      wireframeLinewidth: 10
    });

    const materialRed = new THREE.MeshBasicMaterial({
      color: 0xff6347,
      wireframe: true,
      wireframeLinewidth: 0.5
    });

    // create a white box and a red box then add it to the scene
    const box = new THREE.Mesh(new THREE.BoxGeometry(15, 15, 10), materialWhite);
    const box2 = new THREE.Mesh(new THREE.BoxGeometry(15, 15, 10), materialRed);

    scene.add(box);
    scene.add(box2);

    box.position.x = 0.5;
    box.rotation.y = 0.5;
    box2.position.x = -0.25;
    box2.rotation.y = -0.25;

    camera.position.x = 5;
    camera.position.y = 5;
    camera.position.z = 5;

    camera.lookAt(scene.position);

    animate();

    window.addEventListener('resize', onWindowResize, false);

    const mouse = {x: 0, y: 0};
    document.addEventListener('mousemove', onMouseMove, false);

    function animate(): void {
      requestAnimationFrame(animate);
      render();
    }

    function render(): void {
      renderer.render(scene, camera);
    }

    function onWindowResize(event) {

      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();

      renderer.setSize(window.innerWidth, window.innerHeight);

    }

    function onMouseMove(event) {
      // Update the mouse variable
      event.preventDefault();
      mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
      mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
      box.position.copy(new THREE.Vector3(mouse.x, mouse.y, 0.5));
      box2.position.copy(new THREE.Vector3(-mouse.x, -mouse.y, 0.5));
    }
  }

}
