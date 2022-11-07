import hyphenateWords from './hyphenateWords'
import { projects } from '../data/projects'

function findProject(name) {
    const title = name.replace('/projects/', '')
    const filteredProjects = projects.find(project => {
        const currentName = hyphenateWords(project.title)
        return currentName === title
    })
    // const result = filteredProjects[0]
    return filteredProjects
}

export default findProject