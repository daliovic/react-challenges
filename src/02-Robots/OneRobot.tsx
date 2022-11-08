import React from 'react'

export default function OneRobot({ name }: { name: string }) {
    const [isLoading, setIsLoading] = React.useState(true)

    return (
        <div key={name}>
            {isLoading && <h1>Loading...</h1>}
            <img
                onLoad={() => {
                    console.log("Loaded ", name)
                    setIsLoading(false)
                }}
                src={`https://robohash.org/${name}`} />
        </div>
    )
}
