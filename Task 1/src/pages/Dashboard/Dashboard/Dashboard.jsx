import React from 'react'
import Cards from '../../../components/card/Cards'
import { Row, Container, Card, Button, Breadcrumb } from 'react-bootstrap'
import Linecharts from '../../../components/charts/linecharts/Linecharts';
import './Dashboard.css'

const Dashboard = () => {

    const data1 = [
        { "name": "DG2", "value": 0.0, fill: "#c13631" },
        { "name": "EB", "value": 0.0, fill: "#304455" },
        { "name": "DG1", "value": 136.44, fill: "#304455" },
    ];
    const data2 = [
        { "name": "DG1", "value": 0, fill: "#c13631" },
        { "name": "DG2", "value": 1, fill: "#c13631" },
    ];
    const data3 = [
        { "name": "LC", "value": 0.60, fill: "#639fa9" },
        { "name": "BP", "value": 0.60, fill: "#c13631" },
        { "name": "CW", "value": 0.60, fill: "#304455" },
    ];
    const data4 = [
        { "name": "EG", "value": 190, fill: "gray" },
        { "name": "DG2", "value": 38, fill: "blue" },
        { "name": "DG1", "value": 240, fill: "red" },
    ];



    return (
        <div>
            <Container>

                <Breadcrumb>
                    <Breadcrumb.Item active >Home</Breadcrumb.Item>
                    <Breadcrumb.Item active >Dashboard</Breadcrumb.Item>
                </Breadcrumb>

                <Row xs={1} md={4} >
                    <Cards title="Energy" data={data1} />
                    <Cards title="Carbon" data={data2} />
                    <Cards title="Water" data={data3} />
                    <Cards title="Air" data={data4} />
                </Row>

                <Row xs={1} md={2} className="" style={{ flexWrap: "" }}>
                    <div>
                        <Card style={{ minHeight: "10rem", borderRadius: "1.25rem" }} className="p-2 mb-3 shadow">
                            <div className="d-flex justify-content-evenly m-3 btnbar">
                                <span className="">
                                    <Button variant="warning" className="btnstyle">Expences</Button>
                                </span>
                                <span className="">
                                    <Button variant="info" className="btnstyle">Saving</Button>
                                </span>
                            </div>
                            <Linecharts />
                        </Card>
                    </div>
                    <Card style={{ minHeight: "10rem", borderRadius: "1.25rem" }} className="p-2 mb-3 shadow">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.062497156992!2d77.60363371477051!3d12.967852690858326!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae155d9edcea31%3A0x75d2e9eb38313b35!2sExozen%20IoT%20Based%20Solution%20Provider%20for%20Water%2C%20Air%20%26%20Energy%20Monitoring.!5e0!3m2!1sen!2sin!4v1657997034521!5m2!1sen!2sin" width="100%" height="150%" loading="lazy" title="map" >sd</iframe>
                    </Card>
                </Row>
            </Container>
        </div>
    )
}

export default Dashboard