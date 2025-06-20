import { FaTimes } from 'react-icons/fa'
import { useGlobalContext } from './Context'
import sublinks from './data'

const Sidebar = () => {
  const { isSidebarOpen, closeSidebar } = useGlobalContext()
  return (
    <aside className={isSidebarOpen ? 'sidebar show-sidebar' : 'sidebar'}>
      <div className='sidebar-container'>
        <button className='close-btn' onClick={closeSidebar}>
          <FaTimes />
        </button>
        {/* iterating through the main links */}
        {sublinks.map((item) => {
          const { links, page, pageId } = item
          return (
            <article key={pageId}>
              <h4>{page}</h4>
              <div className='sidebar-sublinks'>
                {/* iterating through the sublinks */}
                {links.map((link) => {
                  const { url, icon, label, id } = link
                  return (
                    <a href={url} key={id}>
                      {icon}
                      {label}
                    </a>
                  )
                })}
              </div>
            </article>
          )
        })}
      </div>
    </aside>
  )
}

export default Sidebar
