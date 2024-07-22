<template>
    <div class="modal-wrapper" :class="{ active : modalShow }"> 
        <div class="modal-alerts-wrapper">
            <div class="modal-alerts">
                <div class="modal-close" @click="hideModal">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                        <path d="M1 1L17 17" stroke="#1C1C1C" stroke-linecap="round"/>
                        <path d="M17 1L0.999999 17" stroke="#1C1C1C" stroke-linecap="round"/>
                    </svg>
                </div>
                <div class="modal-alerts-body">
                    <slot></slot>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props: {
        modalShow: {
            type: Boolean,
            default: false
        }
    },

    methods: {
        hideModal() {
            this.$emit('close')
        },
    }
}
</script>