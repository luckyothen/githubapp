import React from 'react';
import { useSelector } from 'react-redux';
import Follow from '../shared/follow/Follow';

export default function Followers() {

    let followers = useSelector(state => state.gitHubReducer.followers);

    return (
        <div>
            <Follow items={followers} title="Followers" />
        </div>
    )
}
