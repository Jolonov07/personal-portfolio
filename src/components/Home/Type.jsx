import React from 'react'
import Typewriter from 'typewriter-effect'

const Type = () => {
	return (
		<Typewriter
			options={{
				strings: [
					' Я ',
					' Junior ',
					' Frontend ',
					' Разработчик ',
				],
				autoStart: true,
				loop: true,
				deleteSpeed: 50,
			}}
		/>
	)
}

export default Type
