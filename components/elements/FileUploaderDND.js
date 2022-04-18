import React, { useEffect, useState } from 'react';
import styles from '../../styles/FileUploaderDND.module.scss';
import imgPlaceholder from '../../public/images/pic.svg';
import { Ring } from 'react-awesome-spinners';

import { create, CID, IPFSHTTPClient } from 'ipfs-http-client';
import { useDispatch } from 'react-redux';
import { setMessage } from "../../store/slices/messageSlice";

// import fs from 'fs'

// const ipfsClient = require('ipfs-http-client')
// const ipfs = ipfsClient.create({ host: 'ipfs.infura.io', port: 5001, protocol: 'https' })

// const fs = require('fs');
// const path = require('path');

export default function FileUploaderDND(props) {
  const [buffer, setBuffer] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const state = {
    inDropZone: false,
    fileList: [],
    imgPath: null,
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case 'AddToDropZone':
        return { ...state, inDropZone: action.inDropZone };
      case 'AddToList':
        return { ...state, fileList: state.fileList.concat(action.files) };
      case 'AddToImgPath':
        return { ...state, imgPath: action.imgPath };
      default:
        return state;
    }
  };

  const [data, dispatch] = React.useReducer(reducer, state);

  const handleDragEnter = event => {
    setIsLoading(true);
    event.preventDefault();
    dispatch({ type: 'AddToDropZone', inDropZone: true });
  };

  const handleDragOver = event => {
    setIsLoading(true);
    event.preventDefault();
    event.dataTransfer.dropEffect = 'move';
    dispatch({ type: 'AddToDropZone', inDropZone: true });
  };

  const handleDrop = event => {
    setIsLoading(true);
    event.preventDefault();

    let files = [...event.dataTransfer.files];
    getImgPath(files[0]);

    let files_with_preview = [];

    files.map((file, index) => {
      file[`image_${index}`] = URL.createObjectURL(file);
      files_with_preview.push(file);
    });

    if (files) {
      dispatch({ type: 'AddToList', files });
      dispatch({ type: 'AddToDropZone', inDropZone: false });
    } else {
      setIsLoading(false);
    }
  };

  const uploadToClient = event => {
    if (event.target.files && event.target.files[0]) {
      setIsLoading(true);

      const i = event.target.files[0];
      console.log('image i:', i);

      getImgPath(i);

      let files = [...event.target.files];
      let files_with_preview = [];

      files.map((file, index) => {
        file[`image_${index}`] = URL.createObjectURL(file);
        files_with_preview.push(file);
      });

      if (files) {
        dispatch({ type: 'AddToList', files });
        dispatch({ type: 'AddToDropZone', inDropZone: false });
      } else {
        setIsLoading(false);
      }
    }
  };

  const getImgPath = i => {
    const reader = new window.FileReader();
    reader.readAsArrayBuffer(i);

    reader.onloadend = async () => {
      setBuffer(Buffer(reader.result));
      console.log('buffer', Buffer(reader.result));
      let ipfs = undefined;
      try {
        console.log('buffer not null', Buffer(reader.result));

        ipfs = create({
          url: 'https://ipfs.infura.io:5001/api/v0',
        });

        await ipfs.add(Buffer(reader.result)).then(res => {
          console.log('result: ', res);

          dispatch({ type: 'AddToImgPath', imgPath: res.path });
          setIsLoading(false);
        });

        // const metadata = {
        //   "name": "",
        //   "description":"",
        //   "image":`ipfs://shshshw`,
        //   "properties": [

        //   ]
        // }

        // const result2 = await ipfs.add(Buffer(JSON.stringify(metadata)));
        // console.log("result: ", result2)
      } catch (error) {
        console.error('IPFS error ', error);
        useDispatch(
          setMessage({
            message: "Failed to upload media",
            description: "Check your Network and Try again",
            buttons: JSON.stringify([
              { name: "Try again", action: "close", fullcolor: true, lg: true },
              {
                name: "Cancel",
                action: "route",
                routepath: "/",
                fullcolor: false,
                lg: false,
              },
            ]),
          })
        );
        setIsLoading(false);
        ipfs = undefined;
      }
    };
  };

  useEffect(() => {
    if (data.imgPath) {
      const latestImage = data.fileList[data.fileList.length - 1];
      let blob = latestImage.preview;
      let name = latestImage.name;
      let img = new Image();
      img.src = blob;

      let reader = new FileReader();
      reader.readAsDataURL(latestImage);
      reader.onloadend = function () {
        let base64data = reader.result;
        let image = {
          name: name,
          file: base64data,
          width: img.width,
          height: img.height,
        };
        props.changeInputFile({ imgPath: data.imgPath, image: image });
      };
    }
  }, [data]);

  return (
    <div className="flex flex-col">
      <div
        id="fileuploaderdnd-container"
        className={`fileuploaderdnd-container ${styles.outline} ${props.otherstyles} rounded items-stretch text-center self-center`}
        onDrop={event => handleDrop(event)}
        onDragOver={event => handleDragOver(event)}
        onDragEnter={event => handleDragEnter(event)}
      >
        <div className={`fileuploaderdnd-container-button`}>
          <div className={`fileuploaderdnd-container-text`}>
            <div className="mx-9">
              <div className="mb-4 mt-5">{props.img}</div>
              <h1 className="text-[18px] font-bold">{`Drag & Drop`}</h1>
            </div>
          </div>
        </div>
        <span className={'text-[17px]'}>
          or{' '}
          <input
            type="file"
            id="actual-btn"
            onChange={uploadToClient}
            accept=".png, .jpg, .jpeg"
            hidden
          />
          <label
            htmlFor="actual-btn"
            className="hover:text-underline text-pink"
          >
            {props.img2 ? 'update' : 'browse'}
          </label>{' '}
          {props.img2 ? 'from' : 'on'} your device
        </span>
      </div>

      <div className="px-4 py-8">
        <span className={'text-[17px]'}>{`PNG, GIF, WEBP, MP4 or MP3`} </span>
        <br />
        <span className={'text-[17px]'}>{`Max 100mb`} </span>
        <br />
        {isLoading && !props.img2 ? (
          <Ring size={80} color={'#fafafa'} sizeUnit={'px'} />
        ) : null}
      </div>
    </div>
  );
}
