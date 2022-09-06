import React from 'react'

export default function Input() {
    return (
        <div className="input-grp">
            <div className="input-group">
                <i className="fas fa-user" />
                <input type="text" placeholder="Name" required />
            </div>
            <div className="input-group">
                <i className="fas fa-envelope" />
                <input type="email" placeholder="Email" required />
            </div>
            <div className="input-group">
                <i className="fas fa-lock" />
                <input type="password" placeholder="Password" required />
            </div>
            <div className="input-group">
                <i className="fas fa-phone" />
                <input type="Telephone" placeholder="Telephone" required />
            </div>
            <div className="input-group">
                <i className="fas fa-location-pin" />
                <input type="address" placeholder="Address" required />
            </div>
        </div>
    )
}
