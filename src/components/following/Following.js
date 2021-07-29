import React from 'react';
import { useSelector } from 'react-redux';
import Follow from '../shared/follow/Follow';

export default function Following() {

    let following = useSelector(state => state.gitHubReducer.following);

    return (
        <div>
            <Follow items={following} title="Following" />
        </div>
    )
}
