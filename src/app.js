/** @jsx React.DOM */
define(['react', 'underscore', 'socketio', 'note'], function(React, _, io, Note) {
  return React.createClass({
    getInitialState: function() {
      return {
        data: []
      };
    },
    componentWillMount: function() {
      this.listen();
    },
    markNoteAsRead: function(note) {
      this.socket.emit('note_read', note);
    },
    addNote: function(note) {
      if (!_.some(this.state.data, function(n) { return n.id == note.id })) {
        this.state.data.push(note);
      } else {
        //update array
        this.state.data = _.map(this.state.data, function(n) {
            return n.id == note.id ? note : n;
        });
      }
      this.setState({data: this.state.data});
    },
    listen: function() {
      var self = this;
      this.socket = io.connect('http://localhost:3000');
      this.socket.on('notes', function (note) {
        self.addNote(note);
      });
    },
    render: function() {
      var self = this;
      var notes = this.state.data.map(function (note) {
        return <Note data={note} markNoteAsRead={self.markNoteAsRead} />;
      });
      return (
        <div className="notes">
          {notes}
        </div>
      );
    }
  });
});