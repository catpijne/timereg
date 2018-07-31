<template>
<div>
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
      <LocationInfoTableRow v-for="(item, index) in rows"
      v-bind:key="index"
        v-bind:id="item.id"
        v-bind:name="item.name"
        v-bind:km="item.km"
        v-bind:checkedDays="item.checkedDays"
        v-bind:comment="item.comment"
      />
    </table>
</div>

</template>

<script>
import LocationInfoTableRow from "@/components/LocationInfoTableRow";

export default {
  name: "LocationInfoTable",
  components: {
    LocationInfoTableRow
  },
  props: {
    rows: Array
  }
};
</script>