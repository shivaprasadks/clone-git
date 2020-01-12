import React from 'react';
import { 
    ImageWrapper,
    NameEmailWrapper,
    BioWrapper,
    DetailsWrapper, } from './styles';
import {
    PeoplSVG,
    LocationSVG,
    LinkSVG
} from './svgImage';

export const ProfileImage = (props) => (
    <div>
         <ImageWrapper> 
            <img src={props.imgURL || ''}/>
        </ImageWrapper>
        <NameEmailWrapper>
            <div className='userName'>
                {props.userName}
            </div>
            <div className='emailID'>
                {props.loginName}
            </div>
        </NameEmailWrapper>
    </div>
   
);


export const BioDetails = (props) => (
    <BioWrapper>
        <div>
            {props.workExperience}
        </div>
        <button className='editBio'> Edit Bio </button>
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
            <li>
                <LinkSVG />
                <span className='textPart'>
                    <a href='#'>
                    {props.webiste}
                    </a>
                </span>
            </li>
           
        </ul>
    </DetailsWrapper>
);

