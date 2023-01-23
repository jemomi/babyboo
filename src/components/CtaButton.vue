<script setup lang="ts">
    import {computed} from 'vue';

    const props = defineProps<{
        text: string,
        type: "button" | "a" | "span",
        href?: string
    }>();
</script>

<template>
    <component :is="props.type"
               :href="props.href"
               class="inline-flex items-center py-1.5 px-3.5 rounded-full bg-kangaroo">
        {{ props.text }}
        <span class="ml-2.5">
            <slot>
                <IconUiArrowRight/>
            </slot>
        </span>
    </component>
</template>
