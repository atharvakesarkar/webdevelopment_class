// Hover play/pause for project video(s)
const videoList = [
    document.getElementById('project-video-1'),
    // Add more video IDs here if needed
  ];
  
  videoList.forEach(video => {
    video.addEventListener('mouseover', () => {
      video.play();
    });
  
    video.addEventListener('mouseout', () => {
      video.pause();
    });
  });
  
  // Contact form basic interaction
  document.querySelector('.contact-box button').addEventListener('click', () => {
    alert('Message sent!'); // Replace with real submission logic later
  });
  