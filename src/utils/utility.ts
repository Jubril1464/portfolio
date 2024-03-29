import { ReactElement } from "react";
import { RouteData } from "../model";

const routeData = (path:string, component:ReactElement<any, any>,name:string):RouteData => {
    return {
        routeProps: {
            path,
            element: component
        },
        name,
    }
}
export const projects = [
    {
        name: 'Task Manager',
        description: 'This is a web application provides user the ability to save their task for future use',
        tools: ['React', 'SCSS'],
        link:'https://jubriltaskapp.netlify.app',
        github:"https://github.com/Jubril1464/Todo-App"
    },
    {
        name: 'Guess Your Number',
        description: 'This is a game where user can guess a random within a given range, and if the correct number is guessed, point will be added to the player score',
        tools: ['Html', 'CSS', 'Javascript'],
        link:'https://guess-your-no.netlify.app/',
        github:"https://github.com/Jubril1464/Guess-Your-Number"

    }
]
export default {
    routeData
}