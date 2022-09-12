<template>
  <div class="entry-list-container">
    <div class="px-2 pt-2">
      <input class="form-control" type="text" placeholder="Buscar entradas" />
    </div>

    <div class="entry-scrollarea">
      <Entry v-for="item in 100" :key="item" />
    </div>
  </div>
</template>

<script>
import Entry from './Entry.vue';

export default { components: { Entry } };
</script>

<style lang="scss">
.entry-list-container {
  border-right: 1px solid #2c3e50;
  height: calc(100vh - 56px);
}

.entry-scrollarea {
  height: calc(100vh - 110px);
  overflow: scroll;
}
/* width */
::-webkit-scrollbar {
  width: 5px;
}

/* Track */
::-webkit-scrollbar-track {
  box-shadow: inset 0 0 2px #eeeeee;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background-color: #293e62;
}
</style>
