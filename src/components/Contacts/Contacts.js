import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import TelegramIcon from "@material-ui/icons/Telegram";
import EmailIcon from "@material-ui/icons/Email";
import GitHubIcon from "@material-ui/icons/GitHub";
import styles from "./Contacts.module.css";

const title = <h1 className={styles.title}>Контакты: </h1>;

const Contacts = () => (
  <Card variant="outlined">
    <CardContent className={styles.card}>
      {title}
      <a className={styles.contacts} href="mailto:nisan261lib@mail.ru">
        <EmailIcon color="info" />
        nisan261lib@mail.ru
      </a>
      <a className={styles.contacts} href="https://github.com/DorokhovaNA">
        <GitHubIcon color="info" />
        DorokhovaNA
      </a>
      <a className={styles.contacts} href="https://t.me/dorokhovana">
        <TelegramIcon color="info" />
        @dorokhovana
      </a>
    </CardContent>
  </Card>
);

export default Contacts;
