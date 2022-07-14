<template>
  <Transition>
    <div v-show="data" class="modal">
      this is a Modal
      {{ data }}
      <button @click="closeModal">close</button>
    </div>
  </Transition>
</template>


<script>
export default {
  name: "modal",
  props: {
    data: {},
  },
  methods: {
    closeModal() {
      this.$emit("closeModal");
    },
  },
};
</script>

<style lang="scss" scoped>
$width: 50vw;
.modal {
  position: fixed;
  padding: 1rem;
  height: 100vh;
  width: $width;
  right: 0;
  background-color: white;
  top: 0;
  overflow-x: auto;
  z-index: 2;
}

/* we will explain what these classes do next! */
.v-enter-active,
.v-leave-active {
  transition: all 1s ease;
}

.v-enter-from,
.v-leave-to {
  right: -$width;
}
</style>