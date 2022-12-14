import styles from "../../../styles/AlertModal.module.scss";
import CloseIcon from "../../../assets/icons/close.svg";
import Image from "next/image";
import { useEffect, useState } from "react";
import Router from "next/router";

// btn2: accepts a boolean, indicating whether the button will be rendered on the UI
// btn1Text, btn2Text: pass the innerText of the button element
// modalTitle: the title or heading of the modal Box
// modalText: sub Text of the modal Box
// NB: position relative should be added to the parent contaniner, where Modal component will be rendered

// Example message dispatch
// dispatch(setMessage(
//   { message: 'NFT Created',
//   description: 'Congratulations your NFT has been successfully created on Martian Place.',
//   buttons: JSON.stringify([
//     {name: "View NFT", action: 'route', routepath: '/', fullcolor: true, lg: true},
//     {name: "Cancel", action: 'close', fullcolor: false, lg: false}
//   ])}))
// Example element: <Alert
      //    modalOpen={true}
      //    modalTitle={message.message}
      //    modalText={message.description}
      //    closeAction={() => setAlertOpen(false)}
      //    btns={message.buttons}
      //  />

export default function Alert({
  message,
  // modalTitle,
  // modalText,
  closeAction,
  // btns,
}) {

  return (
    <div className={styles.backgroundContainer}>
      <div className={`${styles.modalBox}`}>
        <div className={`flex justify-end ${styles.imgBox}`}>
          <button onClick={()=> closeAction()}> <Image src={CloseIcon} /> </button>
        </div>
        {message.message !== "none" && <h1 className={styles.modalTitle}>{message.message}</h1>}
        {message.description !== "none" && <p className={styles.modalText}>{message.description}</p>}

        <div className={`flex ${message.message !== "none" ? "" : "flex-col space-y-8 mb-10 mx-40"} mt-7`}>

          {message.buttons && JSON.parse(message.buttons).map((btn, index) => {

            return (
            
            <button key={index} 
            className={`h-10 ${btn.lg ? 'mr-3 md:w-80' : ''} rounded-full w-36 ${btn.fullcolor ? 'bg-background-gradient-btn' : 'border border-purple-primary'}`} 
            onClick={btn.action == "route" ? () => { closeAction(); Router.push(btn.routepath) } : () => { closeAction() }}>
            {btn.name}</button>)
          })}
        </div>
      </div>
    </div>
  );
}