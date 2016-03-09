Template.register.events({
  'submit form': function(e) {
    e.preventDefault();

    var username = e.target.username.value;
    var password = e.target.password.value;
    var verify = e.target.verify.value;

    if (username && password && password == verify) {
      Accounts.createUser({
        username: username,
        password: password
      }, function(err) {
        if (!err) {
          Router.go('/');
        }
      });
    }
  }
});
