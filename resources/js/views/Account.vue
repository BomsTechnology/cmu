<script setup>
import Header from '../components/Header.vue'
import SubHeader from '../components/SubHeader.vue'
import Footer from '../components/Footer.vue';
</script>

<template>
<Header/>
<div class="md:flex justify-between shadow-lg py-4 md:px-32 px-4">
    <div class="flex md:flex-row flex-col md:w-3/4 justify-center md:justify-start items-center">
        <img class="object-cover rounded-full md:h-52 md:w-52 h-32 w-32" src="/assets/img_caroussel/img_caroussel1.jpg">
        <div class="flex flex-col justify-center items-center md:items-start md:mx-8 py-4">
            <h1 class="text-gray-700 md:text-2xl font-bold dark:text-gray-300"> Albert Einstein</h1>
            <h3 class="md:text-md text-sm font-extralight mt-4">Mathematician and Physicist</h3>
            <h4 class="md:text-sm text-xs mt-4">
                <span>Germany</span>
                <span class="ml-4">@alberteinstein</span>
            </h4>
        </div>
    </div>
    <div class="flex items-center mt-3 md:mt-0">
        <button class="px-6 py-2 w-full leading-5 text-white transition-colors duration-200 transform bg-blue-600 rounded-full hover:bg-blue-700 focus:outline-none focus:bg-blue-700">Contact</button>
    </div>
</div>
<!-- cv -->
<div class="lg:flex">
    <div class="lg:w-[95%]">
        <div class="shadow-lg my-6 mx-2">
    <div class="border-0 border-b-2 p-4">
        <h1 class="font-extrabold text-2xl text-gray-700">Auto-Biography & CV</h1>
    </div>
    <div class="p-6">
    <p class="mt-2 text-sm md:p-10 text-gray-600 dark:text-gray-400 leading-loose">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Molestie parturient et sem ipsum volutpat vel.Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore sam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet,  Lorem ipsum dolor sit Natoque sem et aliquam mauris egestas quam volutpat viverra. In pretium nec senectus erat. Et malesuada lobortis. <br><br>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Molestie parturient et sem ipsum volutpat vel.Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore sam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet,  Lorem ipsum dolor sit Natoque sem et aliquam mauris egestas quam volutpat viverra. In pretium nec senectus erat. Et malesuada lobortis.
    </p>
    </div>
</div>
<!-- publications -->
<div class="shadow-lg my-6 mx-2 px-4">
    <div class="border-0 border-b-2 p-4">
        <h1 class="font-extrabold text-2xl text-gray-700">Publications</h1>
    </div>

            <div class="h-full py-4">
                <div class="w-full md:h-28 md:flex justify-between shadow-md border">
                   <img src="/assets/img_caroussel/img_caroussel3.jpg" class="md:w-32 md:h-full object-cover w-full h-24" alt="">
                   <div class="p-2 w-full text-center md:text-left">
                       <h3 class="text-md">Lorem, ipsum dolor sit amet consectetur</h3>
                       <p class="text-sm font-light mt-2">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid laborum maxime illo quis at officiis suscipit</p>
                       <a href="#" class="text-sm text-blue-600 mt-2 hover:underline">Read More</a>
                   </div>
                   <div class="px-1 h-full bg-gray-400 w-1 md:block hidden">&nbsp;</div>
                </div>   
            </div>
    </div>
    </div>

    <div>
        <div class="shadow-lg my-6 mx-2 px-4">
    <div class="border-0 border-b-2 p-4">
        <h1 class="font-extrabold text-2xl text-gray-700">Thesis or Dissertation</h1>
    </div>

            <div class="py-4">
                       <p class="text-sm font-light text-center">Lorem ipsum, dolor sit amet consectetur adipisicing elit</p>
                        <p class="text-sm font-light mt-2 text-center">University of Douala - 2021</p>
                        <div class="flex  text-xs font-light text-blue-600 mt-3 justify-center space-x-6 text-center">
                           <a href="#" class="flex items-center hover:underline">
                               <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
                                <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                                <path fill-rule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clip-rule="evenodd" />
                                </svg>
                                <span>View</span>
                           </a>
                           <a href="#" class="flex items-center hover:underline">
                               <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clip-rule="evenodd" />
                                </svg>
                                <span>Download</span>
                           </a>
                       </div>
            </div>
    </div>
        <div class="shadow-lg my-6 mx-2 px-4">
    <div class="border-0 border-b-2 p-4">
        <h1 class="font-extrabold text-2xl text-gray-700">Supervision</h1>
    </div>

            <div class="py-4">
                <div class="w-full md:h-28 md:flex justify-between shadow-md border">
                   <div class="p-2 w-full text-center md:text-left">
                       <h3 class="text-md font-bold">ETA CYRIL</h3>
                       <p class="text-sm font-light mt-2">Lorem ipsum, dolor sit amet consectetur adipisicing elit</p>
                           <p class="text-sm font-light mt-2">University of Douala - 2021</p>
                   </div>
                </div>   
            </div>
    </div>
    </div>
</div>
<Footer/>
</template>