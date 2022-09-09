import './styles.scss'

export function SignIn() {
  return (
    <div className="container">
      <h1>Acesse sua conta</h1>

      <span>
        Utilizando autenticação social, por exemplo, autenticação com a Google,<br />
          você facilita a vida do usuário permitindo utilizar sua aplicação <br /> sem fazer cadastro.
      </span>

      <button type="button" className="button">
        Entrar com Google
      </button>
    </div>
  )
}