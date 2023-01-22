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
    <div class="bg-kangaroo py-1.5 text-center font-bold text-xs text-primary-brown">
        BABYBOO for professionals
    </div>
    <div class="bg-primary-brown text-white">
        <div class="flex justify-between max-w-1440 mx-auto px-3">
            <nav class="flex py-4">
                <a href="./" class="mr-12">
                    <IconLogosBabyBoo/>
                </a>
                <ul class="hidden lg:flex items-center">
                    <li v-for="navItem in navigation"
                        class="mr-6 font-bold uppercase text-sm">
                        <a :href="navItem.url">
                            {{ navItem.name }}
                        </a>
                    </li>
                </ul>
                <form class="flex items-center">
                    <input type="search"
                           placeholder="Søg..."
                           class="h-8 px-2.5 py-1 rounded-l-xl border border-r-0 border-solid border-white bg-transparent placeholder:text-white placeholder:text-sm appearance-none"/>
                    <button class="h-8 px-2.5 py-1 rounded-r-xl border border-l-0 border-solid border-white">
                        <IconUiSearch/>
                    </button>
                </form>
            </nav>
            <div class="hidden lg:flex text-sm">
                <button class="flex items-center mr-6">
                    <IconUiUserCheck class="mr-2.5"/>
                    BabyBob
                </button>
                <button class="flex items-center">
                    <IconUiGlobe/>
                    <span class="mx-1">
                        DK
                    </span>
                    <IconUiChevronDown/>
                </button>
            </div>
            <a href="#" class="flex flex-col justify-between self-center w-8 h-5 lg:hidden">
                <span class="h-0.5 w-full rounded bg-white"></span>
                <span class="h-0.5 w-full rounded bg-white"></span>
                <span class="h-0.5 w-full rounded bg-white"></span>
            </a>
        </div>
    </div>
</template>

<style scoped>

</style>