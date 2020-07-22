import React from 'react'
import { Link } from 'react-router-dom'
import { Card } from 'antd'
import styles from './style.module.css'

const { Meta } = Card

export default ({ icon, key, title, url }) => (
  <Link to={url}>
    <Card
      hoverable
      cover={
        <div className={styles.cover}>
          {React.createElement(icon, { className: styles.icon })}
        </div>
      }
    >
      <Meta title={title} />
    </Card>
  </Link>
)
