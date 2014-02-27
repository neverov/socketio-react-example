/** @jsx React.DOM */
define(['react'], function(React) {
  return React.createClass({
    onClick: function() {
      if (!this.props.data.read) {
        console.log('marking as read: %O', this.props.data);
        this.props.markNoteAsRead(this.props.data);
      }
    },
    render: function() {
      var classes = React.addons.classSet({
          'note': true,
          'read': this.props.data.read,
          'unread': !this.props.data.read
        });
      return (
        React.DOM.div( {className:classes, onClick:this.onClick}, 
          React.DOM.div(null, this.props.data.title),
          React.DOM.div(null, this.props.data.content),
          React.DOM.div(null, this.props.data.timestamp),
          React.DOM.div(null, this.props.data.shop)
        )
      );
    }
  });
});