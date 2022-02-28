<template lang="pug">
q-layout(view="lHh Lpr lFf")
  // q-header(elevated)
    q-toolbar
      q-btn(flat dense round icon="menu" aria-label="Menu" @click="toggleLeftDrawer")

      q-toolbar-title Track Helper

      div Quasar v{{ q.version }}

  // q-drawer.bg-grey-1(v-model="leftDrawerOpen" show-if-above bordered)
    q-list
      q-item-label.text-grey-8(header) Essential Links

      essential-link(
        v-for="link in essentialLinks"
        :key="link.title"
        v-bind="link")

  q-page-container
    router-view
</template>

<script>
import { defineComponent/* , ref */ } from 'vue'
// import { useQuasar } from 'quasar'

import EssentialLink from 'components/EssentialLink.vue'

// const essentialLinks = []
export default defineComponent({
  name: 'MainLayout',

  components: {
    EssentialLink
  },

  setup () {
    // const leftDrawerOpen = ref(false)

    // const q = useQuasar()

    return {
      // q,
      // essentialLinks,
      // leftDrawerOpen,
      // toggleLeftDrawer () {
      //   leftDrawerOpen.value = !leftDrawerOpen.value
      // }
    }
  }
})
</script>
