import React from 'react'
import Header from '../Header/Header'

const Wrapper = ({ children, container }) => {
    return (
        <div>
            <div className="bg-blur-orange"></div>
            <div className="bg-blur-purple"></div>
            <div className="bg-blur-green"></div>
            <Header />
            <div className={`container ${container == "initial" ? "h-initial" : ""}`} >
                {children}
            </div>
        </div>
    )
}

export default Wrapper