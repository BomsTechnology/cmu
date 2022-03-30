<script setup>
import Header from '../components/Header.vue'
import Caroussel from '../components/Caroussel.vue'
import Footer from '../components/Footer.vue';
</script>

<template>
<Header/>
<Caroussel/>
<!-- Recents publications -->
        <section class="bg-white dark:bg-gray-900">
            <div class="container md:px-16 px-6 py-10 mx-auto">
                <h1 class="text-3xl font-semibold text-blue-600 capitalize lg:text-4xl dark:text-white">Recents Publications</h1>
                
                <p class="mt-4 text-gray-500 xl:mt-6 dark:text-gray-300">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum quam voluptatibus
                </p>
                
                <div class="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-12 md:grid-cols-2 xl:grid-cols-3 md:px-6">
                    <div class="flex flex-col items-center pt-9 space-y-3 text-center rounded-xl dark:bg-gray-800 border-t">

                        <h1 class="text-2xl font-semibold text-gray-700 capitalize dark:text-white">Copy & paste components</h1>

                        <p class="text-gray-500 dark:text-gray-300 p-6 border-x">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident ab nulla quod dignissimos vel non corrupti doloribus voluptatum eveniet
                        </p>

                        <a href="#" class="bg-blue-600 p-3 w-full flex rounded-b-xl items-center justify-center text-sm text-white capitalize transition-colors duration-200 transform dark:text-blue-400 hover:underline dark:hover:text-blue-500">
                            <span class="mx-1">read more</span>
                            <svg class="w-4 h-4 mx-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                        </a>
                    </div>

                    <div class="flex flex-col items-center pt-9 space-y-3 text-center rounded-xl dark:bg-gray-800 border-t">

                        <h1 class="text-2xl font-semibold text-gray-700 capitalize dark:text-white">Zero Configrations</h1>

                        <p class="text-gray-500 dark:text-gray-300 p-6 border-x">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident ab nulla quod dignissimos vel non corrupti doloribus voluptatum eveniet
                        </p>

                        <a href="#" class="bg-blue-600 p-3 w-full flex border rounded-b-xl items-center justify-center text-sm text-white capitalize transition-colors duration-200 transform dark:text-blue-400 hover:underline dark:hover:text-blue-500">
                            <span class="mx-1">read more</span>
                            <svg class="w-4 h-4 mx-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                        </a>
                    </div>

                    <div class="flex flex-col items-center pt-9 space-y-3 text-center rounded-xl dark:bg-gray-800 border-t">

                        <h1 class="text-2xl font-semibold text-gray-700  capitalize dark:text-white">Simple & clean designs</h1>

                        <p class="text-gray-500 dark:text-gray-300 p-6 border-x">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident ab nulla quod dignissimos vel non corrupti doloribus voluptatum eveniet
                        </p>

                        <a href="#" class="bg-blue-600 p-3 w-full flex rounded-b-xl shadow-lg items-center justify-center text-sm text-white capitalize transition-colors duration-200 transform dark:text-blue-400 hover:underline dark:hover:text-blue-500">
                            <span class="mx-1">read more</span>
                            <svg class="w-4 h-4 mx-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                        </a>
                    </div>
                </div>
            </div>
        </section>
