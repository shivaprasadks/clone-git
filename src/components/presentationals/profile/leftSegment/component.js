import React , {Component} from 'react';
import  {
    ProfileImage,
    BioDetails,
    PersonalDetails,} from './profileImageDetails';
import { ContentWrapper } from './styles'

export default class LeftSideView extends Component {
    componentDidMount = () =>{
        // this.props.fetchProfileDetials();
    }
    render() {
        const { profileData } = this.props;
        return(
        <ContentWrapper>
            <ProfileImage 
                imgURL={profileData.avatar_url}
                loginName={profileData.login}
                userName={profileData.name}/>
            <BioDetails 
                workExperience={profileData.bio}/>
            <PersonalDetails 
                company={profileData.company}
                location={profileData.location}
                website={profileData.email}/>
        </ContentWrapper>)
    }
}