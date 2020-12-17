import React from "react";
import { Link } from "react-router-dom";
import { Typography } from "@material-ui/core";
import { IconButton } from "@material-ui/core";
import AccountCircleTwoToneIcon from "@material-ui/icons/AccountCircle";
import Admin from "./Admin";
import User from "./User";
export default function Home() {
  return (
    <>
      <div className="account">
        <div>
          <IconButton
            component={Link}
            to="/admin"
            onClick={() => <Admin />}
            aria-label="show Admin"
            color="primary"
          >
            <AccountCircleTwoToneIcon color="white" style={{ fontSize: 80 }} />
          </IconButton>
          <div className="accounthome">
            <Typography>Admin</Typography>
          </div>
        </div>
        <div>
          <IconButton
            component={Link}
            to="/user"
            onClick={() => <User />}
            aria-label="show Admin"
            color="inherit"
          >
            <AccountCircleTwoToneIcon color="white" style={{ fontSize: 80 }} />
          </IconButton>
          <div className="accounthome">
            <Typography>User</Typography>
          </div>
        </div>
      </div>
      <div className="footer">
        <div className="contact">
          <p>
            This platform is to learn amd develop new skills for your kids which
            will be helpful to decide your kids career.
          </p>
          <p>
            We are here available to provide the all necessary knowledge to
            learn coding skills.
          </p>
        </div>
        <div>
          <h4>Contact Us</h4>
          <p>About Us</p>
          <p>Careers</p>
          <p>Blog</p>
          <p>FAQ</p>
          <p>Privacy Policy</p>
        </div>
      </div>
    </>
  );
}
