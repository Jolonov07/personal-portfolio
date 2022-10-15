import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { SiRedux, SiTypescript, SiFirebase } from 'react-icons/si'
import { BsGithub } from 'react-icons/bs'
import {
	DiJavascript1,
	DiReact,
	DiNodejs,
	DiHtml5,
	DiCss3,
	DiGit,
} from 'react-icons/di'

const Techstack = () => {
	return (
		<Row style={{ justifyContent: 'center', paddingBottom: '50px' }}>
			<Col xs={4} md={2} className='tech-icons'>
				<DiHtml5 />
			</Col>
			<Col xs={4} md={2} className='tech-icons'>
				<DiCss3 />
			</Col>
			<Col xs={4} md={2} className='tech-icons'>
				<DiJavascript1 />
			</Col>
			<Col xs={4} md={2} className='tech-icons'>
				<SiTypescript />
			</Col>
			<Col xs={4} md={2} className='tech-icons'>
				<DiNodejs />
			</Col>
			<Col xs={4} md={2} className='tech-icons'>
				<DiReact />
			</Col>
			<Col xs={4} md={2} className='tech-icons'>
				<SiRedux />
			</Col>
			<Col xs={4} md={2} className='tech-icons'>
				<DiGit />
			</Col>
			<Col xs={4} md={2} className='tech-icons'>
				<BsGithub />
			</Col>
			<Col xs={4} md={2} className='tech-icons'>
				<SiFirebase />
			</Col>
		</Row>
	)
}

export default Techstack
