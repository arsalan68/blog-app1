import React from 'react'
import { Link } from 'react-router-dom'

const Sidebar = () => {
  return (
    <div>
      <ul className="list-group">
  <li id='abc' className="list-group-item"><Link>Health</Link></li>
  <li id='abc' className="list-group-item"><Link>Sport</Link></li>
  <li id='abc' className="list-group-item"><Link>Political</Link></li>
  <li id='abc' className="list-group-item"><Link>Business</Link></li>
  <li id='abc' className="list-group-item"><Link>Entertainment</Link></li>
</ul>

    </div>
  )
}

export default Sidebar
