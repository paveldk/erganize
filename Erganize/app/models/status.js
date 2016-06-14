function Status(id, user, text, comments) {
    comments = comments || [];
    
    this.id = id;
    this.user = user;
    this.text = text;
    this.comments = comments || [];
}

module.exports = Status;