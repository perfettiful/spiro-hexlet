var width = window.innerWidth;
var height = window.innerHeight;

var stage = new Konva.Stage({
  container: 'container',
  width: width,
  height: height
});

var layer = new Konva.Layer();

var circle = new Konva.Circle({
  x: stage.getWidth() / 2,
  y: stage.getHeight() / 2,
  radius: 70,
  fill: 'red',
  stroke: 'black',
  strokeWidth: 4
});

// add the shape to the layer
layer.add(circle);

// add the layer to the stage
stage.add(layer);

var hexagon = new Konva.RegularPolygon({
    x: stage.getWidth() / 2,
    y: stage.getHeight() / 2,
    sides: 6,
    radius: 20,
    fill: 'red',
    stroke: 'black',
    strokeWidth: 4
});

layer.add(hexagon);
stage.add(layer);

var amplitude = 100;
var period = 2000;
// in ms
var centerX = stage.getWidth() / 2;

var anim = new Konva.Animation(function(frame) {
    hexagon.setX(amplitude * Math.sin(frame.time * 2 * Math.PI / period) + centerX);
}, layer);

anim.start();