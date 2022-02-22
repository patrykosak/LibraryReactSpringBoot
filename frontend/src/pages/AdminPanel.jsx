import React from "react";
import { Tab, Row, Col, Nav, Tabs } from "react-bootstrap";
import AddCategory from "../components/adminPanelComponents/AddCategory";

const AdminPanel = () => {
  return (
    <div className="m-4">
      <Tab.Container id="left-tabs-example" defaultActiveKey="category">
        <Row>
          <Col sm={3}>
            <Nav variant="pills" className="flex-column">
              <Nav.Item>
                <Nav.Link eventKey="category">Kategorie</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="second">Tab 2</Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>
          <Col sm={9}>
            <Tab.Content>
              <Tabs
                defaultActiveKey="add"
                id="uncontrolled-tab-example"
                className="mb-3"
              >
                <Tab eventKey="add" title="Dodaj kategorię">
                    <AddCategory />
                </Tab>
                <Tab eventKey="edit" title="Edytuj kategorię">
                </Tab>
                <Tab eventKey="delate" title="Usuń kategorię">
                </Tab>
              </Tabs>
              <Tab.Pane eventKey="second">2</Tab.Pane>
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
    </div>
  );
};

export default AdminPanel;
