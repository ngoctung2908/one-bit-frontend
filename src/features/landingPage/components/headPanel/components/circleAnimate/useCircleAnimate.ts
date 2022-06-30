import { useEffect, useRef, useState } from 'react'
import * as THREE from 'three'

var renderer: THREE.WebGLRenderer,
  scene: THREE.Scene | THREE.Object3D<THREE.Event>,
  camera: any,
  circle: THREE.Object3D<THREE.Event>,
  skelet: THREE.Object3D<THREE.Event>,
  particle: THREE.Object3D<THREE.Event>

export const useCircleAnimate = () => {
  const circelRef = useRef<any>()
  const [clientWidth, setClientWidth] = useState<number>(0)
  const [clientHeight, setClientHeight] = useState<number>(0)
  const [isInit, setIsInit] = useState<boolean>(false)

  const getElementSize = () => {
    const width = circelRef?.current?.clientWidth
    setClientWidth(width)

    const height = circelRef?.current?.clientHeight
    setClientHeight(height)
  }

  const init = () => {
    renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
    renderer.setPixelRatio(
      window.devicePixelRatio ? window.devicePixelRatio : 1
    )

    renderer.setSize(clientWidth, clientHeight)
    renderer.autoClear = false
    renderer.setClearColor(0x000000, 0.0)

    document.getElementById('canvas')?.appendChild(renderer.domElement)

    scene = new THREE.Scene()

    camera = new THREE.PerspectiveCamera(
      75,
      clientWidth / clientHeight,
      1,
      1000
    )

    camera.position.z = 400
    scene.add(camera)

    circle = new THREE.Object3D()
    skelet = new THREE.Object3D()
    particle = new THREE.Object3D()

    scene.add(circle)
    scene.add(skelet)

    const geom = new THREE.IcosahedronGeometry(3, 7)
    const geom2 = new THREE.IcosahedronGeometry(15, 1)

    const mat = new THREE.MeshPhongMaterial({
      color: 0xf5f6f7,
      //   shading: THREE.FlatShading,
    })

    const mat2 = new THREE.MeshPhongMaterial({
      color: 0x25aef7,
      wireframe: true,
      //   side: THREE.FlatShading,
    })

    const planet = new THREE.Mesh(geom, mat)
    planet.scale.x = planet.scale.y = planet.scale.z = 25
    circle.add(planet)

    const planet2 = new THREE.Mesh(geom2, mat2)
    planet2.scale.x = planet2.scale.y = planet2.scale.z = 10
    skelet.add(planet2)

    const ambientLight = new THREE.AmbientLight(0x999999)
    scene.add(ambientLight)

    const lights = []
    lights[0] = new THREE.DirectionalLight(0xffffff, 1)
    lights[0].position.set(1, 0, 0)
    lights[1] = new THREE.DirectionalLight(0x11e8bb, 1)
    lights[1].position.set(0.75, 1, 0.5)
    lights[2] = new THREE.DirectionalLight(0x022437, 1)
    lights[2].position.set(-0.75, -1, 0.5)
    scene.add(lights[0])
    scene.add(lights[1])
    scene.add(lights[2])

    window.addEventListener('resize', onWindowResize, false)
    setIsInit(true)
  }

  const onWindowResize = () => {
    getElementSize()
  }

  const animate = () => {
    requestAnimationFrame(animate)

    particle.rotation.x += 0.0
    particle.rotation.y -= 0.004
    circle.rotation.x -= 0.002
    circle.rotation.y -= 0.003
    skelet.rotation.x -= 0.001
    skelet.rotation.y += 0.002
    renderer.clear()

    renderer.render(scene, camera)
  }

  // Get 'width' and 'height' after the initial render and every time the list changes
  useEffect(() => {
    getElementSize()
    if (clientWidth !== 0 && clientHeight !== 0 && camera !== undefined) {
      camera.aspect = clientWidth / clientHeight
      camera.updateProjectionMatrix()
      renderer.setSize(clientWidth, clientHeight)
      setIsInit(false)
    }
  }, [clientWidth, clientHeight, isInit])

  return { init, animate, circelRef }
}
