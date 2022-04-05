<script setup>
  // import Swiper core and required modules
  import { Navigation, Pagination, A11y, Lazy, Autoplay } from 'swiper';

  // Import Swiper Vue.js components
  import { Swiper, SwiperSlide } from 'swiper/vue';

  // Import Swiper styles
  import 'swiper/css';
  import 'swiper/css/navigation';
  import 'swiper/css/pagination';
  import 'swiper/css/scrollbar';



</script>
<template>
    <Swiper
    :slides-per-view="1"
    :space-between="50"
    :modules="[Navigation, Pagination, A11y, Lazy, Autoplay]"
    navigation
    :pagination="{ clickable: true }"
    :autoplay="{delay: 2500, disableOnInteraction: false,}"
    grab-cursor
    :preload-images="false"
    lazy
  >
    <SwiperSlide class="h-[500px] relative">
            <img src="/assets/img_caroussel/img_caroussel1.jpg" class="md:h-auto h-[500px] object-cover" alt="">
            <div class="absolute top-16 md:left-16 p-6 md:px-0 px-12 w-full text-center md:text-left">
                <h1 class="text-4xl text-white font-extrabold">CAMEROON MATHEMATICAL UNION</h1>
                <p class="md:w-2/3 my-10">
                    Join the Cameroon Mathematical union and enjoy many benefits such as free online 
                    access to our research journals, 
                    savings on registration to events and publications, and more.
                </p>
                <router-link :to="{name:'join'}" class="px-10 py-2 mx-1 text-md font-medium leading-5 text-center text-blue-600 transition-colors border border-blue-600 duration-200 transform bg-white rounded-full hover:bg-blue-600 hover:text-white md:mx-2 md:w-auto" href="#">Join</router-link>
            </div>
    </SwiperSlide>
    <SwiperSlide class="h-[500px] relative">
        <img src="/assets/img_caroussel/img_caroussel2.jpg" class="md:h-auto h-[500px] object-cover" alt="">
        <div class="absolute top-16 md:left-16 p-6 md:px-0 px-12 w-full text-center md:text-left">
            <h1 class="text-4xl font-extrabold">CAMEROON MATHEMATICAL UNION</h1>
            <p class="md:w-2/3 my-10">
                Join the Cameroon Mathematical union and enjoy many benefits such as free online 
                access to our research journals, 
                savings on registration to events and publications, and more.
            </p>
            <router-link :to="{name:'join'}" class="px-10 py-2 mx-1 text-md font-medium leading-5 text-center text-blue-600 transition-colors border border-blue-600 duration-200 transform bg-white rounded-full hover:bg-blue-600 hover:text-white md:mx-2 md:w-auto" href="#">Join</router-link>
        </div>
    </SwiperSlide>
    <SwiperSlide class="h-[500px] relative">
        <img src="/assets/img_caroussel/img_caroussel3.jpg" class="md:h-auto h-[500px] object-cover" alt="">
        <div class="absolute top-16 md:left-16 p-6 md:px-0 px-12 w-full text-center md:text-left">
            <h1 class="text-4xl text-white font-extrabold">CAMEROON MATHEMATICAL UNION</h1>
            <p class="md:w-2/3 my-10 text-white">
                Join the Cameroon Mathematical union and enjoy many benefits such as free online 
                access to our research journals, 
                savings on registration to events and publications, and more.
            </p>
            <router-link :to="{name:'join'}" class="px-10 py-2 mx-1 text-md font-medium leading-5 text-center text-blue-600 transition-colors border border-blue-600 duration-200 transform bg-white rounded-full hover:bg-blue-600 hover:text-white md:mx-2 md:w-auto" href="#">Join</router-link>
        </div>
    </SwiperSlide>

  </Swiper>
</template>