<template>
  <div id="app">
    <LocationInfoTable />
    <button id="ButtonDefault">New default</button>
  </div>
</template>

<script>
import LocationInfoTable from "@/components/LocationInfoTable";

export default {
  name: "App",
  components: {
    LocationInfoTable
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
