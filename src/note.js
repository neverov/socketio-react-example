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
        <div className={classes} onClick={this.onClick}>
          <div>{this.props.data.title}</div>
          <div>{this.props.data.content}</div>
          <div>{this.props.data.timestamp}</div>
          <div>{this.props.data.shop}</div>
        </div>
      );
    }
  });
});