<!-- News & events -->
        <section class="bg-gray-100 dark:bg-gray-900">
            <div class="container md:px-16 px-6 py-10 mx-auto">
                <h1 class="text-3xl font-semibold text-blue-600 capitalize lg:text-4xl dark:text-white">News & Events</h1>
                
                <p class="mt-4 text-gray-500 xl:mt-6 dark:text-gray-300">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum quam voluptatibus
                </p>
                
                <div class="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-12 md:grid-cols-2 xl:grid-cols-3 md:px-6">
                    
    <div class="max-w-2xl mx-auto overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800">
        <img class="object-cover w-full h-52" src="/assets/img_caroussel/img_caroussel4.jpg" alt="Article">

        <div class="p-6">
            <div>
                <span class="text-xs font-medium text-blue-600 uppercase dark:text-blue-400">Events</span>
                <a href="#" class="block mt-2 text-2xl font-semibold text-gray-800 transition-colors duration-200 transform dark:text-white hover:text-gray-600 hover:underline">I Built A Successful Blog In One Year</a>
                <p class="mt-2 text-sm text-gray-600 dark:text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Molestie parturient et sem ipsum volutpat vel. Natoque sem et aliquam mauris egestas quam volutpat viverra. In pretium nec senectus erat. Et malesuada lobortis.</p>
            </div>

        </div>
    </div>
    <div class="max-w-2xl mx-auto overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800">
        <img class="object-cover w-full h-52" src="/assets/img_caroussel/img_caroussel4.jpg" alt="Article">

        <div class="p-6">
            <div>
                <span class="text-xs font-medium text-blue-600 uppercase dark:text-blue-400">Events</span>
                <a href="#" class="block mt-2 text-2xl font-semibold text-gray-800 transition-colors duration-200 transform dark:text-white hover:text-gray-600 hover:underline">I Built A Successful Blog In One Year</a>
                <p class="mt-2 text-sm text-gray-600 dark:text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Molestie parturient et sem ipsum volutpat vel. Natoque sem et aliquam mauris egestas quam volutpat viverra. In pretium nec senectus erat. Et malesuada lobortis.</p>
            </div>

        </div>
    </div>
    <div class="max-w-2xl mx-auto overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800">
        <img class="object-cover w-full h-52" src="/assets/img_caroussel/img_caroussel4.jpg" alt="Article">

        <div class="p-6">
            <div>
                <span class="text-xs font-medium text-blue-600 uppercase dark:text-blue-400">News</span>
                <a href="#" class="block mt-2 text-2xl font-semibold text-gray-800 transition-colors duration-200 transform dark:text-white hover:text-gray-600 hover:underline">I Built A Successful Blog In One Year</a>
                <p class="mt-2 text-sm text-gray-600 dark:text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Molestie parturient et sem ipsum volutpat vel. Natoque sem et aliquam mauris egestas quam volutpat viverra. In pretium nec senectus erat. Et malesuada lobortis.</p>
            </div>

        </div>
    </div>
    <div class="max-w-2xl mx-auto overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800">
        <img class="object-cover w-full h-52" src="/assets/img_caroussel/img_caroussel4.jpg" alt="Article">

        <div class="p-6">
            <div>
                <span class="text-xs font-medium text-blue-600 uppercase dark:text-blue-400">News</span>
                <a href="#" class="block mt-2 text-2xl font-semibold text-gray-800 transition-colors duration-200 transform dark:text-white hover:text-gray-600 hover:underline">I Built A Successful Blog In One Year</a>
                <p class="mt-2 text-sm text-gray-600 dark:text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Molestie parturient et sem ipsum volutpat vel. Natoque sem et aliquam mauris egestas quam volutpat viverra. In pretium nec senectus erat. Et malesuada lobortis.</p>
            </div>

        </div>
    </div>
    <div class="max-w-2xl mx-auto overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800">
        <img class="object-cover w-full h-52" src="/assets/img_caroussel/img_caroussel4.jpg" alt="Article">

        <div class="p-6">
            <div>
                <span class="text-xs font-medium text-blue-600 uppercase dark:text-blue-400">News</span>
                <a href="#" class="block mt-2 text-2xl font-semibold text-gray-800 transition-colors duration-200 transform dark:text-white hover:text-gray-600 hover:underline">I Built A Successful Blog In One Year</a>
                <p class="mt-2 text-sm text-gray-600 dark:text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Molestie parturient et sem ipsum volutpat vel. Natoque sem et aliquam mauris egestas quam volutpat viverra. In pretium nec senectus erat. Et malesuada lobortis.</p>
            </div>

        </div>
    </div>
    <div class="max-w-2xl mx-auto overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800">
        <img class="object-cover w-full h-52" src="/assets/img_caroussel/img_caroussel4.jpg" alt="Article">

        <div class="p-6">
            <div>
                <span class="text-xs font-medium text-blue-600 uppercase dark:text-blue-400">Events</span>
                <a href="#" class="block mt-2 text-2xl font-semibold text-gray-800 transition-colors duration-200 transform dark:text-white hover:text-gray-600 hover:underline">I Built A Successful Blog In One Year</a>
                <p class="mt-2 text-sm text-gray-600 dark:text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Molestie parturient et sem ipsum volutpat vel. Natoque sem et aliquam mauris egestas quam volutpat viverra. In pretium nec senectus erat. Et malesuada lobortis.</p>
            </div>

        </div>
    </div>
                     </div>
            </div>
        </section>

<!-- Our Mission                  -->
        <section class="bg-white dark:bg-gray-900">
            <div class="container md:px-16 px-6 py-10 mx-auto">
                <h1 class="text-3xl font-semibold text-blue-600 capitalize lg:text-4xl dark:text-white">Our Mission</h1>
                <div class="my-10 md:px-10">
                    <p class="mt-2 text-sm text-gray-600 dark:text-gray-400 leading-loose">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Molestie parturient et sem ipsum volutpat vel.Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore sam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet,  Lorem ipsum dolor sit Natoque sem et aliquam mauris egestas quam volutpat viverra. In pretium nec senectus erat. Et malesuada lobortis.</p>
                    <div class="mt-8 flex justify-center items-center">
                        <router-link :to="{name:'about'}" class="px-3 py-2 mx-1 text-sm font-medium leading-5 text-center text-white transition-colors duration-200 transform bg-blue-600 rounded-full hover:bg-blue-700 md:mx-0 md:w-auto" href="#">About CMU</router-link >
                    </div>
                </div>
                </div>
        </section>
    <Footer/>
</template>