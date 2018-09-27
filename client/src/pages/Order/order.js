import React, { Component } from "react";
import { DonutChoice, DonutItem } from "../../components/donutChoice";
import BoxItems from "../../components/boxItems";
import BoxContainer from "../../components/boxContainer";
import { Col, Row, Container } from "../../components/Grid";
import API from "../../utils/API";

class Order extends Component {
    state = {
        donuts: [],
        name: "",
        id: "",
        image: "",
        users: [],
        box: []
    };

    componentDidMount() {
        this.loadDonuts();
    }

    loadDonuts = () => {
        //API FOR GET DONUT
        API.getDonuts()
            .then(res =>
                this.setState({ donuts: res.data, name: "", id: "" })
            )
            .catch(err => console.log(err));
    };

    handleClick = (id) => {
        console.log(id)
    }

    render() {
        console.log(this.state.donuts);

        return (
            <Container fluid>
                <Row>
                    <Col size="md-3">
                        <h1>CHOICES</h1>
                        {this.state.donuts.length ? (
                            <DonutChoice>
                                {this.state.donuts.map(Donut => (
                                    <DonutItem key={Donut._id} handleClick={this.handleClick} donut_id={Donut._id}>
                                        <div>
                                            <li>
                                                <img src={Donut.image} alt={Donut.name} width="50" height="50" />
                                                {Donut.name}
                                            </li>
                                        </div>
                                    </DonutItem>
                                ))}
                            </DonutChoice>
                        ) : (
                                //placeholder image
                                <h3>No Donuts</h3>
                            )}
                    </Col>
                    <Col size="md-9 sm-12">
                        {/* Box Container */}
                        <BoxContainer>
                            {/* <BoxItems
                                    // removeDonuts={this.removeDonuts}
                                    // id={donuts.id}
                                    // key={donuts.id}
                                    // name={donuts.name}
                                    // image={donuts.image}
                                /> */}
                            {this.state.box.length ? (
                                // <BoxItems />
                                <h1>You got an order!</h1>
                            ) : (
                                    //placeholder image
                                    <h1>Order Up!</h1>
                                )}
                        </BoxContainer>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default Order;


