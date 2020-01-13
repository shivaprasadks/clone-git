import React from 'react';
import { 
    ImageWrapper,
    NameEmailWrapper,
    BioWrapper,
    DetailsWrapper,
    ImageBioWrapper, } from './styles';
import {
    PeoplSVG,
    LocationSVG,
    LinkSVG
} from 'app/constants/svg';

export const ProfileImage = (props) => (
    <ImageBioWrapper>
         <ImageWrapper> 
            <img src={props.imgURL || 'https://avatars1.githubusercontent.com/u/7427552?v=4'}/>
        </ImageWrapper>
        <NameEmailWrapper>
            <div className='userName'>
                {props.userName}
            </div>
            <div className='emailID'>
                {props.loginName}
            </div>
        </NameEmailWrapper>
    </ImageBioWrapper>
   
);


export const BioDetails = (props) => (
    <BioWrapper>
        <div>
            {props.workExperience}
        </div>
        <button className='editBio btn'> Edit Bio </button>
    </BioWrapper>
);

export const PersonalDetails = (props) => (
    <DetailsWrapper>
        <ul className=''>
            <li>
                <PeoplSVG />
                <span className='textPart'>
                    {props.company}
                </span>
            </li>
            <li>
                <LocationSVG />
                <span className='textPart'>
                    {props.location}
                </span>
            </li>
            {props.webiste ?
            <li>
                <LinkSVG />
                <span className='textPart'>
                    <a href='#'>
                    {props.webiste}
                    </a>
                </span>
            </li>: null}
           
        </ul>
    </DetailsWrapper>
);

