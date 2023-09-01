'use client'
import React from 'react'
import Image from 'next/image';
import styles from './footer.module.css';

const Footer = () => {
  return (
    <div className={styles.container}>
        <div>Copyright {new Date().getFullYear()} Programming with Umair. All rights reserved.</div>
    </div>
  )
}

export default Footer