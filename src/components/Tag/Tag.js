import React from 'react';
import { GitHubLogoIcon, ScissorsIcon } from '@radix-ui/react-icons';
import Image from 'next/image';
import Link from 'next/link';
import Card from '../Card';
import styles from './Tag.module.css'

function Tag({website, website_title, website_favicon, github, github_title, children}) {
  return <Card>
    {website && <div className={styles.Piece}>Link to website: <Link href={website} className={styles.LinkButton}><Image src={website_favicon} alt='' width={15} height={15} style={{display: "inline"}}/> {website_title}</Link></div>}
    <div className={styles.Piece}>Link to a github:<Link href={github} className={styles.LinkButton}><GitHubLogoIcon style={{display: "inline"}}/>{github_title}</Link></div>
    <div className={styles.Piece}>Used stack: {children.map(element => <article key={element} className={styles.StackElement}>{element}</article>)}</div>
  </Card>;
}

export default Tag;
