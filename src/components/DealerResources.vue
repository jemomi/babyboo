<script setup lang="ts">

import DealerResourceLink from './DealerResourceLink.vue';
</script>

<template>
    <section class="bg-kangaroo py-10">
        <article class="max-w-1125 mx-auto">
            <h2 class="font-normal">
                Dine forhandler ressourcer for
                <b>
                    DYLAN puslepude
                </b>
            </h2>
            <section class="flex justify-between mt-10">
                <DealerResourceLink name="POS bestilling"
                                    type="link"
                                    url="#">
                    <IconUiBoard/>
                </DealerResourceLink>
                <DealerResourceLink name="Billedepakke"
                                    type="Download"
                                    url="#">
                    <IconUiImageStack/>
                </DealerResourceLink>
                <DealerResourceLink name="SOME kampagne"
                                    type="Download"
                                    url="#">
                    <IconUiMobileDesign/>
                </DealerResourceLink>
                <DealerResourceLink name="Reservedele"
                                    type="Link"
                                    url="#">
                    <IconUiBolt/>
                </DealerResourceLink>
            </section>
        </article>
    </section>
</template>
