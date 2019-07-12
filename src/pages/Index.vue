<template>
  <Layout>

    <div id="home">
      <section class="hero header is-fullheight">
        <div class="hero-body">
          <div class="container big">
            <div class="columns is-vcentered">
              <div class="column has-text-centered-mobile">
                <h1 class="title is-size-1 is-spaced has-text-white"> 
                  <span class="has-text-weight-semibold">Tridee</span> 
                  <br>
                Forum Belajar Online</h1>
                <p class="subtitle has-text-white is-size-4">
                  Untuk Kamu yang Berjiwa Positif
                </p>

                <button class="button is-medium is-rounded is-success has-margin-top-50" @click="alert">
                  Daftar Sekarang
                </button>
              </div>
            </div>
          </div>
        </div>
        <div class="owl-header">
          <g-image alt="Owl Header" src="~/assets/img/component/GIF-OWL2.gif"/>
        </div>
      </section>
    </div>

    <div id="fitur">
      <section class="section">
        <div class="container has-margin-top-10">
          <h1 class="title has-text-centered has-text-weight-bold has-margin-bottom-50">Temukan Banyak Hal Baru Disini</h1>
          <div class="laptop is-centered">
            <g-image alt="Laptop" src="~/assets/img/component/laptop-mockup.png" />
          </div>
          <div class="has-text-centered">
            <agile :fade="true" :navButtons="false" :autoplay="true" :autoplaySpeed="1000">
              <div class="slide">
                <g-image alt="Belajar Virtual" src="~/assets/img/component/belajar-virtual.png"/>
              </div>
              <div class="slide">
                <g-image alt="Mentor Professional" src="~/assets/img/component/mentor-professional.png" />
              </div>
              <div class="slide">
                <g-image alt="Banyak Bintang" src="~/assets/img/component/banyak-bintang.png" />
              </div>
            </agile>
          </div>
        </div>
      </section>
      <section class="section">
        <div class="container small">
          <div class="columns is-vcentered">
            <div class="column has-text-centered">
              <g-image alt="Camera Person" src="~/assets/img/component/camera-person.png" width="600"/>
            </div>
            <div class="column">
              <h2 class="title is-size-1 is-spaced">Tridee Forum</h2>
              <hr>
              <p class="subtitle has-text-grey">
                Temukan bakat kamu disini, sharing ilmu kamu, untuk memberikan informasi lebih keteman teman kamu
                dan tukarkan bintang dan koin kamu untuk dapatkan hadiah dari Tridee.
              </p>
            </div>
          </div>

          <hr class="is-large">

          <div class="columns is-vcentered">
            <div class="column">
              <h2 class="title is-size-1 is-spaced">Tridee Kelas</h2>
              <hr>
              <p class="subtitle has-text-grey">
                Cari kelas sesuai bakat atau profesi kamu, belajar lebih dalam lagi dengan mentor mentor lainnya, dan sharing pengalaman kamu
                belajar di forum, mulai dengan berbagi lebih baik.
              </p>
            </div>
            <div class="column has-text-centered">
              <g-image alt="Class Image" src="~/assets/img/component/class-image.png" width="600"/>
            </div>
          </div>
        </div>
      </section>
    </div>

    <div id="keuntungan">
      <section class="section service">
        <div class="container small">
          <div class="columns">
            <div class="column has-text-centered">
              <g-image alt="Gambar Tridee" src="~/assets/img/component/maskot-tridee.png" />
            </div>
            <div class="column has-margin-top-100"> 
              <h2 class="title is-size-1 is-size-3-mobile is-spaced has-text-white">Forum Edukasi Pertama di Asia yang Menggunakan Virtual Reality</h2>
              <hr>
              <p class="subtitle has-text-white">Dapatkan Experience yang sangat berbeda dari kelas lainnya, belajar dengan menggunakan VR 360
              membuat sensasi belajar anda semakin berbeda dari yang lain dan membuat anda semakin mudah mahir!
              Dan bergabung dengan teman teman lainnya di forum, buatlah banyak karya anda dan Posting!
              semakin banyak karya semakin banyak bintang dan tukarkan hadiah spesial!</p>
            </div>
          </div>
          <h1 class="title has-text-centered is-size-4 has-text-white has-margin-top-50 has-margin-bottom-50">Partner Kami</h1>
          <div class="columns is-centered has-text-centered">
            <div class="column is-3">
              <g-image alt="Arsitara" src="~/assets/img/component/arsitara.png" width="100"/>
            </div>
            <div class="column is-3">
              <g-image alt="Arsitek" src="~/assets/img/component/arsitek.png" width="100"/>
            </div>
            <div class="column is-3">
              <g-image alt="Shinta VR" src="~/assets/img/component/shinta.png" width="150"/>
            </div>
          </div>
        </div>
      </section>
    </div>

    <div id="video">
      <section class="section has-margin-top-70">
        <div class="container small">
          <div class="has-text-centered">
            <h2 class="title is-size-1 is-size-4-mobile is-spaced">
              <span class="has-text-weight-bold">Tridee</span> - Belajar Modern Bersama Tridee
            </h2>
            <p class="subtitle has-text-grey has-margin-bottom-70">
              Semua akan semakin lebih mudah!
            </p>

            <div class="video-container">
              <iframe title="Tridee Video" width="1280" height="753" data-src="https://www.youtube.com/embed/B7ny9NTeC_U" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
          </div>

          <div class="columns has-text-centered has-margin-top-30">
            <div class="column">
              <g-image alt="Virtual Reality" src="~/assets/img/icon/vr-glasses.png"/>
              <h2 class="has-text-weight-bold is-size-5 has-margin-top-20">
                Virtual Reality
              </h2>
              <p class="is-size-6 has-text-grey">
                Media Belajar Menggunakan Virtual Reality, Semakin Mudah anda untuk paham.
              </p>
            </div>
            <div class="column">
              <g-image alt="Bintang" src="~/assets/img/icon/star.png"/>
              <h2 class="has-text-weight-bold is-size-5 has-margin-top-20">
                Forum Para Bintang
              </h2>
              <p class="is-size-6 has-text-grey">
                Bergabung di Forum dan pamerkan karya anda! Dapatkan banyak bintang!
              </p>
            </div>
            <div class="column">
              <g-image alt="Coin" src="~/assets/img/icon/coin.png"/>
              <h2 class="has-text-weight-bold is-size-5 has-margin-top-20">
                Dapatkan Koin
              </h2>
              <p class="is-size-6 has-text-grey">
                Isi Koin Anda, menangkan banyak saembara, dan banyak komponen Gratis &amp; Premium
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>

    <div id="testimonial">
      <section class="section is-medium has-background-grey-lighter">
        <div class="container small">
          <div class="columns">
            <div class="column is-5">
              <h2 class="title is-spaced is-size-1">7k+ happy clients</h2>
              <p class="subtitle has-text-grey">
                Forum Edukasi berbasis Sosial media Positif pertama yang ada di ASIA
              </p>
              <hr class="is-large">
              <agile :fade="true" :navButtons="false" :dots="false" :autoplay="true" :autoplaySpeed="2000">
                <div class="slide">
                  <p class="is-size-5">
                    Saya dapat banyak ilmu baru di Tridee, karena mentornya yang sangat professional dalam mengajar sehingga mudah di pahami.
                    <br>
                    <span class="has-text-weight-bold">
                      - Rizal (Ciledug)
                    </span>
                  </p>
                </div>
                <div class="slide">
                  <p class="is-size-5">
                    Ini gila, karena harga yang sangat murah tetapi kualitas yang didapatkan super duper keren.
                    <br>
                    <span class="has-text-weight-bold">
                      - Fahmi (Medan)
                    </span>
                  </p>
                </div>
                <div class="slide">
                  <p class="is-size-5">
                    Materi mudah di pahami dan teman teman di forum sangat positif.
                    <br>
                    <span class="has-text-weight-bold">
                      - Maya (Bandung)
                    </span>
                  </p>
                </div>
              </agile>
            </div>
            <div class="column has-text-centered">
              <g-image alt="Clients" src="~/assets/img/component/logo-social.png"/>
            </div>
          </div>
        </div>
      </section>
    </div>

    <div>
      <section class="section has-background-primary">
        <div class="container small">
          <div class="level">
            <div class="level-left">
              <div class="level-item">
                <h2 class="title has-text-white has-text-centered-mobile">Tingkatan Skill Visual Kamu Bersama Tridee</h2>
              </div>
            </div>
            <div class="level-right">
              <div class="level-item">
                <button class="button is-large is-rounded" @click="alert">
                  Daftar Sekarang
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: 'Ruang Belajar Online 3D Visual & Engineering'
  },
  methods: {
    alert() {
        this.$dialog.alert('Bentar yach, lagi di renovasi nich :*')
    },
  },
  mounted() {
    function init() {
    var vidDefer = document.getElementsByTagName('iframe');
    for (var i=0; i<vidDefer.length; i++) {
    if(vidDefer[i].getAttribute('data-src')) {
    vidDefer[i].setAttribute('src',vidDefer[i].getAttribute('data-src'));
    } } }
    window.onload = init;
  }
}
</script>

