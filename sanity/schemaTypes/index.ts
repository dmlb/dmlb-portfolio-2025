import author from './author'
import blockContent from './blockContent'
import category from './category'
import education from './education'
import endorsement from './endorsement'
import filmCredits from './filmCredits'
import jobs from './jobs'
import otherProject from './otherProject'
import post from './post'
import professionalDevelopment from './professionalDevelopment'
import techProject from './techProject'
import techStack from './techStack'
import techWork from './techWork'

// appearance order for admin
export const schemaTypes = [
    post, 
    otherProject, 
    techProject, 
    techWork, 
    techStack, 
    category, 
    professionalDevelopment, 
    endorsement, 
    filmCredits, 
    jobs, 
    education, 
    author, 
    blockContent
]
