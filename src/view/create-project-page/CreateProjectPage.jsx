	import styled from 'styled-components'
	import { useState, useEffect } from 'react'
	import { useNavigate } from 'react-router-dom'
	import { useSelector, useDispatch } from 'react-redux'
	import { fetchTechnologies, createProject, uploadImage } from '../../redux/actions'

	const CreateProjectPage = () => {
		const dispatch = useDispatch()
		const navigate = useNavigate();
		const { technologies } = useSelector((state) => state.technologies)
		const { imageUrl } = useSelector((state) => state.projects)
		const { token } = useSelector((state) => state.auth)

		useEffect(() => {
			dispatch(fetchTechnologies())
		}, [dispatch])

		const [formData, setFormData] = useState({
			title: '',
			description: '',
			image: '',
			tags: [],
			technologies: [],
		})

		const [selectedTechs, setSelectedTechs] = useState([])
		const [newTag, setNewTag] = useState('')

		const handleChange = (event) => {
			const { name, value } = event.target
			setFormData({
				...formData,
				[name]: value,
			})
		}

		const handleTechChange = (event) => {
			const { value } = event.target
			if (!selectedTechs.includes(value)) {
				setSelectedTechs([...selectedTechs, value])
			}
		}

		const handleRemoveTech = (tech) => {
			setSelectedTechs(selectedTechs.filter((value) => value !== tech))
		}

		const handleTagChange = (event) => {
			setNewTag(event.target.value)
		}

		const handleUploadImagen = async (e) => {
			const imageUpload = e.target.files[0]
			dispatch(uploadImage(imageUpload))
		}

		const handleAddTag = () => {
			if (
				formData.tags.length < 5 &&
				newTag.trim() !== '' &&
				!formData.tags.includes(newTag.trim())
			) {
				setFormData({
					...formData,
					tags: [...formData.tags, newTag.trim()],
				})
				setNewTag('')
			}
		}

		const handleRemoveTag = (tag) => {
			setFormData({
				...formData,
				tags: formData.tags.filter((t) => t !== tag),
			})
		}

		const handleSubmit = () => {
			dispatch(createProject({
				...formData,
				technologies: selectedTechs,
				image: imageUrl,
			}, token))
			navigate('/home')
		}

		return (
			<FormStyled onSubmit={handleSubmit}>
				<div className="form-header">
					<span>Añadir proyecto</span>
				</div>

				<div className="form-body">
					<div className="form-field">
						<label>Nombre del Proyecto</label>
						<input
							type="text"
							name="title"
							value={formData.title}
							onChange={handleChange}
							required
						/>
					</div>
					<div className="form-field mt-2">
						<label>Descripción</label>
						<textarea
							name="description"
							value={formData.description}
							onChange={handleChange}
						/>
					</div>
					<div className="form-field mt-2">
						<label>Contenido multimedia</label>
						<input
							type="file"
							name="image"
							onChange={handleUploadImagen}
							placeholder="subir imagen"
						/>
					</div>

					<div className="form-field mt-2">
						<label>Tecnologías</label>
						<select name="technologies" onChange={handleTechChange}>
							<option value="default">Seleccione una tecnología</option>
							{technologies.map((tech) => (
								<option key={tech.id} value={tech.name}>
									{tech.name}
								</option>
							))}
						</select>

						{selectedTechs.map((tech) => (
							<div key={tech} className="techList my-1">
								<span className="itemTech">{tech}</span>
								<button
									className="btn btn-outline-danger remove mx-2"
									type="button"
									onClick={() => handleRemoveTech(tech)}
								>
									X
								</button>
							</div>
						))}
					</div>

					<div className="form-field mt-2">
						<label>Etiquetas</label>
						<div className="tag-input">
							<input
								type="text"
								value={newTag}
								onChange={handleTagChange}
								placeholder="Agregar etiqueta"
							/>
							<button type="button" onClick={handleAddTag}>
								Agregar
							</button>
						</div>
						<div className="tag-list">
							{formData.tags.map((tag) => (
								<div key={tag} className="tag-item">
									<span>{tag}</span>
									<button type="button" onClick={() => handleRemoveTag(tag)}>
										X
									</button>
								</div>
							))}
						</div>
					</div>
				</div>

				<div className="form-footer">
					<button className="submit" type="submit">
						Guardar
					</button>
				</div>
			</FormStyled>
		)
	}

	export default CreateProjectPage

	const FormStyled = styled.form`
		max-width: 350px;
		margin: auto;
		margin-top: 56px;
		border: 1px solid #0000004d;
		border-radius: 20px;
		button {
			border-radius: 12px;
		}

		.form-header {
			font-weight: 600;
			border-bottom: 1px solid #0000004d;
			padding: 12px;
		}

		.form-body {
			padding: 12px;
		}
		.form-field {
			display: flex;
			flex-direction: column;
		}
		.form-field-image {
			display: inline-flex;
			flex-direction: column;
			span {
				font-weight: 600;
			}
		}
		.form-footer {
			display: flex;
			justify-content: end;
			border-top: 1px solid #0000004d;
			padding: 12px;
		}
		.tag-input {
			display: flex;
			gap: 8px;
		}
		.tag-list {
			display: flex;
			flex-wrap: wrap;
			gap: 8px;
			margin-top: 8px;
		}
		.tag-item {
			display: flex;
			align-items: center;
			background-color: #e0e0e0;
			padding: 4px 8px;
			border-radius: 16px;
		}
	`
