uniform sampler2D texture1;

varying vec2 vUv;

void main() {
    float x = vUv.x - 0.5;
    float y = vUv.y - 0.5;
    float r2 = x*x + y*y;
    float r = sqrt(r2);
    float angle = 0.0;
    if (x == 0.0) {
        angle = 0.0;
    } else {
        angle = asin(r/x);
    }
    vec2 v;
    v.x = vUv.x + r*cos(angle);
    v.y = vUv.y + r*sin(angle);
    gl_FragColor = texture2D(texture1, v); // Displays Nothing
    // gl_FragColor = vec4(0.5, 0.2, 1.0, 1.0); // Works; Displays Flat Color
}