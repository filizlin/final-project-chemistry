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
          to search by topic or course level. For each demonstration we also
          provide a sample list of materials that is necessary for each
          demonstration, as well as links to the provider
        </p>
      </section>
      <section class="cards">
        <h3>Popular Uploads</h3>
        <div class="row">
          <div class="col-sm-3">
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
          <div class="col-sm-3">
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
  article {
    padding-left: 3rem;
    p {
    line-height: 1rem;
    text-indent: 0rem;
    }
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
