<script setup lang="ts">
    const navigation: navigationItem[] = [
        {
            name: "Serier",
            url: "#"
        },
        {
            name: "Vugge",
            url: "#"
        },
        {
            name: "Børnesenge",
            url: "#"
        },
        {
            name: "Opbevaring",
            url: "#"
        },
        {
            name: "højstol",
            url: "#"
        },
        {
            name: "pusle",
            url: "#"
        },
        {
            name: "tekstiler",
            url: "#"
        },
        {
            name: "Tilbehør",
            url: "#"
        },
        {
            name: "Reservedele",
            url: "#"
        }
    ];
</script>

<template>
    <div class="bg-primary-brown">
        <div class="flex justify-between w-1440 mx-auto">
            <nav class="flex py-4">
                <a href="./">
                    <IconLogosBabyBoo class="text-white"/>
                </a>
                <ul class="flex items-center text-white">
                    <li v-for="navItem in navigation">
                        <a :href="navItem.url">
                            {{ navItem.name }}
                        </a>
                    </li>
                </ul>
                <form class="flex">
                    <input type="search"
                           placeholder="Søg..."
                           class="h-8 px-2.5 py-1 rounded-l-xl border border-r-0 border-solid border-white bg-transparent placeholder:text-white placeholder:text-sm appearance-none"/>
                    <button class="h-8 px-2.5 py-1 rounded-r-xl border border-l-0 border-solid border-white text-white">
                        o
                    </button>
                </form>
            </nav>
            <div></div>
        </div>
    </div>
</template>

<style scoped>

</style>