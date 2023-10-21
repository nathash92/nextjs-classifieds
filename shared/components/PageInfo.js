
function PageInfo({ title = '' }) {

  return (
    <div className='lg:flex justify-between'>
      <div className='text-xl font-bold'>
        {title}
      </div>
      <div>
        <div className="text-sm breadcrumbs">
          <ul>
            <li><a>Home</a></li>
            <li>Listings</li>
          </ul>
        </div>
      </div>
    </div>
  )
}


function getInfo(pathname) {
  return {
    '/listings': {
      title: 'Ads'
    }
  }
}


export default PageInfo