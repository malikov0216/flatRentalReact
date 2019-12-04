import React, { Component } from "react";
import { connect } from 'react-redux';
import { fetchFlatList } from "../../store/actions/actions";
class Flats extends Component {
  componentDidMount () {
    this.props.onFetchFlatList()
  }

  render () {
    return (
      <div>
        i
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    flats: state.flats.flats
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onFetchFlatList: () => dispatch(fetchFlatList())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Flats)