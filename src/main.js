// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api
import '~/assets/style/index.scss';

import DefaultLayout from '~/layouts/Default.vue'
import VueScrollTo from 'vue-scrollto'
// import VueCarousel from 'vue-carousel';

export default function (Vue, { router, head, isClient }) {
  head.link.push({
    src: 'https://fonts.googleapis.com/css?family=Nunito+Sans:300,400,600,700&display=swap',
    rel: 'stylesheet',
  })
  
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)

  Vue.use(VueScrollTo, {
    duration: 500,
    easing: "ease",
  })

  // Vue.use(VueCarousel);
}