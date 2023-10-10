import React from 'react'

function CameraContainer() {
  return (
    <>
      <div className='flex justify-center'>
        <div className='w-[586px] h-[400px] bg-slate-800 rounded-3xl m-16'>
          <iframe src="http://172.20.10.2"></iframe>
        </div>
      </div>
    </>
  )
}

export default CameraContainer