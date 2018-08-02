<template>
    <tr class="UI_locationInfo">
      <td class="locationName"><input type="text" v-model="nameValue"></td>
      <td class="KM"><input type="text" v-model.number="kmValue"></td>
      <td class="Comment"><input type="text" v-model="commentValue"></td>
      <td class="Maandag"><input type="checkbox" value="mo" v-model="checkedDaysValue"></td>
      <td class="Dinsdag"><input type="checkbox" value="tue" v-model="checkedDaysValue"></td>
      <td class="Woensdag"><input type="checkbox" value="wed" v-model="checkedDaysValue"></td>
      <td class="Donderdag"><input type="checkbox" value="thu" v-model="checkedDaysValue"></td>
      <td class="Vrijdag"><input type="checkbox" value="fri" v-model="checkedDaysValue"></td>
      <td>    
        <button v-on:click="save">Save</button>
        <button v-on:click="set">Set</button>
      </td>
    </tr>
</template>

<script>
import WeekInfoStorage from "../shared/WeekInfoStorage.ts";
export default {
  name: "LocationInfoTableRow",
  props: {
    id: Number,
    name: String,
    km: Number,
    checkedDays: Array,
    comment: String
  },
  data: function() {
    return {
      idValue: this.id,
      nameValue: this.name,
      kmValue: this.km,
      checkedDaysValue: this.checkedDays,
      commentValue: this.comment
    };
  },
  methods: {
    save: function() {
      let weekInfo = {
        name: this.nameValue,
        comment: this.commentValue,
        km: this.kmValue,
        checkedDays: this.checkedDaysValue,
        id: this.idValue
      };

      WeekInfoStorage.setWeekInfo(this.idValue, weekInfo);
    },
    set: function() {
      let weekInfo = {
        name: this.nameValue,
        comment: this.commentValue,
        km: this.kmValue,
        checkedDays: this.checkedDaysValue,
        id: this.idValue
      };

      trySetKilometerValueInSheet(
        weekInfo.km,
        weekInfo.comment,
        weekInfo.checkedDays,
        this.id + 1
      );
    }
  }
};

const getClassNameTimereg = "PortletText2";
const map = new Map();
map.set("mo", 3);
map.set("tue", 4);
map.set("wed", 5);
map.set("thu", 6);
map.set("fri", 7);

function trySetKilometerValueInSheet(kilometers, comment, checkedDays, rowNumber) {
  let KilometersHeadingElement = getDeclareKilometersHeadingElement()
    .parentElement;

  if (!KilometersHeadingElement) {
    return;
  }

  let KilometersBodyElement = KilometersHeadingElement.parentElement.children;

  if (!KilometersBodyElement) {
    return;
  }

  let KilometersHeadingElementIndex = KilometersHeadingElement.rowIndex;
  let maxLength = document.getElementsByClassName(getClassNameTimereg).length;
  let row = KilometersBodyElement[KilometersHeadingElementIndex + rowNumber];

  if (!row || !row.children || row.children.length < 12) {
    return;
  }

  checkedDays.forEach(element => {
    let disCount = map.get(element);
    trySetValue(row.children[disCount].lastChild, kilometers);
  });

  trySetValue(row.children[11].lastChild, comment);
}

function trySetValue(element, value) {
  if (!element || !element.value) {
    return;
  }

  element.value = value;
}

function getDeclareKilometersHeadingElement() {
  var tableElements = document.getElementsByClassName("PortletHeading2");
  var searchText = "Declaratie kilometers";

  for (var i = 0; i < tableElements.length; i++) {
    if (tableElements[i].textContent.includes(searchText)) {
      return tableElements[i];
    }
  }
}
</script>