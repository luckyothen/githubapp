import React from 'react'

export default function Follow(props) {
    return (
        <div className="follow">
            <h2 className="follow__section-title">{props.title}</h2>
            <div className="follow__wrapper container">
                <div className="follow__card">
                    <img srcSet={props.image} alt="" className="follow__profile-pic" />
                    <h2 className="follow__name">{props.name}</h2>
                </div>
            </div>
        </div>
    )
}
