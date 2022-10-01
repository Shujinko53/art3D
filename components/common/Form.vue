<template>
    <div ref="form" :class="$style.Form">
        <div :class="[$style.inputItem, {[$style._error] : errors.name}]">
            <div :class="[$style.label, {[$style._small] : inputData.name}]">
                Name
            </div>

            <input v-model="inputData.name"
                   type="text" 
                   :class="$style.input"
                   @input="inputRegCheck('name')"
            >

            <transition name="fade">
                <span v-if="errors.name"
                      :class="$style.inputError"
                >
                    {{ errors.name }}
                </span>
            </transition>
        </div>

        <div :class="[$style.inputItem, {[$style._error] : errors.phone}]">
            <div :class="[$style.label, {[$style._small] : inputData.phone}]">
                Phone
            </div>

            <input v-model="inputData.phone"
                   v-mask="['+7 (###) ###-##-##', '+7 (###) ###-##-##']"
                   type="tel"
                   masked="false"
                   inputmode="numeric"
                   :class="$style.input"
                   @input="inputRegCheck('phone')"
            >

            <transition name="fade">
                <span v-if="errors.phone"
                      :class="$style.inputError"
                >
                    {{ errors.phone }}
                </span>
            </transition>
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

        <div :class="[$style.inputItem, {[$style._error] : errors.message}]">
            <div :class="[$style.label, {[$style._small] : inputData.message}]">
                Comments
            </div>

            <input v-model="inputData.message"
                   type="text" 
                   :class="$style.input"
                   @input="inputComment"
            >

            <transition name="fade">
                <span v-if="errors.message"
                      :class="$style.inputError"
                >
                    {{ errors.message }}
                </span>
            </transition>
        </div>

        <div :class="$style.formWrapper">
            <button :class="$style.submitButton">call me</button>

            <div :class="$style.privacyText">
                By pressing “Send” button 
                I agree with <span>Privacy Policy</span>
            </div>
        </div>
    </div>
</template>

<script>
import { regCheck } from '~/assets/js/mixins/regCheck';
import { cleanPhone } from '~/assets/js/utils/common-utils';

export default {
    name: 'Form',

    components: {
        //
    },

    props: {
        //
    },

    mixins: [
        regCheck,
    ],

    data() {
        return {
            width: 0,
            testWidth: 0,

            inputData: {
                name: '',
                phone: '',
                message: '',
            },

            errors: {
                name: '',
                phone: '',
                message: '',
            },
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
            console.log(cleanPhone(this.inputData.phone));
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

        // validation

        inputRegCheck(type) {
            if (type === 'name') {
                this.errors[type] = this.regCheck(this.inputData[type], 'multyLang', true);
                this.errors = { ...this.errors };
            } else if (type === 'phone') {
                this.errors[type] = this.regCheck(this.inputData[type], 'phone', true);
                this.errors = { ...this.errors };
            }
        },

        inputComment() {
            if (this.errors.message.length) {
                this.errors.message = '';
            } else if (this.inputData.message.length > 300) {
                this.errors.message = 'Не более 300 символов';
            }
        },

        currentPreMask() {
            if (this.lazyValue.length) {
                const regex = new RegExp('^.{0,' + this.lazyValue.length + '}', 'g');
                const pre = this.currentMask.replace(regex, `<span>${this.lazyValue}</span>`);
                return pre.replace(/#/g, ' _ ');
            }

            return this.currentMask.replace(/#/g, ' _ ');
        },
    },
}
</script>

<style lang="scss" module>
   .Form {
        display: flex;
        flex-direction: column;
        width: 53.8rem;

        @include respond-to(tablet) {
            width: 100%;
        }

        @include respond-to(mobile) {
        }
    }

    .inputItem {
        position: relative;
        height: 4.2rem;
        margin-bottom: 5.1rem;

        &:nth-child(4) {
            margin-bottom: 13.6rem;
        }

        &._error {
            .input {
                border-color: $error;
            }
        }

        @include respond-to(tablet) {
            margin-bottom: 4rem;

            &:nth-child(4) {
                margin-bottom: 8rem;
            }
        }

        @include respond-to(mobile) {
            height: 3.2rem;
            margin-bottom: 2rem;

            &:nth-child(4) {
                margin-bottom: 4rem;
            }
        }
    }

    .label,
    .input {
        font-size: 1.4rem;
        line-height: 2.1rem;
        letter-spacing: .05em;
        color: $text-color;

        @include respond-to(tablet) {
            //
        }

        @include respond-to(mobile) {
            font-size: 1rem;
            line-height: 1.6rem;
        }
    }

    .label {
        position: absolute;
        top: 0;
        left: 0;
        transition: $default-transition;

        &._small {
            font-size: 1rem;
            line-height: 1.4rem;
        }

        @include respond-to(tablet) {
            //
        }

        @include respond-to(mobile) {

        &._small {
            font-size: .6rem;
            line-height: 1rem;
        }
        }
    }

    .input {
        width: 100%;
        height: 100%;
        padding-top: 2.5rem;
        border: 0;
        border-bottom: 1px solid rgba(238, 235, 230, .5);
        background-color: transparent;
        text-transform: uppercase;
        font-weight: 400;
        transition: border $default-transition;

        @include respond-to(tablet) {
            //
        }

        @include respond-to(mobile) {
            padding-top: 1.8rem;
        }
    }

    .inputError {
        display: block;
        margin-top: .5rem;
        font-size: 1rem;
        line-height: 1.4rem;
        letter-spacing: .02em;
        color: $error;

        @include respond-to(tablet) {

        }

        @include respond-to(mobile) {
            margin-top: .3rem;
            font-size: .8rem;
            line-height: 1.2rem;
        }
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

        @include respond-to(tablet) {
            //
        }

        @include respond-to(mobile) {
            font-size: .7rem;
            line-height: 1.2rem;
        }
    }

    .formWrapper {
        display: flex;
        align-items: center;
        column-gap: 7.2rem;
        color: $text-color;

        @include respond-to(tablet) {
            column-gap: 4rem;
        }

        @include respond-to(mobile) {
            justify-content: space-between;
            column-gap: 2rem;
        }
    }

    .submitButton {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-shrink: 0;
        width: 17.3rem;
        height: 5.6rem;
        text-transform: uppercase;
        font-size: 1.2rem;
        line-height: 1.6rem;
        letter-spacing: .05em;
        border-radius: 10rem;
        border: 1px solid $text-color;
        transition: 
            border $default-transition,
            color $default-transition;
        cursor: pointer;

        &:hover {
            border: 1px solid $blue;
            color: $blue;
        }

        @include respond-to(tablet) {
            width: 14rem;
            height: 4.6rem;
        }

        @include respond-to(mobile) {
            width: 10rem;
            height: 3.6rem;
            font-size: 1rem;
            line-height: 1.4rem;
        }
    }

    .privacyText {
        width: 20.5rem;
        font-size: 1.3rem;
        line-height: 2rem;
        letter-spacing: .05em;

        & span {
            text-decoration: underline;
            color: $rose;
            transition: color $default-transition;
            cursor: pointer;
            text-underline-offset: .2rem;

            &:hover {
                color: $blue;
            }
        }

        @include respond-to(tablet) {
            width: unset;
            max-width: 19rem;
            font-size: 1.2rem;
            line-height: 1.6rem;
        }

        @include respond-to(mobile) {
            max-width: 12.7rem;
            font-size: .8rem;
            line-height: 1.2rem;
        }
    }
</style>