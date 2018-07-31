<template>
    <tr class="UI_locationInfo">
      <td class="locationName"><input type="text" v-bind:value="name"></td>
      <td class="KM"><input type="text" v-bind:value="km"></td>
      <td class="Comment"><input type="text" v-bind:value="comment"></td>
      <td class="Maandag"><input type="checkbox" value="mo" v-model="checkedDays"></td>
      <td class="Dinsdag"><input type="checkbox" value="tue" v-model="checkedDays"></td>
      <td class="Woensdag"><input type="checkbox" value="wed" v-model="checkedDays"></td>
      <td class="Donderdag"><input type="checkbox" value="thu" v-model="checkedDays"></td>
      <td class="Vrijdag"><input type="checkbox" value="fri" v-model="checkedDays"></td>
    </tr>
</template>

<script>
export default {
  name: "LocationInfoTableRow",
  data: {
    name: "Onbekende naam",
    comment: "Geen commentaar",
    km: 0,
    checkedDays: []
  },
  props: {
    name: String,
    comment: String,
    km: Number,
    checkedDays: Array
  }
};
</script>