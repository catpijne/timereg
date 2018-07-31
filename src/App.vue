<template>
  <div id="app">
    <table class="UI_checkbox_table">
      <tr id="UI_checkbox_header">
        <th>location</th>
        <th>KM</th>
        <th>Commentaar</th>
        <th>maandag</th>
        <th>dinsdag</th>
        <th>woensdag</th>
        <th>donderdag</th>
        <th>vrijdag</th>
      </tr>
      <tr id="UI_locationInfo">
        <td class="locationName"><input id="locationName" type="text"></td>
        <td class="KM"><input id="KM" type="text"></td>
        <td class="Commend"><input id="Commend" type="text"></td>
        <td class="Maandag"><input id="Maandag" type="checkbox"></td>
        <td class="Dinsdag"><input id="Dinsdag" type="checkbox"></td>
        <td class="Woensdag"><input id="Woensdag" type="checkbox"></td>
        <td class="Donderdag"><input id="Donderdag" type="checkbox"></td>
        <td class="Vrijdag"><input id="Vrijdag" type="checkbox"></td>
      </tr>
    </table>
    <button id="ButtonDefault">New default</button>
  </div>
</template>

<script>
export default {
  name: "App"
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
