//api endpoint to fetch profile details
export const PROFILE_DATA_API = 'https://api.github.com/users/supreetsingh247';

//api endpoint to fetch repository details
export const REPO_DETAILS_API = 'https://api.github.com/users/supreetsingh247/repos';

//filter items
export const REPO_TYPE = [
  {
    lable : 'All',
    key : 'all'
  },
  {
    lable : 'Public',
    key : 'public'
  },
  {
    lable : 'Private',
    key : 'private'
  },
  {
    lable : 'Forks',
    key : 'fork'
  },
  {
    lable : 'Archived',
    key : 'archived'
  },
];
export const LANGUAGE_TYPE = [
  {
    lable : 'All',
    key : 'all'
  },
  {
    lable : 'Javascript',
    key : 'JavaScript'
  },
  {
    lable : 'Java',
    key : 'Java'
  },
  {
    lable : 'HTML',
    key : 'HTML'
  },
  {
    lable : 'CSS',
    key : 'CSS'
  },
];

//tab items
export const TAB_ITEMS = ['Overview', 'Repositories', 'Projects', 'Packages', 'Stars', 'Followers', 'Following'];


//screen size
export const SCREEN_SIZE = {
    mobileS: '320px',
    mobileM: '375px',
    mobileL: '425px',
    tablet: '768px',
    laptop: '1024px',
    laptopL: '1440px',
    desktop: '2560px'
  }