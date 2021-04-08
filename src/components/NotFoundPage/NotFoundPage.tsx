import React from "react";
import { navigate } from "hookrouter";

// import { ReactComponent as TeamRocket } from "./assets/teamRocket.svg";

import Button from "../Button/Index";
import Layout from "../Layout/Layout";
import Heading from "../Heading/Heading";

import TeamRocket from "./assets/TeamRocket.png";
import s from "./NotFoundPage.module.scss";
import { LinkEnum } from "../../routes";

const NotFoundPage = () => {
  return (
    <div className={s.root}>
      <img className={s.team} src={TeamRocket} alt="Team" />

      <Layout className={s.wrap}>
        <Heading className={s.errorContainer}>404</Heading>
        <Heading className={s.text}>
          <span>The rocket team</span> has won this time.
        </Heading>
        <Button
          type="button"
          onClick={() => navigate(LinkEnum.HOME)}
          size="normal"
          color="yellow"
        >
          Return
        </Button>
      </Layout>
    </div>
  );
};

export default NotFoundPage;

// <TeamRocket className={s.team} />
