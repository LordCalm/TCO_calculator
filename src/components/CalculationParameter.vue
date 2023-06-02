<script>
export default {
    props: ['modelValue'],
    emits: ['update:modelValue']
}
</script>

<template>
    <textarea :value="modelValue" @input="$emit('update:modelValue', $event.target.value)" rows="1"></textarea>
</template>

<style scoped>
textarea {
    width: 100%;
    min-width: 80px;
    resize: vertical;
}
</style>
