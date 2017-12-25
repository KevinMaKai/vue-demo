<template>
<div>
    <button type="button" class="ant-btn" @click="openTypeMessage('success')">
        <span>success</span>
    </button>
    <button type="button" class="ant-btn" @click="openTypeMessage('error')">
        <span>error</span>
    </button>
    <button type="button" class="ant-btn" @click="openTypeMessage('warning')">
        <span>warning</span>
    </button>
</div>
</template>
<script>
    export default {
        methods: {
            openTypeMessage(type) {
                this.$message[type]("这是一条成功的提醒");
            }
        }
    }
</script>