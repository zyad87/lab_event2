const channelImages = {
    one: 'https://ga-instruction.s3.amazonaws.com/assets/front-end-web-development/fewd-conditionals-images/blue-planet.jpg',
    two: 'https://ga-instruction.s3.amazonaws.com/assets/front-end-web-development/fewd-conditionals-images/deadpool.jpg',
    three:
      'https://ga-instruction.s3.amazonaws.com/assets/front-end-web-development/fewd-conditionals-images/gravity.jpg',
    four: 'https://ga-instruction.s3.amazonaws.com/assets/front-end-web-development/fewd-conditionals-images/good-will-hunting.jpg',
    five: 'https://ga-instruction.s3.amazonaws.com/assets/front-end-web-development/fewd-conditionals-images/cnn.jpg',
    six: 'https://ga-instruction.s3.amazonaws.com/assets/front-end-web-development/fewd-conditionals-images/koyaanisqatsi.jpg',
    seven:
      'https://ga-instruction.s3.amazonaws.com/assets/front-end-web-development/fewd-conditionals-images/parts-unknown.jpg',
    eight:
      'https://ga-instruction.s3.amazonaws.com/assets/front-end-web-development/fewd-conditionals-images/star-wars-solo.jpeg',
    nine: 'https://ga-instruction.s3.amazonaws.com/assets/front-end-web-development/fewd-conditionals-images/stranger-things.jpg',
  };

  
  const imgElement = document.getElementById('imgHere');
  imgElement.src = "https://imagess.cc/?seraph_accel_gci=wp-content%2Fuploads%2F2018%2F08%2F1381-1.jpg&n=gsQmGI77sFzz9NsJjF4joA";

  
  const channelButtons = document.querySelectorAll('.channel');
  
  function changeChannel(event) {
    const channelId = event.target.id;
    imgElement.src = channelImages[channelId];
  }
  
  channelButtons.forEach((button) =>
    button.addEventListener('click', changeChannel)
  );