import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Button from './Button';
import { getTasks } from '../actions/taskActions';


class Tasks extends Component {
  componentDidMount() {
    this.props.getTasks();
  }

  render() {
    const { tasks } = this.props;

    return (
      <React.Fragment>
        {tasks.map(task => (
          <Button
            key={task.id}
            id={task.id}
            className="units"
            text={task.name}
          />
        ))}
      </React.Fragment>
    );
  }
}

Tasks.propTypes = {
  tasks: PropTypes.func.isRequired,
  getTasks: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  tasks: state.list.tasks,
});

export default connect(mapStateToProps, { getTasks })(Tasks);
