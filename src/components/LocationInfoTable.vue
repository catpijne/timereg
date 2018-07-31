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
      <LocationInfoTableRow v-for="(item, index) in rows"
        v-bind:item="item"
        v-bind:index="index"
        v-bind:key="item.id" 
        v-bind:name="item.name" 
        v-bind:comment="item.comment" 
        v-bind:km="item.km" 
        v-bind:checkedDays="item.checkedDays" 
      />
    </table>
</template>

<script>
import LocationInfoTableRow from "@/components/LocationInfoTableRow";

export default {
  name: "LocationInfoTable",
  components: {
    LocationInfoTableRow
  },
  defaultProps: function() {
    return {
      rows: [
        {
          name: "Onbekende naam",
          comment: "Geen commentaar",
          km: 0,
          checkedDays: []
        }
      ]
    };
  },
  props: {
    rows: Array
  }
};
</script>