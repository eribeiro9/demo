Template.login.events({
  'submit form': function(e) {
    e.preventDefault();

    var username = e.target.username.value;
    var password = e.target.password.value;

    Meteor.loginWithPassword(username, password, function(err) {
      if (!err) {
        Router.go('/');
      }
    });
  }
});
