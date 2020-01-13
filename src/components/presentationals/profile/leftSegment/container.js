import {connect} from 'react-redux';
import LeftSideView from './component';
import {fetchProfileDetials} from 'app/actions/fetchProfileDetails'

const mapStateToProps = state => ({
    profileData : state.profileData
})


const mapDispatchToProps = {
    fetchProfileDetials
};


export default connect(mapStateToProps, mapDispatchToProps)(LeftSideView);