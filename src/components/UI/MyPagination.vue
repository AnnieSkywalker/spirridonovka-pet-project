<template>
    <div class="pagination">
        <span
            class="pagination__page"
            v-for="pageNumber in totalPage"
            :key="pageNumber"
            :class="{ pagination__page_current: page === pageNumber }"
            @click="$emit('changePage', pageNumber)"
        >
            {{ pageNumber }}
        </span>
    </div>
</template>

<script>
    export default {
        name: 'my-pagination',
    };
</script>
<script setup>
    const { totalPage, page } = defineProps({
        totalPage: {
            type: Number,
            required: true,
            default: 1,
        },
        page: {
            type: Number,
            required: true,
        },
    });
</script>

<style lang="css" scoped>
    .pagination {
        padding-top: 20px;
        padding-bottom: 15px;
        display: flex;
        flex-wrap: wrap;
        gap: 5px;
    }
    .pagination__page {
        font-weight: 500;
        font-size: 18px;
        line-height: 100%;
        color: var(--text-lite);
        border: 1px solid var(--border-color);
        border-radius: 10px;
        padding: 14px 20px;
        cursor: pointer;
    }
    .pagination__page_current {
        color: var(--primary);
        border-color: var(--primary);
    }
    .pagination__page:hover {
        color: var(--primary);
        border-color: var(--primary);
    }
</style>
