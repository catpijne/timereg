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
        <button v-on:click="set">Set</button>
      </td>
    </tr>
</template>

<script>
import WeekInfoStorage from "../shared/WeekInfoStorage.ts";
const getClassNameTimereg = "PortletText2";

function setKMValueInSheet(kilometers, comment) {
  let maxLength = document.getElementsByClassName(getClassNameTimereg).length;

  let i = maxLength - 8;
  for (i; i < maxLength - 3; i++) {
    document.getElementsByClassName(getClassNameTimereg)[
      i
    ].lastChild.value = kilometers;
  }

  document.getElementsByClassName(getClassNameTimereg)[
    maxLength - 2
  ].lastChild.value = comment;
}

export default {
  name: "LocationInfoTableRow",
  props: {
    id: Number,
    name: String,
    km: Number,
    checkedDays: Array,
    comment: String
  },
  methods: {
    save: function() {
      let weekInfo = {
        name: this.name,
        comment: this.comment,
        km: this.km,
        checkedDays: this.checkedDays,
        id: this.id
      };

      WeekInfoStorage.setWeekInfo(this.id, weekInfo);
    },
    set: function() {
      let weekInfo = {
        name: this.name,
        comment: this.comment,
        km: this.km,
        checkedDays: this.checkedDays,
        id: this.id
      };

      setKMValueInSheet(weekInfo.km, weekInfo.comment);
    }
  }
};
</script>