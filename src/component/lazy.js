import React, { Component } from 'react'

const Lazy = ({ data, use }) => {
    return (
        <div>
            <h1>
                lazy load Component:[data:{data}] [use:{use}]
            </h1>
        </div>
    )
}

export default Lazy