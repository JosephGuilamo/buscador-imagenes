import { useState } from "react"
import { Formik, Form, Field } from "formik"
import './header.css'
import './content.css'
import './article.css'
 
const gil = () => {
  console.log('hola mundo')

}

gil()

const App = () => {
  const [photos,setPhotos] = useState([])
  const open = url => window.open(url)
  console.log({photos})
  
  return (
    <div>
      <header>
        <Formik
          initialValues ={{ search :''}}
          onSubmit={async values => {
            const response = await fetch(`https://api.unsplash.com/search/photos?per_page=20&query=${values.search}`,{
              headers: {
                'Authorization': 'Client-ID X__Bl06tVZ03eQF88rPMTPHJh28ca7I0MIveQ_y0azQ'
              }
            })
            const data = await response.json()
           setPhotos(data.results)
          }}
        >
          <Form>
            <Field name="search"/>
          </Form>
        </Formik>
      </header>
       <div className="container">
         <div className="center">
           {photos.map(photo => 
            <article key={photo.id} onClick={() => open(photo.links.html)} > 
              <img src={photo.urls.regular} />
              <p>{[photos.description,photos.alt_description].join(' - ')}</p>
            </article>)}
         </div>
      </div>   
    </div>
  )
}
export default App




