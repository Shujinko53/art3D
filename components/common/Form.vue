<template>
    <div ref="form" :class="$style.Form">
        <div :class="$style.inputItem">
            <div :class="$style.label">Name</div>
            <input type="text" :class="$style.input">
        </div>
        <div :class="$style.inputItem">
            <div :class="$style.label">Phone</div>
            <input type="text" :class="$style.input">
        </div>
        <div :class="$style.inputItem"
             @mouseup="handleBtnUp"
             @click="handleMouseClick"
        >
            <div :class="$style.label">Temp</div>
            <div :class="$style.bar">
                <div :class="$style.barWrapper">
                    <div :class="$style.lineHot"
                         :style="{width: `${width}%`}"
                    >
                    </div>
                    <div :class="$style.lineCold"></div>
                    <div :class="$style.runner"
                         :style="{left: `${width}%`}"
                         @mousedown="handleBtnDown"
                         @mouseup="handleBtnUp"
                    >
                    </div>
                </div>
            </div>

            <div :class="$style.statusWrapper">
                <span :class="$style.status">Hot</span>
                <span :class="$style.status">Cold</span>
            </div>
        </div>
        <div :class="$style.inputItem">
            <div :class="$style.label">Comments</div>
            <input type="text" :class="$style.input">
        </div>
    </div>
</template>

<script>
export default {
    name: 'Form',

    components: {
        //
    },

    props: {
        //
    },

    data() {
        return {
            width: 0,
            testWidth: 0,
        };
    },

    computed: {
        //
    },

    methods: {
        // ---------- mouse handlers ----------

        handleBtnUp() {
            // if (this.$mq !== 'tablet' && this.$mq !== 'mobile') {
            //     this.activeCompare = false;
            // }
            console.log('up');
            window.removeEventListener('mousemove', this.onMouseMove);
        },

        handleBtnDown() {
            // if (this.$mq !== 'tablet' && this.$mq !== 'mobile') {
            //     this.activeCompare = true;
            // }
            window.addEventListener('mousemove', this.onMouseMove);
        },

        onMouseMove(e) {
            const formWidth = this.$refs.form.getBoundingClientRect().width;
            const mousePosition = e.offsetX;
            this.width = Math.round(mousePosition / formWidth * 100);

            if (this.width < 0) {
                this.width = 0;
            } else if (this.width > 100) {
                this.width = 100;
            }
        },

        handleMouseClick(e) {
            const formWidth = this.$refs.form.getBoundingClientRect().width;
            const mousePosition = e.offsetX;
            this.width = Math.round(mousePosition / formWidth * 100);

            if (this.width < 0) {
                this.width = 0;
            } else if (this.width > 100) {
                this.width = 100;
            }
        },
    },
}
</script>

<style lang="scss" module>
   .Form {
        display: flex;
        flex-direction: column;
        row-gap: 5.1rem;    
        width: 53.8rem;
    }

    .inputItem {
        position: relative;
        height: 4.2rem;
    }

    .label,
    .input {
        font-size: 1.4rem;
        line-height: 2.1rem;
        letter-spacing: .05em;
        color: $text-color;
    }

    .label {
        position: absolute;
        top: 0;
        left: 0;
    }

    .input {
        width: 100%;
        height: 100%;
        padding-top: 2.5rem;
        border: 0;
        border-bottom: 1px solid rgba(238, 235, 230, .5);
        background-color: transparent;
    }

    .bar {
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: .1rem;
        background-color: rgba(238, 235, 230, .5);
    }

    .barWrapper {
        position: relative;
        width: calc(100% - 12px);
        height: 100%;
    }

    .lineHot,
    .lineCold {
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 100%;
        transform: translateX(6px);
    }

    .lineHot {
        z-index: 1;
        background-color: $rose;
    }

    .lineCold {
        background-color: $blue;
    }

    .runner {
        position: absolute;
        top: 100%;
        left: 0;
        z-index: 2;
        width: 1.3rem;
        height: 1.3rem;
        border-radius: 50%;
        background-color: $sand;
        transform: translateY(-50%);
        cursor: pointer;
    }

    .statusWrapper {
        position: absolute;
        right: 0;
        bottom: -2rem;
        left: 0;
        display: flex;
        justify-content: space-between;
        font-size: .9rem;
        line-height: 1.4rem;
        letter-spacing: .05em;
        color: $text-color;
    }
</style>