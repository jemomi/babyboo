<script setup lang="ts">
    import { campaigns } from "../core/constants/staticData";
    import CtaButton from './CtaButton.vue';
    
    function formatDate(date: Date) {
        return date.toLocaleDateString("da-dk", { month: "long", year: "numeric" });
    }
</script>

<template>
    <div class="flex items-center mb-6">
        <IconUiNotification class="mr-4"/>
        <h2>
            Kampagner
        </h2>
    </div>
    <div class="grid grid-cols-1 gap-3 lg:grid-cols-4">
        <a v-for="campaign in campaigns"
           :href="campaign.url"
           class="relative flex flex-col items-start py-3.5 px-2.5 rounded-xl overflow-hidden aspect-square">
            <aside class="flex items-center py-1 px-1.5 font-open-sans text-xs leading-none rounded-sm"
                   :class="campaign.type === 'nutty' ? 'bg-nutmeg text-white' : 'bg-cloud text-oil-brown'">
                <IconUiHourglass v-if="campaign.showIcon"
                                 class="w-3 h-3 mr-1"/>
                {{ formatDate(campaign.startDate) }}
                <template v-if="campaign.endDate">
                    <span class="mx-1">-</span>
                    {{ formatDate(campaign.endDate) }}
                </template>
            </aside>
            <p class="mt-auto mb-1.5 uppercase text-white">
                {{ campaign.name }}
            </p>
            <CtaButton text="Gå til kampagne" type="span"/>
            <img :src="campaign.imageUrl"
                 class="absolute -z-2 inset-0 w-full">
            <div class="absolute -z-1 inset-0 opacity-35 bg-black">
                <!--image overlay-->
            </div>
        </a>
    </div>
</template>
