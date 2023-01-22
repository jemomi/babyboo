<script setup lang="ts">
import {useFavorites} from '../core/api/beer/useBeerApi';

const { data, isLoading } = useFavorites();
</script>

<template>
    <div class="flex justify-between mb-6">
        <h3 class="flex uppercase">
            <IconUiHeartInHands class="mr-2.5"/>
            favoritprodukter
        </h3>
        <a href="#"
           class="e-link">
            Redigér
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
                <transition-group name="fade"
                                  tag="ul"
                                  class="mt-2 space-y-2">
                    <li v-for="product in data"
                        :key="product.id"
                        class="flex items-center">
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
                        <button class="bg-pastel-gray py-1.5 px-2.5 rounded-full">
                            <IconUiAddToList/>
                        </button>
                    </li>
                </transition-group>
            </div>
            <div v-else
                 key="noData">
                Ingen favoritter
            </div>
        </transition-group>
    </div>
</template>
