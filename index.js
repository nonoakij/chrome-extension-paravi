window.chromeExtensionParavi = false;
var element = document.createElement("button");
element.id = "chromeExtensionParavi"
element.innerText = "ピクチャーインピクチャ: ON";
element.onclick = function() {
  if (!window.chromeExtensionParavi) {
    document.querySelector('.vjs-controls-enabled video').requestPictureInPicture();
    document.querySelector('#chromeExtensionParavi').innerText = "ピクチャーインピクチャ: OFF";
    window.chromeExtensionParavi = true;

  } else if (!!window.chromeExtensionParavi) {
    document.exitPictureInPicture();
    document.querySelector('#chromeExtensionParavi').innerText = "ピクチャーインピクチャ: ON";
    window.chromeExtensionParavi = false;
  }
};

document.body.prepend(element);
