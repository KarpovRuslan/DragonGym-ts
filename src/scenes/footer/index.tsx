import Logo from '@/assets/Logo.png';


const Footer = () => {
  return (
      <footer className='bg-primary-100 py-16'>
          <div className='jusctify-content mx-auto w-5/6 gap-16 md:flex'>
              <div className='mt-16 basis-1/2 md:mt-0'>
                  <img alt='logo' src={Logo} />
                  <p className='my-5'>Network of GYM clubs recommended by people</p>
                  <p>© 2023 DragonGym All Rights Reserved</p>
              </div>
              <div className='mt-16 basis-1/4 md:mt-0'>
                  <h4 className='font-bold'>Links</h4>
                  <p className='my-5'>First link</p>
                  <p className='my-5'>Second link</p>
              </div>
              <div className='mt-16 basis-1/4 md:mt-0'>
                  <h4 className='font-bold'>Contacts Us</h4>
                  <p className='my-5'>Instagram</p>
                  <p className='my-5'>WhatsUp</p>
                  <p>(908)100-10-10</p>
              </div>
          </div>
    </footer>
  )
}

export default Footer