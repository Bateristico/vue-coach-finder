<template>
  <span class="badge" :class="type">
    {{ text }}
  </span>
</template>

<script>
export default {
  props: ['type', 'title'],
  computed: {
    text() {
      return this.title.toUpperCase();
    }
  }
};
</script>

<style scoped>
.badge {
  border: 1px solid red;
  background-color: white;
  color: #252525;
  /* border-radius: 30px; */
  padding: 0.5rem 1.5rem;
  display: inline-block;
  margin-right: 0.5rem;
}

/* .frontend {
  background-color: #bf1d00;
  color: white;
}

.backend {
  background-color: #a68adf;
  color: white;
}

.career {
  background-color: #7a8d00;
  color: white;
} */
</style>
