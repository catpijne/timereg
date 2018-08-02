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
        <button v-on:click="test">Test</button>
      </td>
    </tr>
</template>

<script>
import WeekInfoStorage from "../shared/WeekInfoStorage.ts";
const getClassNameTimereg = "PortletText2";
const map = new Map();
map.set("mo", 3);
map.set("tue", 4);
map.set("wed", 5);
map.set("thu", 6);
map.set("fri", 7);

function setKMValueInSheet(kilometers, comment, checkedDays, rowNumber) {
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
    TrySetValue(row.children[disCount].lastChild, kilometers);
  });

  TrySetValue(row.children[11].lastChild, comment);
}

function TrySetValue(element, value) {
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
    test: function() {
      console.table(getDeclareKilometersHeadingElement());
    },
    set: function() {
      let weekInfo = {
        name: this.name,
        comment: this.comment,
        km: this.km,
        checkedDays: this.checkedDays,
        id: this.id
      };

      setKMValueInSheet(
        weekInfo.km,
        weekInfo.comment,
        weekInfo.checkedDays,
        this.id + 1
      );
    }
  }
};
</script>