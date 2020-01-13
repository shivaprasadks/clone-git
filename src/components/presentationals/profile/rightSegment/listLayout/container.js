import {
    connect
} from 'react-redux';
import ListLayout from './component';
import {
    fetchRepoList,
} from 'app/actions/fetchRepoList';

const mapStateToProps = state => ({
    repoList : state.repoList
});

const mapDispatchToProps = {
    fetchRepoList
};

export default connect(mapStateToProps, mapDispatchToProps)(ListLayout);