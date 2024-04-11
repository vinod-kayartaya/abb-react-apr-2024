function Header({ title, subtitle, author = 'Unknown' }) {
  return (
    <>
      {/* .alert.alert-primary>.container>h1{React basics} */}
      <div className='alert alert-primary'>
        <div className='container'>
          <h1>{title}</h1>
        </div>
      </div>
      <div className='container'>
        <p className='lead'>{subtitle}</p>
        <p>Author: {author}</p>
      </div>
    </>
  );
}

export default Header;
