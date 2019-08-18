document.addEventListener('DOMContentLoaded', function(){ 

  var options = {
    html5: {
      hlsjsConfig: {},
    },
    dnaConfig: {
      "contentIdGenerator" : contentIdGenerator
    },
  };

  var player = videojs("player", options);
  player.src(contentUrl);

  var p2pSwitch = document.getElementById('p2p-switch');

  p2pSwitch.addEventListener('change', (event) => {
    if (event.target.checked) {
      // Enabling P2P Upload
      setP2PConfig(true)
    } else {
      // Disabling P2P Upload
      setP2PConfig(false)
    }
  })

  // Using Content URL path as Content ID for P2P streaming
  function contentIdGenerator(contentUrl) {
    var link = document.createElement("a");
    link.href = contentUrl;
    return link.pathname;
  }

  function setP2PConfig(value){
    if (Streamroot){
      Streamroot.instances[0].dnaUploadEnabled = value
      Streamroot.instances[0].dnaUploadAllowed = value
    }
  }

}, false);