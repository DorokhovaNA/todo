import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Todo from "../Todo/Todo";
import About from "../About/About";
import Contacts from "../Contacts/Contacts";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import MenuItem from "@material-ui/core/MenuItem";
import MenuList from "@material-ui/core/MenuList";
import styles from "./App.module.css";

const App = () => (
  <Router>
    <div className={styles.wrap}>
      <Card className={styles.sidebar}>
        <MenuList>
          <Link to="/" className={styles.link}>
            <MenuItem>Дела</MenuItem>
          </Link>
          <Link to="/contacts" className={styles.link}>
            <MenuItem>Контакты</MenuItem>
          </Link>
        </MenuList>
      </Card>
      <Card className={styles.content}>
        <Route path="/" exact component={Todo} />
        <Route path="/contacts" component={Contacts} />
      </Card>
    </div>
  </Router>
);

export default App;
