# ComcastifyJS
With all this internet going around, sometimes you just want to experience the thrill of a long page load. Give your users the chance to enjoy a little slice of the future by slow loading your website's images with ComcastifyJS!

## Lets slow things down!
1. Include comcastify.js on your page or use the latest version from our CDN:

      ```<script src="http://code.onion.com/comcastify.js"></script>```

2. Initialize comcastify on window load, something like this (so image sizes are properly calculated):

    ```
    window.onload = comcastifyjs.fixMyImagesLoadingSoFast({
        boxColor: '#123456',
        loadMaxPercent: 0.75,
        loadSpeed: 100,
        loadIncrement: 5
    });
    ```
3. Switch up parameters to change your experience:
    * **boxColor** Hex color for the box placed over images.
    * **loadMaxPercent** Max percentage of image to load.
    * **loadSpeed** Speed to load your images to their max in ms.
    * **loadIncrement** Number of pixels to load each time the loadSpeed timer ticks.

## See it in Action!
See an example on the project's site at: http://theonion.github.io/comcastifyjs/

## That's it!
Now grab a coffee and enjoy the load times!