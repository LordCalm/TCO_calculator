<script>
export default {
    props: ['modelValue'],
    emits: ['update:modelValue']
}
</script>

<template>
    <input
        :value="modelValue"
        @input="$emit('update:modelValue', $event.target.value)"
    />
</template>

<style scoped>
input{
    width: 80px;
}
</style>
