import { DropContainer, UploadMessage } from './styles'
import Dropzone, { Accept } from 'react-dropzone';

interface FileProps {
  
}

interface FileProps {
  onUpload: (files: any) => void;
}

const filesAllow: Accept = {
  'image/*': ['.png', '.jpg', 'jpeg'],
  'application/pdf': ['.pdf'],
};

function renderDragMessage(isDragActive: boolean, isDragReject: boolean) {
  if(!isDragActive) {
    return <UploadMessage>Click or drop your files here...</UploadMessage>
  } 

  if(isDragReject) {
    return <UploadMessage type="error">File not supported</UploadMessage>
  } 

  return <UploadMessage type="success">Release your file here</UploadMessage>
}

export default function File({onUpload}: FileProps) {
  return (
    <>
      <Dropzone 
        accept={filesAllow}
        multiple
        onDropAccepted={onUpload}>
        {({getRootProps, getInputProps, isDragActive, isDragReject}) => (
          <DropContainer 
            {...getRootProps()} 
            isDragActive={isDragActive}
            isDragReject={isDragReject}
          >
            <input {...getInputProps()} />
            {renderDragMessage(isDragActive, isDragReject)}
          </DropContainer>
        )}
      </Dropzone>
    </>
  );
}