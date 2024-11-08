import { Component, ElementRef, Inject, OnInit, PLATFORM_ID, ViewChild } from '@angular/core';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-cube',
  standalone: true,
  imports: [],
  template: '<canvas #rendererCanvas></canvas>',
  styles: [`
    canvas {
      width: 100%;
      height: 100vh;
      display: block;
    }
  `]
})
export class CubeComponent implements OnInit {
  @ViewChild('rendererCanvas') private canvasRef!: ElementRef;

  private renderer!: THREE.WebGLRenderer;
  private scene!: THREE.Scene;
  private camera!: THREE.PerspectiveCamera;
  private cube!: THREE.Mesh;
  private controls!: OrbitControls;

  constructor(@Inject(PLATFORM_ID) private platformId: object) {}

  private get canvas(): HTMLCanvasElement {
    return this.canvasRef.nativeElement;
  }

  ngOnInit() {}

  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.createScene();
      this.startRenderingLoop();
    }
  }

  ngOnDestroy() {
    if (isPlatformBrowser(this.platformId)) {
      // Clean up resources
      if (this.renderer) {
        this.renderer.dispose();
      }
    }
  }

  private createScene() {
    // Scene
    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color(0x000000);

    // Camera
    const aspectRatio = window.innerWidth / window.innerHeight;
    this.camera = new THREE.PerspectiveCamera(75, aspectRatio, 0.1, 1000);
    this.camera.position.z = 5;

    // Cube
    const geometry = new THREE.BoxGeometry(2, 2, 2);
    const material = new THREE.MeshPhongMaterial({ 
      color: 0x00ff00,
      specular: 0x555555,
      shininess: 30
    });
    this.cube = new THREE.Mesh(geometry, material);
    this.scene.add(this.cube);

    // Lights
    const ambientLight = new THREE.AmbientLight(0x404040);
    this.scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(1, 1, 1);
    this.scene.add(directionalLight);

    // Renderer
    this.renderer = new THREE.WebGLRenderer({
      canvas: this.canvas,
      antialias: true
    });
    this.renderer.setPixelRatio(window.devicePixelRatio);
    this.renderer.setSize(window.innerWidth, window.innerHeight);

    // Controls
    this.controls = new OrbitControls(this.camera, this.renderer.domElement);
    this.controls.enableDamping = true;
    this.controls.dampingFactor = 0.05;
    this.controls.screenSpacePanning = false;
    this.controls.minDistance = 3;
    this.controls.maxDistance = 10;

    // Window resize handler
    if (isPlatformBrowser(this.platformId)) {
      window.addEventListener('resize', () => this.onWindowResize());
    }
  }

  private startRenderingLoop() {
    const animate = () => {
      requestAnimationFrame(animate);

      // Auto-rotation
      this.cube.rotation.x += 0.002;
      this.cube.rotation.y += 0.002;

      // Floating motion
      this.cube.position.y = Math.sin(Date.now() * 0.001) * 0.2;

      // Update controls
      this.controls.update();

      this.renderer.render(this.scene, this.camera);
    };
    animate();
  }

  private onWindowResize() {
    const aspectRatio = window.innerWidth / window.innerHeight;
    this.camera.aspect = aspectRatio;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(window.innerWidth, window.innerHeight);
  }
}
