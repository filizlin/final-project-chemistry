<!--code in lessen 6-->

<template>
  <div class="contact">
    <h2>Let us know what you think!</h2>

    <form class="container" @submit.prevent="processForm" id="contact-form">
      <!--Name-->
      <div class="input-group mb-3">
        <span class="input-group-text">First and last name</span>
        <input
          type="text"
          aria-label="First name"
          class="form-control"
          placeholder="First"
          name="firstname"
          v-model="firstname"
        />
        <input
          type="text"
          aria-label="Last name"
          class="form-control"
          placeholder="Last"
          name="lastname"
          v-model="lastname"
        />
      </div>
      <!--Email with validation-->
      <div class="form-floating mb-3">
        <input
          type="email"
          name="email"
          id="email"
          class="form-control"
          placeholder="name@example.com"
          v-model="email"
        />
        <label for="floatingInput">Email address</label>
      </div>
      <!--Checkbox for how know us-->
      <fieldset class="mb-3">
        How did you know about us?
        <div class="form-check">
          <input
            class="form-check-input"
            type="checkbox"
            value="recommendation"
            id="recommendation"
            name="PathHere"
            v-model="PathHere"
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
            v-model="PathHere"
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
            v-model="PathHere"
          />
          <label class="form-check-label" for="flexCheck" id="Other">
            Other
          </label>
        </div>
      </fieldset>
      <!--picking topic using dropdown-->
      <select
        class="form-select mb-3"
        aria-label="Default select example"
        name="Topic"
        id="Topic"
        v-model="Topic"
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
      <!--leaving comment textbox-->
      <div class="form-outline mb-3">
        <textarea
          class="form-control"
          placeholder="Leave a comment here"
          name="Comment"
          id="floatingTextarea"
          rows="5"
          v-model="Comment"
        ></textarea>
      </div>
      <!--Terms and conditions with validation-->
      <div class="form-check mb-3">
        <input
          class="form-check-input"
          type="checkbox"
          value=""
          id="invalidCheck"
          required
        />
        <!--modal that pop out for terms and conditions-->
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
      <!--submit button-->
      <button
        class="btn btn-primary mb-3"
        type="submit"
        data-bs-toggle="collapse"
        data-bs-target="#collapse"
        aria-expanded="false"
        aria-controls="collapse"
      >
        Submit
      </button>
      <!--collapse indication successful submission-->
      <div class="collapse" id="collapse">
        <div class="card card-body">Your form has been submitted!</div>
      </div>
    </form>
  </div>
</template>

<style scoped lang="scss">
/*General styling, need to copy for every page*/
@import "./scss/_variables.scss";
@import "./node_modules/bootstrap/scss/bootstrap";

/*styling for heading (the rest is Boostrap)*/
.contact {
  margin: 4rem 12rem;
  h2 {
    color: $secondary-color;
    font-size: 2rem;
  }
}

/* Medium devices (landscape tablets, 768px and up) */
@media only (max-width: 768px) and (min-width: 576px) {
  .contact {
    margin: 2rem 4rem;
    padding: 0;
    display: block;
  }
}

/* Extra small devices (phones, 600px and down) */
@media only screen and (max-width: 576px) {
  .contact {
    margin: 1rem 2rem;
    padding: 0;
    display: block;
  }
}
</style>
<script>
export default {
  name: "contact",
  data() {
    return {
      firstname: "",
      lastname: "",
      email: "",
      PathHere: "",
      Topic: "",
      Comment: "",
    };
  },
  methods: {
    processForm: function() {
      let feedback = {
        firstname: this.firstname,
        lastname: this.lastname,
        email: this.email,
        PathHere: this.PathHere,
        Topic: this.Topic,
        Comment: this.Comment,
      };
      console.log(feedback);
      this.firstname = "";
      this.lastname = "";
      this.email = "";
      this.PathHere = "";
      this.Topic = "";
      this.Comment = "";
    },
  },
};
</script>
