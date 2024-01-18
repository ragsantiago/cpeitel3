import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p> My name is Santiago, Reanne; I’m 20 yrs old turning 21 this august. My hobbies are sports
and online game. My favourite music are green tea and honey and songs by jeff bernat and
Keenan Te. Favorite food is any kind of seafood and vegetables. And I am a bisexual, and
introvert person, I like being alone most of the time I like to spend my time alone rather than
being outside. Most of the time I am watching some movies or youtube or playing online
games.
</p>
        <h4>Three expectation in this subject:</h4>
<ul>
          <li>Improving problem-solving abilities and critical thinking skills.</li>
          <li>Gaining new technical skills and knowledge related to the specific topic of the IT Elective 3 subject.</li>
          <li>Learning about real-world applications of the concepts taught in the subject.</li>
        </ul>
        <h4>Put 10 things that requires 0 talent:</h4>
        <ol>
          <li>Being On Time</li>
          <li>Effort</li>
          <li>Body Language</li>
          <li>Energy</li>
          <li>Attitude</li>
          <li>Being Prepared</li>
          <li>Passion</li>
          <li>Doing extra</li>
          <li>Being Coachable</li>
          <li>Work Ethic</li>
        </ol>
      </section>
    </Layout>
  );
}