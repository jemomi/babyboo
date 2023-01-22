<script setup lang="ts">
    import {useBeers} from '../core/api/beer/useBeerApi';
    import {computed, ref} from 'vue';

    const defaultShowCount = 4;
    const isShowingAllProducts = ref(false);
    
    const { data, isLoading } = useBeers();
    const numberOfProducts = computed(() => data.value?.length);
    
    const productList = computed(() => {
        if (isShowingAllProducts.value) {
            return data.value
        }

        return data.value ? data.value.slice(0, defaultShowCount) : undefined;
    });
    
    function toggleShowingAllProducts() {
        isShowingAllProducts.value = !isShowingAllProducts.value
    }
</script>

<template>
    <div class="flex justify-between mb-6">
        <h3 class="flex uppercase">
            <IconUiCheckList class="mr-2.5"/>
            Bestillingsliste
        </h3>
        <a href="#bestillingsListe"
           class="e-link">
            Gå til bestillingslisten
        </a>
    </div>
    <div class="rounded-lg bg-gray-100 py-4 px-2.5">
        <transition-group name="fade"
                          mode="out-in">
            <p v-if="isLoading"
               key="loading">
                loading...
            </p>
            <div v-else-if="data.length >= 1"
                 key="data">
                <div class="flex justify-between">
                    <p class="p-1 leading-none rounded-sm bg-soft-peach font-open-sans text-xs">
                        {{ numberOfProducts }} Produkter
                    </p>
                    <p class="p-1 leading-none rounded-sm bg-soft-peach font-open-sans text-xs">
                        Total: 4.598,95 DKK
                    </p>
                </div>
                <transition-group name="fade"
                                  tag="ul"
                                  class="mt-2 space-y-2">
                    <li v-for="product in productList"
                        :key="product.id"
                        class="flex items-center odd:bg-white">
                        <div class="flex items-center justify-center w-12 h-12 p-1 rounded bg-white mr-3">
                            <img :src="product.image_url"
                                 :alt="product.tagline"
                                 class="max-h-full max-w-full">
                        </div>
                        <p class="flex flex-col flex-grow">
                            {{ product.name }}
                            <small>
                                {{ product.tagline }}
                            </small>
                        </p>
                        <p class="mr-5">
                            1 stk
                        </p>
                        <p class="mr-5">
                            -12%
                        </p>
                        <p class="">
                            499,99 DKK
                        </p>
                    </li>
                </transition-group>
                <button v-if="data.length > 4"
                        class="flex items-center mt-2.5 mx-auto py-1.5 px-5 text-rose-ebony bg-pastel-gray rounded-full"
                        @click="toggleShowingAllProducts">
                    <transition name="fade"
                                mode="out-in">
                        <span v-if="isShowingAllProducts">
                            Vis færrer
                        </span>
                        <span v-else>
                            Vis Alle
                        </span>
                    </transition>
                    <IconUiChevronDown class="ml-2.5 transition-transform duration-300"
                                       :class="{'rotate-180': isShowingAllProducts}"/>
                </button>
            </div>
            <div v-else
                 key="noData">
                Bestilling er tom
            </div>
        </transition-group>
    </div>
</template>
