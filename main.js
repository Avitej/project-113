function preload() {

}
function setup() {
    canvas = createCanvas(640, 340);
    canvas.position(110, 250);
    video = createCapture(VIDEO);
    video.hide();
    tint_color = "";
}
function draw() {
    rect(60, 30, 500, 55);
  rect(60, 250, 500, 55);
  rect(40, 20, 50, 300);
  rect(570, 20, 50, 300);
  circle(60, 60, 100);
  circle(590, 60, 100);
  circle(60, 280, 100);
  circle(590, 280, 100);
    image(video, 150, 75, 300, 200);
    tint(tint_color);
}
function filter_tint() {
    tint_color = document.getElementById("color_name").value;
}
function take_snapshot() {
    save('picture.png');
}