import { createClient } from '@supabase/supabase-js'
import React from 'react'
import config from '../../../config.json'
import { StyledFavorites } from './styles'

const PROJECT_URL = "https://hbngmeoaeglqsiovczrr.supabase.co"
const PUBLIC_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhibmdtZW9hZWdscXNpb3ZjenJyIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzM5MTU2NjAsImV4cCI6MTk4OTQ5MTY2MH0.YIj5PVZic1KXMk7eneL70HQE1DHBK_R1v-9ktdbc6EU"
const supabase = createClient(PROJECT_URL, PUBLIC_KEY)

function useForm(propsDoForm) {
    const [values, setValues] = React.useState(propsDoForm.initialValues)

    return {
        values,
        
        handleChange: (evento) => {
            const value = evento.target.value
            const name = evento.target.name
            setValues({
                ...values, 
                [name]: value
            });
        },

        clearForm() {
            setValues({});
        }
    }
}

export default function Favorites({ ...props }) {
    const aluratubers = config.favorites

    const [formVisivel, setFormVisivel] = React.useState(false)
    const formCadastro = useForm({ initialValues: { username: ""} })

    return (
        <StyledFavorites>
            <h2>Aluratubes Favoritos</h2>

            <section className='favorites'>
                {
                    aluratubers.map((favorite) => {
                        return (
                            <div className='perfil' key={favorite}>
                                <img src={`https://github.com/${favorite}.png`} />

                                <p>@{favorite}</p>
                            </div>
                        )
                    })
                }

                <button type='button' className='add-favorite' onClick={() => setFormVisivel(true)}>+</button>
                
                {formVisivel ? 
                    (<form onSubmit={(event) => {
                        event.preventDefault()

                        console.log(formCadastro.values.username)
                        // chamada para supabase
                        supabase.from("aluratubes").insert({
                            github_user: formCadastro.values.username,
                        })
                        .then((res) => {
                            console.log("RES: ", res)
                        })
                        .catch(() => {
                            console.log("ERR:", err)
                        })

                        setFormVisivel(false)
                        formCadastro.clearForm()
                    }}>
                        <div>
                            <button type='button' className='close-modal' onClick={() => setFormVisivel(false)}>X</button>
                            <input
                                placeholder="Username do Github" 
                                name="username"
                                value={formCadastro.values.username} 
                                onChange={formCadastro.handleChange}
                            />
                            
                            <button type="submit"> Cadastrar </button>
                        </div>
                        
                    </form>)
                    
                    : null
                }
            </section>
        </StyledFavorites>
    )
}
