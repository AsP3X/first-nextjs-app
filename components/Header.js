import headerStyles from '../styles/Header.module.css'

const Header = () => {
  return (
    <div>
      <h1 className={ headerStyles.title }>
        <span>Ehre</span>konto 
      </h1>
      <p className={ headerStyles.description }>Receive and send honor</p>
    </div>
  )
}

export default Header