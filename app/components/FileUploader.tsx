import React, {useCallback, useState} from 'react';
import {useDropzone} from 'react-dropzone';
import { formatSize } from '~/lib/utils';

interface FileUploaderProps {
    onFileSelect: (file: File | null) => void;
}

const FileUploader = ({onFileSelect}: FileUploaderProps) => {
    const onDrop = useCallback((acceptedFiles : File[])=> {
        const file = acceptedFiles[0] || null;
        if (file) {
            onFileSelect?.(file);
        }
    }, [onFileSelect])
  const {getRootProps, getInputProps, isDragActive , acceptedFiles} = useDropzone({onDrop, multiple: false, accept: { 'application/pdf': ['.pdf'] },maxSize: 20 * 1024 * 1024});
  const file = acceptedFiles[0] || null;
    return (
        <div className="w-full gradient-border">
            <div {...getRootProps()}>
                <input {...getInputProps()} />
                <div className='space-y-4 cursor-pointer'>
                    <div className='mx-auto w-16 h-16 flex items-center justify-center'>
                        <img src="/icons/info.svg" alt="upload" className='size-20' />
                    </div>
                    {file ? (
                        <div className='uploader-selected-file' onClick={(e)=>e.stopPropagation()}>
                            <div className='text-center text-sm text-gray-500'>
                                <img src="/images/pdf.png" alt="pdf" className='size-10 mx-auto' />
                                <div>
                                    <p className='text-lg text-gray-700 font-medium truncate max-w-xs'>{file.name}</p>
                                    <p className='text-gray-500 text-sm'>{formatSize(file.size)}</p>
                                </div>
                                
                            </div>
                        </div>
                    ) : (
                        <div className='text-center text-sm text-gray-500'>
                            <div className='mx-auto w-16 h-16 flex items-center justify-center'>
                                <img src="/icons/info.svg" alt="upload" className='size-20' />
                            </div>
                            <p className='text-lg text-gray-500'>
                                <span className='font-semibold'>Click to upload</span>
                                <span>or drag and drop</span>
                            </p>
                            <p className='text-lg text-gray-500'>
                                Only .pdf files are allowed
                            </p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default FileUploader;
