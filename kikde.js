javascript: (() => {
      /* kik.de normalisation - go to the product page */
      var classes = document.getElementsByClassName(
        "sf-image--wrapper sf-product-card__image");
        var maxImages = 3;
        if (classes.length < maxImages) {maxImages = classes.length; }
    for (i = 0; i < maxImages; i++) {
        var imgSrc = classes[i].getElementsByTagName("img")[0].src;
        imgSrc = classes[i].getElementsByTagName("img")[0].oldSrc = imgSrc;
        var newUrl =  "https://res.cloudinary.com/patrickg/image/upload/e_background_removal/e_trim/w_417,h_521,c_pad,b_rgb:cccccc/f_auto/q_auto/mo/" + imgSrc.substring(8);
        classes[i].getElementsByTagName("img")[0].src = newUrl;
    };

      var x = setInterval(function() {
    for (i = 0; i < maxImages; i++) {
        var oldSrc = classes[i].getElementsByTagName("img")[0].src;
        var newSrc = classes[i].getElementsByTagName("img")[0].oldSrc;
        classes[i].getElementsByTagName("img")[0].oldSrc = oldSrc;
        classes[i].getElementsByTagName("img")[0].src = newSrc; 
        console.log()       
    };		
      }, 3000);      
})();
