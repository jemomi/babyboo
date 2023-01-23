<script setup lang="ts">

import CurrentOrder from '../components/CurrentOrder.vue';
import LatestOrdersList from '../components/LatestOrdersList.vue';
import FavoriteProducts from '../components/FavoriteProducts.vue';
import Campaigns from '../components/Campaigns.vue';
import DealerResources from '../components/DealerResources.vue';
</script>

<template>
    <div class="max-w-1440 mx-auto px-3">
        <h1>
            Velkommen BabyBob A/S
        </h1>
        <section class="flex flex-wrap mt-9 -mx-4">
            <article class="w-full px-4 xl:w-1/2">
                <CurrentOrder/>
            </article>
            <article class="w-full px-4 lg:w-1/2 xl:w-1/4">
                <LatestOrdersList/>
            </article>
            <article class="w-full px-4 lg:w-1/2 xl:w-1/4">
                <FavoriteProducts/>
            </article>
        </section>
    </div>
    <section class="max-w-1440 mx-auto px-3">
        <Campaigns/>
    </section>
    
    <DealerResources class="mt-10"/>
</template>
