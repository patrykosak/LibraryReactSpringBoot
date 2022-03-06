import React from "react";
import { Tab, Row, Col, Nav, Tabs } from "react-bootstrap";
import AddAuthor from "../components/adminPanelComponents/AddAuthor";
import AddBook from "../components/adminPanelComponents/AddBook";
import AddCategory from "../components/adminPanelComponents/AddCategory";
import AddNews from "../components/adminPanelComponents/AddNews";
import AddPublishingHouse from "../components/adminPanelComponents/AddPublishingHouse";
import AddStudent from "../components/adminPanelComponents/AddStudent";
import AddWorker from "../components/adminPanelComponents/AddWorker";
import DeleteAuthor from "../components/adminPanelComponents/DeleteAuthor";
import DeleteBook from "../components/adminPanelComponents/DeleteBook";
import DeleteCategory from "../components/adminPanelComponents/DeleteCategory";
import DeleteNews from "../components/adminPanelComponents/DeleteNews";
import DeletePublishingHouse from "../components/adminPanelComponents/DeletePublishingHouse";
import DeleteStudent from "../components/adminPanelComponents/DeleteStudent";
import DeleteWorker from "../components/adminPanelComponents/DeleteWorker";
import EditAuthor from "../components/adminPanelComponents/EditAuthor";
import EditBook from "../components/adminPanelComponents/EditBook";
import EditCategory from "../components/adminPanelComponents/EditCategory";
import EditNews from "../components/adminPanelComponents/EditNews";
import EditPublishingHouse from "../components/adminPanelComponents/EditPublishingHouse";
import EditStudent from "../components/adminPanelComponents/EditStudent";
import EditWorker from "../components/adminPanelComponents/EditWorker";

const AdminPanel = () => {
  return (
    <div style={{minHeight:"70vh"}} className="m-4">
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
              <Nav.Item>
                <Nav.Link eventKey="students">Uczniowie</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="newses">Posty</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="workers">Pracownicy</Nav.Link>
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
                <Tab eventKey="delete" title="Usuń kategorię">
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
                <Tab eventKey="delete" title="Usuń wydawnictwo">
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
                <Tab eventKey="delete" title="Usuń autora">
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
                    <EditBook />
                </Tab>
                <Tab eventKey="delete" title="Usuń książkę">
                     <DeleteBook />
                </Tab>
              </Tabs>
              </Tab.Pane>
              <Tab.Pane eventKey="students">
              <Tabs
                defaultActiveKey="add"
                id="uncontrolled-tab-example"
                className="mb-3"
              >
                <Tab eventKey="add" title="Dodaj ucznia">
                    <AddStudent />
                </Tab>
                <Tab eventKey="edit" title="Edytuj ucznia">
                    <EditStudent />
                </Tab>
                <Tab eventKey="delete" title="Usuń ucznia">
                    <DeleteStudent />
                </Tab>
              </Tabs>
              </Tab.Pane>
              <Tab.Pane eventKey="newses">
              <Tabs
                defaultActiveKey="add"
                id="uncontrolled-tab-example"
                className="mb-3"
              >
                <Tab eventKey="add" title="Dodaj post">
                    <AddNews />
                </Tab>
                <Tab eventKey="edit" title="Edytuj post">
                    <EditNews />
                </Tab>
                <Tab eventKey="delete" title="Usuń post">
                    <DeleteNews />
                </Tab>
              </Tabs>
              </Tab.Pane>
              <Tab.Pane eventKey="workers">
              <Tabs
                defaultActiveKey="add"
                id="uncontrolled-tab-example"
                className="mb-3"
              >
                <Tab eventKey="add" title="Dodaj pracownika">
                    <AddWorker />
                </Tab>
                <Tab eventKey="edit" title="Edytuj pracownika">
                    <EditWorker />
                </Tab>
                <Tab eventKey="delete" title="Usuń pracownika">
                    <DeleteWorker />
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
