<script setup>
import Header from '../components/Header.vue'
import SubHeader from '../components/SubHeader.vue'
import Footer from '../components/Footer.vue';
</script>

<template>
<Header/>
<SubHeader :title="'Job Offer'"/>
<div class="lg:flex py-4 md:px-10">
    <div class="block lg::w-1/4 px-4 py-8">
    
    <section class="max-w-4xl py-6 px-4 mx-auto text-center bg-white rounded-md border border-gray-300 dark:bg-gray-800">   
        <h2 class="text-lg font-semibold text-blue-600 capitalize dark:text-white">Filter Job Offer</h2>     
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
    <div class="block lg:w-3/4 px-4 py-8">
            <div class="flex flex-col items-center px-6">
                <div class="w-full md:h-28 md:flex justify-between shadow-md border">
                   <div class="md:w-1/5 p-2">
                       <svg xmlns="http://www.w3.org/2000/svg" class="md:h-full md:w-full h-32 mx-auto text-gray-600" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clip-rule="evenodd" />
                        <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z" />
                        </svg>
                   </div>
                   <div class="p-2 text-center w-full md:text-left border-0 border-l px-2">
                       <div class="p-2 text-center md:text-left">
                       <div class="flex justify-between items-center">
                           <h3 class="text-md">Lorem, ipsum dolor sit amet consectetur</h3>
                           <a href="#" class="flex text-sm text-blue-600 hover:underline">
                           <span>
                               <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z" clip-rule="evenodd" />
                                </svg>
                            </span>
                            <span>Website</span>
                            </a>
                       </div>
                       <p class="text-sm font-light mt-2">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid laborum maxime illo quis at officiis suscipit</p>
                       <a href="#" class="text-sm text-blue-600 mt-2 hover:underline">Read More</a>
                   </div>
                   </div>
                   <div class="px-1 h-full bg-gray-400 w-1 md:block hidden">&nbsp;</div>
            </div>
    </div>
    </div>
</div>
<Footer/>
</template>