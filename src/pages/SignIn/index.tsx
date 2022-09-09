import './styles.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faGoogle} from '@fortawesome/free-brands-svg-icons'

export function SignIn() {
  return (
    <div className="container">
      <h1>Acesse sua conta</h1>

      <span>
        Utilizando autenticação social como serviço da Google, facilitando a vida do usuário e permitindo utilizar a aplicação sem fazer cadastro.
      </span>

      <button type="button" className="button">
        <FontAwesomeIcon icon={faGoogle} />  Entrar com Google
      </button>
    </div>
  )
}