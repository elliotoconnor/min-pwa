/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

const style = css`
    background-color:navy;
    height:300px;

    button{
        background-color:red;
        color:white;
        border:none;
        height:5rem;
        width:10rem;
        border-radius:10px;
        font-size:1.5rem;
        margin:10rem auto;
    }

    button:hover{
        transition:0.5s;
        cursor:pointer;
        color: rgba(255, 255, 255, 1);
        box-shadow: 0 5px 15px rgba(207, 0, 15, .4);
    }

`

const Notification = () => {

    OneSignal.push(["addListenerForNotificationOpened", function(event) {
        console.log("OneSignal notification clicked:", event);
      }]);

    const etellerandet = () => {
        console.log("noget...");
    }

    return(
        <section class="Notification" css={style}>
            <a href="/"><button onClick={etellerandet}>AFSEND VARER</button></a>
        </section>
    )
}

export default Notification;