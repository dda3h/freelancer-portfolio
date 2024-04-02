import Link from 'next/link'
import Image from 'next/image'
import ProjectData from '@/data/projects.json'
import styles from './ProjectList.module.css'

export const ProjectList = () => (
	<main className='section'>
		<div className='container'>
			<h2 className='title-1'>Projects</h2>

			<ul className={styles.projects}>
				{ProjectData.map(project => (
					<li className={styles.project} key={project.name}>
						<Link href={`/project/${project.name.replace(/\s/g, '-').toLowerCase()}`}>
							<Image
								src={project.img}
								width={1000}
								height={500}
								alt={project.name}
								className={styles['project-img']}
							/>
							<h3 className={styles.progect__title}>{project.name}</h3>
						</Link>
					</li>
				))}
			</ul>
		</div>
	</main>
)
