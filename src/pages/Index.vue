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

                <a href="#" class="button is-medium is-rounded is-success has-margin-top-50">Daftar Sekarang</a>
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
            <div class="column">
              <g-image alt="Gambar 3" src="~/assets/img/component/home-03.png" />
            </div>
            <div class="column"> 
              <h2 class="title is-size-1 is-spaced has-text-white">Lorem, ipsum dolor sit amet consectetur adipisicing elit.</h2>
              <hr>
              <p class="subtitle has-text-white">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil saepe repellat perspiciatis autem! Nam eaque enim exercitationem deleniti officiis maiores sapiente repudiandae, eius dolorem rerum dolores tempore tenetur, pariatur necessitatibus.</p>
            </div>
          </div>
        </div>
      </section>
    </div>

    <div id="video">
      <section class="section has-margin-top-70">
        <div class="container small">
          <div class="has-text-centered">
            <h2 class="title is-size-1 is-spaced">
              <span class="has-text-weight-bold">Tridee</span> - Belajar Modern Bersama Tridee
            </h2>
            <p class="subtitle has-text-grey has-margin-bottom-70">
              Belajar bersama dengan mentor terbaik
            </p>

            <div class="video-container">
              <iframe width="1280" height="753" data-src="https://www.youtube.com/embed/B7ny9NTeC_U" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
          </div>

          <div class="columns has-margin-top-30">
            <div class="column">
              <h2 class="is-size-5">
                Fitur 1
              </h2>
              <p class="is-size-6 has-text-grey">
                Deskripsi Fitur 1
              </p>
            </div>
            <div class="column">
              <h2 class="is-size-5">
                Fitur 2
              </h2>
              <p class="is-size-6 has-text-grey">
                Deskripsi Fitur 2
              </p>
            </div>
            <div class="column">
              <h2 class="is-size-5">
                Fitur 3
              </h2>
              <p class="is-size-6 has-text-grey">
                Deskripsi Fitur 3
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
                Social proof buzz network effects non-disclosure sosi agreement sales alpha creative holy grail.
              </p>
              <hr class="is-large">
              <p class="is-size-5">
                Social proof buzz network effects non-disclosure sosi agreement sales alpha creative holy grail.
                <br>
                <span class="has-text-weight-bold">
                  - Ahmad Sofyan
                </span>
              </p>
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
                <h2 class="title has-text-white">Tingkatan Skill Visual Kamu Bersama Tridee</h2>
              </div>
            </div>
            <div class="level-right">
              <div class="level-item">
                <a href="#" class="button is-large is-rounded">Daftar Sekarang</a>
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

