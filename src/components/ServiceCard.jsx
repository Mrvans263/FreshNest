import React from 'react'
import '../styles/cards.css'

export default function ServiceCard({ title, description, image }) {
  return (
    <article className="card">
      <img src={image} alt={title} loading="lazy" decoding="async" />
      <h3>{title}</h3>
      <p>{description}</p>
    </article>
  )
}
