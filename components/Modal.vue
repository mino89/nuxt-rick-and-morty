<template>
<div>
    this is a Modal
    {{data}}
    <button @click="closeModal">close</button>
</div>
</template>


<script>
    export default{
        name: 'modal',
        props: {
            data:{}
        },
        methods:{
            closeModal(){
                this.$emit('closeModal')
            }
        }
    }
</script>