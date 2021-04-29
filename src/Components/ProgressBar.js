import React, { useEffect } from 'react'
import useStorage from '../Hooks/useStorage'

const ProgressBar = ({file, setFile}) => {

  const { url, progress } = useStorage(file);

  useEffect(() => {
    if (url){
      setFile(null)
    }
  },[url, setFile])

  return (
    <div>
      <div className="progress-bar" style={{ width: progress + '%' }}></div>
    </div>
  )
}

export default ProgressBar;
