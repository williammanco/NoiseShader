uniform vec3 color;
uniform sampler2D texture;
varying float displacement;
varying float noise;

void main() {

  vec3 color = vec3(1.0,1.0,1.0);

  //
  // if(pixelref.a<0.5) /*change threshold to desired output*/
  // discard;

  gl_FragColor = vec4( color, 1.0  );
  gl_FragColor.rgb *=  noise * .1;
  gl_FragColor.rgba *=  displacement;

  // gl_FragColor.rgb *=  displacement;

  gl_FragColor.rgb = smoothstep(vec3(0.1,0.9,0.9),vec3(1.,0.9,0.1),gl_FragColor.rgb);
}


/**
 * uniform vec3 color;
 uniform sampler2D texture;
 varying float displacement;
 varying float noise;

 void main() {

   vec3 color = vec3(1.0,1.0,1.0);
   gl_FragColor = vec4( color, 1.0  );
   gl_FragColor.rgb +=  noise * .01;
   gl_FragColor.rgba -=  displacement;


   gl_FragColor.rgb += smoothstep(vec3(1.,1.0,.9),vec3(1.,1.,0.1),gl_FragColor.rgb);
 }

 */
