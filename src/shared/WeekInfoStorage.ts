
export default {
  setWeekInfo: function (id, value) {
    let weekInfos = window.localStorage.getObject(weekInfoStorageName);
    if (!weekInfos) {
      weekInfos = {};
    }
    weekInfos[id] = value;

    window.localStorage.setObject(weekInfoStorageName, weekInfos);
  },

  getWeekInfo: function (id) {
    return window.localStorage.getObject(weekInfoStorageName) &&
      window.localStorage.getObject(weekInfoStorageName)[id]
      ? window.localStorage.getObject(weekInfoStorageName)[id]
      : {
        name: 'name',
        comment: 'comment',
        km: 2,
        checkedDays: [],
        id: 1
      };
  }
};

const weekInfoStorageName = 'weekInfo';

Storage.prototype.setObject = function (key, value) {
  this.setItem(key, JSON.stringify(value));
};

Storage.prototype.getObject = function (key) {
  var value = this.getItem(key);
  return value && JSON.parse(value);
};
