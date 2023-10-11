import React from 'react'

function CameraContainer() {
  return (
    <>
      <div className='flex justify-center'>
        <div className='w-[350px] h-[270px] bg-slate-800 rounded-3xl m-16'>
          <iframe className='w-[350px] h-[270px]' src="http://172.20.10.2"></iframe>
        </div>
      </div>
    </>
  )
}

export default CameraContainer