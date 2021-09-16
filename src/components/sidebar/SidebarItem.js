import './Sidebar.css';

function SidebarItem({Icon, title}) {
    return (
        <div className="sidebarItem">
            <Icon className="sidebarIcon" />
            <p>{title}</p>
        </div>
    )
}

export default SidebarItem
