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

            <div class="navbar-item">
              <button class="button is-primary is-rounded" @click="alert">
                  Login / Register
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>

    <slot />

    <footer>
      <div class="container small">
        <div class="columns has-text-centered-mobile is-vcentered">
          <div class="column">
            <div class="has-text-weight-bold is-size-4">
              {{ $static.metaData.siteName }}.
            </div>
          </div>
          <div class="column">
            <span>© Tridee {{ new Date().getFullYear() }}. All rights reserved. </span>
          </div>
          <div class="column">
            Karya Anak Indonesia
          </div>
          <div class="column">
            <span>
              <a href="https://www.instagram.com/tridee.id/" class="has-margin-right-20">
                <g-image alt="Instagram Logo" src="~/assets/img/icon/instagram.png" width="32"/>
              </a>
              <a href="https://www.youtube.com/channel/UCg4xHxunh6CCyJOt_I6Z_Vg">
                <g-image alt="Youtube Logo" src="~/assets/img/icon/youtube.png" width="32"/>
              </a>
            </span>
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
  methods: {
    alert() {
        this.$dialog.alert('Bentar yach, lagi di renovasi nich :*')
    },
  },
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
