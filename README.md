# ComcastifyJS
With all this internet going around, sometimes you just want to experience the thrill of a long page load. Give your users the chance to enjoy a little slice of the future by slow loading your website's images with ComcastifyJS!

## Lets slow things down!
1. Include comcastify.js on your page or use the latest version from our CDN:

    ```html
    <script src="http://code.onion.com/comcastify.js"></script>
    ```

2. Prepare the images on your page on document ready (so images don't show up before the box):

    ```js
    comcastifyjs.letsPrepareTheseImages();
    ```

3. Initialize comcastify on window load (so image sizes are properly calculated):

    ```js
    comcastifyjs.fixMyImagesLoadingSoFast({
        boxColor: '#123456',
        loadMaxPercent: 0.75,
        loadSpeed: 100,
        loadIncrement: 5
    });
    ```
4. Switch up parameters to change your experience:
    * **elements** list of DOM elements to limit comcastification to.
    * **boxColor** Hex color for the box placed over images.
    * **loadMaxPercent** Max percentage of image to load.
    * **loadSpeed** Speed to load your images to their max in ms.
    * **randLoadIncrement** Set to true to make load increment random, loadIncrement ignored in this case.
    * **loadIncrement** Number of pixels to load each time the loadSpeed timer ticks.
    * **randomPause** Probability of skipping a pass each time the loadSpeed timer ticks.

## See it in action!
See an example on the project's site at: http://theonion.github.io/comcastifyjs/

Or, see it modeled by [these koalas!](http://www.clickhole.com/article/these-koalas-are-refusing-load-support-net-neutral-967)

## That's it!
Now grab a coffee and enjoy the load times!
