<script setup>
import Header from '../components/Header.vue'
import SubHeader from '../components/SubHeader.vue'
import Footer from '../components/Footer.vue';
</script>

<template>
<Header/>
<SubHeader :title="'Cameroon Matematician Database'"/>
<div class="lg:flex py-4 md:px-10">
    <div class="block lg::w-1/4 px-4 py-12">
    
    <section class="max-w-4xl py-6 px-4 mx-auto text-center bg-white rounded-md border border-gray-300 dark:bg-gray-800">   
        <h2 class="text-lg font-semibold text-blue-600 capitalize dark:text-white">Filter Mathematician</h2>     
        <form>
            <div class="mt-4">
                <div>
                    <input id="" type="text" placeholder="Keywords" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring">
                </div>

                <div>
                    <input id="" type="text" placeholder="University" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring">
                </div>

                <div>
                    <input id="" type="text" placeholder="country" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring">
                </div>

                <div>
                    <input id="" type="text" placeholder="Field Research" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring">
                </div>
            </div>

            <div class="mt-6">
                <button class="px-6 py-2 w-full leading-5 text-white transition-colors duration-200 transform bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:bg-blue-700">Filter</button>
            </div>
        </form>
    </section>
    </div>
    <div class="block lg:w-3/4">
            <div class="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-12 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 px-6">
                 <router-link :to="{name:'account'}" v class="flex flex-col items-center pt-9 text-center space-y-1 rounded-xl dark:bg-gray-800 border border-gray-300">

                        <img class="object-cover rounded-full h-36 w-36" src="/assets/img_caroussel/img_caroussel1.jpg">

                        <h4 class="text-gray-700 font-bold dark:text-gray-300"> Albert Einstein</h4>

                        <h6 class="text-xs font-extralight italic">Mathematician and Physicist</h6>

                        <h4 class="text-sm font-light pb-4">Germarny</h4>
                </router-link>
                <router-link :to="{name:'account'}"  class="flex flex-col items-center pt-9 text-center space-y-1 rounded-xl dark:bg-gray-800 border border-gray-300">

                        <img class="object-cover rounded-full h-36 w-36" src="/assets/img_caroussel/img_caroussel1.jpg">

                        <h4 class="text-gray-700 font-bold dark:text-gray-300"> Albert Einstein</h4>

                        <h6 class="text-xs font-extralight italic">Mathematician and Physicist</h6>

                        <h4 class="text-sm font-light pb-4">Germarny</h4>
                </router-link>
                <router-link :to="{name:'account'}"  class="flex flex-col items-center pt-9 text-center space-y-1 rounded-xl dark:bg-gray-800 border border-gray-300">

                        <img class="object-cover rounded-full h-36 w-36" src="/assets/img_caroussel/img_caroussel1.jpg">

                        <h4 class="text-gray-700 font-bold dark:text-gray-300"> Albert Einstein</h4>

                        <h6 class="text-xs font-extralight italic">Mathematician and Physicist</h6>

                        <h4 class="text-sm font-light pb-4">Germarny</h4>
                </router-link>
                <router-link :to="{name:'account'}"  class="flex flex-col items-center pt-9 text-center space-y-1 rounded-xl dark:bg-gray-800 border border-gray-300">

                        <img class="object-cover rounded-full h-36 w-36" src="/assets/img_caroussel/img_caroussel1.jpg">

                        <h4 class="text-gray-700 font-bold dark:text-gray-300"> Albert Einstein</h4>

                        <h6 class="text-xs font-extralight italic">Mathematician and Physicist</h6>

                        <h4 class="text-sm font-light pb-4">Germarny</h4>
                </router-link>
                <router-link :to="{name:'account'}"  class="flex flex-col items-center pt-9 text-center space-y-1 rounded-xl dark:bg-gray-800 border border-gray-300">

                        <img class="object-cover rounded-full h-36 w-36" src="/assets/img_caroussel/img_caroussel1.jpg">

                        <h4 class="text-gray-700 font-bold dark:text-gray-300"> Albert Einstein</h4>

                        <h6 class="text-xs font-extralight italic">Mathematician and Physicist</h6>

                        <h4 class="text-sm font-light pb-4">Germarny</h4>
                </router-link>
                <router-link :to="{name:'account'}"  class="flex flex-col items-center pt-9 text-center space-y-1 rounded-xl dark:bg-gray-800 border border-gray-300">

                        <img class="object-cover rounded-full h-36 w-36" src="/assets/img_caroussel/img_caroussel1.jpg">

                        <h4 class="text-gray-700 font-bold dark:text-gray-300"> Albert Einstein</h4>

                        <h6 class="text-xs font-extralight italic">Mathematician and Physicist</h6>

                        <h4 class="text-sm font-light pb-4">Germarny</h4>
                </router-link>
                <router-link :to="{name:'account'}"  class="flex flex-col items-center pt-9 text-center space-y-1 rounded-xl dark:bg-gray-800 border border-gray-300">

                        <img class="object-cover rounded-full h-36 w-36" src="/assets/img_caroussel/img_caroussel1.jpg">

                        <h4 class="text-gray-700 font-bold dark:text-gray-300"> Albert Einstein</h4>

                        <h6 class="text-xs font-extralight italic">Mathematician and Physicist</h6>

                        <h4 class="text-sm font-light pb-4">Germarny</h4>
                </router-link>
                <router-link :to="{name:'account'}"  class="flex flex-col items-center pt-9 text-center space-y-1 rounded-xl dark:bg-gray-800 border border-gray-300">

                        <img class="object-cover rounded-full h-36 w-36" src="/assets/img_caroussel/img_caroussel1.jpg">

                        <h4 class="text-gray-700 font-bold dark:text-gray-300"> Albert Einstein</h4>

                        <h6 class="text-xs font-extralight italic">Mathematician and Physicist</h6>

                        <h4 class="text-sm font-light pb-4">Germarny</h4>
                </router-link>
                <router-link :to="{name:'account'}"  class="flex flex-col items-center pt-9 text-center space-y-1 rounded-xl dark:bg-gray-800 border border-gray-300">

                        <img class="object-cover rounded-full h-36 w-36" src="/assets/img_caroussel/img_caroussel1.jpg">

                        <h4 class="text-gray-700 font-bold dark:text-gray-300"> Albert Einstein</h4>

                        <h6 class="text-xs font-extralight italic">Mathematician and Physicist</h6>

                        <h4 class="text-sm font-light pb-4">Germarny</h4>
                </router-link>
                <router-link :to="{name:'account'}"  class="flex flex-col items-center pt-9 text-center space-y-1 rounded-xl dark:bg-gray-800 border border-gray-300">

                        <img class="object-cover rounded-full h-36 w-36" src="/assets/img_caroussel/img_caroussel1.jpg">

                        <h4 class="text-gray-700 font-bold dark:text-gray-300"> Albert Einstein</h4>

                        <h6 class="text-xs font-extralight italic">Mathematician and Physicist</h6>

                        <h4 class="text-sm font-light pb-4">Germarny</h4>
                </router-link>
                <router-link :to="{name:'account'}"  class="flex flex-col items-center pt-9 text-center space-y-1 rounded-xl dark:bg-gray-800 border border-gray-300">

                        <img class="object-cover rounded-full h-36 w-36" src="/assets/img_caroussel/img_caroussel1.jpg">

                        <h4 class="text-gray-700 font-bold dark:text-gray-300"> Albert Einstein</h4>

                        <h6 class="text-xs font-extralight italic">Mathematician and Physicist</h6>

                        <h4 class="text-sm font-light pb-4">Germarny</h4>
                </router-link>
                <router-link :to="{name:'account'}"  class="flex flex-col items-center pt-9 text-center space-y-1 rounded-xl dark:bg-gray-800 border border-gray-300">

                        <img class="object-cover rounded-full h-36 w-36" src="/assets/img_caroussel/img_caroussel1.jpg">

                        <h4 class="text-gray-700 font-bold dark:text-gray-300"> Albert Einstein</h4>

                        <h6 class="text-xs font-extralight italic">Mathematician and Physicist</h6>

                        <h4 class="text-sm font-light pb-4">Germarny</h4>
                </router-link>
                
            </div>
    </div>
</div>
<Footer/>
</template>