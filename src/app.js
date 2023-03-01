import * as THREE from "three";
 // 导入轨道控制器
import {OrbitControls} from "three/examples/jsm/controls/OrbitControls"
// console.log(THREE);
 
// 目标：了解three.js最基本的内容
 
// 1、创建场景
const scene = new THREE.Scene();
 
// 2、创建相机
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
 0.1,
  1000
);
 
// 设置相机位置
camera.position.set(0, 0, 10);
scene.add(camera);
 
// 添加物体
// 创建几何体
const cubeGeometry = new THREE.BoxGeometry(2, 2, 2);
const cubeMaterial = new THREE.MeshBasicMaterial({ color: 0xffff });
// 根据几何体和材质创建物体
const cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
// 将几何体添加到场景中
scene.add(cube);
 
// 初始化渲染器
const renderer = new THREE.WebGLRenderer();
// 设置渲染的尺寸大小
renderer.setSize(window.innerWidth, window.innerHeight);
// console.log(renderer);
// 将webgl渲染的canvas内容添加到body
document.body.appendChild(renderer.domElement);
const controls = new OrbitControls(camera, renderer.domElement)

const AxesHelper = new THREE.AxesHelper(5);
 
scene.add(AxesHelper);
 
function render(){
renderer.render(scene,camera)
requestAnimationFrame(render)
}

render()
 
