<template>
    <div :class="$style.IndexPage">
        <HomeForm/>
        <HomeDiagram/>
    </div>
</template>

<script>
import HomeForm from '~/components/pages/home/HomeForm';
import HomeDiagram from '~/components/pages/home/HomeDiagram';

export default {
    name: 'IndexPage',

    components: {   
        HomeForm,
        HomeDiagram,
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
