<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title>
          <q-btn to="/" label="Quasar App" class="text-subtitle1" unelevated>Vue Study DH</q-btn>
        </q-toolbar-title>
        
        <div>Quasar v{{ $q.version }}</div>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
    >
      <q-list>
        <q-item-label
          header
        >
          Essential Links
        </q-item-label>

        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from 'vue'
import EssentialLink from 'components/EssentialLink.vue'

const linksList = [
  {
    title: 'Shopping List',
    caption: 'vue 실습 1',
    icon: 'shopping_cart',
    link: '/shop'
  },
  {
    title: 'Vue 기초 문법',
    caption: 'Vue 핵심가이드',
    icon: 'school',
    link: '/vue',
  },
  {
    title: 'todo',
    caption: 'vue + store 실습',
    icon: 'list',
    link: '/todo'
  },
  {
    title: 'Login',
    caption: '간단 로그인',
    icon: 'photo_library',
    link: '/login'
  },
  {
    title: "db todo list",
    caption: "vue + database",
    icon: "chat",
    link: "/dbtodo",
  },
  {
    title: "store todo list",
    caption: "vue + database",
    icon: "chat",
    link: "/storetodo",
  },
]

export default defineComponent({
  name: 'MainLayout',

  components: {
    EssentialLink
  },

  setup () {
    const leftDrawerOpen = ref(false)

    return {
      essentialLinks: linksList,
      leftDrawerOpen,
      toggleLeftDrawer () {
        leftDrawerOpen.value = !leftDrawerOpen.value
      }
    }
  }
})
</script>
