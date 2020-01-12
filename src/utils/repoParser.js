import moment from 'moment';
import {
    RepoList
} from './resposeData';

/**
 * Function to get the day difference for the give repo last updated 
 * @param {date} updatedDate lastRepo updated date
 */
const getDateDiff = updatedDate => {
    const currDate = moment();
    const lastDate = moment(updatedDate);
    let dayDiff = currDate.diff(lastDate , 'days');
    if(dayDiff> 30) return `Updated on ${moment(updatedDate).format('DD MMM YYYY')}`;
    return `Updated on ${dayDiff} days ago`;
}   

/**
 * function to parse the response and transform for render
 * @param {object} repoList   list of repo received from api
 */
export const repoListParse = () => {
    const parsedData = [];
    RepoList.map((item,index)=>(
        parsedData.push({
            projectName : item.name,
            description : item.description ,
            language : item.language,
            license : item.license,
            forks :  item.forks_count,
            updated_at : getDateDiff(item.updated_at),
        })
    ))
    return parsedData;
}