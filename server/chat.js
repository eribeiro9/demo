Meteor.methods({
  sendMessage: function(message) {
    var sender = Meteor.userId();
    if (sender) {
      Messages.insert({
        sender: sender,
        message: message
      });
    }
  }
});
