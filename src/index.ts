import * as THREE from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

window.addEventListener('DOMContentLoaded', () => {
  // シーンを作成
  const scene = new THREE.Scene()
  // カメラを作成
  const camera = new THREE.PerspectiveCamera(
    50,
    window.innerWidth / window.innerHeight,
    window.innerWidth / window.innerHeight,
    1000
  )
  camera.position.set(0, 0, 1000)

  // オブジェクトを読み込む
  const loader = new GLTFLoader()
  loader.load('./tiger.glb', (object) => {
    const data = object.scene
    // 3Dモデルの初期サイズ設定
    data.scale.set(1000, 1000, 1000)
    data.position.set(0, -250, 0)
    // シーンに3Dモデルを追加
    scene.add(data)
    console.log('loaded')
  })

  // レンダラーを作成
  const renderer = new THREE.WebGLRenderer({
    antialias: true,
    alpha: true,
  })
  // レンダラーのサイズを設定
  renderer.setSize(window.innerWidth, window.innerHeight)
  // canvasをbodyに追加
  document.body.appendChild(renderer.domElement)

  // 平行光源を生成
  const light = new THREE.AmbientLight(0xffffff)
  scene.add(light)

  const tick = (): void => {
    requestAnimationFrame(tick)

    // box.rotation.x += 0.05
    // box.rotation.y += 0.05

    // 描画
    renderer.render(scene, camera)
  }
  tick()
})
