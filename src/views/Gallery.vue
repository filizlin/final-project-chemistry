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
      <section class="cards">

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
  padding-left: 0rem;
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
  
  .cards {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
  article {
    padding-left: 3rem;
    display: inline-flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
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
  
}

/* Medium devices (landscape tablets, 768px and up) */
@media only (max-width: 768px) and (min-width: 576px) {
  .gallery {
    margin: 2rem 4rem;
    padding: 0;
    display: block;
  }
  .side__navigation {
    padding: 0;
    margin: 0;
    width: 100%;
    .side__navigation-item {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    }
  }
  .cards {
    margin: 0;
    padding: 0;
    justify-content: center;
  }
}

/* Extra small devices (phones, 600px and down) */
@media only screen and (max-width: 576px) {
  .gallery {
    margin: 1rem 2rem;
    padding: 0;
    display: block;
  }
  .side__navigation {
    display: none;
    }
  
  .cards {
    margin: 0;
    padding: 0;
    justify-content: center;
  }
}
</style>
