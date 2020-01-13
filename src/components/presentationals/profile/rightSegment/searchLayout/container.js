import { connect } from 'react-redux';
import SearchLayout from './component';
import { updateFilter } from 'app/actions/updateFilter';
import { searchItem } from 'app/actions/searchItem';

const mapStateToProps = state => ({

});

const mapDispatchToProps = {
    updateFilter,
    searchItem
};

export default connect(mapStateToProps,mapDispatchToProps)(SearchLayout);