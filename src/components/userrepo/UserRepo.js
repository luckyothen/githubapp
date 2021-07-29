import React from 'react';
import { useSelector } from 'react-redux';
import Repository from '../shared/repository/Repository';

export default function UserRepo() {

    let repositories = useSelector((state) => state.gitHubReducer.repositories);

    return (
        <>
            <Repository repos={repositories} title="My Repos" />
        </>
    )
}
