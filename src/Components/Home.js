import React from 'react'
import { Link,  } from 'react-router-dom';

function Home() {
  return (
    <div>
      <div>
        <h2>Fashion Blog</h2>
        <Link to='/newpost'>
        <button>Create post</button>
        </Link>
      </div>
    </div>
  )
}

export default Home
