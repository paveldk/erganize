var Status = require("./status");

function Event(id, title, date, isPrivate, organizers, participants, statuses, image, photos, description) {
    var that = this;
    
    photos = photos || [];
    statuses = statuses || [];
    organizers = organizers || [];
    participants = participants || [];

    this.id = id;
    this.title = title;
    this.date = date;
    this.isPrivate = isPrivate;
    this.organizersList = organizers;
    this.participants = participants;
    
    this.image = image;
    
    that.photos = [];
    that.statuses = [];
    
    photos.forEach(function(item) {
        that.photos.push({
            image: item
        })
    });
    
    statuses.forEach(function(item) {
        that.statuses.push(new Status(item.Id, this.Owner, item.Text, item.Comments));
    });
    
    this.description = description;
}

module.exports = Event;