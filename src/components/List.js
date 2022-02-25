import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteSync } from '../redux/actions/registerAction';
import { ContainerList, Table, BtnEdit, BtnDelete } from '../styles/Styles.elements';

const List = () => {

    const dispatch = useDispatch();

    const deleteItem = (id) => {
        dispatch(deleteSync(id))
    }

    const { items } = useSelector(store => store.items)
    console.log(items);

    return (
        <ContainerList>
            <h2>Personas registradas</h2>

            <div>
                <Table>
                    <thead>
                        <tr>
                            <th>Nombre</th>
                            <th>Apellido</th>
                            <th>Fecha de nacimiento</th>
                            <th>Ciudad</th>
                            <th>Acción</th>
                        </tr>
                    </thead>
                    
                    <tbody>
                        {
                            items.map((item) => (
                                <tr key={item.id}>
                                    <td>{item.nombre}</td>
                                    <td>{item.apellido}</td>
                                    <td>{item.fecha}</td>
                                    <td>{item.ciudad}</td>
                                    <td>
                                        <BtnEdit
                                            type="submit"
                                        >
                                            Actualizar
                                        </BtnEdit>

                                        <BtnDelete
                                            type="submit"
                                            onClick={() => deleteItem(item.id)}
                                        >
                                            Eliminar
                                        </BtnDelete>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </Table>
            </div>
        </ContainerList>
    )
};

export default List;