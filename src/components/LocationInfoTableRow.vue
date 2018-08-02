<template>
    <tr class="UI_locationInfo">
      <td class="locationName"><input type="text" v-model="nameValue"></td>
      <td class="KM"><input type="text" v-model="kmValue"></td>
      <td class="Comment"><input type="text" v-model="commentValue"></td>
      <td class="Maandag"><input type="checkbox" value="mo" v-model="checkedDaysValue"></td>
      <td class="Dinsdag"><input type="checkbox" value="tue" v-model="checkedDaysValue"></td>
      <td class="Woensdag"><input type="checkbox" value="wed" v-model="checkedDaysValue"></td>
      <td class="Donderdag"><input type="checkbox" value="thu" v-model="checkedDaysValue"></td>
      <td class="Vrijdag"><input type="checkbox" value="fri" v-model="checkedDaysValue"></td>
      <td>    
        <button v-on:click="save">Save</button>
        <button v-on:click="set">Set</button>
        <button v-on:click="test">Test</button>
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
  let KilometersHeadingElementIndex = KilometersHeadingElement.rowIndex;
  let KilometersBodyElement = KilometersHeadingElement.parentElement.children;
  let maxLength = document.getElementsByClassName(getClassNameTimereg).length;

  checkedDays.forEach(element => {
    let disCount = map.get(element);
    KilometersBodyElement[KilometersHeadingElementIndex + rowNumber].children[
      disCount
    ].lastChild.value = kilometers;
  });

  KilometersBodyElement[
    KilometersHeadingElementIndex + rowNumber
  ].children[11].lastChild.value = comment;
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