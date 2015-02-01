'use strict';
var app = {

    findByName: function() {
      var self = this;
      this.store.findByName($('.search-key').val(), function(employees) {
        $('.employee-list').html(self.employeeLiTpl(employees));
      });
    },

    // Instantiate the specific store in the initialize() function of the app object: MemoryStore, LocalStorageStore, or WebSqlStore.
    initialize: function() {
      var self = this;
      // compile the templates
      this.homeTpl = Handlebars.compile($("#home-tpl").html());
      this.employeeLiTpl = Handlebars.compile($("#employee-li-tpl").html());
      this.store = new MemoryStore(function() {
        self.showAlert('Store Initialized', 'Info');
        self.renderHomeView();
      });
    },

    renderHomeView: function() {
      $('body').html(this.homeTpl());
      $('.search-key').on('keyup', $.proxy(this.findByName, this));
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
