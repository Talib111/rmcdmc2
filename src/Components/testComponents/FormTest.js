import React from 'react'
import {useFormik} from 'formik'

function FormTest() {

    const formik = useFormik({
        initialValues:{
            name:'',
            email:'',
            age:''
        }
    })
    console.log(formik.values)
    return (
        <>
            <form action="">
                <input type="text" name='name' onChange={formik.handleChange} value={formik.values.name} /><br />
                <input type="email" name='email' onChange={formik.handleChange} value={formik.values.email} /><br />
                <input type="age" name='age' onChange={formik.handleChange} value={formik.values.age} />
            </form>
        </>
    )
}

export default FormTest