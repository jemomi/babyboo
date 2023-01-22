<script setup lang="ts">
    import {useHistory} from '../core/api/beer/useBeerApi';

    const { data, isLoading } = useHistory();

</script>

<template>
    <div class="flex justify-between mb-6">
        <h3 class="flex uppercase">
            <IconUiFolderHistory class="mr-2.5"/>
            Seneste ordrer
        </h3>
        <a href="#"
           class="e-link">
            Se alle
        </a>
    </div>
    <div class="rounded-lg bg-gray-100 py-4 px-2.5">
        <transition-group name="fade">
            <div v-if="isLoading"
                 key="loading">
                ...Loading
            </div>
            <ul v-else-if="data"
                key="hasData"
                class="mt-2 space-y-2 font-open-sans">
                <li v-for="order in data.slice(0, 7)"
                    :key="order.id"
                    class="grid grid-cols-5 items-center py-2 px-1.5 odd:bg-white">
                    <p class="col-span-2">
                        22-01-2023
                    </p>
                    <p class="font-semibold">
                        #{{ order.id }}
                    </p>
                    <a href="#"
                       class="e-link text-right">
                        Se ordre
                    </a>
                    <a href="#"
                       class="e-link text-right">
                        Genbestil
                    </a>
                </li>
            </ul>
            <div v-else
                 key="noData">
                Bestilling er tom
            </div>
        </transition-group>
    </div>
</template>
