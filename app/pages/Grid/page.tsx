import { projectsData } from '../../data/projectData';
import ProjectSingle from '../../components/ProjectSingle';
export default function Grid() {
    return(
        <div className='container mx-auto'>
            <section className='py-5 sm:py-10 mt-5 sm:mt-10'>
                <div
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-6 sm:gap-5"
                >
                    {projectsData().map((project,index)=>(
                        // <ProjectSingle key={index}{...project}/>
                        <img src={project.img} alt="" />
                    ))}
                </div>

            </section>
        </div>
    )
}