<script setup>
import SubHeader from "../components/SubHeader.vue";
import Footer from "../components/Footer.vue";
</script>

<template>
    <SubHeader :title="'Membership'" />
    <div class="shadow-lg m-6">
        <div class="border-0 border-b-2 p-4">
            <h1 class="font-extrabold text-2xl text-gray-700">Rules of CMU</h1>
        </div>
        <div class="p-6">
            <p
                class="mt-2 text-sm md:p-10 text-gray-600 dark:text-gray-400 leading-loose"
            >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Molestie parturient et sem ipsum volutpat vel.Lorem ipsum dolor
                sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
                tempor invidunt ut labore et dolore magna aliquyam erat, sed
                diam voluptua. At vero eos et accusam et justo duo dolores et ea
                rebum. Stet clita kasd gubergren, no sea takimata sanctus est
                Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet,
                consetetur sadipscing elitr, sed diam nonumy eirmod tempor
                invidunt ut labore et dolore sam et justo duo dolores et ea
                rebum. Stet clita kasd gubergren, no sea takimata sanctus est
                Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, Lorem
                ipsum dolor sit Natoque sem et aliquam mauris egestas quam
                volutpat viverra. In pretium nec senectus erat. Et malesuada
                lobortis. <br /><br />
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Molestie parturient et sem ipsum volutpat vel.Lorem ipsum dolor
                sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
                tempor invidunt ut labore et dolore magna aliquyam erat, sed
                diam voluptua. At vero eos et accusam et justo duo dolores et ea
                rebum. Stet clita kasd gubergren, no sea takimata sanctus est
                Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet,
                consetetur sadipscing elitr, sed diam nonumy eirmod tempor
                invidunt ut labore et dolore sam et justo duo dolores et ea
                rebum. Stet clita kasd gubergren, no sea takimata sanctus est
                Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, Lorem
                ipsum dolor sit Natoque sem et aliquam mauris egestas quam
                volutpat viverra. In pretium nec senectus erat. Et malesuada
                lobortis.
            </p>
        </div>
    </div>
    <div class="shadow-lg m-6">
        <div class="border-0 border-b-2 p-4">
            <h1 class="font-extrabold text-2xl text-gray-700">Join CMU ?</h1>
        </div>
        <div class="p-6">
            <p
                class="text-sm md:p-10 text-gray-600 dark:text-gray-400 leading-loose"
            >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Molestie parturient et sem ipsum volutpat vel.Lorem ipsum dolor
                sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
                tempor invidunt ut labore et dolore magna aliquyam erat, sed
                diam voluptua. At vero eos et accusam et justo duo dolores et ea
                rebum. Stet clita kasd gubergren, no sea takimata sanctus est
                Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet,
                consetetur sadipscing elitr, sed diam nonumy eirmod tempor
                invidunt ut labore et dolore sam et justo duo dolores et ea
                rebum. Stet clita kasd gubergren, no sea takimata sanctus est
                Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, Lorem
                ipsum dolor sit Natoque sem et aliquam mauris egestas quam
                volutpat viverra. In pretium nec senectus erat. Et malesuada
                lobortis.
            </p>
            <div class="flex justify-center items-center mt-4 md:mt-0">
                <router-link
                    :to="{ name: 'join' }"
                    class="px-6 py-2 mx-1 text-sm font-medium leading-5 text-center text-white transition-colors duration-200 transform bg-blue-600 rounded-full hover:bg-blue-700 md:mx-0 md:w-auto"
                    href="#"
                    >Join</router-link
                >
            </div>
        </div>
    </div>
</template>
