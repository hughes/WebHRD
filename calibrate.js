$(document).ready(function () {
    var scene = new THREE.Scene();
    // var camera = new THREE.OrthographicCamera(200,200,200,200,1000);
    var w = window.innerWidth;
    var h = window.innerHeight/2;
    var camera = new THREE.PerspectiveCamera(75, w/h, 0.1, 1000);
    var renderer = new THREE.WebGLRenderer();
    renderer.setSize(w, h);
    document.body.appendChild(renderer.domElement);

    var vertShader = document.getElementById('vertexShader').innerHTML;
    var fragShader = document.getElementById('fragmentShader').innerHTML;

    window.uniforms = {
        "texture1": { type: "t", value: THREE.ImageUtils.loadTexture( "radial2.jpg" ) },
        "SCALE": { type: "f", value: 75.0 },
        "P0": {type: "f", value: 75.0 },
        "P1": {type: "f", value: 0.5 },
        "P2": {type: "f", value: 0.0 },
        "P3": {type: "f", value: 0.0 },
        "P4": {type: "f", value: 0.0 }
    };

    material = new THREE.ShaderMaterial({uniforms: uniforms,
        vertexShader: vertShader,
        fragmentShader: fragShader
    });

    // plane
    var plane = new THREE.Mesh(new THREE.PlaneGeometry(8, 8),material);
    plane.overdraw = true;
    scene.add(plane);
    camera.position.z = 5;

    function render() {
        requestAnimationFrame(render);
        renderer.render(scene, camera);
    }
    render();

    $('input').on('change', function (e) {
        var $el = $(e.target);
        key = $el.attr('id');
        value = $el.val();
        console.log(key, value);
        window.uniforms[key].value = value;
    });
});