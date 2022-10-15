import React from 'react'
import Card from 'react-bootstrap/Card'
import { ImPointRight } from 'react-icons/im'

const AboutCard = () => {
	return (
		<Card className='quote-card-view'>
			<Card.Body>
				<blockquote className='blockquote mb-0'>
					<p style={{ textAlign: 'justify' }}>
						Привет-привет! Меня зовут <span className='purple'> Баяман </span>
						мне лет <span className='purple'> 18 </span>
						я из <span className='purple'> Кыргызстана, г.Ош</span>
						<br />и я Junior React Разработчик
						<br />
						<br />
						Помимо кодирования, некоторые другие занятия, которые я люблю делать!
					</p>
					<ul>
						<li className='about-activity'>
							<ImPointRight /> Играть в игры
						</li>
						<li className='about-activity'>
							<ImPointRight /> Читать книги
						</li>
						<li className='about-activity'>
							<ImPointRight /> Путешествие
						</li>
					</ul>

					<p style={{ color: 'rgb(155 126 172)' }}>
						"Стремитесь создавать вещи, которые имеют значение!"{' '}
					</p>
					<footer className='blockquote-footer'>J.Baiaman</footer>
				</blockquote>
			</Card.Body>
		</Card>
	)
}

export default AboutCard
