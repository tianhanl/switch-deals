import { connect } from 'react-redux';
import { setSearchTerm } from '../actions/actions';

import SearchBar from '../components/SearchBar';

const mapDispatchToProps = dispatch => {
  return {
    onChange: term => {
      dispatch(setSearchTerm(term));
    }
  };
};

const mapStateToProps = state => {
  let term = state.searchTerm;
  return { value: term };
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
