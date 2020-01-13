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
export const repoListParse = (rawData) => {
    const parsedData = [];
    rawData.map((item,index)=>(
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

const getFilterIndex = (filterData) =>{

    // if(filterData.repoType )
}

/**
 * Function to sort the data on filter applied
 * @param {*} rawData  raw data with all the value
 * @param {*} filterValue filter data set by user
 * @param {*} searchText search text in the input 
 */
export const filterData = (rawData, filterValue, searchText) => {
    // rawData  = RepoList
   const processedData = [];
   rawData.forEach((item) => {
        searchText =  searchText.toLowerCase();
       let dataString = item.name.toLowerCase();
       if(dataString.startsWith(searchText)) processedData.push(item);
   });

    return processedData;
}
