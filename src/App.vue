<template>
  <div id="app">
    <LocationInfoTable v-bind:rows="rows" />
    <button id="Add" v-on:click="add">Add row</button>
  </div>
</template>

<script>
import LocationInfoTable from "@/components/LocationInfoTable";
import WeekInfoStorage from "./shared/WeekInfoStorage.ts";

export default {
  name: "App",
  components: {
    LocationInfoTable
  },
  methods: {
    add: function() {
      this.rows.push({
        name: "Onbekende naam",
        comment: "Geen commentaar",
        km: 0,
        checkedDays: [],
        id: WeekInfoStorage.getUniqueId()
      });
    }
  },
  data: function() {
    return {
      rows: WeekInfoStorage.getWeekInfos()
    };
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
