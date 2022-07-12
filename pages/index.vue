<template>
  {{ store.info }}
  {{ store.character.length }}
  <div class="grid">
    <div class="column" v-for="character in store.$state.character" :key="character.id">
      <img :src="character.image" alt="" />
      {{ character.name }}
    </div>
  </div>
  <button @click="nextCharacter(store.info.next)">load more</button>
</template>

<script>
import { useCoreStore } from "~/store/core";

export default {
  setup() {
    const store = useCoreStore();
    return {
      // you can return the whole store instance to use it in the template
      store,
    };
  },
  created() {
    this.getCharacter();
  },
  methods: {
    async getCharacter() {
      await this.store.fetchCharacter();
    },
    async nextCharacter(next) {
      if (next) await this.store.nextCharacter(next);
    },
  },
};
</script>

<style lang="scss" scoped>
body{
    margin: 0;
    padding: 0;
}
.grid{
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    column-gap: 10px;
    row-gap: 10px;
    img{
        max-width: 100%;
    }
}
</style>