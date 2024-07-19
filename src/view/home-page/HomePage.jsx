import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getAllProjects } from '../../redux/actions';
import Cards from '../../components/cards/Cards';

const HomePage = () => {
	const dispatch = useDispatch()
	const { allProjects } = useSelector((state) => state.projects)
	const { loggedUser } = useSelector((state) => state.auth)
	const [renderingCards, setRenderingCards] = useState(5)
	const [displayPagination, setDisplayPagination] = useState(true)

	const handlePagination = () => {
		if (allProjects.length >= renderingCards) {
			setRenderingCards((prevCount) => prevCount + 5);
		} else {
			setDisplayPagination(false);
		}
	};

	useEffect(() => {
		dispatch(getAllProjects(renderingCards));
	}, [dispatch, renderingCards]);

	return (
		<div>
			{loggedUser && <Link to='/create'><button>New Project</button></Link>}
			<Cards projects={allProjects} />
			{displayPagination ? (
				<div>
					<button onClick={handlePagination}>
						Ver más
					</button>
				</div>
			) : (
				<p>Estos son todos los proyectos</p>
			)}
		</div>
	);
};

export default HomePage;