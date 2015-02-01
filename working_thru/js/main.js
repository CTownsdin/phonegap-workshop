'use strict';
var app = {

    // Instantiate the specific store in the initialize() function of the app object: MemoryStore, LocalStorageStore, or WebSqlStore.
    initialize: function() {
      var self = this;
      // compile the templates
      this.homeTpl = Handlebars.compile($("#home-tpl").html());
      this.employeeLiTpl = Handlebars.compile($("#employee-li-tpl").html());
      this.store = new MemoryStore(function() {
        $('body').html(new HomeView(self.store).render().el);
      });
    },

    // show native notif's
    showAlert: function(message, title) {
      if (navigator.notification) {
        navigator.notification.alert(message, null, title, 'OK');
      } else {
        alert(title ? (title + ": " + message) : message);
      }
    }

};

app.initialize();
