import { connect} from 'react-redux';
import TabLayout from './component';

const mapStateToProps = state => ({
    profileData : state.profileData
})

export default connect(mapStateToProps, {})(TabLayout);