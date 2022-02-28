<template>
  <q-page class="flex flex-center bg-dark">
    <log-table></log-table>
  </q-page>
</template>

<script>
import LogTable from 'src/components/LogTable.vue'
import { defineComponent } from 'vue'

export default defineComponent({
  components: { LogTable },
  name: 'PageIndex'
})
</script>
