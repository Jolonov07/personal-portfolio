import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import myImg from '../../Assets/avatar.svg'
import Tilt from 'react-parallax-tilt'
import { AiFillGithub, AiOutlineTwitter, AiFillInstagram } from 'react-icons/ai'
import { FaLinkedinIn } from 'react-icons/fa'

const Home2 = () => {
	return (
		<Container fluid className='home-about-section' id='about'>
			<Container>
				<Row>
					<Col md={8} className='home-about-description'>
						<h1 style={{ fontSize: '2.6em' }}>
							Позвольте<span className='purple'> мне </span> представиться
						</h1>
						<p className='home-about-body'>
							Я влюбился в программирование и хоть чему-то научился, я думаю…  🤷‍♂️
							<br />
							<br />
							<br />
							В сферу моих интересов входят создание новых &nbsp;
							<i>
								<b className='purple'> веб-технологий и продуктов, </b> а также области, связанные с{' '}
								<b className='purple'>
									глубоким обучением и обработкой естественного языка.
								</b>
							</i>
							<br />
							<br />
							Когда это возможно, я также применяю свою страсть к разработке продуктов с помощью
							<b className='purple'>  Node.js</b> и 
							<i>
								<b className='purple'>
									{' '}
									современной библиотеки Javascript и фреймворков,
								</b>
							</i>
							&nbsp; таких как 
							<i>
								<b className='purple'> React.js и Redux.js</b>
							</i>
						</p>
					</Col>
					<Col md={4} className='myAvtar'>
						<Tilt>
							<img src={myImg} className='img-fluid' alt='avatar' />
						</Tilt>	
					</Col>
				</Row>
				<Row>
					<Col md={12} className='home-about-social'>
						<p>
							связаться со <span className='purple'> мной</span>
						</p>
						<ul className='home-about-social-links'>
							<li className='social-icons'>
								<a
									href='https://github.com/Jolonov07/'
									target='_blank'
									rel='noreferrer'
									className='icon-colour  home-social-icons'
								>
									<AiFillGithub />
								</a>
							</li>
							<li className='social-icons'>
								<a
									href='https://twitter.com/'
									target='_blank'
									rel='noreferrer'
									className='icon-colour  home-social-icons'
								>
									<AiOutlineTwitter />
								</a>
							</li>
							<li className='social-icons'>
								<a
									href='https://www.linkedin.com/'
									target='_blank'
									rel='noreferrer'
									className='icon-colour  home-social-icons'
								>
									<FaLinkedinIn />
								</a>
							</li>
							<li className='social-icons'>
								<a
									href='https://www.instagram.com/zholonovvv/'
									target='_blank'
									rel='noreferrer'
									className='icon-colour home-social-icons'
								>
									<AiFillInstagram />
								</a>
							</li>
						</ul>
					</Col>
				</Row>
			</Container>
		</Container>
	)
}
export default Home2
