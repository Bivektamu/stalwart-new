function initMap() {
  // Replace with the place ID of the business you want to get reviews for
  const placeId = "ChIJpxAzg0f-mKwRP-byhnxy3Ko";

  const map = new google.maps.Map(document.createElement("div"));
  const service = new google.maps.places.PlacesService(map);

  service.getDetails(
    {
      placeId: placeId,
      fields: ["reviews"],
    },
    (place, status) => {
      if (status === google.maps.places.PlacesServiceStatus.OK) {
        displayReviews(place.reviews);
      } else {
        console.error("Place details request failed:", status);
      }
    }
  );
}

function displayReviews(reviews) {

  reviews.forEach((review) => {

    const reviewElement = $(`
        <div class="swiper-slide ">
            <div class="d-flex flex-column p-4 gap-3 bg-secondary-dark">
                <ul class="d-flex flex-row gap-2 m-0 p-0">
                    ${Array(review.rating).fill('').map(_=>`<li class="text-warning"><i class="fa-solid fa-star"></i></li>`).toString().replaceAll(',','')}
                </ul>
                <p>${review.text}</p>

                <div class="d-flex flex-row justify-content-between align-items-center">
                    <div class="d-flex align-items-center gap-3">
                      <img src=${review.profile_photo_url} style="width: 50px;" />
                        <h6 class="accent-color m-0 font-1 fw-bold">${review.author_name}</h6>
                    </div>
                    <span class="fs-1 text-gray m-0"><i class="fa-solid fa-quote-right"></i></span>
                </div>
            </div>
        </div>
    `);

    $('#reviews .swiper-wrapper').append(reviewElement);
  });

  // reviewsContainer.append(wrapper);
}

document.addEventListener("DOMContentLoaded", initMap);
