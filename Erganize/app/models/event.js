function Event(id, name, date, isPrivate, organizersList, usersList, statusList) {
    this.id = id;
    this.name = name;
    this.date = date;
    this.isPrivate = isPrivate;
    this.organizersList = organizersList;
    this.usersList = usersList;
    this.statusList = statusList;
}

module.exports = Event;