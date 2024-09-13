import './MainTitle.css'

const MainTitle = ({title , par}) => {
  return (
      <div className='mainTilte d-flex flex-column justify-content-center align-items-center'>
        <h2 className='mainTitle-h2'>{title}</h2>
        <p className="text-muted">{par}</p>
      </div>
    ) 
}

export default MainTitle