<template>
  <Transition appear>
    <article class="card" @click="openCurrent">
      <figure>
        <img :src="character.image" :alt="character.name" />
      </figure>

      {{ character.name }}
    </article>
  </Transition>
</template>

<script>
export default {
  name: "card",
  props: {
    character: {},
    selected: false,
  },
  methods: {
    openCurrent() {
      this.$emit("openCurrent", this.character.url);
    },
  },
};
</script>

<style lang="scss" scoped>
.card {
  max-width: 100%;
  display: flex;
  flex-direction: column;

  img {
    max-width: 100%;
    position: relative;
  }
}

.v-enter-active,
.v-leave-active {
  transition: all 1s ease;
  transition-delay: .5s;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>