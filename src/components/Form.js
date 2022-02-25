import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { v4 as uuidva } from 'uuid';
import { registerSync, updateSync } from '../redux/actions/registerAction';
import { ContainerInputs, Label, Input, InputDate, Select, ContainerButton, Button, MassageExito } from '../styles/Styles.elements';
import List from './List';

const Form = () => {

    const dispatch = useDispatch();

    const [formRegister, setFormRegister] = useState(false);

    const formik = useFormik({
        initialValues: {
            nombre: "",
            apellido: "",
            ciudad: "",
            fecha: "",
            id: uuidva(),
        },
        validationSchema: Yup.object({
            nombre: Yup.string().required(),
            apellido: Yup.string().required(),
            ciudad: Yup.string().required(),
            fecha: Yup.string().required(),
        }),
        validate: (data) => {
            let errores = {};

				// Validacion nombre
				if(!data.nombre){
					errores.nombre = 'Por favor ingresa un nombre'
				} else if(!/^[a-zA-ZÀ-ÿ\s]{2,50}$/.test(data.nombre)){
					errores.nombre = 'El nombre solo puede contener letras o espacios y debe incluir dos o mas caracteres'
				}

				// Validacion apellido
				if(!data.apellido){
					errores.apellido = 'Por favor ingresa un apellido'
				} else if(!/^[a-zA-ZÀ-ÿ\s]{2,50}$/.test(data.apellido)){
					errores.apellido = 'El apellido solo puede contener letras o espacios y debe incluir dos o mas caracteres'
				}

            //console.log(errores);
            return errores;
            
        },
        onSubmit: (data, {resetForm}) => {
            resetForm();
            setFormRegister(true);
			setTimeout(() => setFormRegister(false), 5000);
            //console.log(data);
            dispatch(registerSync(data))
        },
        
    })


    // UPDATE ---------------------------------------------------
    const [updateForm, setUpdateForm] = useState(false);

    // const [values, setValues] = useState();

    const handleUpdate = (item) => {
        console.log(item)
        dispatch(updateSync(item.id, item))
        setUpdateForm(true)
        // setValues({
        //     ...item
        // })
    }

    return (
        <section>
            
            <form
                onSubmit={formik.handleSubmit}
            >
                <ContainerInputs>
                    <Label>Nombre:</Label>
                    <Input
                        id="nombre"
                        name="nombre"
                        type="text"
                        onChange={formik.handleChange}
                    />
                </ContainerInputs>

                <ContainerInputs>
                    <Label>Apellido:</Label>
                    <Input
                        id="apellido"
                        name="apellido"
                        type="text"
                        onChange={formik.handleChange}
                    />
                </ContainerInputs>

                <ContainerInputs>
                    <Label>Ciudad:</Label>
                    <Select
                        id="ciudad"
                        name="ciudad"
                        onChange={formik.handleChange}
                    >
                        <option name="Seleccionar" value="Seleccionar">Seleccionar</option>
                        <option name="Armenia" value="Armenia">Armenia</option>
                        <option name="Barranquilla" value="Barranquilla">Barranquilla</option>
                        <option name="Bogota" value="Bogota">Bogotá</option>
                        <option name="Bucaramanga" value="Bucaramanga">Bucaramanga</option>
                        <option name="Cali" value="Cali">Cali</option>
                        <option name="Cartagena" value="Cartagena">Cartagena</option>
                        <option name="Cucuta" value="Cucuta">Cúcuta</option>
                        <option name="Ibague" value="Ibague">Ibagué</option>
                        <option name="Manizales" value="Manizales">Manizales</option>
                        <option name="Medellin" value="Medellin">Medellín</option>
                        <option name="Pereira" value="Pereira">Pereira</option>
                        <option name="SantaMarta" value="Santa Marta">Santa Marta</option>
                        <option name="Villavicencio" value="Villavicencio">Villavicencio</option>
                   </Select>
                </ContainerInputs>

                <ContainerInputs>
                    <Label>Fecha de nacimiento:</Label>
                    <InputDate
                        id="fecha"
                        name="fecha"
                        type="date"
                        min="1900-01-01"
                        max="1999-12-31"
                        onChange={formik.handleChange}
                    />
                </ContainerInputs>

                <ContainerButton>
                    {
                        !updateForm
                            ?
                        <>
                            <Button
                                type="submit"
                            >
                                Guardar
                            </Button>
                            {formRegister && <MassageExito>¡Registro exitoso!</MassageExito>}
                        </>
                            :
                    <Button
                        type="submit"
                    >
                        Guardar
                    </Button>

                    

                    // {/* <ButtonClear
                    //     type="reset"
                    // >
                    //     Limpiar formulario
                    // </ButtonClear> */}
                    }
                </ContainerButton>
            </form>

            <List handleUpdate={handleUpdate}/>
            
        </section>
    )
};

export default Form;