document.addEventListener('DOMContentLoaded', function(){ 

  var options = {
    html5: {
      hlsjsConfig: {},
    },
    dnaConfig: {},
  };

  var player = videojs("player", options);
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

  function setP2PConfig(value){
    if (Streamroot){
      Streamroot.instances[0].dnaUploadEnabled = value
      Streamroot.instances[0].dnaUploadAllowed = value
    }
  }

}, false);