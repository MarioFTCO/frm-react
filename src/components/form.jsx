import { useState } from 'react'

function Form() {
    const [formValues, setFormValues] = useState({Lastname: '', Menssage: '', firstName: '',carBrand: ''})

    const handleSubmit = (e) => {
        e.preventDefault()
        const {firstName, Lastname, Menssage, carBrand, checkbox, radio, range,} = e.target
        setFormValues({firstName: firstName.value,  Lastname:Lastname.value, Menssage: Menssage.value, carBrand: carBrand.value, checkbox: checkbox.checked ? 'Yes' : 'No', radio:radio.value, range:range.value} )
        
        
    }

    return (

        <div className="form">

            <form id="formulario" action="" onSubmit={handleSubmit}>

                <h2>Controlled From</h2>
                <p>
                First Name:
                <input type="text" name="firstName"/>
                </p>

                <p>
                Last Name:
                <input type="text" name="Lastname" id="lastname" />
                </p>

                <p>
                Your Menssage:
                <textarea name="Menssage" id="menssage" cols="30" rows="3"></textarea>
                </p>

                <p>
                <select name="carBrand">
                    Car brand
                    <option selected>--Pick a car brand--</option>
                    <option value="volvo">Volvo</option>
                    <option value="saab">Saab</option>
                    <option value="mercedes">Mercedes</option>
                    <option value="audi">Audi</option>
                </select>
                </p>

                <p>
                <input type="checkbox" name="checkbox" id="5" />
                Is Checked?
                </p>

                <p>
                <input type="radio" name="radio" value="male" />
                Male
                <input type="radio" name="radio" value="female" />
                Female
                </p>

                <p>
                Price (between 0 and 50):
                <input type="range" name="range" min={0} max={50}/>
                </p>

                <p>
                <button type="submit">Submit</button>
                </p>

                <p id="mostrarTexto">Name: {formValues.firstName} {formValues.Lastname}</p>
                <p>Favorite car brand: {formValues.carBrand} </p>
                
                <p> Menssage: {formValues.Menssage}</p>

                <p>checkbox: {formValues.checkbox}</p>

                <p>genero: {formValues.radio}</p>

                <p>Rango: {formValues.range}</p>

            </form>
        </div>
    )
}

export default Form