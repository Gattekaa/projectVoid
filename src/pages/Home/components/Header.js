import React from "react"

function Header(){
    return (
        <header className="header">
            <div className="toolbar">
                <div>
                    <a href="/">Project Void - Alteração</a>
                </div>
                <div>
                    <button>Novo Post</button>
                    <span>img1</span>
                    <span>img2 - alteração</span>
                </div>
            </div>
        </header>
    )
}

export default Header;