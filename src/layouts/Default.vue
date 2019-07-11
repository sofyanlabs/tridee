<template>
  <div id="app">
    <nav
      class="navbar"
      id="nav"
      role="navigation"
      aria-label="primary navigation"
    >
      <div class="container">
        <div class="navbar-brand">
          <div class="has-text-weight-bold is-size-4">
            {{ $static.metaData.siteName }}.
          </div>
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
          <div class="navbar-end">
            <a v-if="$route.path === '/'" href="/#home" v-scroll-to="'#home'" class="navbar-item">Home</a>
            <g-link v-else to="/#home" class="navbar-item">Home</g-link>
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
