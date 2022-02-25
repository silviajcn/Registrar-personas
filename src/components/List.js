import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteSync } from '../redux/actions/registerAction';
import { ContainerList, Table } from '../styles/Styles.elements';
import {
    // Modal,
    // ModalBody,
    // ModalFooter,
    Button
} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const List = ({ handleUpdate }) => {

    const dispatch = useDispatch();

    const deleteItem = (id) => {
        dispatch(deleteSync(id))
    }

    const { items } = useSelector(store => store.items)
    //console.log(items);

    // Modal open state
    // const [modal, setModal] = useState(false);
  
    // Toggle for Modal
    // const toggle = () => setModal(!modal);

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
                                        <Button
                                            color="primary"
                                            type="submit"
                                            onClick={() => handleUpdate(item)}
                                        >
                                            Actualizar
                                        </Button>

                                        <Button
                                            color="danger"
                                            type="submit"
                                            onClick={() => deleteItem(item.id)}
                                            // onClick={toggle}
                                        >
                                            Eliminar
                                        </Button>
                                    </td>

                                    {/* <td>
                                        <Modal isOpen={modal} toggle={toggle}>
                                            <ModalBody>
                                                Está seguro de eliminar este registro?
                                            </ModalBody>
                                            <ModalFooter>
                                                <Button
                                                    color="danger"
                                                        onClick={() => {
                                                        deleteItem(item.id)
                                                        toggle()
                                                    }}
                                                >
                                                    Sí
                                                </Button>
                                                <Button
                                                    color="primary"
                                                    onClick={toggle}
                                                >
                                                    No
                                                </Button>
                                            </ModalFooter>
                                        </Modal>
                                    </td> */}
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