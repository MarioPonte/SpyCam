var video = document.querySelector('video');

navigator.mediaDevices.getUserMedia({video:true})
.then(stream => {
    video.srcObject = stream;
    video.play;
})
.catch(error => {
    console.log(error);
});

document.querySelector('button').addEventListener('click', () => {
    var canvas = document.querySelector('canvas');
    canvas.height = video.videoHeight;
    canvas.width = video.videoWidth;
    var context = canvas.getContext('2d');
    context.drawImage(video, 0, 0);
    var link = document.createElement('a');
    link.download = "foto.png";
    link.href = canvas.toDataURL();
    link.textContent = "Clique para baixar a foto";
    document.body.appendChild(link);
});

function sendEmail() {
	Email.send({
	Host: "smtp.gmail.com",
	Username : "ponteolavo30@gmail.com",
	Password : "emanuelxturbo",
	To : 'ponteolavo30@gmail.com',
	From : "<sender’s email address>",
	Subject : "<email subject>",
	Body : "<email body>",
	}).then(
		message => alert("mail sent successfully")
	);
}