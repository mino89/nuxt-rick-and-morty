<template>
  <div @click="openCurrent">
    <img :src="character.image" alt="" />
    {{ character.name }}
    <pre>
        {{ character.url }}
      </pre>
  </div>
</template>

<script>
export default {
  name: "card",
  props: {
    character:{},
  },
  methods:{
    openCurrent(){
        this.$emit('openCurrent', this.character.url)
    }
  }
};
</script>