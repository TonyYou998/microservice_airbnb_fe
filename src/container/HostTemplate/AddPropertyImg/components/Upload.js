import React from 'react'
import UploadContent from './UploadContent'

export default function Upload() {
  return (
    <div className='upload__container'>
        <div className='upload__wrapper'>
            <div className='upload__header'>
                <h4 className='text-center'>Upload photos for your property</h4>
            </div>
            <UploadContent/>
        </div>
    </div>
  )
}
