import React from 'react';
import './follow.scss';

export default function Follow(props) {
    return (
        <div className="follow container">
            <h2 className="follow__section-title">{props.title}</h2>
            <div className="follow__wrapper">
                {props.items && props.items.map(item => (
                    <div className="follow__card">
                        <img srcSet={item.avatar_url} alt="Profile Pic" className="follow__profilePic" />
                        <h2 className="follow__name">{item.login}</h2>
                    </div>

                ))}
            </div>
        </div>
    )
}
