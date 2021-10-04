<template>
    <input
        id="terms"
        v-model="selected"
        @input="$emit('updateCheckbox', selected)"
        type="checkbox"
        class="regular-checkbox"
    />
</template>

<script>
export default {
    data() {
        return {
            selected: false,
        }
    },
}
</script>

<style lang='scss' scoped>
.regular-checkbox {
    -webkit-appearance: none;
    background-color: transparent;

    border: 1px solid #294470;
    padding: 9px;
    border-radius: 3px;
    display: inline-block;
    position: relative;
    transition: all ease 0.2s;
}

.regular-checkbox:checked {
    background-image: url('~/static/checkbox-border.png');
    border: none;
    padding: 10px;
    transition: all ease 0.2s;
    // line-height: 4px;
}

.regular-checkbox:checked:after {
    content: url('~/static/checkbox.png');
    position: absolute;
    top: -3px;
    left: 7px;
}
</style>