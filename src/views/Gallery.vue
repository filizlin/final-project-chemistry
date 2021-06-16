<!--code in lessen 5-->

<template>
  <div class="gallery">
    <section class="side__navigation">
      <ul class="side__navigation-item">
        <li>Chemical Reactions</li>
        <li>Gas Laws</li>
        <li>Elements of the Periodic table</li>
        <li>Light and Polarization</li>
      </ul>
    </section>
    <section class="main__description">
      <h2 class="main__page-header">Glossary</h2>
      <section class="items">
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
  </div>
</template>

<style scoped lang="scss">
@import "./scss/_variables.scss";
@import "./node_modules/bootstrap/scss/bootstrap";

/* Page layout */
//define grid area
.gallery {
  .side__navigation {
    grid-area: side;
  }
  .main__description {
    grid-area: content;
  }
}

//grid template layout
.gallery {
  display: grid;
  grid-template-columns: 1fr 3fr;
  grid-template-areas: "side content content";
}

/*side menu*/
.side__navigation {
  background: white;
  text-align: left;
  width: 25rem;
  padding-top: 2rem;
  padding-left: 4rem;
  .side__navigation-item {
    color: $tertiary-color;
    position: relative;
    list-style: none;
    font-size: 0;
    text-transform: capitalize;
    display: inline-block;
    padding: 0;
    font-weight: bold;
    text-align: left;
    cursor: pointer;
    li {
      font-size: 0.8rem;
      display: block;
      position: relative;
      padding: 15px 20px;
      font-size: 1rem;
      cursor: pointer;
    }
    li:hover {
      background: $tertiary-color !important;
      color: $quatenary-color;
    }
  }
}
/*main content*/
.gallery {
  margin: 4rem 12rem;
  h2 {
    color: $secondary-color;
    font-size: 2rem;
    padding-bottom: 1rem;
  }
  .items {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
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
  }
}
</style>
