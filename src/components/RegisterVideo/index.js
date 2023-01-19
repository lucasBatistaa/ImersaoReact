import { StyledRegisterVideo } from "./styles";
import React from "react";
import { createClient } from '@supabase/supabase-js'

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

const PROJECT_URL = "https://hbngmeoaeglqsiovczrr.supabase.co"
const PUBLIC_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhibmdtZW9hZWdscXNpb3ZjenJyIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzM5MTU2NjAsImV4cCI6MTk4OTQ5MTY2MH0.YIj5PVZic1KXMk7eneL70HQE1DHBK_R1v-9ktdbc6EU"
const supabase = createClient(PROJECT_URL, PUBLIC_KEY)

export default function RegisterVideo() {
    
    const formCadastro = useForm({ initialValues: { titulo: "", url: ""} })
    const [formVisivel, setFormVisivel] = React.useState(false)

    return (
        <StyledRegisterVideo>
            <button className="add-video" onClick={() => setFormVisivel(true)}>+</button>
            
            {formVisivel ?
                

                (<form onSubmit={(evento) => {
                    evento.preventDefault()

                    // contrato entre front e backend
                    supabase.from("video").insert({
                        title: formCadastro.values.titulo,
                        url: formCadastro.values.url,
                        thumb: "https://img.youtube.com/vi/QsqatJxAUtk/hqdefault.jpg",
                        playlist: "jogos",
                    })
                    .then((res) => {
                        console.log(res)
                    })
                    .catch(() => {
                        console.log(err)
                    })

                    setFormVisivel(false)
                    formCadastro.clearForm()
                }}>
                    <div>
                        <button type="button" className="close-modal" onClick={() => setFormVisivel(false)}> X </button>
                        <input 
                            placeholder="Título do vídeo" 
                            name="titulo"
                            value={formCadastro.values.titulo} 
                            onChange={formCadastro.handleChange}/>
                        <input 
                            placeholder="URL" 
                            name="url"
                            value={formCadastro.values.url} 
                            onChange={formCadastro.handleChange}/>
                        <button type="submit" > Cadastrar </button>
                    </div>
                </form>)

                : null
            }
            
        </StyledRegisterVideo>
    )
}