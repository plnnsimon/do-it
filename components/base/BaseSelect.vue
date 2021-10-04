<template>
  <div class="select">
    <label for="country">{{ $attrs.label }}</label>
    <client-only>
      <v-select
      id="country"
        v-bind="$attrs"
        v-on="$listeners"
        v-model="selected"
        class="style-chooser"
        label="label"
      >
        <!-- <template slot="option" slot-scope="option">
            {{ option.label }}
        </template> -->
        {{ selected }}
      </v-select>
    </client-only>
  </div>
</template>

<script>
export default {
    props: {
    },
    data() {
        return {
            selected: this.$attrs.options[0],
            isOpen: false,
        }
    },
    watch: {
      selected(val) {
        console.log(val);
      }
    },
    methods: {
        openMenu() {
            console.log('clicked')
        },
    },
}
</script>

<style lang="scss">
.select {
  margin-bottom: 16px;
  label {
    font-size: 14px;
  }
}

.v-select {
  background: transparent;
  border: 1px solid #142f57;
  box-sizing: border-box;
  border-radius: 2px;
  color: white;
  width: 240px;
  height: 40px;

  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 6px;
}

.v-select input {
  outline: none;
  display: none;
}

.v-select button {
  outline: none;
  display: none;
}

.vs__dropdown-toggle {
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 0px 18px 0 16px;
  align-items: center;
  color: #627CA3;
}
.vs__actions {
    height: 100%;
    display: flex;
    align-items: center;
}
.vs__open-indicator {
  transition: all ease .5s;
}
.vs--open .vs__open-indicator {
  transition: all ease .5s;
  transform: rotate(180deg)
}

.vs__open-indicator {
    fill: #627ca3;
    border: none !important;
}

.vs--open {
  background: #16263D;
}

ul {
  display: none;
}

.vs--open .vs__dropdown-menu {
  z-index: 10;
  top: 40px;
  position: absolute;
    width: 240px;
    max-height: 240px;
    overflow-y: scroll;
    display: flex;
    flex-direction: column;
    text-decoration: none;
    list-style: none;
    color: #627CA3;
    border: 1px solid #1472FF;
    border-radius: 2px;
    background: #0b1729;
}

.vs--open .vs__dropdown-menu {
  &::-webkit-scrollbar {
    background: #121F33;
    width: 4px;
  }
}

.vs--open .vs__dropdown-menu {
  &::-webkit-scrollbar-thumb {
    background: #627CA3;
    border-radius: 2px;
    height: 24px !important;
  }
}

.vs--open .vs__dropdown-menu li {
   height: 32px;
   cursor: pointer;
   padding: 12px 16px;
   display: flex;
   align-items: center;
   &:hover {
     background: #1472FF;
     color: white;
   }
}

/* solid #1472ff; */

.v-select .vs__clear,
.v-select .vs__open-indicator {
    fill: #394066;
}
</style>