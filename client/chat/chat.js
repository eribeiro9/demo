Template.chat.onCreated(function() {
  this.subscribe('allUsers');
  this.subscribe('allMessages');
});

Template.chat.events({
  'submit form': function(e) {
    e.preventDefault();

    var message = e.target.message.value;
    Meteor.call('sendMessage', message, function(err, res) {
      if (!err) {
        e.target.message.value = '';
      }
    });
  }
});

Template.chat.helpers({
  messages: function() {
    return Messages.find().fetch();
  },
  usernameOf: function(id) {
    var user = Meteor.users.findOne({_id: id});
    return user.username;
  }
});
