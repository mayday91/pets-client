import PetsIndex from './pets/PetsIndex'

const Home = (props) => {
	// const { msgAlert, user } = props
	console.log('props in home', props)

	const { msgAlert } = props
	return (
		<>
			
			<PetsIndex msgAlert={ msgAlert }/>
		</>
	)
}

export default Home
