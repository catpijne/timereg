export default {
  setWeekInfo: function (id, value) {
    let weekInfos = getWeekInfos();

    weekInfos[id] = value;

    window.localStorage.setObject(weekInfoStorageName, weekInfos);
  },

  getWeekInfo: function (id) {
    return getWeekInfos()[id];
  },

  getUniqueId: function () {
    return getWeekInfos().length;
  },

  getWeekInfos: getWeekInfos
};

function getWeekInfos() {
  let weekInfo = window.localStorage.getObject(weekInfoStorageName) ?
    window.localStorage.getObject(weekInfoStorageName) :
    new Array();

  return weekInfo;
}

const weekInfoStorageName = 'weekInfo';

Storage.prototype.setObject = function (key, value) {
  this.setItem(key, JSON.stringify(value));
};

Storage.prototype.getObject = function (key) {
  var value = this.getItem(key);
  return value && JSON.parse(value);
};
