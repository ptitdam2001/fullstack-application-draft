import { ApplicationBar } from '../components'
import { Outlet } from 'react-router-dom'
import { Sidebar } from '@feature/Common/components'
import menu from '../../config/menu'

export const ConnectedLayout = () => {
  return (
    <main style={{ height: '100vh' }}>
      <header>
        <ApplicationBar />
      </header>
      <section data-testid="connectedLayout-content" className="h-full pt-16 flex flex-row">
        <Sidebar menu={menu} />
        <section role="main">
          <Outlet />
        </section>
      </section>
    </main>
  )
}
