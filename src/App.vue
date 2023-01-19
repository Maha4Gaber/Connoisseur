<template>
  <main>
      <Header></Header>
      <div class="container">
        <router-view></router-view>
      </div>
  </main>
</template>

<script>

import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
export default {
  components:{Header,Footer}
}
</script>

<style lang="scss">
body::-webkit-scrollbar {
  width: 11px;
}

body::-webkit-scrollbar-thumb {
  background: linear-gradient(#d07a7a, #9e4116);
  border: 1px solid#f5f0e0;
  border-radius: 10px;
}

body::-webkit-scrollbar-thumb:hover {
  background: linear-gradient(#9c5959, #d07a7a);
}

*
{
  margin: 0;
  padding: 0;
}
body {
	background: #f5f0e0 url(./assets/images/noise.png);
	font-family: Century Gothic, sans-serif;
	color: #252525;
	font-size: 14px;
	text-shadow: 0 0 1px rgba(0, 0, 0, 0.10);
  h1 {
	font-size: 50px;
  }
  h2 {
    font-size: 45px;
  }
  h3 {
    font-size: 40px;
  }
  h4 {
    font-size: 35px;
  }
  h5 {
    font-size: 30px;
  }
  h6 {
    font-size: 25px;
  }
  h1, h2, h3, h4, h5, h6 {
	font-family: 'Lobster', cursive;
	color: #9c5959;
	text-shadow: 0px 1px 1px rgba(0, 0, 0, 0.2);
	font-weight: normal;
	line-height: 1.3;
  margin: 0;
  padding: 0;
  }
  a {
    color: #9c5959;
    text-decoration: none;
    border-bottom: 1px dotted #9c5959;
    &:hover
    {
    color: #9c5959;
    }
  }
  li{
    list-style: none
  }
@import url('https://fonts.googleapis.com/css2?family=Lobster&family=Lobster+Two:ital,wght@0,400;0,700;1,400;1,700&display=swap');

}

#app {

  main {
    background: url(./assets/images/bg.png) center top repeat-x;
    @media (max-width:767px) {
        background: none !important;
      }
}
}
</style>
