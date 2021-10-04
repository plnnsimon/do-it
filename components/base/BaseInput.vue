<template>
    <div :class="{'error': snackbar, 'success': success && input !== ''}" class="input__group">
        <label>{{ label }}</label>
        <input
        v-model="input"
            :autocomplete="autocomplete"
            required
            :type="type"
            :placeholder="placeholder"
            @blur="inputFunction"
        />
        <i v-if="success && input !== ''" style="color: #47b833;" class="fas fa-check"></i>
        <i @click="snackbar = false" v-if="snackbar && !success" style="color: #B83333;" class="fas fa-times"></i>
        <p v-if="snackbar">{{ message }}</p>
    </div>
</template>

<script>
export default {
    props: {
        // snackbar: {
        //     default: false,
        //     type: Boolean
        // },
        // success: {
        //     type: Boolean,
        //     default: false
        // },
        emitFunction: {
            default: 'update',
            type: String
        },
        autocomplete: {
            default: 'on',
            type: String
        },
        type: {
            default: "text",
            type: String
        },
        placeholder: {
            default: '',
            type: String
        },
        label: {
            default: '',
            type: String
        }
    },
    
    data() {
        return {
            input: '',
            success: false,
            snackbar: false,
            message: "Invalid data"
        }
    },
    watch: {
        type(data) {
            if (data === 'text' && this.input === '') {
                this.inputFunction()
            } else if (data === 'text' && this.input !== '') {
                this.input = ''
            }
        }  
    },
    methods: {
        inputFunction() {
            if (this.type === "email") {
                if (this.input.split('').includes('@')) {
                    if (this.input.includes('.com') || 
                    this.input.includes('.ua') || 
                    this.input.includes('.ru')) {
                        this.$emit(`${this.emitFunction}`, this.input)
                        this.success = true
                        this.snackbar = false;
                    } else {
                        this.snackbar = true;
                    }
                } else {
                    this.snackbar = true;
                }
            }
            if (this.type === 'password') {
                if (this.input.length >= 8) {
                    this.$emit(`${this.emitFunction}`, this.input)
                    this.success = true;
                    this.snackbar = false;
                } else {
                    this.snackbar = true;
                    this.message = 'min 8 character'
                }
            }
            if (this.type === 'text') {
                if (this.input.length > 4) {
                    this.$emit(`${this.emitFunction}`, this.input)
                    this.success = true;
                    this.snackbar = false;
                }  else {
                    this.success = false;
                    this.snackbar = true;
                }
            }
        }
    }
}
</script>

<style lang="scss" scoped>
.input__group {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-bottom: 15px;
    label {
        font-size: 14px;
        margin-bottom: 5px;
    }
    
    input {
      width: 240px;
      height: 40px;
      padding-left: 15px;
      outline: none;
      border: 1px solid #142f57;
      border-radius: 2px;
      color: rgba(98, 124, 163, 1);
      
      &::placeholder {
        color: rgba(98, 124, 163, 1);
      }
      &:focus {
        background:  #16263D;
        border: 1px solid #185EC7;
        color: white;
      }
    }
}
i {
        position: absolute;
        top: 26px;
        right: 15px;
        font-size: 25px;
    }
.error {
    input {
        transition: all ease .5s;
        border: 1px solid #B83333 !important;
    }
    
    p {
        color: #B83333;
        font-size: 12px;
    }
}
.success {
    input {
        transition: all ease .5s;
        border: 1px solid #4CB725 !important;
    }
}
</style>