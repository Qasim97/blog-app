import "./sidebar.css"

export default function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebarItem">
                <span className="sidebarTitle">ABOUT ME</span>
                <img src="https://th.bing.com/th/id/OIP.A_T47eHe3BMo81aMqcmY8gHaFj?w=204&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7" alt=""></img>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. At libero pariatur modi harum, mollitia, rerum sint repudiandae sequi ipsam nihil, autem voluptate dolores nisi provident ad! Id cupiditate doloribus neque?</p>
            </div>
            <div className="sidebarItem">
                <span className="sidebarTitle">CATEGORIES</span>
                <ul className="sidebarList">
                    <li className="sidebarListItem">Life</li>
                    <li className="sidebarListItem">Music</li>
                    <li className="sidebarListItem">Sports</li>
                    <li className="sidebarListItem">Tech</li>
                    <li className="sidebarListItem">Style</li>
                    <li className="sidebarListItem">Cinema</li>
                </ul>
            </div>
            <div className="sidebarItem">
                <span className="sidebarTitle">FOLLOW US</span>
                <div className="sidebarSocial">
                    <i className="sidebarIcon fa-brands fa-square-facebook"></i>
                    <i className="sidebarIcon fa-brands fa-square-twitter"></i>
                    <i className="sidebarIcon fa-brands fa-square-instagram"></i>
                    <i className="sidebarIcon fa-brands fa-linkedin"></i>
                </div>
            </div>
        </div>
    )
}