import React from 'react'
import Link from 'gatsby-link'

const IndexPage = () => (
  <div>
    <div className="hero">
      <div className="hero_group">
        <h1>嶄新的庫存管理系統</h1>
        <p>Smart Inventory Management</p>
        <div className="apply">
        </div>
      </div>
      <div className="hero_image"></div>
      <Link to="/page-2/">Go to page 2</Link>
    </div>
  </div>
)

export default IndexPage
