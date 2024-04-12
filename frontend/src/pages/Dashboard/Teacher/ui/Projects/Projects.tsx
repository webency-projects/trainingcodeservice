import {cNames} from "@shared/lib/cNames/cNames.ts";

import cls from './Projects.module.scss'

interface ProjectsProps {
    classname?: string;
}

const Projects = (props: ProjectsProps) => {
    const {classname = ""} = props;
    return (
        <div className={cNames(cls.Projects, {}, [classname])}>
            Projects
        </div>
    )
}

export default Projects;