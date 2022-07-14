<template>
  <div>
    {{ store.infoList }}
    {{ store.charactersList.length }}
    <modal :data="store.singleCharacter" @close-modal="clearSingleCharacter" />
    <div class="grid">
      <div
        class="column"
        v-for="character in store.charactersList"
        :key="character.id"
      >
       
          <card
            :character="character"
            @open-current="singleCharacter"
            :selected="
              store.singleCharacter?.id === character.id ? true : false
            "
          />
 
      </div>
    </div>
    <button @click="nextCharacter(store.info.next)">load more</button>
  </div>
</template>

<script>
import { useCoreStore } from "~/store/core";

import ModalVue from "~/components/Modal.vue";
import CardVue from "~/components/Card.vue";
export default {
  setup() {
    const store = useCoreStore();
    return {
      store,
    };
  },
  components: [ModalVue, CardVue],
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
    async singleCharacter(next) {
      if (this.store.singleCharacter) await this.clearSingleCharacter();
      if (next) await this.store.fetchSingleCharacter(next);
    },
    async clearSingleCharacter() {
      await this.store.clearSingleCharacter();
    },
  },
};
</script>

<style lang="scss" scoped>
body {
  margin: 0;
  padding: 0;
}
.grid {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  column-gap: 10px;
  row-gap: 10px;
  img {
    max-width: 100%;
  }
}


</style>