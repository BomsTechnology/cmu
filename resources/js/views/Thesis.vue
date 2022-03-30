<script setup>
import Header from '../components/Header.vue'
import SubHeader from '../components/SubHeader.vue'
import Footer from '../components/Footer.vue';
</script>

<template>
<Header/>
<SubHeader :title="'Thesis or Dissertation'"/>
<div class="lg:flex py-4 md:px-10">
    <div class="block lg::w-1/4 px-4 py-8">
    
    <section class="max-w-4xl py-6 px-4 mx-auto text-center bg-white rounded-md border border-gray-300 dark:bg-gray-800">   
        <h2 class="text-lg font-semibold text-blue-600 capitalize dark:text-white">Filter Thesis</h2>     
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
                        <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
                        </svg>
                   </div>
                   <div class="p-2 text-center w-full md:text-left border-0 border-l px-2">
                       <h3 class="text-md">Lorem, ipsum dolor sit amet consectetur</h3>
                       <div class="md:flex justify-center md:justify-start space-x-6 text-center">
                           <p class="text-sm font-light mt-2">Albert Einstein</p>
                           <p class="text-sm font-light mt-2">University of Germany</p>
                           <p class="text-sm font-light mt-2">1923</p>
                       </div>
                       <div class="flex text-xs font-light text-blue-600 mt-3 justify-center md:justify-start space-x-6 text-center">
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
                   <div class="px-1 h-full bg-gray-400 w-1 md:block hidden">&nbsp;</div>
            </div>
    </div>
    </div>
</div>
<Footer/>
</template>