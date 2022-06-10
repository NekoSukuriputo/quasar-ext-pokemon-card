<template>
  <q-page padding>
    <PokeCard />
    <div v-poke-card class="directive-target">x</div>
    <InputCol6 label="Data Input"/>
  </q-page>
</template>

<style lang="sass" scoped>
.directive-target
  width: 50px
  height: 50px
</style>
