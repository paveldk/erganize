function Event(id, title, date, isPrivate, organizers, participants, statuses, image, photos) {
    this.id = id;
    this.title = title;
    this.date = date;
    this.isPrivate = isPrivate;
    this.organizersList = organizers;
    this.participants = participants;
    this.statuses = statuses;
    this.image = image;
    this.photos = photos;
}

module.exports = Event;