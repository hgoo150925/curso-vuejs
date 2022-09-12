<template>
  <!-- tendra un routerviw para montar mis vistas -->
  <DayBookNavbar />

  <div class="d-flex">
    <div class="col-4">
      <EntryList />
    </div>
    <div class="col"><RouterView /></div>
  </div>
</template>

<script>
import { RouterView } from 'vue-router';
import DayBookNavbar from '../components/DayBookNavbar.vue';
import EntryList from '../components/EntryList.vue';

export default { components: { DayBookNavbar, EntryList } };
</script>
