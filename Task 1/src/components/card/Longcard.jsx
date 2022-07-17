import React from 'react'
import { Card } from 'react-bootstrap'
import Linecharts from '../charts/linecharts/Linecharts'

const Longcard = () => {
    return (
        <div>
            <Card style={{ minHeight: "10rem", borderRadius: "1.25rem" }} className="p-2 mb-3 shadow">
                <Linecharts />

            </Card>
        </div>
    )
}

export default Longcard