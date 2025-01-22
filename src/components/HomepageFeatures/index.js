import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Easy Modding',
    Svg: require('@site/static/img/logo.svg').default,
    description: (
      <>
        Find out how to use your favorite games with modifications.
      </>
    ),
  },
  {
    title: 'Retro Revival',
    Svg: require('@site/static/img/logo.svg').default,
    description: (
      <>
        Modernize old games for newer systems and relive your memories.
      </>
    ),
  },
  {
    title: 'Fast Downloads',
    Svg: require('@site/static/img/logo.svg').default,
    description: (
      <>
        Mirrored hosting of mods for fast downloads and preservation.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
