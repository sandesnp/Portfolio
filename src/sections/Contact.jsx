import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
export default function Contact() {
  return (
    <section
      className='contact d-flex flex-column align-items-center text-center'
      style={{ gap: '2rem' }}
    >
      <div className='contact__heading d-flex flex-column gap-3'>
        <div className='contact__title'>
          <h1 style={{ fontSize: '4rem', fontWeight: 400 }}>CONTACT</h1>
        </div>
        <div className='contact__description'>
          <p className='d-inline-block w-50 '>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam excepturi eum similique
            veritatis quo, quod animi nemo incidunt sed alias iure perspiciatis eos at reiciendis
            quos ipsum non inventore sint.
          </p>
        </div>
      </div>
      <div className='contact__content p-5 text-bg-secondary flex-grow-1 w-100'>
        <div className='contact__content-container p-5 border border-dark h-100 d-flex text-start'>
          <div className='contact__content-left flex-fill p-5'>
            <h2 className='fs-1'>Drop me your Contact or give me ping!</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam, porro. Lorem ipsum
              dolor sit amet.
            </p>
            <figure className='content__img'>
              <img src='//unsplash.it/400/200' alt='Sandesh portfolio contact' />
            </figure>
          </div>
          <Form className='contact__content-right flex-fill p-5 d-flex flex-column gap-2'>
            <Form.Group className='mb-3' controlId='formGroupName'>
              <Form.Label>Name</Form.Label>
              <Form.Control type='text' placeholder='Enter Name' required />
            </Form.Group>
            <Form.Group className='mb-3' controlId='formGroupEmail'>
              <Form.Label>Email address*</Form.Label>
              <Form.Control type='email' placeholder='Enter email' required />
            </Form.Group>
            <Form.Group className='mb-3' controlId='formGroupSubject'>
              <Form.Label>Email Subject*</Form.Label>
              <Form.Control type='email' placeholder='Enter Subject' required />
            </Form.Group>

            <Form.Group className='mb-3' controlId='formGroupMessage'>
              <Form.Label>Type your message here</Form.Label>
              <Form.Control as='textarea' rows={3} required />
            </Form.Group>

            <Button variant='dark'>Link</Button>
          </Form>
        </div>
      </div>
    </section>
  );
}
