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
      event.preventDefault();
      $(".submit_form").html("Sending...");
      // const toast = new bootstrap.Toast($(".success_msg")[0]);
      // const errtoast = new bootstrap.Toast($(".error_msg")[0]);

      delete jsonstr["g-recaptcha-response"];

      submit();

      async function submit() {
        try {
          const res = await fetch(
            // "https://public.herotofu.com/v1/cbe3ba00-1be3-11ef-bc5a-29d59b483c7e",
            "https://public.herotofu.com/v1/422e00c0-c028-11ee-891f-6d871096fc6f",
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json; charset=UTF-8",
              },
              body: JSON.stringify(jsonstr),
            }
          );

          if (res.ok) {
            $(".submit_form").html("Message sent");
          }
        } catch (error) {
          if (error.message === "Failed to fetch") {

            console.log("asdf");
            window.location.href = "/thankyou.html";
          }
        }
      }
    }
    form.addClass("was-validated");

  });
});
