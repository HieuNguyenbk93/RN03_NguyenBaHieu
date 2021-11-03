import React, {Component} from 'react';
import { connect } from 'react-redux';
import { selectAction } from '../redux/actions/gameAction';
import SelectItem from './SelectItem';

class SelectContent extends Component {
  renderSelectItem = () => {
    return this.props.listItem.map(selectItem => (
      <SelectItem
        key={selectItem.id}
        selectImage={selectItem.image}
        onPress={() => this.props.select(selectItem)}
        selected={selectItem.id === this.props.selected.id}
      />
    ));
  };

  render() {
    return this.renderSelectItem();
  }
}

const mapStateToProps = (state) => {
  return {
    listItem : state.gameReducer.listImage,
    selected : state.gameReducer.selected,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    select: (selected) => dispatch(selectAction(selected)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SelectContent)