if (window.netlifyIdentity) {
  window.netlifyIdentity.on("init", user => {
    if (!user) {
      window.netlifyIdentity.on("login", () => {
        document.location.href = "/admin/";
      });
    }
  });
}

// lightbox code w/out using jQuery
// document.addEventListener("DOMContentLoaded", function(event) { 
//   const entirePage = document.querySelector("html");
//   const lightbox = document.querySelector(".lightbox");
//   const lightboxFilter = document.querySelector(".lightbox .filter");
//   const lightboxNext = document.querySelector(".lightbox .arrowr");
//   const lightboxPrevious = document.querySelector(".lightbox .arrowl");
//   const lightboxTitle = document.querySelector(".lightbox .title");
//   const allLightboxImages = document.querySelectorAll(".lightbox-group img");
//   let theseLightboxImages = []; // will hold list of image elements in clicked scope
//   let nowShowing = null;

//   // open lightbox
//   function anchorOnClick(event) { 
//     // get all images in the scope you clicked in
//     const clickedParent = event.target.parentNode;
//     lightboxImages = clickedParent.querySelectorAll("img");
     
//     let lightbox = document.querySelector(".lightbox");
//     lightbox.style.display = "block";
//     let img = document.createElement("img");
//     nowShowing = event.target.src;
//     img.setAttribute("src", event.target.src);
//     img.setAttribute("title", event.target.title);
//     lightbox.appendChild(img); 
//     lightboxTitle.textContent = event.target.title;
//     lightboxFilter.style.backgroundImage = "url(" + event.target.src + ")";
//     entirePage.style.overflow = "hidden";
//   };

//   for (const image of allLightboxImages) {
//     image.addEventListener('click', anchorOnClick);
//   }

//   function closeLightbox() {
//     lightbox.style.display = "none";
//     let lightboxImg = document.querySelector(".lightbox img");
//     if (lightboxImg) {
//       lightboxImg.remove();
//     }
//     entirePage.style.overflow = "auto";
//   }

//   // lightbox closer
//   const lbclose = document.querySelector(".lightbox .close");
//   lbclose.onclick = closeLightbox;

//   // next image handler
//   function getNextImage() {
//     for (var i = 0; i < lightboxImages.length; i++) {
//       if (lightboxImages[i].src == nowShowing) {
//         let newImage = i+1 >= lightboxImages.length ? lightboxImages[0] : lightboxImages[i+1];
//         let thisImage = document.querySelector(".lightbox img");
//         nowShowing = newImage.src;
//         thisImage.setAttribute("src", newImage.src);
//         thisImage.setAttribute("title", newImage.title);
//         lightboxTitle.textContent = newImage.title;
//         lightboxFilter.style.backgroundImage = "url(" + newImage.src + ")";
//         break;
//       }
//     }
//   }
//   lightboxNext.addEventListener('click', getNextImage);

//   // previous image handler
//   function getPreviousImage() {
//     for (var i = 0; i < lightboxImages.length; i++) {
//       if (lightboxImages[i].src == nowShowing) {
//         let newImage = i > 0 ? lightboxImages[i-1] : lightboxImages[lightboxImages.length - 1];
//         let thisImage = document.querySelector(".lightbox img");
//         nowShowing = newImage.src;
//         thisImage.setAttribute("src", newImage.src);
//         thisImage.setAttribute("title", newImage.title);
//         lightboxTitle.textContent = newImage.title;
//         lightboxFilter.style.backgroundImage = "url(" + newImage.src + ")";
//         break;
//       }
//     }
//   }
//   lightboxPrevious.addEventListener('click', getPreviousImage);
    
//   document.addEventListener("keyup", function(event) { 
//     if (event.keyCode == 27) {
//       closeLightbox();
//     }
//     if (event.keyCode == 39) {
//       getNextImage();
//     }
//     if (event.keyCode == 37) {
//       getPreviousImage();
//     }
//   });
// });