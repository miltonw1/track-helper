<template lang="pug">
.q-pa-md(style="width: 60%")

  q-table(
    title="Daily log"
    :rows="rows"
    :columns="columns"
    row-key="name"
    :dark="darkMode"
    color="amber"
    hide-bottom)
</template>

<script>
import { defineComponent } from 'vue'
import { useQuasar } from 'quasar'

const columns = [
  {
    name: 'name',
    field: 'name',
    label: 'Description',
    required: true,
    align: 'left'
  },
  {
    name: 'amount',
    field: 'amount',
    label: 'Amount',
    required: true,
    align: 'center',
    sortable: false
  },
  {
    name: 'unit',
    label: 'Unit',
    field: 'unit',
    sortable: false
  },
  {
    name: 'energy',
    label: 'Energy (kcal)',
    field: 'energy'
  }
]

export default defineComponent({
  name: 'LogTable',

  props: {
    rows: {
      type: Array,
      required: true
    }
  },

  setup () {
    const q = useQuasar()

    const darkModeHandler = q.dark

    return {
      columns,
      darkMode: darkModeHandler.isActive
    }
  }
})
</script>
