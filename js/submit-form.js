$(function () {
  "use strict";

  // Ambil semua formulir yang ingin kita terapkan gaya validasi kustom Bootstrap
  const forms = $(".needs-validation");

  // Loop melalui formulir dan mencegah pengiriman
  forms.on("submit", function (event) {
    const form = $(this);

    var actionInput = $(this).find("input[name='action']");

    if (!form[0].checkValidity()) {
      event.preventDefault();
      event.stopPropagation();
      console.log("asdf");
    } else {
      event.preventDefault();
      $(".submit_form").html("Sending...");
      $(".btn_submit-subscribe").html("Sending...");
      const toast = new bootstrap.Toast($(".success_msg")[0]);
      const errtoast = new bootstrap.Toast($(".error_msg")[0]);
      var formData = new FormData(event.target);
      console.log(JSON.stringify(formData));
      let jsonstr = {}
      for (const [key, value] of formData) {
        // console.log(key, value);
        jsonstr[key] = value
      }
      console.log(jsonstr);

      return
      fetch(
        "https://public.herotofu.com/v1/422e00c0-c028-11ee-891f-6d871096fc6f",
        {
          method: "POST",
          mode: "no-cors",
          body: formData,
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

    form.addClass("was-validated");
  });
});
