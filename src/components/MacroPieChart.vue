<template lang="pug">

</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'MacroPieChart',

  props: {
    data: {
      type: Array,
      default: () => []
    }
  }
})
</script>
