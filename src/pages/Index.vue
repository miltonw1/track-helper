<template lang="pug">
q-page.flex.flex-center.bg-dark

  log-table(:rows="rows")

  doughnut-chart(:chartData="[]")
</template>

<script>
import { defineComponent } from 'vue'
import { DoughnutChart } from 'vue-chart-3'
import { Chart, DoughnutController } from 'chart.js'

import LogTable from 'src/components/LogTable.vue'

Chart.register(DoughnutController)

export default defineComponent({
  name: 'PageIndex',

  components: {
    DoughnutChart,
    LogTable
  },

  setup () {
    const rows = [
      {
        name: 'Frozen Yogurt',
        amount: 20,
        unit: 'g',
        energy: 80,
        createdAt: new Date(2020, 0, 1, 0, 0, 0) // January 1st 2020, 00:00:00
      },
      {
        name: 'Frozen Yogurt',
        amount: 20,
        unit: 'g',
        energy: 80,
        createdAt: new Date(2020, 0, 1, 0, 0, 0) // January 1st 2020, 00:00:00
      },
      {
        name: 'Frozen Yogurt',
        amount: 20,
        unit: 'g',
        energy: 80,
        createdAt: new Date() // now
      },
      {
        name: 'Frozen Yogurt',
        amount: 20,
        unit: 'g',
        energy: 80,
        createdAt: new Date() // now
      }
    ]

    return {
      rows
    }
  }
})
</script>
