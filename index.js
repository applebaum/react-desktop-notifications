/**
 * Created by lizhen on 5/28/2016.
 */
var React = require('react');

var Notifier = React.createClass({
    statics: {
      start:function (title,context,url,icon) {
        if (!Notification) {
          alert("你的浏览器不支持桌面通知，请使用chrome浏览器。");
          return;
        }

        if (Notification.permission !== "granted")
          Notification.requestPermission();
        else {
          var notification = new Notification(title, {
            icon: icon||"http://ob9oayzh3.bkt.clouddn.com/images.png",
            body: context,
          });
          notification.onclick = function () {
            window.open(url);
          };
        }
      }
    },

    shouldComponentUpdate: function () {
        return false;
    },

    getScript: function () {
        var script = 'document.addEventListener("DOMContentLoaded", function () { if (Notification.permission !== "granted") Notification.requestPermission(); });';
        return script;
    },

    render: function () {
        return React.createElement("script", {
            type: "text/javascript",
            dangerouslySetInnerHTML: {
                __html: this.getScript()
            }
        });
    }
});

module.exports = Notifier;
