'use client'

import Image from 'next/image'
import NotFound from '@/app/not-found'
import ProjectData from '@/data/projects.json'
import { GitHubBlackSVG } from '@/icons'
import styles from './FullProject.module.css'

export default function FullProject({ params }: { params: { name: string } }) {
	const project = ProjectData.find(project => project.name.replace(/\s/g, '-').toLowerCase() === params.name)

	if (!project) return <NotFound title='Project not found.' />

	return (
		<main className='section'>
			<div className='container'>
				<div className={styles['project-details']}>
					<h1 className='title-1'>{project.name}</h1>

					<Image
						src={project.bigImg}
						width={1000}
						height={500}
						alt='Project Image'
						className={styles['project-details__cover']}
					/>

					<div className={styles['project-details__desc']}>
						<p>{project.description}</p>
					</div>

					<a href='#!' className='btn-outline'>
						<GitHubBlackSVG />
						GitHub repo
					</a>
				</div>
			</div>
		</main>
	)
}
