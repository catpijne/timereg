<template>
  <div id="app">
    <LocationInfoTable v-bind:rows="rows" />
    <button id="ButtonDefault">New default</button>
  </div>
</template>

<script>
import LocationInfoTable from "@/components/LocationInfoTable";

export default {
  name: "App",
  components: {
    LocationInfoTable
  },
  data: function() {
    return {
      rows: [
        {
          name: "testnaam",
          comment: "welcommentaar",
          km: 1337,
          checkedDays: ["fri"]
        },
        {
          name: "Dit is geen test",
          comment: "christiaan is de beste",
          km: 31337,
          checkedDays: ["mo", "fri"]
        }
      ]
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
