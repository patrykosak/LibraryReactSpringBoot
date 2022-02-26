import React from "react";
import { Tab, Row, Col, Nav, Tabs } from "react-bootstrap";
import AddAuthor from "../components/adminPanelComponents/AddAuthor";
import AddBook from "../components/adminPanelComponents/AddBook";
import AddCategory from "../components/adminPanelComponents/AddCategory";
import AddPublishingHouse from "../components/adminPanelComponents/AddPublishingHouse";
import DeleteAuthor from "../components/adminPanelComponents/DeleteAuthor";
import DeleteCategory from "../components/adminPanelComponents/DeleteCategory";
import DeletePublishingHouse from "../components/adminPanelComponents/DeletePublishingHouse";
import EditAuthor from "../components/adminPanelComponents/EditAuthor";
import EditCategory from "../components/adminPanelComponents/EditCategory";
import EditPublishingHouse from "../components/adminPanelComponents/EditPublishingHouse";

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
                <Nav.Link eventKey="publishingHouse">Wydawnictwa</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="authors">Autorzy</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="books">Książki</Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>
          <Col sm={9}>
            <Tab.Content>
            <Tab.Pane eventKey="category">
              <Tabs
                defaultActiveKey="add"
                id="uncontrolled-tab-example"
                className="mb-3"
              >
                <Tab eventKey="add" title="Dodaj kategorię">
                    <AddCategory />
                </Tab>
                <Tab eventKey="edit" title="Edytuj kategorię">
                <EditCategory />
                </Tab>
                <Tab eventKey="delate" title="Usuń kategorię">
                    <DeleteCategory />
                </Tab>
              </Tabs>
              </Tab.Pane>
              <Tab.Pane eventKey="publishingHouse">
              <Tabs
                defaultActiveKey="add"
                id="uncontrolled-tab-example"
                className="mb-3"
              >
                <Tab eventKey="add" title="Dodaj wydawnictwo">
                    <AddPublishingHouse />
                </Tab>
                <Tab eventKey="edit" title="Edytuj wydawnictwo">
                    <EditPublishingHouse />
                </Tab>
                <Tab eventKey="delate" title="Usuń wydawnictwo">
                   <DeletePublishingHouse />
                </Tab>
              </Tabs>
              </Tab.Pane>
              <Tab.Pane eventKey="authors">
              <Tabs
                defaultActiveKey="add"
                id="uncontrolled-tab-example"
                className="mb-3"
              >
                <Tab eventKey="add" title="Dodaj autora">
                    <AddAuthor />
                </Tab>
                <Tab eventKey="edit" title="Edytuj autora">
                    <EditAuthor />
                </Tab>
                <Tab eventKey="delate" title="Usuń autora">
                    <DeleteAuthor />
                </Tab>
              </Tabs>
              </Tab.Pane>
              <Tab.Pane eventKey="books">
              <Tabs
                defaultActiveKey="add"
                id="uncontrolled-tab-example"
                className="mb-3"
              >
                <Tab eventKey="add" title="Dodaj książkę">
                    <AddBook />
                </Tab>
                <Tab eventKey="edit" title="Edytuj książkę">
                    
                </Tab>
                <Tab eventKey="delate" title="Usuń książkę">
                    
                </Tab>
              </Tabs>
              </Tab.Pane>
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
    </div>
  );
};

export default AdminPanel;
