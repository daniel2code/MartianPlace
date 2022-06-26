import styles from "../../../styles/AlertModal.module.scss";
import CloseIcon from "../../../assets/icons/close.svg";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Alert({
  message,
  // modalTitle,
  // modalText,
  // btns,
}) {
  return (
    <div className={styles.backgroundContainer}>
      <div className={`${styles.modalBox}`}>
        <div className={`flex justify-end ${styles.imgBox}`}>
          <button onClick={() => closeAction()}>
            <Image src={CloseIcon} />
          </button>
        </div>

        <h1 className="text-3xl font-bold">NFT has been created!</h1>

        <p className="mt-3">
          Congratulations! Your NFT has been successfully created to your vault.
          The NFT won’t be visable for the public untill you set it to public
          from your vault.
        </p>

        <button
          className="mt-4 border border-purple-primary rounded-full px-2 w-80 py-2 mt-5 text-[14px] hover:bg-purple-primary
            bg-background-gradient-btn"
        >
          View NFT
        </button>
      </div>
    </div>
  );
}
