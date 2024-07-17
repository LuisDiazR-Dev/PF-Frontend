import React, {useEffect} from "react"
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom"
import { getAllUsers, fetchTechnologies, getAllProjects } from "../../redux/actions";

const AdminView = () =>{

    const dispatch = useDispatch();
    const { data } = useParams();
    const authToken = useSelector((state) => state.auth.authToken)
    
    useEffect(() => {
        dispatch(getAllUsers(authToken))
        dispatch(fetchTechnologies(authToken))
        dispatch(getAllProjects())
    }, [dispatch, authToken])
    
    const users = useSelector(state => state.user.users)
    const techs = useSelector(state => state.technologies.technologies)
    const projects = useSelector(state => state.project.allProjects)
    
    return(
        <div>
            <br /><br />
            {data==="Users"?
            <div class="align-items-center">
                
                <div class="table-responsive">
                    <table class="table table-bordered">
                        <thead>
                            <tr>
                                {users.length !== 0 ? Object.keys(users[0]).map((key) => (
                                    <th key={key} scope="col">
                                        {key}
                                    </th>
                                )):null}
                                <th key="edit">
                                    Editar
                                </th>
                                <th key="delete">
                                    Eliminar
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {users.length !== 0 ? users.map((key) => (
                                <tr>
                                    <td>
                                        {key.id}
                                    </td>
                                    <td>
                                        {key.userName}
                                    </td>
                                    <td>
                                        {key.email}
                                    </td>
                                    <td>
                                        {key.password}
                                    </td>
                                    <td>
                                        {key.bio}
                                    </td>
                                    <td>
                                        {key.image}
                                    </td>
                                    <td>
                                        {key.role}
                                    </td>
                                    <td>
                                        {key.isPremium === true ? "true":"false"}
                                    </td>
                                    <td>
                                        {key.createdAt}
                                    </td>
                                    <td>
                                        {key.updatedAt}
                                    </td>
                                    <td>
                                        {key.deletedAt === null ? "null" : key.deletedAt}
                                    </td>
                                    <td style={{fontWeight:"bolder"}}>
                                        Editar
                                    </td>
                                    <td style={{fontWeight:"bolder"}}>
                                        Eliminar
                                    </td>
                                </tr>
                            )):null}
                        </tbody>
                    </table>
                </div>

            </div>:null}

            {data==="Projects"?
            <div>
                <div class="align-items-center">
                
                <div class="table-responsive">
                    <table class="table table-bordered">
                        <thead>
                            <tr>
                                {projects.length !== 0 ? Object.keys(projects[0]).map((key) => (
                                    <th scope="col">
                                        {key}
                                    </th>
                                )):null}
                                <th key="edit">
                                    Editar
                                </th>
                                <th key="delete">
                                    Eliminar
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {projects.length !== 0 ? projects.map((key) => (
                                <tr>
                                    <td>
                                        {key.id}
                                    </td>
                                    <td>
                                        {key.title}
                                    </td>
                                    <td>
                                        {key.description}
                                    </td>
                                    <td>
                                        {key.tags.map((tag)=>(
                                            <ul>
                                                <li>{tag}</li>
                                            </ul>
                                        ))}
                                    </td>
                                    <td>
                                        {key.image}
                                    </td>
                                    <td>
                                        {key.createdAt}
                                    </td>
                                    <td>
                                        {key.updatedAt}
                                    </td>
                                    <td>
                                        {key.userId}
                                    </td>
                                    <td>
                                        {key.technologies.map((technology)=>(
                                            <ul>
                                                <li>{technology.name}</li>
                                            </ul>
                                        ))}
                                    </td>
                                    <td style={{fontWeight:"bolder"}}>
                                        Editar
                                    </td>
                                    <td style={{fontWeight:"bolder"}}>
                                        Eliminar
                                    </td>
                                </tr>
                            )):null}
                        </tbody>
                    </table>
                </div>
                </div>
            </div>
            :null}
        
            {data==="Technologies"?
            <div>
                <div class="align-items-center">
                
                <div class="table-responsive">
                    <table class="table table-bordered">
                        <thead>
                            <tr>
                                {techs.length !== 0 ? Object.keys(techs[0]).map((key) => (
                                    <th key={key} scope="col">
                                        {key}
                                    </th>
                                )):null}
                                <th key="edit">
                                    Editar
                                </th>
                                <th key="delete">
                                    Eliminar
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {techs.length !== 0 ? techs.map((key) => (
                                <tr>
                                    <td key={key.id}>
                                        {key.id}
                                    </td>
                                    <td key={key.name}>
                                        {key.name}
                                    </td>
                                    <td style={{fontWeight:"bolder"}}>
                                        Editar
                                    </td>
                                    <td style={{fontWeight:"bolder"}} >
                                        Eliminar
                                    </td>
                                </tr>
                            )):null}
                        </tbody>
                    </table>
                </div>
                </div>
            </div>
            :null}
        </div>
    )
}

export default AdminView;