import {connect} from 'react-redux'
import ProfileView from './component';

const mapStateToProps = store => ({
    routeParams : store.routeParams 
});

const mapDispatchToProps = {};

export default connect(mapStateToProps , mapDispatchToProps)(ProfileView);