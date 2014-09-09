var slothifyjs = (function () {

    // setup slowload modifier callback, structure avoids some annoying timer/closure problems
    var slowloadModiferCallback = function (slowloadDiv, args) {

         return function () {

            (function (slowloadDiv, args) {

                // calculate new height
                var currHeight = parseInt(slowloadDiv.style.height.replace('px', '')),
                    currTop = parseInt(slowloadDiv.style.top.replace('px', '')),
                    inc = currHeight - args.loadIncrement <= slowloadDiv.slothifyData.maxHeight
                            ? currHeight - slowloadDiv.slothifyData.maxHeight : args.loadIncrement,
                    newHeight = currHeight - inc,
                    newTop = currTop + inc;

                    // update slowload div
                    slowloadDiv.style.height = newHeight + 'px';
                    slowloadDiv.style.top = newTop + 'px';

                // check stopping conditions
                if (newHeight > slowloadDiv.slothifyData.maxHeight) {

                    // create new update timeout
                    setTimeout(slowloadModiferCallback(slowloadDiv, args), args.loadSpeed);

                }

            })(slowloadDiv, args);

        };

    };

    var slothify = function (args) {

        return function () {

            var params = {

                loadMaxPercent: args.loadMaxPercent || 1.0, // max percentage to load images
                boxColor: args.boxColor || '#000000',       // color of box overlay
                loadSpeed: args.loadSpeed || 500,           // how often in ms to pass
                loadIncrement: args.loadIncrement || 1      // pixels to load per pass

            };

            // loop through images and make them slow
            var imgs = document.getElementsByTagName('img');
            for(var i = 0; i < imgs.length; i++) {

                // get some things we need
                var img = imgs[i],
                    parent = img.parentNode,
                    slowload = document.createElement('DIV');

                // set up initial state of box
                slowload.className = 'sloth-box';
                slowload.style.backgroundColor = params.boxColor;
                slowload.style.width = img.width;
                slowload.style.height = img.height;
                slowload.style.position = 'absolute';
                slowload.style.top = img.offsetTop;
                slowload.style.left = img.offsetLeft;

                // remember what the max height should be for later calculation
                slowload.slothifyData = {
                    maxHeight: img.height * (1.0 - params.loadMaxPercent)
                };

                // put box over image
                parent.appendChild(slowload);

                // slowload using timeout since this is nicer to the browser :)
                setTimeout(slowloadModiferCallback(slowload, params), params.loadSpeed);

            }

        }

    };

    return {

        fixMyImagesLoadingSoFast: slothify

    };

})();