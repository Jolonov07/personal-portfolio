import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import ProjectCard from './ProjectCards'
import Particle from '../Particle'
import sticky from '../../Assets/Projects/sticky.png'
import calculator from '../../Assets/Projects/calculator.png'
import todo from '../../Assets/Projects/todo.png'
import movie from '../../Assets/Projects/movie.png'
import sneakers from '../../Assets/Projects/sneakers.png'
import note from '../../Assets/Projects/thenote.png'

const Projects = () => {
	return (
		<Container fluid className='project-section'>
			<Particle />
			<Container>
				<h1 className='project-heading'>
					Мои <strong className='purple'>работы </strong>
				</h1>
				<p style={{ color: 'white' }}>
					Вот несколько проектов, над которыми я работал в последнее время.
				</p>
				<Row style={{ justifyContent: 'center', paddingBottom: '10px' }}>
					<Col md={4} className='project-card'>
						<ProjectCard
							imgPath={movie}
							isBlog={false}
							title='MOVIE APP'
							description='Movie App'
							ghLink='https://github.com/Jolonov07/react-movie-app'
							demoLink='https://react-movie-app-jolonov07.vercel.app'
						/>
					</Col>

					<Col md={4} className='project-card'>
						<ProjectCard
							imgPath={sneakers}
							isBlog={false}
							title='SNEAKER SHOP'
							description='Sneaker Shop'
							ghLink='https://github.com/Jolonov07/React-Sneaker-Shop'
							demoLink='https://react-sneaker-shop-wine.vercel.app/'
						/>
					</Col>

					<Col md={4} className='project-card'>
						<ProjectCard
							imgPath={note}
							isBlog={false}
							title='THE NOTE'
							description='The Note'
							ghLink='https://github.com/Jolonov07/react-the-note'
							demoLink='https://react-the-note.vercel.app/'
						/>
					</Col>

					<Col md={4} className='project-card'>
						<ProjectCard
							imgPath={todo}
							isBlog={false}
							title='TODO LIST'
							description="TODO LIST"
							ghLink='https://github.com/Jolonov07/React-TodoList'
							demoLink='https://react-todo-firebase-fawn.vercel.app/'
						/>
					</Col>

					<Col md={4} className='project-card'>
						<ProjectCard
							imgPath={sticky}
							isBlog={false}
							title='STICKY NOTES'
							description="Sticky Notes"
							ghLink='https://github.com/Jolonov07/Sticky-Notes-Using-JS'
							demoLink="https://sticky-notes-using-js.vercel.app/"
						/>
					</Col>

					<Col md={4} className='project-card'>
						<ProjectCard
							imgPath={calculator}
							isBlog={false}
							title='CALCULATOR'
							description="Calculator"
							ghLink='https://github.com/Jolonov07/Calculator-js'
							demoLink="https://calculator-js-kappa.vercel.app/"
						/>
					</Col>
				</Row>
			</Container>
		</Container>
	)
}

export default Projects
