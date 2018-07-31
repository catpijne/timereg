<template>
 <table class="UI_checkbox_table">
      <tr class="UI_checkbox_header">
        <th>location</th>
        <th>KM</th>
        <th>Commentaar</th>
        <th>maandag</th>
        <th>dinsdag</th>
        <th>woensdag</th>
        <th>donderdag</th>
        <th>vrijdag</th>
      </tr>
      <LocationInfoTableRow name="test" comment="commentje" v-bind:km="1" v-bind:checkedDays="['mo', 'tue']" />
    </table>
</template>

<script>
import LocationInfoTableRow from "@/components/LocationInfoTableRow";

export default {
  name: "LocationInfoTable",
  components: {
    LocationInfoTableRow
  }
};
</script>