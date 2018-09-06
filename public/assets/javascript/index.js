var width = window.innerWidth;
var height = window.innerHeight;

var stage = new Konva.Stage({
  container: 'container',
  width: width,
  height: height
});

var layer = new Konva.Layer();

var circleA = new Konva.Circle({
  x: stage.getWidth() / 2,
  y: stage.getHeight() / 2,
  radius: 200,
  fill: 'yellow',
  stroke: 'green',
  strokeWidth: 4
});
// add the shape to the layer
layer.add(circleA);

var circleB = new Konva.Circle({
  x: stage.getWidth() / 2,
  y: stage.getHeight() / 2,
  radius: 50,
  fill: 'red',
  stroke: 'purple',
  strokeWidth: 4,
  offset: {
    x: 0,
    y: 100
}
});
// add the shape to the layer
layer.add(circleB);

var circleC = new Konva.Circle({
  x: stage.getWidth() / 2,
  y: stage.getHeight() / 2,
  radius: 50,
  fill: 'blue',
  stroke: 'white',
  strokeWidth: 4,
  offset: {
    x: 0,
    y: -100
}
});
// add the shape to the layer
layer.add(circleC);


var hexagon = new Konva.RegularPolygon({
    x: stage.getWidth() / 2,
    y: stage.getHeight() / 2,
    sides: 6,
    radius: 20,
    fill: 'blue',
    stroke: 'black',
    strokeWidth: 4,
    offset: {
        x: -200,
        y:0
    }
});

var redRect = new Konva.Rect({
    x: stage.getWidth() / 2,
    y: stage.getHeight() / 2,
    width: 100,
    height: 50,
    fill: 'red',
    stroke: 'black',
    strokeWidth: 4,
    offset: {
        x: -100,
        y: 0
    }
});

// one revolution per 4 seconds
var angularSpeed = 90;

// add the layer to the stage

layer.add(redRect);
layer.add(hexagon);
stage.add(layer);

var amplitude = 100;
var period = 2000;
// in ms
var centerX = stage.getWidth() / 2;
var centerY = stage.getWidth() / 2;

var anim = new Konva.Animation(function(frame) {

    var scale = Math.sin(frame.time * 2 * Math.PI / 5000) + 1;
    //var scale = frame.time/50000 +1;
  

    var angleDiff = frame.timeDiff * angularSpeed / 1000;

    hexagon.setX(amplitude * Math.cos(frame.time * 2 * Math.PI / period) + centerX);

     hexagon.setY(amplitude * Math.sin(frame.time * 2 * Math.PI / period) + centerY);
    redRect.rotate(angleDiff);

    //hexagon.rotate(angleDiff);
    circleC.rotate(angleDiff);
    circleC.scale({ radius: scale});
    hexagon.scale( {radius: scale});

    // redRect.rotate(angleDiff);

}, layer);

anim.start();