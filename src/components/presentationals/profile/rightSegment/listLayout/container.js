import {
    connect
} from 'react-redux';
import ListLayout from './component';
import {
    fetchRepoList,
} from '../../../../../actions/fetchRepoList';

const mapStateToProps = state => ({
    repoList : state.repoList
});

const mapDispatchToProps = {
    fetchRepoList
};

export default connect(mapStateToProps, mapDispatchToProps)(ListLayout);