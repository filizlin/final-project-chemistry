<!--code in lessen 4-->
<template>
  <div class="home">
    <section class="main__description">
      <section class="main_text">
        <h2>Home</h2>
        <p>
          Welcome to Chemistry Demonstration for College Chemistry!
        </p>
      </section>
      <section class="main_text">
        <h3>Features</h3>
        <p>
          Here we provide a selected list of chemistry demonstrations that can
          be conducted in a chemistry classroom. With features that allows you
          to cross-search by topic or course level. With each demonstration we identify some related websites and materials that will lead you to an external site and explore the different ways that this demonstration can be carried out.
        </p>
      </section>
      <section>
        <h3>Popular Uploads</h3>
        <div class="cards">
          <div>
            <article>
              <div class="card bg-light mb-3" style="max-width: 18rem;">
                <div class="card-header"></div>
                <div class="card-body">
                  <h4 class="card-title">Rainbow Fire</h4>
                  <p class="card-text text-secondary">
                    A simple demo in classroom for general chemistry! <br /><br />
                    <div class="text-info">
                    #metal ions <br />
                    #electron excitation/relaxation <br />
                    #fireworks
                    </div>
                  </p>
                  <a class="text-quatenary card-link"><router-link to="/Rainbow_fire">View Details</router-link></a>
                </div>
              </div>
            </article>
          </div>
          <div>
            <article>
              <div class="card bg-light mb-3" style="max-width: 18rem;">
                <div class="card-header"></div>
                <div class="card-body">
                  <h4 class="card-title">Place Holder</h4>
                  <p class="card-text text-secondary">
                    Place Holder <br /><br /><br />
                    <div class="text-info">
                    #placebolder <br />#placebolder <br />#placebolder <br /></div>
                  </p>
                  <a class="card-link text-right">Not a link</a>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>
    </section>
    <blockquote class="blockquote">
      <h4>Inspirational Quote of the Day</h4>
      <p class="mb-0">
        {{ list.quote }}
      </p>
      <p class="blockquote-footer">
        <cite title="Source Title">{{ list.author }}</cite>
      </p>
    </blockquote>
  </div>
</template>
<style scoped lang="scss">
@import "./scss/_variables.scss";
@import "./node_modules/bootstrap/scss/bootstrap";

.home {
  margin: 4rem 12rem;
  h2 {
    color: $secondary-color;
  }
  h3 {
    color: $primary-color;
    text-indent: 2rem;

  }
}

.main__description {
  .main_text {
    margin-bottom: 2rem;

    p {
      padding-left: 1rem;
      font-size: 1.25rem;
      line-height: 2rem;
      text-indent: 1rem;
    }
  }
}

.cards {
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  article {
    padding-left: 3rem;
    p {
    line-height: 1rem;
    text-indent: 0rem;
    }
  }
  .card {
    width: 15rem;
    height: 15rem;
  }
  padding-bottom:4rem;
}

.blockquote {
  border: solid $secondary-color 0.5px;
  color: $primary-color;
  h4 {
    padding-top: 2rem;
    text-align: center;
    color: $secondary-color;

  }
  p {
    padding: 1rem;
    text-align: center;
  }
  .blockquote-footer {
    color: $tertiary-color;
    text-align: right;
  }
}

/* Medium devices (landscape tablets, 768px and up) */
@media only (max-width: 768px) and (min-width: 576px) {
  .home {
    margin: 4rem;
    padding: 0;
  }
}

/* Extra small devices (phones, 600px and down) */
@media only screen and (max-width: 576px) {
  .home {
    margin: 2rem;
    padding: 0;
  }
}



</style>
<script>
export default {
  name: "Home",
  data() {
    return {
      list: {},
    };
  },
  mounted() {
    fetch("https://quotes.rest/qod")
      .then((response) => {
        console.log(response);
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Request failed with");
        }
      })
      .then((json) => {
        console.log(json);
        this.list = json.contents.quotes[0];
      })
      .catch((err) => {
        console.log("ERROR ", err);
      });
  },
};
</script>
