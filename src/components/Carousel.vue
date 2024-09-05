<!-- Use preprocessors via the lang attribute! e.g. <template lang="pug"> -->
  <template>
    <div class="carousel-wrapper relative">
      <div ref="carousel" class="carousel disable-scrollbars w-full">
        <img v-for="i in images" :key="i" loading="auto" class="w-full max-h-screen object-cover" :src="i" alt="">
      </div>
      <div class="absolute bottom-0 w-full p-4 flex items-center justify-center space-x-3">
        <div v-for="(i, index) in images" :key="i" class="w-3 h-3 border-2 border-white rounded-full transition duration-200" :class="{'bg-white' : index === active}" @click="changeSlide(index)"></div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    // props: ["images"],
    // ^ usare PROPS for array al posto di DATA quando si converte in componente NuxtJS
    data () {
      return {
        images: ["https://res.cloudinary.com/genesi-communication-design/image/upload/w_800,h_600,c_fill/v1608114082/coretower/vista9-finale_l8p7oq.jpg", "https://res.cloudinary.com/genesi-communication-design/image/upload/w_800,h_600,c_fill/v1608114081/coretower/vista1-finale_opav7l.jpg", "https://res.cloudinary.com/genesi-communication-design/image/upload/w_800,h_600,c_fill/v1608114082/coretower/vista5-finale_ztwwbg.jpg"],
        active: 0
      }
    },
    methods: {
      changeSlide(delta) {
        const carousel = this.$refs.carousel;
        const width = carousel.offsetWidth;
        carousel.scrollTo(width * delta, 0);
        this.active = delta;
      },
      afterScroll() {
        const carousel = this.$refs.carousel;
        setTimeout(() => {
          const width = carousel.offsetWidth;
          const scrollLeft = carousel.scrollLeft;
          const index = Math.round(scrollLeft / width);
          this.active = index;
        }, 750);
      }
    },
    mounted() {
      const carousel = this.$refs.carousel;
      carousel.addEventListener('touchend', this.afterScroll);
    }
  };
  </script>
  
  
  <style scoped>
  .carousel {
    display: flex;
    overflow: scroll;
    scroll-behavior: smooth;
    scroll-snap-type: x mandatory;
  }
  
  .carousel > * {
    flex: 1 0 100%;
    scroll-snap-align: start;
  }
  
  .disable-scrollbars::-webkit-scrollbar {
      width: 0px;
      background: transparent; /* Chrome/Safari/Webkit */
  }
  
  .disable-scrollbars {
    scrollbar-width: none; /* Firefox */
    -ms-overflow-style: none;  /* IE 10+ */
  }
  </style>
  