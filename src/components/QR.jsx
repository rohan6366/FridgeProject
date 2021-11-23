import React from 'react'
import { Link } from 'react-router-dom'

function QR() {
    return (
        <div className='qr_scanner'>
            <Link to='/welcome'>
                <img src="/qr.png" alt="qr code" />
            
            </Link>
        </div>
    )
}

export default QR
