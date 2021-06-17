<template>
  <div id="app">
    <!--header (same on all pages)-->
    <header>
      <h1>Chemistry Demonstrations</h1>
      <p>
        Providing information about different chemistry demonstration for
        different college-level chemistry course topics
      </p>
    </header>

    <!--navigation (same on all pages)-->
    <div id="nav">
      <nav class="main__navigation">
        <ul class="main__navigation-item">
          <li>
            <router-link to="/"> Home</router-link>
          </li>
          <li>
            <router-link to="/gallery"> Gallery</router-link>
            <ul class="dropdown">
              <div>
                <li>General Chemistry I</li>
                <li>General Chemistry II</li>
                <li>Introduction to General Chemistry</li>
                <li>Introduction to Organic Chemistry</li>
                <li>Introduction to Biochemistry</li>
                <li>Survey of Chemistry and Physics</li>
                <div id="insidemarker"></div>
              </div>
            </ul>
          </li>
          <li class="text-quatenary">
            <router-link to="/contact"> Contact Us</router-link>
          </li>
          <div id="marker"></div>
        </ul>
      </nav>
    </div>

    <router-view />

    <!--footer (same on all pages)-->

    <footer>
      <nav class="footer__navigation">
        <ul class="footer__navigation-item">
          <li><router-link to="/">Home</router-link></li>
          <li><router-link to="/gallery">Gallery</router-link></li>
          <li><router-link to="/contact">Contact Us</router-link></li>
        </ul>
      </nav>
    </footer>
  </div>
</template>

<style lang="scss">
/*General styling, need to copy for every page*/
@import "./scss/_variables.scss";
header {
  background-color: $quatenary-color;
  padding: 2rem 10rem;
  h1 {
    color: $primary-color;
    font-size: 3rem;
  }
  p {
    color: $tertiary-color;
    font-style: italic;
  }
}

/*navigation animation that is adopted from https://codepen.io/dghez/pen/Kwoper*/
$min-width: 200px;

@mixin transform($value) {
  -webkit-transform: ($value);
  -moz-transform: ($value);
  -ms-transform: ($value);
  transform: ($value);
}
@mixin transition($value) {
  -webkit-transition: ($value);
  -moz-transition: ($value);
  -ms-transition: ($value);
  transition: ($value);
}

#nav {
  nav {
    background: $primary-color;
    text-align: center;
  }
  .main__navigation-item {
    position: relative;
    font-size: 0;
    text-transform: uppercase;
    display: inline-block;
    padding: 0;
    font-weight: bold;
    text-align: center;
    margin-bottom: 0;
    li {
      font-size: 0.8rem;
      display: inline-block;
      position: relative;
      padding: 15px 20px;
      cursor: pointer;
      z-index: 5;
      min-width: $min-width;
      font-size: 1rem;
    }
    a {
      color: $quatenary-color;
      list-style: none;
      text-decoration: none;
    }
  }
  li {
    margin: 0;
  }
  .dropdown {
    overflow: hidden;
    list-style: none;
    position: absolute;
    padding: 15px 20px;
    width: 200%;
    div {
      @include transform(translate(0, -200%));
      @include transition(all 0.5s 0.1s);
      position: relative;
    }
    li {
      text-align: left;
      display: block;
      padding: 15px 20px;
      width: 100%;
      background: $secondary-color !important;
      font-weight: normal;
      text-transform: capitalize;
      color: $quatenary-color;
      @include transition(background-color 0.02s);
    }
    li:hover {
      background: $tertiary-color !important;
    }
  }
  #marker {
    height: 6px;
    background: $secondary-color !important;
    position: absolute;
    bottom: 0;
    width: $min-width;
    z-index: 2;
    @include transition(all 0.35s);
  }

  @for $i from 1 through 4 {
    .main__navigation-item li:nth-child(#{$i}) {
      &:hover ul div {
        @include transform(translate(0, 0));
      }
      /* This is not working, ask.  Tried adding class and :icon not working */
      &:hover font-awesome-icon {
        transform: rotate(1080deg);
      }
      &:hover ~ #marker {
        @include transform(translate(#{(-1 + $i) * $min-width}, 0));
      }
    }
  }
}

/*footer*/

footer {
  background-color: $quatenary-color;
  nav {
    background: $quatenary-color;
    text-align: center;
  }
  .footer__navigation-item {
    position: relative;

    font-size: 0;
    text-transform: capitalize;
    display: inline-block;
    padding: 0;
    text-align: center;
    li {
      font-size: 0.8rem;
      display: inline-block;
      position: relative;
      padding: 15px 20px;
      cursor: pointer;
      z-index: 5;
      min-width: $min-width;
      font-size: 1rem;
    }
    a {
      color: $primary-color;
      list-style: none;
      text-decoration: none;
    }
  }
}

/* Medium devices (landscape tablets, 768px and up) */
@media only (max-width: 768px) and (min-width: 576px) {
  .dropdown {
    display: none;
  }
}

/* Extra small devices (phones, 600px and down) */
@media only screen and (max-width: 576px) {
  header {
    width: 100%;
    padding: 1rem 3rem;
  }
  #nav {
    .main__navigation-item {
      li {
        display: block;
        min-width: 100%;
      }
      .dropdown {
        display: none;
      }
    }
  }
  #marker {
    display: none;
  }
  footer {
    .footer__navigation-item {
      li {
        display: block;
        min-width: 100%;
      }
    }
  }
}
</style>

<script>
export default {
  name: "App",
};
</script>
