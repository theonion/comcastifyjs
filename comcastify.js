var comcastifyjs = (function () {
  // setup slowload modifier callback, structure avoids some annoying timer/closure problems
  var slowloadModiferCallback = function (slowloadDiv, args) {
    return function () {
      (function (slowloadDiv, args) {

        // calculate new height
        var newTopClip = slowloadDiv.slothifyData.imageTopClip + args.loadIncrement;

        // update slowload div
        slowloadDiv.style.clip = 'rect(' + newTopClip + 'px auto auto auto)';

        // check stopping conditions
        if (newTopClip < slowloadDiv.slothifyData.maxImageHeight) {
          // create new update timeout
          slowloadDiv.slothifyData.imageTopClip = newTopClip;
          setTimeout(slowloadModiferCallback(slowloadDiv, args), args.loadSpeed);
        }
      })(slowloadDiv, args);
    };
  };

  var slowImages = function (args) {
    return function () {
      var params = {
        boxColor: args.boxColor || '#000000',       // color of box overlay
        loadMaxPercent: args.loadMaxPercent || 0.0, // max percentage to load images
        loadSpeed: args.loadSpeed || 500,           // how often in ms to pass
        loadIncrement: args.loadIncrement || 1      // pixels to load per pass
      };

      // grab all the images
      var imgs = document.getElementsByTagName('img');

      // make 'em load slow
      for(var i = 0; i < imgs.length; i++) {
        // get some things we need
        var img = imgs[i],
            parent = img.parentNode,
            slowload = document.createElement('DIV');

        // set up initial state of box
        slowload.className = 'sloth-box';
        slowload.style.backgroundColor = params.boxColor;
        slowload.style.width = img.offsetWidth + 'px';
        slowload.style.height = img.offsetHeight + 'px';
        slowload.style.position = 'absolute';
        slowload.style.top = img.offsetTop + 'px';
        slowload.style.left = img.offsetLeft + 'px';
        slowload.style.clip = 'rect(0 auto auto auto)';

        // remember what the max height should be for later calculation
        slowload.slothifyData = {
            imageTopClip: 0,
            maxImageHeight: img.height * params.loadMaxPercent
        };

        // put box over image
        parent.appendChild(slowload);

        if (params.loadMaxPercent > 0.0) {
            // slowload using timeout since this is nicer to the browser :)
            setTimeout(slowloadModiferCallback(slowload, params), params.loadSpeed);
        }
      }
    }
  };

  return {
    fixMyImagesLoadingSoFast: slowImages
  };

})();