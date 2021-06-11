<!--code in lessen 4-->
<template>
  <div class="home">
    <section class="main__description">
      <h2 class="main__page-header">Home</h2>
      <p class="main__welcome-message">
        Welcome to Chemistry Demonstration for College Chemistry!
      </p>
      <h3 class="main__subheading">Features</h3>
      <p>
        Here we provide a selected list of chemistry demonstrations that can be
        conducted in a chemistry classroom. With features that allows you to
        search by topic or course level. For each demonstration we also provide
        a sample list of materials that is necessary for each demonstration, as
        well as links to the provider
      </p>
      <h3 class="main__subheading">Popular Uploads</h3>
      <ul>
        <li>The elephant's toothpaste</li>
        <li>Colored Fire</li>
      </ul>
    </section>
    <section>
      <h3>Inspirational Quote of the Day</h3>
      {{quote + "--by" + author}}
  </div>
</template>
<style scoped lang="scss">
* {
  box-sizing: border-box;
  font-family: Arial, Helvetica, sans-serif;
}

$primary-color: #007193;
$secondary-color: #b98077;
$tertiary-color: #768a96;
$quatenary-color: #ebe8e2;

section {
  margin: 1rem 4rem;
  h2 {
    color: $secondary-color;
    font-size: 2rem;
  }
  h3 {
    color: $primary-color;
    font-size: 1.5rem;
  }
}
</style>

<script>
export default {
  name: "Home",
  data() {
    return {
      quote = ""
      author = "",
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
        quote = json.contents.quotes[0].quote
        author = json.contents.quotes[0].author
        })
      .catch((err) => {
        console.log("ERROR ", err);
      });
  },
};
</script>
