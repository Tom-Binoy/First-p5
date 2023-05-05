function setup(){
    canvas= createCanvas(500,500);
    canvas.center(); 
    video = createCapture(VIDEO);
    video.hide();
}

function draw(){
    
    image(video, 0, 0, 500,500);
    
    circle(30, 30,50)
    circle(30, 470,50)
    circle(470, 30,50)
    circle(470, 470,50)
    fill(54,238,0);
    stroke(50,70,90)

    rect(25, 55, 10, 390 )
    rect(55, 25, 390, 10 )
    rect(55, 467, 390, 10 )
    rect(467, 55, 10, 390 )
}

function save(){
    save('frame_image.png')
}