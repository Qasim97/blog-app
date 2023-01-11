import "./topbar.css"

export default function TopBar() {
    return (
        <div className="top">
            <div className="topLeft">
            <i className="topIcon fa-brands fa-square-facebook"></i>
            <i className="topIcon fa-brands fa-square-twitter"></i>
            <i className="topIcon fa-brands fa-square-instagram"></i>
            <i className="topIcon fa-brands fa-linkedin"></i>
            </div>
            <div className="topCenter">
                <ul className="topList">
                    <li className="topListItem">HOME</li>
                    <li className="topListItem">ABOUT</li>
                    <li className="topListItem">CONTACT</li>
                    <li className="topListItem">WRITE</li>
                    <li className="topListItem">LOGOUT</li>
                </ul>
            </div>
            <div className="topRight">
                <img className="topImg" src="https://th.bing.com/th/id/OIP.A_T47eHe3BMo81aMqcmY8gHaFj?w=204&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7" alt=""></img>
                <i class="topSearchIcon fa-solid fa-magnifying-glass"></i>
            </div>
        </div>
    )
}