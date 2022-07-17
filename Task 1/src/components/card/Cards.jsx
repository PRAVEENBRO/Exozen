import React from 'react'
import { Card, Row } from 'react-bootstrap'
import PieCharts from '../charts/piecharts/PieCharts'
import { BiDotsVerticalRounded } from 'react-icons/bi'
import "./Cards.css"

const Cards = ({ title, data }) => {
    return (
        <div className="">
            <Card style={{ minHeight: "10rem", borderRadius: "1.25rem" }} className="p-2 mb-3 shadow">
                <Card.Title className="cardhead d-flex justify-content-between py-2 px-1" style={{ fontFamily: "cursive", fontSize: 20 }}>
                    <em>{title}</em>
                    <BiDotsVerticalRounded />
                </Card.Title>
                <Card.Body style={{ backgroundColor: "#d9d9e438" }} >
                    <Row xs={2} md={1}>
                        <PieCharts data12={data} />
                        <div className="d-flex justify-content-start" style={{ width: '100%', }}>
                            <span>
                                <span>Current day Usage</span>
                                <br />
                                {data.map((ele, i) => { return <span key={i}>{ele.name}/</span> })}
                                <h6>  {data.map((ele, i) => { return <span key={i}>{ele.value}/</span> })}</h6>
                            </span>
                        </div>
                    </Row>
                </Card.Body>
            </Card>
        </div>
    )
}

export default Cards