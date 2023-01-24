import React from 'react'

const Footer = () => {
    return (
        <>
            <hr className="--color-dark" />
            <div className="--flex-center">
                <p> All Rights Reserved. &copy; {(new Date().getFullYear())}</p>
            </div>
        </>
    )
}

export default Footer