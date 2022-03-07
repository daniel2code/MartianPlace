import styles from "../../../styles/AlertModal.module.scss";
import CloseIcon from "../../../assets/icons/close.svg";
import Image from "next/image";
import { useState } from "react";

// btn2: accepts a boolean, indicating whether the button will be rendered on the UI
// btn1Text, btn2Text: pass the innerText of the button element
// modalTitle: the title or heading of the modal Box
// modalText: sub Text of the modal Box
// NB: position relative should be added to the parent contaniner, where Modal component will be rendered

// Example: <Alert
//   modalOpen={true}
//   modalTitle="NFT has been created!"
//   modalText=" Congratulations your NFT has been successfully created on Martian
//   Place."
//   btn1Text="View Nft"
//   btn2Text="Cancel"
//   btn2={false}
// />;

export default function Alert({
  btn2,
  btn1Text,
  btn2Text,
  modalTitle,
  modalText,
}) {
  // const [showModal, setShowModal]=useState()

  return (
    <div className={styles.backgroundContainer}>
      <div className={styles.modalBox}>
        <div className={`w-full flex justify-end ${styles.imgBox}`}>
          <Image src={CloseIcon} />
        </div>
        <h1 className={styles.modalTitle}>{modalTitle}</h1>
        <p className={styles.modalText}>{modalText}</p>

        <div className={`${styles.btnBox} flex mt-7`}>
          <button className={styles.btn1}>{btn1Text}</button>
          {btn2 && (
            <button className={`${styles.btn2} ml-6`}>{btn2Text} </button>
          )}
        </div>
      </div>
    </div>
  );
}
