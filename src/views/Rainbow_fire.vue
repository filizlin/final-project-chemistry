<template>
  <div class="Rainbow">
    <div class="description">
      <h2>Rainbow Fire</h2>
      <div class="text">
        <h3>Related Concepts</h3>
        <ul>
          <li>
            Electrons (Orbitals, Excitation, Ground State, Excitation State)
          </li>
          <li>Metal and their Ions (metal salts, periodic table)</li>
          <li>The three criteria of fire (fuel, oxygen, and spark)</li>
        </ul>
      </div>
      <div class="text">
        <h3>Suggested Courses for thisDemonstration</h3>
        <ul>
          <li>
            Any level of General Chemistry
          </li>
          <li>Outreach Demonstration for any level</li>
        </ul>
      </div>
      <div class="text">
        <h3>Resources and Documentations</h3>
        <p>The following are selected links to some related websites.</p>
        <ul>
          <li>
            <a
              href="https://www.thoughtco.com/make-a-rainbow-of-colored-flames-606193"
              >How to Make a Rainbow of Colored Flames</a
            >
            by ThoughtCo
          </li>
          <li>
            <a
              href="https://edu.rsc.org/exhibition-chemistry/the-rainbow-flame-demonstration/3009399.article"
              >The rainbow flame demonstration</a
            >
            by Royol Society of Chemistry
          </li>
          <li>
            <a
              href="https://melscience.com/US-en/articles/colored-flame-experiment/"
              >"Colored Flame" experiment</a
            >
            by MEL Chemistry
          </li>
        </ul>
      </div>
      <div class="alert alert-danger">
        <h4>Disclaimer</h4>
        <p>
          This demonstration is meant for educational purpose. Please do use the
          information with caucious and make sure to check all the safety
          equipment around you prior to conducting any demonstration. Handle the
          chemicals with care and don't forget your PPE!
        </p>
      </div>
    </div>
  </div>
</template>
<style scoped lang="scss">
/*General styling, need to copy for every page*/
@import "./scss/_variables.scss";
@import "./node_modules/bootstrap/scss/bootstrap";

/*styling for heading (the rest is Boostrap)*/
.Rainbow {
  margin: 4rem 12rem;
  h2 {
    color: $secondary-color;
    font-size: 2rem;
  }
  h3 {
    color: $primary-color;
    text-indent: 2rem;
  }
}

.description {
  .text {
    margin-bottom: 2rem;
    p {
      padding-left: 1rem;
      font-size: 1.25rem;
      line-height: 2rem;
      text-indent: 1rem;
    }
    ul {
      margin-left: 3rem;

      li {
        padding-left: 1rem;
        font-size: 1.25rem;
        line-height: 2rem;
        list-style: circle;
      }
    }
  }
}

/* Medium devices (landscape tablets, 768px and up) */
@media only (max-width: 768px) and (min-width: 576px) {
  .Rainbow {
    margin: 2rem 4rem;
    padding: 0;
    display: block;
  }
}

/* Extra small devices (phones, 600px and down) */
@media only screen and (max-width: 576px) {
  .Rainbow {
    margin: 1rem 2rem;
    padding: 0;
    display: block;
  }
}
</style>
