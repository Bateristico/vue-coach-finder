<template>
  <button v-if="!link" :class="mode">
    <slot></slot>
  </button>
  <router-link v-else :to="to" :class="mode">
    <slot></slot>
  </router-link>
</template>

<script>
export default {
  props: {
    mode: {
      type: String,
      required: false,
      default: null
    },
    link: {
      type: Boolean,
      required: false,
      default: false
    },
    to: {
      type: String,
      required: false,
      default: '/'
    }
  }
};
</script>

<style scoped>
button,
a {
  text-decoration: none;
  padding: 0.75rem 1.5rem;
  font: inherit;
  background-color: #4f515a;
  border: 1px solid #444549;
  color: white;
  cursor: pointer;
  border-radius: 15px;
  margin-right: 0.5rem;
  display: inline-block;
}

a:hover,
a:active,
button:hover,
button:active {
  background-color: #270041;
  border-color: #270041;
  color: white;
}

.flat {
  background-color: transparent;
  color: #38353a;
  border: none;
}

.outline {
  background-color: transparent;
  border-color: #38353a;
  color: #38353a;
}

.flat:hover,
.flat:active,
.outline:hover,
.outline:active {
  background-color: #b4b0b6;
}
</style>
