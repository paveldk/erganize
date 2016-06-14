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
    this.statuses = statuses;
    this.image = image;
    
    photos.forEach(function(item) {
        that.photos = {
            image: item
        };
    });
    
    this.description = description;
    

}

module.exports = Event;