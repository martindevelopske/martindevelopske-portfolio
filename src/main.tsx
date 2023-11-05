import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import {Helmet} from 'react-helmet'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <div className='align-top w-screen border-red-300'>
      <Helmet>
          <title>Martin Ndung'u || portfolio</title>
          <link rel='canonical' href='https://martindevelopske.com' />
          <link rel='icon' type='image/x-icon' className='rounded-md' href='https://res.cloudinary.com/dilbjaf90/image/upload/v1681112350/pp2_thshsi.jpg' />
      </Helmet>
    <App />
  </div>
)
