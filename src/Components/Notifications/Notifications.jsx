import { Container, makeStyles, Modal } from "@material-ui/core";
import { CancelOutlined } from "@material-ui/icons";
import React, { useContext } from "react";
import { Context } from "../../Context/Context";
import { modalStyle } from "../modalStyles";
import { notificationData } from '../../Data/NotificationsDummyData/notificationsData'
import { SingleNotification } from "./SingleNotification";

const useStyles = makeStyles((theme) => modalStyle(theme));

export default function Notifications({ openNotifications, setOpenNotifications }) {
    const {light, dark, theme} = useContext(Context);
    const classes = useStyles();
    return (
        <Modal open={openNotifications}>
            <Container
                style={{
                    backgroundColor: light ? theme.bg : dark ? theme.primary : null,
                    color: theme.text,
                }}
                className={`${classes.container} ${classes.biggerContainer}`}
            >
                <div className={classes.head}>
                    <span className={classes.headText}>Notifications</span>
                    <CancelOutlined
                        className={classes.cancel}
                        onClick={() => setOpenNotifications(false)}
                    />
                </div>
                <div className={`${classes.body} notifications-body-container`}>
                    {
                        notificationData.map((notification, index)=>{
                            return (
                                <SingleNotification key={index} notification={notification}/>
                            )
                        })
                    }
                </div>
            </Container>
        </Modal>
    );
}
