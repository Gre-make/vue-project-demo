<template>
  <el-pagination background layout="prev, pager, next" :total="1000" />

</template>

<script>
export default {
    data() {
        return {
            total: 100,
            page: 1,
            pageSize: 10
        }
    }
}

</script>