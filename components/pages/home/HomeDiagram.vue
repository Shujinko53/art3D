<template>
    <div :class="$style.HomeDiagram">

        <div :class="$style.diagramWrapper">
            <svg viewBox="0 0 510 510" 
                 fill="none"
                 :class="$style.diagram" 
            >
                <g v-for="sector of sectors"
                :key="sector.id"
                :class="$style.polygonGroup"
                >
                    <polygon :points="sector.coords" 
                             :fill="sector.color"
                             :class="[$style.polygon, {[$style._active] : activeSector.id === sector.id}]"
                             @mouseenter="setChosenProject(sector)"
                             @mouseleave="clearChosenProject"
                    />
                </g>
            </svg>

            <!-- <img src="~/static/circle.jpg"
                 alt="Diagram"
                 :class="$style.diagram" 
                 usemap="#map" /> -->

            <!-- <map name="map">
                <area v-for="sector of sectors"
                      :key="sector.id"
                      :coords="sector.coords"
                      :shape="sector.shape"
                      @mouseenter="hoverSector(sector)"
                      @mouseleave="leaveSector"
                >
            </map> -->

            <ul :class="$style.sectors">
                <li v-for="sector of sectors"
                    :key="sector.id"
                    :class="[$style.sectorPoint, {[$style._active] : activeSector.id === sector.id}]"
                    @mouseenter="setChosenProject(sector)"
                    @mouseleave="leaveSector"
                >
                    <div :class="$style.sectorMarker"
                         :style="`background-color: ${sector.color};`"
                    >
                    </div>
                    <div :class="$style.nameWrapper">
                        <div :class="$style.sectorName">
                            {{ sector.name }}
                        </div>
                        <div :class="$style.underline"
                             :style="`background-color: ${sector.color};`"
                        >
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';

export default {
    name: 'HomeDiagram',

    components: {
        //
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
        ...mapState({
            sectors: state => state.sectors.sectors,
            activeSector: state => state.sectors.activeSector,
        }),
    },

    methods: {
        ...mapActions({
            setChosenProject: 'sectors/setActiveSector',
            clearChosenProject: 'sectors/clearActiveSector',
        }),

        hoverSector(sector) {
            this.setChosenProject(sector);
        },

        leaveSector() {
            this.clearChosenProject();
        },
    },
}
</script>

<style lang="scss" module>
   .HomeDiagram {
        display: flex;
        align-items: center;
        justify-content: center;
        min-height: 100vh;
        background-color: $white;

        @include respond-to(tablet) {
            padding-top: 5rem;
            align-items: flex-start;
        }

        @include respond-to(mobile) {
            //
        }
    }

    .first {
        &:hover {
            background-color: $black;
            opacity: .7;
            cursor: pointer;
            transition: $default-transition;
        }
    }

    .diagramWrapper {
        position: relative;
    }

    .diagram {
        width: 51.4rem;
        height: 51.4rem;

        @include respond-to(tablet) {
            width: 48rem;
            height: 48rem;
        }

        @include respond-to(mobile) {
            width: 31rem;
            height: 31rem;
        }
    }

    .polygonGroup {
        cursor: pointer;
    }

    .polygon {
        transition: opacity $default-transition;

        &._active {
            opacity: .8;
        }
    }

    .sectors {
        position: absolute;
        top: 50%;
        left: 100%;
        display: flex;
        flex-direction: column;
        width: max-content;
        row-gap: 1.6rem;
        transform: translate(10rem, -50%);
        cursor: pointer;

        @include respond-to(tablet) {
            top: 100%;
            left: 50%;
            transform: translate(-50%, 5rem);
        }

        @include respond-to(mobile) {
            //
        }
    }

    .sectorPoint {
        display: flex;
        column-gap: 1.3rem;

        &._active {
            //

            & .sectorMarker,
            & .underline {
                opacity: 1;
            }

            & .sectorName {
                color: $black;
            }
        }

        @include respond-to(tablet) {
            //
        }

        @include respond-to(mobile) {
            //
        }
    }

    .sectorMarker {
        flex-shrink: 0;
        width: 1.4rem;
        height: 1.4rem;
        margin-top: .2rem;
        opacity: .8;
        transition: opacity $default-transition;

        @include respond-to(tablet) {
            //
        }

        @include respond-to(mobile) {
            //
        }
    }

    .nameWrapper {
        display: flex;
        flex-direction: column;
        flex-shrink: 0;
        row-gap: .4rem;
    }

    .sectorName {
        font-size: 1.6rem;
        line-height: 1.6rem;
        letter-spacing: .05em;
        color: $gray-100;
        transition: color $default-transition;

        @include respond-to(tablet) {
            //
        }

        @include respond-to(mobile) {
            //
        }
    }

    .underline {
        width: 100%;
        height: .1rem;
        opacity: 0;
        transition: opacity $default-transition;
    }
</style>