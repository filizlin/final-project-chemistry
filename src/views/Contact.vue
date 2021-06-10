<!--code in lessen 6-->

<template>
  <div class="contact">
    <h2>Let us know what you think!</h2>
    <form class="container" id="form" method="get">
      <!-- first last name -->
      <div class="input-group mb-3">
        <span class="input-group-text">First and last name</span>
        <input
          type="text"
          aria-label="First name"
          class="form-control"
          placeholder="First"
          name="firstname"
        />
        <input
          type="text"
          aria-label="Last name"
          class="form-control"
          placeholder="Last"
          name="lastname"
        />
      </div>
      <!-- email (with validation) -->
      <div class="form-floating mb-3">
        <input
          type="email"
          name="email"
          value=""
          id="email"
          class="form-control"
          placeholder="name@example.com"
        />
        <label for="floatingInput">Email address</label>
      </div>
      <!-- How did you know about us (checkboxes) -->
      <fieldset class="mb-3">
        How did you know about us?
        <div class="form-check">
          <input
            class="form-check-input"
            type="checkbox"
            value="recommendation"
            id="recommendation"
            name="PathHere"
          />
          <label class="form-check-label" for="flexCheck" id="recommendation">
            Recommendation from friend
          </label>
        </div>
        <div class="form-check">
          <input
            class="form-check-input"
            type="checkbox"
            value="Social-Media"
            id="Social-Media"
            name="PathHere"
          />
          <label class="form-check-label" for="flexCheck" id="Social-Media">
            Social Media
          </label>
        </div>
        <div class="form-check">
          <input
            class="form-check-input"
            type="checkbox"
            value="Other"
            id="Other"
            name="PathHere"
          />
          <label class="form-check-label" for="flexCheck" id="Other">
            Other
          </label>
        </div>
      </fieldset>
      <!-- Select comment topic (dropdown menu) -->
      <select
        class="form-select mb-3"
        aria-label="Default select example"
        name="Topic"
        id="Topic"
      >
        <label class="form-select-label" name="Topic"
          >Please select a topic</label
        >
        <option selected>Topic</option>
        <option value="New-Demonstration-Suggestion"
          >New Demonstration Sugguestion</option
        >
        <option value="New-Demonstration-Suggestion">User Feedback</option>
        <option value="New-Demonstration-Suggestion">Miscellaneous</option>
      </select>
      <!-- Text comment entry -->
      <div class="form-outline mb-3">
        <textarea
          class="form-control"
          placeholder="Leave a comment here"
          name="Comment"
          id="floatingTextarea"
          rows="5"
        ></textarea>
      </div>
      <!-- Asking to agree on terms and condition (link trigers modal, validation) -->
      <div class="form-check mb-3">
        <input
          class="form-check-input"
          type="checkbox"
          value=""
          id="invalidCheck"
          required
        />
        <label
          class="form-check-label"
          for="invalidCheck"
          data-bs-toggle="modal"
          data-bs-target="#staticBackdrop"
        >
          Agree to terms and conditions
        </label>
        <div class="invalid-feedback">
          You must agree before submitting.
        </div>
      </div>
      <!-- Modal -->
      <div
        class="modal fade"
        id="staticBackdrop"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabindex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="staticBackdropLabel">
                Terms and Conditions
              </h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              By submitting this form, you agree that all the information
              included will be reviewed by the web developer and the content
              included may be used to expand the database of the website for
              research and education purpose.
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Understood
              </button>
            </div>
          </div>
        </div>
      </div>
      <!-- Submit Button with collapse -->
    </form>
  </div>
</template>

<style scoped lang="scss">
/*General styling, need to copy for every page*/
* {
  box-sizing: border-box;
  font-family: Arial, Helvetica, sans-serif;
}

$primary-color: #007193;
$secondary-color: #b98077;
$tertiary-color: #768a96;
$quatenary-color: #ebe8e2;

/*styling for heading (the rest is Boostrap)*/
.contact {
  margin: 1rem 4rem;
  h2 {
    color: $secondary-color;
    font-size: 2rem;
    padding: 1rem;
  }
}
</style>

<script scoped>
global.jQuery = require("jquery");
var $ = global.jQuery;
window.$ = $;

//find the form
const form = document.getElementById("form");

//add submit button
const submitButton = document.createElement("button");
submitButton.setAttribute("class", "btn btn-primary mb-3");
submitButton.setAttribute("type", "submit");
submitButton.setAttribute("data-bs-toggle", "collapse");
submitButton.setAttribute("data-bs-target", "#collapse");
submitButton.setAttribute("aria-expanded", "false");
submitButton.setAttribute("aria-controls", "collapse");
submitButton.textContent = "Submit";
form.appendChild(submitButton);

//add the collapse when hitting submit
const collapse = document.createElement("div");
collapse.setAttribute("class", "collapse");
collapse.setAttribute("id", "collapse");
form.appendChild(collapse);
const collapsecontent = document.createElement("div");
collapsecontent.setAttribute("class", "card card-body");
collapsecontent.textContent = "Your form has been submitted!";
document.getElementById("collapse").appendChild(collapsecontent);

//Use jQuery and refactor the form submission.

$("form").submit(function(run) {
  console.log($(this).serializeArray());
  run.preventDefault();
});
</script>
