import React from 'react'

const NoMatch = ({history}) => {
    return (
        <div>
            <h1>404 Page</h1>
            <p>Redirecting to <span style={{color:"dodgerblue"}} onClick={() => history.push("/")} > Login Page</span> </p>
        </div>
    )
}

export default NoMatch
