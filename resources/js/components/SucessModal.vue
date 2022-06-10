<script setup>
import { CheckCircleIcon } from "@heroicons/vue/solid";
import { ref } from "vue";
const props = defineProps({
    open: Boolean,
});
const emit = defineEmits(["close"]);

function hideModal() {
    emit("close");
}
</script>

<template>
    <div
        v-if="props.open"
        class="relative z-10"
        aria-labelledby="modal-title"
        role="dialog"
        aria-modal="true"
    >
        <div
            @click="hideModal()"
            class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
        ></div>

        <div class="fixed z-10 inset-0 overflow-y-auto">
            <div
                class="flex items-end sm:items-center justify-center min-h-full p-4 text-center sm:p-0"
            >
                <div
                    class="relative bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:max-w-lg sm:w-full"
                >
                    <div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                        <div>
                            <div
                                class="mx-auto flex-shrink-0 flex items-center justify-center h-20 w-20 rounded-full bg-green-100"
                            >
                                <CheckCircleIcon
                                    class="h-14 w-14 text-green-600"
                                />
                            </div>
                            <div
                                class="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left"
                            >
                                <div class="mt-2">
                                    <p
                                        class="text-md text-center text-gray-500"
                                    >
                                        Your cmu integration successfully sent,
                                        you will receive an answer within 48
                                        hours
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="bg-gray-50 px-4 py-3 sm:px-6">
                        <button
                            @click="hideModal()"
                            type="button"
                            class="w-full mx-auto inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-green-600 text-base font-medium text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                        >
                            Okay
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
