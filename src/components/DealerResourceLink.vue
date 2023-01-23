<script setup lang="ts">
    import {computed} from 'vue';
    import CtaButton from './CtaButton.vue';

    const props = defineProps<{
        type: "link" | "Download",
        name: string,
        url: string
    }>();
    
    const linkUrl = computed(() => {
        if (props.type === "Download") {
            return `download:${props.url}`;
        }
        return props.url;
    });
</script>

<template>
    <a :href="linkUrl"
       class="flex flex-col items-start w-180 p-5 rounded-lg bg-white">
        <slot></slot>
        <p class="mt-5 text-xl">
            {{ props.name }}
        </p>
        <CtaButton :text="props.type === 'Download' ? 'Download' : 'Gå til'"
                   class="mt-5"
                   type="span">
            <IconUiDownload v-if="props.type === 'Download'"/>
        </CtaButton>
    </a>
</template>
