import styles from '../styles/Home.module.css'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import Dashboard from './dashboard';

export default function Home() {
  const router = useRouter()
  useEffect(() => {
    // document.documentElement.classList.add('dark')
    router.push('/dashboard')
  }, [])
  return (
    <>
      <div className={styles.container}>
        <title>Fieonix</title>
        <meta name="description" content="Generated by create next app" />
      </div>
    </>
  )
}
