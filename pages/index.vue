<template>
    <div :class="$style.IndexPage">
        <HomeForm/>
    </div>
</template>

<script>
import HomeForm from '~/components/pages/home/HomeForm';

export default {
    name: 'IndexPage',

    components: {   
        HomeForm,
    },

    props: {
        //
    },

    data() {
        return {
            //
        };
    },

    computed: {
        //
    },

    methods: {
        //
    },
}
</script>

<style lang="scss" module>
    .IndexPage {
        //
    }
</style>
