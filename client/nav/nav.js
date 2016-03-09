Template.nav.events({
  'click #logout-button': function(e) {
    Meteor.logout();
  }
});

Template.nav.helpers({
  loggedIn: function() {
    return Meteor.user();
  }
});
