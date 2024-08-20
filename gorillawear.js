javascript: (() => {
      /* gorillawear normalisation */
      var classes = document.getElementsByClassName("bc-sf-filter-product-item-main-image");
        var maxImages = 32;
        if (classes.length < maxImages) {maxImages = classes.length; }
    for (i = 0; i < maxImages; i++) {
        var imgSrc = classes[i].srcset.split(", ").pop().split(" ")[0];
        classes[i].oldSrc = imgSrc;
        var newUrl =  "https://res.cloudinary.com/patrickg-assets/image/upload/e_background_removal/e_trim/w_720,h_1037,c_lpad,b_auto/f_auto/q_auto/au/" + imgSrc.substring(8);
        classes[i].srcset = "";
        classes[i].src = newUrl;
    };

      var x = setInterval(function() {
    for (i = 0; i < maxImages; i++) {
        var oldSrc = classes[i].src;
        var newSrc = classes[i].oldSrc;
        classes[i].oldSrc = oldSrc;
        classes[i].src = newSrc;     
    };		
      }, 3000);      
})();
