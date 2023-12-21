import './card1.css'

const Card1 = () => {
    const name = 'Improve your front-end skills by building projects'
    const title = 'Scan the QR code to visit Frontend Mentor and take your coding skills to the next level'
  return (
    <div className='main'>
        <div className='maindiv'>
             <div className='images'>
            <img src="/assets/Oval (13).svg" alt="" />
            </div>
            <div className='images1'>
            <img src="/assets/qr-code (1).svg" alt="" />
            </div>
        </div>
        <div className='title'>
            <h1 className='name1'>{name}</h1>
        </div>
        <div className='ptitle'>
            <p>{title}</p>
        </div>
    </div>
  )
}

export default Card1