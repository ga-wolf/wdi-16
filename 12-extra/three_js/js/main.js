var app = app || {};
app.step = 0;

app.controller = new function () {
  this.rotationSpeed = 0.02;
  this.bouncingSpeed = 0.02;
};

app.animate = function () {
  app.stats.update();

  app.cube.rotation.x += app.controller.rotationSpeed;
  app.cube.rotation.y += app.controller.rotationSpeed;
  app.cube.rotation.z += app.controller.rotationSpeed;

  app.step += app.controller.bouncingSpeed;
  app.sphere.position.x = 20 + (10 * (Math.cos(app.step)));

  var num = 4 + (10 * (Math.abs( Math.sin(app.step))));
  app.sphere.position.y = num;
  app.cube.position.y = num;

  app.renderer.render( app.scene, app.camera );
  requestAnimationFrame( app.animate );
};

app.addStats = function () {
  var stats = new Stats();
  stats.setMode( 0 );
  stats.domElement.style.position = 'absolute';
  stats.domElement.style.top = '0px';
  stats.domElement.style.left = '0px';

  document.getElementById('stats')
          .appendChild( stats.domElement );

  app.stats = stats;
};

app.addLight = function () {
  app.pointLight = new THREE.PointLight( 0xFFFFFF );
  app.pointLight.position.set( 15, 30, 10 );

  app.pointLight.shadow.mapSize.width = 1024;
  app.pointLight.shadow.mapSize.height = 1024;

  app.pointLight.castShadow = true;

  app.scene.add( app.pointLight );
};

app.addSphere = function () {
  var sphereGeometery = new THREE.SphereGeometry( 4, 20, 20 );
  var sphereMaterial = new THREE.MeshLambertMaterial({
    color: 0x039BE5,
    // wireframe: true
  });
  app.sphere = new THREE.Mesh( sphereGeometery, sphereMaterial );
  app.scene.add( app.sphere );

  app.sphere.castShadow = true;

  app.sphere.position.x = 20;
  app.sphere.position.y = 4;
  app.sphere.position.z = 2;
};

app.addCube = function () {
  var cubeGeometry = new THREE.BoxGeometry( 4, 4, 4 );
  var cubeMaterial = new THREE.MeshLambertMaterial({
    color: 0xFF8F00,
    // wireframe: true
  });
  app.cube = new THREE.Mesh( cubeGeometry, cubeMaterial );
  app.scene.add( app.cube );

  app.cube.castShadow = true;

  app.cube.position.x = -4;
  app.cube.position.y = 3;
  app.cube.position.z = 0;
};

app.addPlane = function () {
  var planeGeometry = new THREE.PlaneGeometry( 60, 20 );
  var planeMaterial = new THREE.MeshLambertMaterial({
    color: 0xCFD8DC
  });
  app.plane = new THREE.Mesh( planeGeometry, planeMaterial );

  app.plane.receiveShadow = true;

  app.scene.add( app.plane );

  app.plane.rotation.x = -0.5 * Math.PI;
  app.plane.position.x = 15;
  app.plane.position.y = 0;
  app.plane.position.z = 0;
};

app.init = function () {
  app.scene = new THREE.Scene();
  app.width = window.innerWidth;
  app.height = window.innerHeight;

  app.camera = new THREE.PerspectiveCamera(
    45, // Perspective
    app.width / app.height, // Ratio
    0.1, // Near
    1000 // Far
  );

  app.camera.position.x = -30;
  app.camera.position.y = 40;
  app.camera.position.z = 30;

  app.camera.lookAt( app.scene.position );

  app.renderer = new THREE.WebGLRenderer();
  app.renderer.setSize( app.width, app.height );
  app.renderer.setPixelRatio( window.devicePixelRatio || 1 );
  app.renderer.setClearColor( 0xECEFF1 );
  app.renderer.shadowMap.enabled = true;

  app.axes = new THREE.AxisHelper( 40 );
  app.scene.add( app.axes );

  var output = document.getElementById('output');
  output.appendChild( app.renderer.domElement );

  app.addPlane();
  app.addCube();
  app.addSphere();
  app.addLight();
  app.addStats();

  app.animate();

  app.gui = new dat.GUI();
  app.gui.add( app.controller, 'rotationSpeed' );
  app.gui.add( app.controller, 'bouncingSpeed' );

  app.renderer.render( app.scene, app.camera );
};

window.onload = app.init;
