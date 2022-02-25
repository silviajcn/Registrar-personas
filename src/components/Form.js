import React from 'react';
import { useDispatch } from 'react-redux';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { v4 as uuidva } from 'uuid';
import { registerSync } from '../redux/actions/registerAction';
import { ContainerInputs, Label, Input, InputDate, Select, Button } from '../styles/Styles.elements';

const Form = () => {

    const dispatch = useDispatch();

    const formik = useFormik({
        initialValues: {
            nombre: "",
            apellido: "",
            ciudad: "",
            fecha: "",
            id: uuidva(),
        },
        validationSchema: Yup.object({
            nombre: Yup.string()
                .min(2)
                .max(50)
                .required('Required'),
            apellido: Yup.string()
                .min(2)
                .max(50)
                .required('Required'),
            ciudad: Yup.string().required(),
            fecha: Yup.string().required(),
        }),
        onSubmit: (data) => {
            console.log(data);
            dispatch(registerSync(data))
        }
    })

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
                        <option name="SantaMarta" value="SantaMarta">Santa Marta</option>
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

                <ContainerInputs>
                    <Button
                        type="submit"
                    >
                        Guardar
                    </Button>
                </ContainerInputs>
            </form>
        </section>
    )
};

export default Form;