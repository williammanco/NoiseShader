
import { Object3D, SphereBufferGeometry, ShaderMaterial, Mesh } from 'three'
import settings from 'shared_path/settings'
import utils from 'shared_path/utils'
import state from 'shared_path/state'

const frag = require('./main.frag')
const vert = require('./main.vert')

export default class Sun extends Object3D {
  constructor(props) {
    super()
    const self = this
    this.uniforms = {
      time: { type: 'f', value: 1.0 },
      speed: { type: "f", value: 0.01 },
      amplitude: { type: "f", value: 0.1 },
      elevation: { type: "f", value: 7.0 },
    }
    this.geometry = new SphereBufferGeometry( 20, 100, 100 )
    this.material = new ShaderMaterial({
      fragmentShader: frag,
      vertexShader: vert,
      uniforms: this.uniforms,
      fog: false,
      transparent: true,
      wireframe: true,
    })
    this.mesh = new Mesh( this.geometry, this.material )
    this.mesh.position.y = 10
    this.add( this.mesh )
  }
  update(delta){
    this.mesh.rotation.y += .01
    this.mesh.rotation.x += .01
    this.material.uniforms.time.value += 1
  }
}
/*

import { Object3D, SphereBufferGeometry, ShaderMaterial, Mesh } from 'three'
import settings from 'shared_path/settings'
import utils from 'shared_path/utils'
import state from 'shared_path/state'

const frag = require('./main.frag')
const vert = require('./main.vert')

export default class Sun extends Object3D {
  constructor(props) {
    super()
    const self = this
    this.uniforms = {
      time: { type: 'f', value: 1.0 },
      speed: { type: "f", value: 0.02 },
      amplitude: { type: "f", value: 5.3 },
      elevation: { type: "f", value: 6.0 },
    }
    this.geometry = new SphereBufferGeometry( 20, 200, 200 )
    this.material = new ShaderMaterial({
      fragmentShader: frag,
      vertexShader: vert,
      uniforms: this.uniforms,
      fog: false,
      transparent: true,
      wireframe: false,
    })
    this.mesh = new Mesh( this.geometry, this.material )
    this.mesh.position.y = 10
    this.add( this.mesh )
  }
  update(delta){
    this.mesh.rotation.y += .01
    this.mesh.rotation.x += .001
    this.material.uniforms.time.value += 1
    this.material.uniforms.amplitude.value = Math.sin(this.mesh.rotation.x) * .1

  }
}

 */
