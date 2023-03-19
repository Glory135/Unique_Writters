import { Delete } from "@material-ui/icons";
import { useSelector } from "react-redux";
import PlaceholderDP from "../../images/DP.svg";

export const SingleNotification = ({ notification }) => {
    const { dark } = useSelector(state=>state.theme);
    return (
        <div
        style={{
            backgroundColor: dark
            ? "rgba(0, 0, 0, 0.123)"
            : "rgba(32, 32, 32, 0.062)",
        }}
        className='singleNotification'
        >
            <div className='singleNotification-head'>
                <div className='singleNotification-head-first'>
                <img
                    src={
                    notification.user.image
                        ? notification.user.image.png
                        : PlaceholderDP
                    }
                    alt=''
                    className='notificationImg'
                />
                <span className='notificationer-name'>
                    {notification.user.username}
                </span>
                </div>

                <Delete className="notificationDelete" />
            </div>
            <div className='singleNotification-body'>{notification.content}</div>
            <div className="notification-timestamp">
                {notification.timestamp}
            </div>
        </div>
    );
};
