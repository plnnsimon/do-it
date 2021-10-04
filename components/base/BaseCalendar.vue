<template>
    <div>
        <label for="">{{ label }}</label>
        <client-only>
            <v-date-picker
            color="#red"
                title-position="left"
                :is-dark="true"
                v-model="selectedDate"
                :min-date="new Date(1950, 10, 9)"
                show-caps
            >
                <template #default="{ inputValue, togglePopover }">
                    <div class="date__container">
                        <input
                            :value="inputValue"
                            placeholder="dd-mm-yyy"
                            readonly
                        />
                        <button @click="togglePopover()">
                            <svg
                                width="22"
                                height="22"
                                viewBox="0 0 22 22"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M17.4167 3.66708H4.58333C3.57081 3.66708 2.75 4.4879 2.75 5.50042V18.3338C2.75 19.3463 3.57081 20.1671 4.58333 20.1671H17.4167C18.4292 20.1671 19.25 19.3463 19.25 18.3338V5.50042C19.25 4.4879 18.4292 3.66708 17.4167 3.66708Z"
                                    stroke="#627CA3"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                />
                                <path
                                    d="M14.6664 1.83292V5.49959"
                                    stroke="#627CA3"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                />
                                <path
                                    d="M7.33356 1.83292V5.49959"
                                    stroke="#627CA3"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                />
                                <path
                                    d="M2.75 9.16708H19.25"
                                    stroke="#627CA3"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                />
                            </svg>
                        </button>
                    </div>
                </template>
            </v-date-picker>
        </client-only>
    </div>
</template>
<script>
export default {
    props: {
        label: {
            required: true,
        },
    },
    data() {
        return {
            selectedDate: '',
        }
    },
    watch: {
        selectedDate(val) {
            this.$emit('updateDate', val)
        },
    },
    //    methods: {
    //        togglePopover() {

    //        }
    //    }
}
</script>
<style lang="scss" scoped>
label {
    font-size: 14px;
    margin-bottom: 6px;
}

input {
    outline: none;
    padding: 10px 0px 8px 14px;
    color: #627ca3;
    &::placeholder {
        color: #627ca3;
    }
}

.date__container {
    margin: 5px 0 15px;
    border: 1px solid #142f57;
    box-sizing: border-box;
    border-radius: 2px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    button {
        padding-right: 16px;
    }
}
</style>