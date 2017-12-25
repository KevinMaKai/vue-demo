<template>
    <button type="button" class="ant-btn ant-btn-primary" @click="openMessage">
        <span>显示普通提醒</span>
    </button>
</template>
<script>
    export default {
        methods: {
            openMessage() {
                this.$message.info("这是一条普通的提醒");
            }
        }
    }
</script>