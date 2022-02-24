import React, { useEffect } from 'react';
import styles from '../../styles/FileUploaderDND.module.scss'
import imgPlaceholder from '../../public/images/pic.svg'

export default function FileUploaderDND(props) {
  const state = {
    inDropZone: false,
    fileList: []
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case 'AddToDropZone':
        return { ...state, inDropZone: action.inDropZone };
      case 'AddToList':
        return { ...state, fileList: state.fileList.concat(action.files) };
      default:
        return state;
    }
  };

  const [data, dispatch] = React.useReducer(reducer, state);

  const handleDragEnter = (event) => {
    event.preventDefault();
    dispatch({ type: 'AddToDropZone', inDropZone: true });
  };

  const handleDragOver = (event) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = 'move';
    dispatch({ type: 'AddToDropZone', inDropZone: true });
  };

  const handleDrop = (event) => {
    event.preventDefault();

    let files = [...event.dataTransfer.files];
    let files_with_preview = [];

    files.map((file, index) => {
      file[`image_${index}`] = URL.createObjectURL(file);
      files_with_preview.push(file);
    });

    if (files) {
      dispatch({ type: 'AddToList', files });
      dispatch({ type: 'AddToDropZone', inDropZone: false });
    }
  };

    const uploadToClient = (event) => {
    if (event.target.files && event.target.files[0]) {
      const i = event.target.files[0];
      let files = [...event.target.files];
      let files_with_preview = [];

      files.map((file, index) => {
        file[`image_${index}`] = URL.createObjectURL(file);
        files_with_preview.push(file);
      }); 

      if (files) {
        dispatch({ type: 'AddToList', files });
        dispatch({ type: 'AddToDropZone', inDropZone: false });
      }
    }
  };

  useEffect(() => {
    if (data.fileList[0]) {
      const latestImage = data.fileList[data.fileList.length - 1];
      let blob = latestImage.preview;
      let name = latestImage.name;
      let img = new Image();
      img.src = blob;

      let reader = new FileReader();
      reader.readAsDataURL(latestImage);
      reader.onloadend = function () {
        let base64data = reader.result;
        props.changeInputFile({
          name: name,
          file: base64data,
          width: img.width,
          height: img.height
        });
      };
    }
  }, [data]);

  return (
        <div className='flex flex-row'>

    <div
      id="fileuploaderdnd-container"
      className={`fileuploaderdnd-container ${styles.outline} ${props.otherstyles} rounded items-stretch text-center self-center`}
      onDrop={(event) => handleDrop(event)}
      onDragOver={(event) => handleDragOver(event)}
      onDragEnter={(event) => handleDragEnter(event)}
    >
      <div className={`fileuploaderdnd-container-button`}>
        <div className={`fileuploaderdnd-container-text`}>
        <div className="mx-9">
          <div className="mb-4 mt-5">
              {props.img}
          </div>
          <h1 className='text-[18px] font-bold'>{`Drag & Drop`}</h1>
          
        </div>
        </div>
      </div>
      <span className={'text-[17px]'}>or {' '}
          <input type="file" id="actual-btn" onChange={uploadToClient} accept=".png, .jpg, .jpeg" hidden/>
          <label htmlFor="actual-btn" className='hover:text-underline text-pink'>{props.img2 ? "update" : "browse"}</label>
            {' '} {props.img2 ? "from" : "on"} your device</span>

    </div>

    <div className='px-4 py-8'>
    <span className={'text-[17px]'}>{`PNG, GIF, WEBP, MP4 or MP3`} </span>
    <br/>
    <span className={'text-[17px]'}>{`Max 100mb`} </span>
    </div>
    </div>
  );
}