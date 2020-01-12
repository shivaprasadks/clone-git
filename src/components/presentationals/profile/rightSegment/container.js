import { connect } from 'react-redux';
import RightSegment from './component';

const mapStateToProps = state => ({
    routerParams : state.routerParams
});

const mapDispatchToProps = {};

export default connect(mapStateToProps,mapDispatchToProps)(RightSegment);