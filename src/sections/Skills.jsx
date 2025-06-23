import ProgressBar from 'react-bootstrap/ProgressBar';
import './skills.css';
export default function Skills() {
  const skills = [
    { title: 'HTML', progress: 100 },
    { title: 'CSS', progress: 100 },
    { title: 'JAVASCRIPT', progress: 97 },
    { title: 'PYTHON', progress: 80 },
    { title: 'PHP', progress: 85 },
    { title: 'FIGMA', progress: 90 },
    { title: 'TYPESCRIPT', progress: 80 },
    { title: 'REACT', progress: 85 },
    { title: 'NODEJS', progress: 90 },
    { title: 'LARAVEL', progress: 90 },
    { title: 'MONGODB', progress: 75 },
    { title: 'ANIMEJS', progress: 95 },
  ];

  return (
    <section className='skills  d-flex flex-column text-center pt-5' style={{ gap: '5rem' }}>
      <div className='skills__heading d-flex flex-column gap-3'>
        <div className='skills__title'>
          <h1 style={{ fontSize: '4rem', fontWeight: 400 }}>MY SKILLS</h1>
        </div>
        <div className='skills__description'>
          <p className='d-inline-block w-50 '>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit ea fuga itaque voluptas ex
            a, aperiam reprehenderit consequatur culpa repellendus odio repellat, eum tempora minus
            quia temporibus quas excepturi et est ut? Eaque ea explicabo dignissimos obcaecati ex
            tenetur id.
          </p>
        </div>
      </div>
      <div className='skills__content row gy-3 gx-5' style={{ margin: '0 8.6%' }}>
        <div className='col-12 px-4'>
          <div className='skills__content-header row gx-5'>
            <div className='progress--bar col-6  d-flex flex-column gap-3'>
              <div className='progress-bar__header'>
                <div className='progress-bar__title'>
                  {' '}
                  <h2 className='text-start'>Programming Skills</h2>
                </div>
              </div>
              <ProgressBar striped now={80} barClassName='dont-change-color' />
            </div>

            <div className='progress--bar col-6  d-flex flex-column gap-3'>
              <div className='progress-bar__header'>
                <div className='progress-bar__title'>
                  {' '}
                  <h2 className='text-start'>Designing Skills </h2>
                </div>
              </div>
              <ProgressBar now={80} barClassName='dont-change-color' />
            </div>
          </div>
        </div>

        {skills.map((skill, index) => (
          <div className='progress--bar col-6 d-flex flex-column gap-3' key={index}>
            <div className='progress-bar__header d-flex justify-content-between px-1 text-secondary'>
              <div className='progress-bar__title'>
                <h3>{skill.title}</h3>
              </div>
              <h3 className='progress-bar__percentage'>{`${skill.progress}%`}</h3>
            </div>
            <ProgressBar striped now={skill.progress} />
          </div>
        ))}
      </div>
    </section>
  );
}
