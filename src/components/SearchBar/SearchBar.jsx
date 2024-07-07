import { Formik, Form, Field } from 'formik';
import { toast, Bounce, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import css from './SearchBar.module.css';

const initialValues = {
  query: '',
};

const notify = () => {
  toast.error('Enter something to search', {
    position: 'top-right',
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: false,
    pauseOnHover: false,
    draggable: true,
    progress: undefined,
    theme: 'dark',
    transition: Bounce,
  });
};

export default function SearchBar({ onSearch }) {
  const handleSubmit = (values, actions) => {
    if (!values.query.trim()) {
      notify();

      return;
    }

    onSearch(values.query.trim());
    actions.resetForm();
  };

  return (
    <header className={css.header}>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form>
          <Field
            className={css.input}
            type="text"
            name="query"
            placeholder="Search images and photos"
          />
          <button className={css.button} type="submit">
            Search
          </button>
          <ToastContainer />
        </Form>
      </Formik>
    </header>
  );
}
