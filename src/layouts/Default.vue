<template>
  <div id="app">
    <nav
      class="navbar"
      id="nav"
      role="navigation"
      aria-label="primary navigation"
    >
      <div class="container">
        <div class="navbar-brand is-centers">
          <g-image alt="Logo Tridee" src="~/assets/img/logo.png" width="120"/>
          <a
            role="button"
            class="navbar-burger burger is-transparent has-text-white"
            :class="{ 'is-active': showNav }"
            aria-label="menu"
            aria-expanded="false"
            @click="showNav = !showNav"
          >
            <span aria-hidden="true" />
            <span aria-hidden="true" />
            <span aria-hidden="true" />
          </a>
        </div>

        <div
          class="navbar-menu"
          :class="{ 'is-active': showNav } "
        >
          <div class="navbar-end is-centers">
            <a v-if="$route.path === '/'" href="/#home" v-scroll-to="'#home'" class="navbar-item">Home</a>
            <g-link v-else to="/#home" class="navbar-item">Home</g-link>

            <a v-if="$route.path === '/'" href="/#fitur" v-scroll-to="'#fitur'" class="navbar-item">Fitur</a>
            <g-link v-else to="/#fitur" class="navbar-item">Fitur</g-link>

            <a v-if="$route.path === '/'" href="/#keuntungan" v-scroll-to="'#keuntungan'" class="navbar-item">Keuntungan</a>
            <g-link v-else to="/#keuntungan" class="navbar-item">Keuntungan</g-link>

            <a v-if="$route.path === '/'" href="/#video" v-scroll-to="'#video'" class="navbar-item">Video</a>
            <g-link v-else to="/#video" class="navbar-item">Video</g-link>

            <a v-if="$route.path === '/'" href="/#testimonial" v-scroll-to="'#testimonial'" class="navbar-item">Testimonial</a>
            <g-link v-else to="/#testimonial" class="navbar-item">Testimonial</g-link>

            
            <a href="#" class="button is-primary is-rounded has-margin-left-10">Login / Register</a>
          </div>
        </div>
      </div>
    </nav>

    <slot />

    <footer>
      <div class="container small">
        <div class="columns">
          <div class="column">
            <div class="has-text-weight-bold is-size-4">
              {{ $static.metaData.siteName }}.
            </div>
          </div>
          <div class="column has-text-centered">
            <span>© Tridee {{ new Date().getFullYear() }}. All rights reserved. </span>
          </div>
          <div class="column">
            Social Media Account
          </div>
        </div>
      </div>
    </footer>

  </div>
</template>

<script>
export default {
  data: () => ({
    showNav: false,
  }),
  mounted() {
    this.$nextTick(function(){
      window.addEventListener("scroll", function(){
        var navbar = document.getElementById("nav")
        var nav_classes = navbar.classList
        if(document.documentElement.scrollTop >= 150) {
          if (nav_classes.contains("shrink") === false) {
            nav_classes.toggle("shrink");
          }
        }
        else {
          if (nav_classes.contains("shrink") === true) {
            nav_classes.toggle("shrink");
          }
        }
      })
    })
  },
}
</script>

<static-query>
query {
  metaData {
    siteName
  }
}
</static-query>
