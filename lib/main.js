const tabBrowser = require("tab-browser");
const w = require("widget");
const tabs = require("tabs");

var numberOfTabs = 0;
var widget = w.Widget({
      label: '#Tabs',
      content: '#'
    });

w.add(widget);

tracker = tabBrowser.TabTracker({
  onTrack: function() {
    widget.content = '#' + ++numberOfTabs;
    // workaround for refreshing widget
    w.remove(widget);
    w.add(widget);
  },
  onUntrack: function() {
    widget.content = '#' + --numberOfTabs;
    w.remove(widget);
    w.add(widget);
  }
});

