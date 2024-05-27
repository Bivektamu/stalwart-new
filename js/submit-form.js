$(function () {
  "use strict";

  // Ambil semua formulir yang ingin kita terapkan gaya validasi kustom Bootstrap
  const forms = $(".needs-validation");

  // Loop melalui formulir dan mencegah pengiriman
  forms.on("submit", function (event) {
    const form = $(this);

    var formData = new FormData(event.target);
    let jsonstr = {};
    for (const [key, value] of formData) {
      jsonstr[key] = value;
    }

    if (!form[0].checkValidity()) {
      event.preventDefault();
      event.stopPropagation();
    } else if (!jsonstr["g-recaptcha-response"]) {
      event.preventDefault();
      event.stopPropagation();
       $(".recaptcha.invalid-feedback").show();

    } else {
      $(".submit_form").html("Sending...");
    }

    /*
    else {
      event.preventDefault();

      var formData = new FormData(event.target);
      let jsonstr = {};
      for (const [key, value] of formData) {
        // console.log(key, value);
        jsonstr[key] = value;
      }
      // if (!jsonstr["g-recaptcha-response"]) {
      //   return $(".recaptcha.invalid-feedback").show();
      // }

      $(".submit_form").html("Sending...");
      $(".btn_submit-subscribe").html("Sending...");
      const toast = new bootstrap.Toast($(".success_msg")[0]);
      const errtoast = new bootstrap.Toast($(".error_msg")[0]);

      console.log(JSON.stringify(jsonstr));

      fetch(
        "https://public.herotofu.com/v1/422e00c0-c028-11ee-891f-6d871096fc6f",
        {
          method: "POST",
          body: JSON.stringify(jsonstr),
        }
      )
        .then((response) => {
          // Note: You won't be able to access the response body when mode is 'no-cors'
          console.log(response);
          console.log("Request made with no-cors mode");
          toast.show();
          $(".submit_form").html("Send Message");
        })
        .catch((error) => {
          console.error("Error:", error);

          errtoast.show();
          $(".submit_form").html("Send Message");
          $(".btn_submit-subscribe").html("SUBSCRIBE NOW");
        });
    }

     */

    form.addClass("was-validated");
  });
});
