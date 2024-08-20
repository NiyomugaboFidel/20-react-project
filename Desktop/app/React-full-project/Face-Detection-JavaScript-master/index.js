// script.js
const video = document.getElementById('video');
const canvas = document.getElementById('canvas');
const captureButton = document.getElementById('capture');
const context = canvas.getContext('2d');

// Access the device camera and stream to video element
navigator.mediaDevices.getUserMedia({ video: true })
  .then(stream => {
    video.srcObject = stream;
  })
  .catch(err => {
    console.error('Error accessing webcam:', err);
  });

// Capture a picture from the video stream
captureButton.addEventListener('click', () => {
  context.drawImage(video, 0, 0, canvas.width, canvas.height);
});
