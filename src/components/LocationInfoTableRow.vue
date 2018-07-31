<template>
    <tr class="UI_locationInfo">
      <td class="locationName"><input type="text" v-model="name"></td>
      <td class="KM"><input type="text" v-model="km"></td>
      <td class="Comment"><input type="text" v-model="comment"></td>
      <td class="Maandag"><input type="checkbox" value="mo" v-model="checkedDays"></td>
      <td class="Dinsdag"><input type="checkbox" value="tue" v-model="checkedDays"></td>
      <td class="Woensdag"><input type="checkbox" value="wed" v-model="checkedDays"></td>
      <td class="Donderdag"><input type="checkbox" value="thu" v-model="checkedDays"></td>
      <td class="Vrijdag"><input type="checkbox" value="fri" v-model="checkedDays"></td>
      <td>    
        <button v-on:click="save">Save</button>
      </td>
    </tr>
</template>

<script>
const weekInfoPrefix = "weekInfo-";

export default {
  name: "LocationInfoTableRow",
  data: function() {
    return getWeekInfo(1);
  },
  methods: {
    save: function() {
      let weekInfo = {
        name: this.name,
        comment: this.comment,
        km: this.km,
        checkedDays: this.checkedDays
      };

      setWeekInfo(1, weekInfo);
    }
  }
};

function setWeekInfo(id, value) {
  localStorage.setObject(weekInfoPrefix + id, value);
}

function getWeekInfo(id) {
  return localStorage.getObject(weekInfoPrefix + id)
    ? localStorage.getObject(weekInfoPrefix + id)
    : {
        name: "name",
        comment: "comment",
        km: 2,
        checkedDays: [],
        id: 1
      };
}

Storage.prototype.setObject = function(key, value) {
  this.setItem(key, JSON.stringify(value));
};

Storage.prototype.getObject = function(key) {
  var value = this.getItem(key);
  return value && JSON.parse(value);
};
</script>