$(function() {
  Parse.$ = jQuery;
Parse.initialize("Rh8he0iymi5YXEBsTAOot9V69AzvFiTqMwOWqetA", "v7cynDsiL5pzFze3wAgnMJhNGICDi5Acbx49B0Gq");

if (Parse.User.current()) {
  new ContactView();
  new MapView();
  new BuddyView();
} else {
  new LogInView();
}