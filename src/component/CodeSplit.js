import React from 'react'
import Loadable from 'react-loadable'

const LazyComponent = Loadable({
    loader: () => import('./lazy.js'),
    render: (loaded, props) => <loaded.default {...props} use={1} />,
    loading: () => <div>loading...</div>
})

const CodeSplit = () => {
    return <LazyComponent data={123} />
}

export {
    CodeSplit
}