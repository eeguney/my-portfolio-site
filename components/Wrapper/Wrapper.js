import React from 'react'
import Header from '../Header/Header'

const Wrapper = ({ children, container }) => {
    return (
        <>
            <Header />
            <div className={`container ${container == "initial" ? "h-initial" : ""}`} >
                {children}
            </div>
        </>
    )
}

export default Wrapper