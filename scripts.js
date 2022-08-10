$(document).ready(function() {
        $.ajax({
                type: "GET",
                url: "https://smileschool-api.hbtn.info/quotes",
                success: function(data) {
                    console.log(data);
                    data.forEach(e => {
                    $("#carousel-controls .carousel-inner").append(`
                        <div class="carousel-item py-5 p-md-5">
                        <div class="item-inner d-md-flex flex-row">
                            <img src="${e.pic_url}" width="160px" height="160px" class="quotes d-block mx-auto justified-left rounded-circle mr-2">
                            <div class="carousel-caption d-md-block text-left">
                                <p>${e.text}</p>
                                <p class="font-weight-bold">${e.name}</p>
                                <p class="font-italic">${e.title}</p>
                            </div>
                        </div>
                    </div>
                    `)
                }
                )
                }
              }
            )
    }
    )
function loadcardspop() {
    $.ajax({
        type: "GET",
        url: "https://smileschool-api.hbtn.info/popular-tutorials",
        success: function(data) {
            console.log(data);
            data.forEach(f => {
                let card = 0;
                $("#carousel-video-controls-pop .carousel-inner").append(`
                <div class="row">
                  <div class="row-sm m-4">
                    <div class="video-card card c${card} text-left border-0 center">
                    <img src="${f.thumb_url}" alt="Card image" class="card-img-top"/>
                      <div class="card-body text-black">
                        <h3 class="card-title font-weight-bold text-black">${f.title}</h3>
                        <p class="card-text text-secondary">${f["sub-title"]}</p>
                        <div class="d-flex justify-content-start">
                          <img src="${f.author_pic_url}" class="circle-thumb-small rounded-circle"/>
                          <p class="text-violet m-3">${f.author}</p>
                        </div>
                        <div class="d-flex justify-content-space-between">
                          <div class="stars d-flex justify-content-space-between mr-auto">
                          </div>
                           <div>
                             <p class="text-violet text-right">${f.duration}</p>
                           </div>
                         </div>
                       </div>
                     </div>
                   </div>
                   
    `); 
    for (let i = 0; i <= 5; i++) {
      if (i <= f.star) {
        $(`#carousel-video-controls-pop .carousel-inner .c${card} .stars`).append(`<img src="images/star_on.png" height="15px" width="15" class="star_on"/>`)
      } else {
        $(`#carousel-video-controls-pop .carousel-inner .c${card} .stars`).append(`<img src="images/star_off.png" height="15px" width="15" class="star_off"/>`)
      }
    }card++;
    if (card == 0) {
      $(`#carousel-video-controls-pop .c${card}`).addClass("active")
    }
  })
}
}
)
}
loadcardspop();

function loadcardslat() {
  $.ajax({
      type: "GET",
      url: "https://smileschool-api.hbtn.info/latest-videos",
      success: function(data) {
          console.log(data);
          data.forEach(f => {
              let card2 = 0;
              $("#carousel-video-controls-lat .carousel-inner").append(`
              <div class="row">
                <div class="row-sm m-4">
                  <div class="video-card card c${card2} text-left border-0">
                  <img src="${f.thumb_url}" alt="Card image" class="card-img-top"/>
                    <div class="card-body text-black">
                      <h3 class="card-title font-weight-bold text-black">${f.title}</h3>
                      <p class="card-text text-secondary">${f["sub-title"]}</p>
                      <div class="d-flex justify-content-start">
                        <img src="${f.author_pic_url}" class="circle-thumb-small rounded-circle"/>
                        <p class="text-violet m-3">${f.author}</p>
                      </div>
                      <div class="d-flex justify-content-space-between">
                        <div class="stars d-flex justify-content-space-between mr-auto">
                        </div>
                         <div>
                           <p class="text-violet text-right">${f.duration}</p>
                         </div>
                       </div>
                     </div>
                   </div>
                 </div>
                 
  `); 
  for (let i = 0; i <= 5; i++) {
    if (i <= f.star) {
      $(`#carousel-video-controls-pop .carousel-inner .c${card2} .stars`).append(`<img src="images/star_on.png" height="15px" width="15" class="star_on"/>`)
    } else {
      $(`#carousel-video-controls-pop .carousel-inner .c${card2} .stars`).append(`<img src="images/star_off.png" height="15px" width="15" class="star_off"/>`)
    }
  }card2++;
  if (card2 == 0) {
    $(`#carousel-video-controls-pop .c${card2}`).addClass("active")
  }
})
}
}
)
}
loadcardslat();