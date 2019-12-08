<template>
    <div class="si-grid-row" ref="gridRow">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: "SiGridRow"
}
</script>

<style lang="scss" scoped>
.si-grid-row {
    display: flex;
    flex-flow: row nowrap;
    >.si-grid-col {
        flex: 1;
    }
    &+& {
        margin-top: -1px;
    }
}
</style>