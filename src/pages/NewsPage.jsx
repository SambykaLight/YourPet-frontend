import Loader from 'components/Loader/Loader';
import React from 'react'

function NewsPage() {
  const isLoading = true;
  return (
    isLoading ? <Loader/> : <div>NewsPage</div>
  )
}

export default NewsPage