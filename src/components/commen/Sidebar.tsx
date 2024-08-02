
import DextopSidebar from './DextopSidebar';
import MobileSidebar from './MobileSidebar';

const Sidebar = ({isCollapsed}: any) => {
   
  return (
    <div className='z-20 '>
        {/* dextop sidebar */}
        {
            isCollapsed ? (<MobileSidebar />) : (<DextopSidebar />)
        }
        
    </div>
  )
}

export default Sidebar